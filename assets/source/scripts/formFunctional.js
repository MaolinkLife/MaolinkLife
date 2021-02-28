class inputData {
  constructor(direction_name, product_name, param_name, command, method, assignee, type, tags, newValue = "") {
    this.direction_name = direction_name;
    this.product_name = product_name;
    this.param_name = param_name;
    this.method = method;
    this.command = command;
    this.assignee = assignee;
    this.type = type;
    this.tags = tags;
    this.newValue = newValue;
  }
}



let isProd = true;

let urlProd = "/departments/processes/test_libraries/feedback/json/feedbackData.json";
let urlTest = "../libraries/json/feedbackData.json";

let urlWriterProd = "../development/writerProd.php";
let urlWriterTest = "../development/writerTest.php";



// Через эту функцию будем получать данные с тестового файла или боевого
function getData(callback) {
  if (isProd) {
    console.info("Используется боевая библиотека");
  } else {
    console.info("Используется тестовая библиотека");
  }

  let url = isProd ? urlProd : urlTest;
  $.ajax({
    method: "GET",
    url: url,
    async: false,
    success: function (data) {
      callback(data);
    }
  });
}


// Формируем информацию о структуре
function setStructureInfo(el) {
  // Name 
  $("span[data-name=\"direction\"]").empty();
  $("span[data-name=\"direction\"]").text(el);
  // Assignee
  getData(function (data) {
    const assignee = data.find(x => x.name == el).products.find(x => x.name == "Другое").assignee;
    $("span[data-name=\"assignee\"]").empty();
    if (assignee) {

      $("span[data-name=\"assignee\"]").text(assignee);
    } else {
      $("span[data-name=\"assignee\"]").text('Не указан');
    }


    const productsArray = [];
    const direction = data.find(x => x.name == el);
    direction.products.find(function (_product) {
      if (productsArray.findIndex(x => x == _product.name) == -1) {
        if (_product.name != 'Другое') {
          productsArray.push(_product.name);
        }
      }
      let productList = '<ul>';
      for (f of productsArray) {
        productList += `<li>${f}</li>`;
      }
      productList += `</ul>`;

      $('div[mui-spoiler-content][data-name="product"]').empty();
      $('div[mui-spoiler-content][data-name="product"]').html(productList);

      $('span[data-name="productsLength"]').empty();
      $('span[data-name="productsLength"]').html(productsArray.length.toString());
    });
  });

  // Params 
  getData(function (data) {
    let paramsArray = [];
    let assigneeArray = [];
    let paramList = '<ul>';
    let assigneeList = '<ul>'
    const direction = data.find(x => x.name == el);
    if (direction) {
      direction.products.forEach(function (_product) {
        if (_product.name != "Другое") {
          _product.params.forEach(function (_param) {
            if (_param.name != 'Другое') {

              if (paramsArray.findIndex(x => x == _param.name) == -1) {
                paramsArray.push(_param.name);
              }

              if (assigneeArray.findIndex(x => x == _param.assignee) == -1) {
                assigneeArray.push(_param.assignee);
              }


            }
          });
        }
      });
    }
    assigneeArray.sort();
    for (a of assigneeArray) {
      assigneeList += `<li>${a}</li>`;
    }
    assigneeList += `</ul>`;

    paramsArray.sort();
    for (p of paramsArray) {
      paramList += `<li>${p}</li>`;
    }
    paramList += `</ul>`;
    $('div[mui-spoiler-content][data-name="param"]').empty();
    $('div[mui-spoiler-content][data-name="param"]').html(paramList);
    $('span[data-name="paramsLength"]').empty();
    $('span[data-name="paramsLength"]').html(paramsArray.length.toString());
    $('span[data-name="assigneeLength"]').empty();
    $('span[data-name="assigneeLength"]').html(assigneeArray.length.toString());
    $('div[mui-spoiler-content][data-name="assignee"]').empty();
    $('div[mui-spoiler-content][data-name="assignee"]').html(assigneeList);
  });


}


// Генерируем контент для главного селекта "Направление"
function generateMainSelect(data) {
  const el = $("#main_select").parent().siblings('[mui-select]').children('ul');
  el.empty();
  let html = '';
  for (i of data) {
    html += `<li mui-item>${i.name}</li>`;
  }
  el.html(html);
}


// Генерируем контент для селекта "Направление"
function generateContentDetailsSelect(data) {
  const el = $("#details_selector").parent().siblings('[mui-select]').children('ul');
  el.empty();
  let html = '';
  for (i of data) {
    html += `<li mui-item>${i.name}</li>`;
  }
  el.html(html);
}


// Вешаем событие клика по направлению 
function loaderSettingsForDirectionPage() {
  const input = $('input[mui-input][data-name="direction"]');
  input.parent().siblings('[mui-select]').children('ul').children('li').on('click', function () {
    setStructureInfo($(this).html().trim());
  });
}

// Проверяем какую страницу нужно показать 
function showContentAfterClick(text, target) {
  $("#direction_page").hide();
  $("#products_page").hide();
  $("#params_page").hide();
  if (text == "Добавить направление") {
    $("#direction_page").show();
    target.addClass('active');
    loaderSettingsForDirectionPage();
  } else if (text == "Добавить продукт") {
    $("#products_page").show();
    target.addClass('active');
  } else if (text == "Добавить тематику") {
    $("#params_page").show();
    target.addClass('active');
  }
}

// Переключатель тестовой и боевой библиотеки
function toggleProd(target) {
  if (target.hasClass('active')) {
    isProd = false;
  } else {
    isProd = true;
  }
  getData(function (data) {
    generateMainSelect(data);
    generateContentDetailsSelect(data);
  });
}



// Загрузка страницы
$(document).ready(function () {




  // Первичная загрузка данных
  getData(function (data) {
    generateMainSelect(data);
    generateContentDetailsSelect(data);
  })

  // Фешаем событие клиека по чекбоксу
  $("#checkbox_2").on('click', function () {
    toggleProd($(this));
  });

  $("[mui-navigation-link]").on('click', function () {
    $('[mui-navigation-link]').each(function () {
      $(this).removeClass('active');
    });
    showContentAfterClick($(this).html().trim(), $(this));
  });

});
