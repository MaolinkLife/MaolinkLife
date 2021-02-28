var obj = {};



function getRequest() {
    var jql = "project = FEEDBACK AND status in (New, \"На Рассмотрении\", \"Будет реализовано\", \"Пока не планируется\") AND resolution = Unresolved AND component = \"Путешествия\" ORDER BY cf[10702] DESC";

    var projectKey = "FEEDBACK";

    var request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if (request.readyState == 4) {
            result = JSON.parse(request.responseText);
            console.log(result);
        }
    }.bind(result);

    request.open('GET', `/new/api/jira/search?jql=${encodeURIComponent(jql)}&projectKey=${projectKey}`, false);
    request.send();

}



// const obj = {
//   "horizontal": "<span mui-code=\"symbol\"><</span><span mui-code=\"tag\">div</span> <span mui-code=\"attr\">mui-flex-direction</span><span mui-code=\"symbol\">=</span><span mui-code=\"value\">\"horizontal\"</span><span mui-code=\"symbol\">></span>\n\s\s<span mui-code=\"symbol\"><</span><span mui-code=\"tag\">div</span> <span mui-code=\"attr\">mui-flex-direction</span><span mui-code=\"symbol\">></span><span mui-code=\"text\">Элемент 1</span><span mui-code=\"symbol\"><</span><span  mui-code=\"symbol\">/</span><span mui-code=\"tag\">div</span><span mui-code=\"symbol\">></span>\n\s\s<span mui-code=\"symbol\"><</span><span mui-code=\"tag\">div</span> <span mui-code=\"attr\">mui-flex-direction</span><span  mui-code=\"symbol\">></span><span mui-code=\"text\">Элемент 2</span><span mui-code=\"symbol\"><</span><span  mui-code=\"symbol\">/</span><span mui-code=\"tag\">div</span><span mui-code=\"symbol\">></span>\n\s\s<span mui-code=\"symbol\"><</span><span mui-code=\"tag\">div</span> <span mui-code=\"attr\">mui-flex-direction</span><span  mui-code=\"symbol\">></span><span mui-code=\"text\">Элемент 3</span><span mui-code=\"symbol\"><</span><span  mui-code=\"symbol\">/</span><span mui-code=\"tag\">div</span><span mui-code=\"symbol\">></span>\n<span mui-code=\"symbol\"><</span><span mui-code=\"symbol\">/</span><span mui-code=\"tag\">div</span><span mui-code=\"symbol\">></span>"
// }

// $(function() {
//     $(".image-preview").click(function() { // Событие клика на маленькое изображение
//         var img = $(this); // Получаем изображение, на которое кликнули
//         var src = img.attr('src'); // Достаем из этого изображения путь до картинки
//         $("body").append("<div class='popup-preview' style='position: fixed; top: 0px'>" + //Добавляем в тело документа разметку всплывающего окна
//             "<div class='popup-preview_bg'></div>" + // Блок, который будет служить фоном затемненным
//             "<img src='" + src + "' class='popup-preview_img' />" + // Само увеличенное фото
//             "</div>");
//         $(".popup-preview").fadeIn(10); // Медленно выводим изображение
//         $(".scroll_top_link").hide();
//         $("body").css({
//             overflow: "hidden"
//         }); // Выключаем скролл\
//         document.addEventListener('keydown', function(evt) {
//             if (evt.key === "Escape") {
//                 $(".popup-preview_bg").trigger("click");
//             }
//         });
//         $(".popup-preview_bg").click(function() { // Событие клика на затемненный фон
//             $(".popup-preview").fadeOut(10); // Медленно убираем всплывающее окно
//             $("body").css({
//                 overflow: "auto"
//             }); // Включаем скролл
//             $(".scroll_top_link").show();
//             setTimeout(function() { // Выставляем таймер
//                 $(".popup-preview").remove(); // Удаляем разметку всплывающего окна
//             }, 10);
//         });
//     });
// })


// class MuiInput {
//     constructor(id, placeholder, name, error_text) {
//         this.id = id;
//         this.name = name
//         this.placeholder = placeholder;
//         this.error_text = error_text;
//         this.html = `
//         <div mui-input-container mui-flex-direction="vertical">
//           <div mui-input-group>
//             <label mui-input-placeholder for="${this.id}">
//               <span mui-text="small">${this.placeholder}</span>
//             </label>
//             <input name="${this.name}" mui-input="default" id="${this.id}">
//           </div>
//           <div mui-outline class="hidden">
//             <span mui-text="extra-small" class="error-text">
//               ${this.error_text}
//             </span>
//           </div>
//         </div>`;
//     }
// }


// class MuiSelect {
//     constructor(id, placeholder, name, iconUrl, error_text, elements) {
//         this.id = id;
//         this.elements = elements;
//         this.error_text = error_text;
//         this.placeholder = placeholder;
//         this.name = name;
//         this.iconUrl = iconUrl;
//         this.html = `
//       <div mui-input-container mui-flex-direction="vertical">  
//         <div mui-input-group>     
//           <label mui-input-placeholder for="${this.id}">
//             <span mui-text="extra-small">${this.placeholder}</span>
//           </label>  
//           <input name="${this.name}" type="select" mui-input="default" class="require" id="${this.id}">
//           <div mui-icon>
//             <img width="11" src="${this.iconUrl}">
//           </div>
//         </div>
//         <div mui-select mui-card-box class="relative hidden">
//           <ul mui-list>
//             ${this.getElements(elements)}
//           </ul>
//         </div>
//         <div mui-outline class="hidden">
//           <span mui-text="extra-small" class="error-text">${this.error_text}</span>
//         </div>
//       </div>`;
//     }
//     getElements(arr) {
//         let html = '';
//         for (const i of arr) {
//             html += `
//             <li mui-item>
//               ${i}
//             </li>`;
//         }
//         return html;
//     }


// }


// function generateAssignee() {
//     var tAssignee = $('#assignee_').html();
//     var allAssignee = obj['assignee'][$('#direction').val()];
//     var indexElem = allAssignee[tAssignee].findIndex(param => param == $('#reason').val());

//     console.log(tAssignee, allAssignee, indexElem);
// }

// function validationData() {
//     let arr = [];
//     $('#tags_')
//         .children('span.fc-mark')
//         .each(function() {
//             arr.push(
//                 $(this)
//                 .children('span.text')
//                 .html()
//             );
//         });

//     const newObject = {
//         reason: $('#reason').val(),
//         tags: arr,
//     };

//     console.log(newObject);
// }

// function editInput() {
//     const text = this.innerHTML;
//     console.log(this);

//     $(this).replaceWith('<input id="myIntput" value="' + text + '"><button>Изменить</button>');
//     $('#myIntput').on('blur', saveInput);
//     $('#myIntput').on('keydown', function(event) {
//         if (event.key == 'Enter') {
//             saveInput();
//         }
//     });

//     $('#myIntput')
//         .siblings('button')
//         .on('click', saveInput);
// }

// function saveInput() {
//     console.log(this);
//     $('#myIntput').replaceWith('<span id="assignee_">' + $('#myIntput').val() + '</span>');
//     $('#assignee_').on('click', editInput);

//     $('#assignee_')
//         .siblings('button')
//         .each(function() {
//             this.replaceWith();
//         });
// }

// function checkProduct() {
//     let t = this;
//     let assignee = '';
//     for (let i of Object.keys(obj['assignee'][$('#direction').val()])) {
//         if (obj['assignee'][$('#direction').val()][i].find(param => param == t.value) != undefined) {
//             assignee = i;
//             break;
//         }
//     }

//     $('#assignee_').html(assignee);
//     let x = obj['tags'][t.value];
//     let tagsHtml = '';
//     $('#tags_').empty();
//     if (x != undefined) {
//         for (let o of obj['tags'][t.value]) {
//             tagsHtml += `<span class="fc-mark"><span class="text">${o}</span><span class="delete">x</span></span> `;
//         }
//         $('#tags_').html(tagsHtml);
//         $('.delete').on('click', function() {
//             $(this)
//                 .parent()
//                 .each(function() {
//                     this.replaceWith();
//                 });
//         });
//     } else {
//         $('#tags_').html();
//     }
//     validationData();
// }

// function checkSelect() {
//     let target = this;
//     $('#reason').empty();
//     $('#reason').append(`<option value=""> -Выберите- </option>`);
//     for (let i of obj['products'][target.value]) {
//         $('#reason').append(`<option>${i}</option>`);
//     }
//     $('#reason').on('input', checkProduct);
// }

// function checkDirection() {
//     let target = this;
//     $('#product').empty();
//     $('#product').append(`<option value=""> -Выберите- </option>`);
//     $('#reason').empty();
//     $('#reason').append(`<option value=""> -Выберите- </option>`);
//     for (let i of obj['direction'][target.value]) {
//         $('#product').append(`<option>${i}</option>`);
//     }
//     $('#product').on('input', checkSelect);
// }



// $(function() {
//     $('#direction').empty();
//     $('#direction').append(`<option value=""> -Выберите- </option>`);
//     if (Object.keys(obj).length) {
//         for (let i of Object.keys(obj['direction'])) {
//             $('#direction').append(`<option>${i}</option>`);
//         }
//     }

//     $('#direction').on('input', checkDirection);

//     $('#assignee_').on('click', editInput);

//     $('input[fc-input-2]').on('click', function() {
//         $(this).addClass('active');
//         $(this)
//             .parent()
//             .children('span')
//             .each(function() {
//                 if ($(this).hasClass('focused') == false) {
//                     $(this).addClass('focused');
//                 }
//             });
//         $(this).attr('placeholder', $(this).attr('name'));
//     });

//     $('input[fc-input-2]').on('blur', function() {
//         if (!$(this).val().length) {
//             $(this)
//                 .parent()
//                 .children('span')
//                 .each(function() {
//                     if ($(this).hasClass('focused')) {
//                         $(this).removeClass('focused');
//                     }
//                 });
//             $(this).attr('placeholder', '');
//             $(this).removeClass('active');
//         }
//     });

//     // Это для добавления нового направления
//     $('input[fc-input-2]#addDirection').on('keydown', function(event) {
//         if (event.key == 'Enter') {
//             let pull = $(this).val();
//             console.log('Отравляем', pull);
//             $.post('./test.php', {
//                 direction: pull
//             }, function(response) {
//                 console.log('Полученные данные', response);
//             });
//         }
//     });

//     $('#hours').on('input', function() {
//         value = $(this).val();
//         if (value > 24) {
//             $(this).val(24);
//         }
//         if (value < 0) {
//             $(this).val(0);
//         }
//     });

//     $('#minuts').on('input', function() {
//         value = $(this).val();
//         if (value > 60) {
//             $(this).val(60);
//         }
//         if (value < 0) {
//             $(this).val(0);
//         }
//     });

//     $('#sec').on('input', function() {
//         value = $(this).val();
//         if (value > 60) {
//             $(this).val(60);
//         }
//         if (value < 0) {
//             $(this).val(0);
//         }
//     });


//     /* INPUT */

//     $("body").on('click', "div[mui-input-group]:not([mui-input-group='select'])", function() {
//         let label = $(this).children('label');
//         let input = $(this).children('input');
//         let overview = $(this).children('div[mui-outline]');

//         label.children('span').toggleClass('active');
//         input.toggleClass('active');
//         return false;
//     });




// $("[mui-icon]").children("img").removeClass("rotate")
// $("[mui-icon]").children("img").addClass("rotate")



// $("[fc-container]").on('mouseenter', function() {
//     // $(this).css("transform", "scale(1.1)");
//     $(this).css("transform", "scale(1.1, 1.1)");
//     $(this).css("transition", "transform .5s");
// });

// $("[fc-container]").on('mouseleave', function() {
//     $(this).css("transform", "scale(1.0)");
//     $(this).css("transition", "transform .5s");
// });



// $('[fc-input-2].select').on('click', function() {
// 	if ($(this).hasClass('active')) {
// 		$(this)
// 			.parent('[fc-div-input ]')
// 			.children('div[slide-bar]')
// 			.removeClass('hidden');
// 	} else {
// 		$(this)
// 			.parent('[fc-div-input ]')
// 			.children('div[slide-bar]')
// 			.addClass('hidden');
// 	}
// });

// 	$('[fc-input-2].select').on('blur', function() {
// 		if ($(this).hasClass('active')) {
// 			$(this)
// 				.parent('[fc-div-input ]')
// 				.children('div[slide-bar]')
// 				.removeClass('hidden');
// 		} else {
// 			$(this)
// 				.parent('[fc-div-input ]')
// 				.children('div[slide-bar]')
// 				.addClass('hidden');
// 		}
// 	});





// });


// class MuiSelect {
//   constructor() {

//   }

//   onStart() {
//       $("div[mui-input-group='select']").on('click', function() {


//           let input = $(this).children('input[mui-input]');
//           let label = $(this).children('label');
//           let select = $(this).siblings('div[mui-select]');
//           let icon = $(this).children('div[mui-icon]');

//           console.log(this);
//       });
//   }
// }



// function getJSON(callback) {
//   let request = new XMLHttpRequest();
//   request.open('GET', './sources/digestData.json');
//   request.send();

//   request.onreadystatechange = () => {
//       if (request.readyState === 4) { // Если все ОК
//           const data = JSON.parse(request.responseText);
//           callback(data);
//       }
//   }
// }


// function getRandomArbitrary(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function changeUrl(value) {
//   var getArr = window.location.search.length ? window.location.search.replace("?", "").split("&") : {},
//       path = window.location.href.replace(window.location.search, "").replace("?", "");

//   if (getArr.length) {
//       if (~window.location.search.indexOf("ID")) {
//           for (var i in getArr) {
//               if (~getArr[i].indexOf("ID" + "=")) {
//                   if (value !== "-1" && value !== undefined) {
//                       getArr[i] = "ID" + "=" + value;
//                   } else {
//                       getArr.splice(i, 1);
//                   }
//               }
//           }
//       } else {
//           if (value !== "-1" && value !== undefined) {
//               getArr.push("ID" + "=" + value);
//           } else {
//               getArr.splice(getArr.indexOf("ID" + "=" + value));
//           }
//       }
//   } else {
//       if (value !== "-1") {
//           getArr = ["ID" + "=" + value];
//       }
//   }
//   history.pushState(null, null, path + "?" + getArr.join("&"));
// }


// function getUrl(_location) {
//   if (!!_location &&
//       !!~window.location.search.indexOf("ID") &&
//       !~window.location.search.indexOf("ID=undefined")) {

//       _location.forEach(function(val) {
//           if (val.match("ID") && val.split("=")[1] !== "undefined") {
//               $("#digest_main").hide();

//               $(".digest_detail_" + val.split("=")[1]).show();

//               $("html, body").animate({
//                   scrollTop: 0
//               }, "slow");
//           }
//       });
//       $(".back-button").on("click", function() {
//           $("[class^=digest_detail]").hide();
//           $("#digest_main").show();
//           changeUrl();
//       });

//   }
// }

// function createContent() {
//   let html = "";
//   let detailHTML = "";
//   getJSON(function(data) { // Загружаем из JSON объекты дайджестов
//       for (const i of data) {
//           html += `
//           <span class="article" id="${i.id}">
//             <h1>${i.title}</h1>
//             <div class="article-date">${i.date}</div>
//             ${i.text}
//           </span>`;
//       }
//       $("#digest_main").empty();
//       $("#digest_main").append(html);

//       $(".article").on("click", function() {
//           var digest_id = $(this).attr("id").slice(-6);
//           $("#digest_main").hide();
//           $(".digest_detail_" + $(this).attr("id")).show();
//           changeUrl(digest_id);
//           $(".back-button").on("click", function() {
//               $("[class^=digest_detail]").hide();
//               $("#digest_main").show();
//               changeUrl();
//           });
//       });


//       for (const f of data) {
//           detailHTML += `${f.html}`
//       }
//       $("#digest_detail_container").empty();
//       $("#digest_detail_container").append(detailHTML);

//       $("[class^=digest_detail]").find('img').each(function() {
//           const url = $(this).attr('src').slice(-11);
//           const _url = "./sources" + url;
//           $(this).attr('src', _url);
//       });

//       $("[class^=digest_detail]").hide();

//       const getArr = window.location.search.replace("?", "").split("&");
//       getUrl(getArr);

//   });
// }

// $(function() {
//   createContent();
// });


// function createJiraTaskCustom(fields) {
//   if (typeof fields !== "object") {
//       throw new Error('Fields must be object');
//   }
//   const body = JSON.stringify({fields});
//   return fetch('/new/api/jira/issue', {method: 'POST', body}).then( response => response.json() );
// }


// сonst Search = {
//   start: function(search_str) {
//       if (search_str.length > 0) {
//           $("[s-card-box]").hide();
//           $("[s-card-box]").removeClass("search-item");

//           var keywords = search_str.split(" ");

//           $("[s-card-box]").each(function() {
//               var text = $(this).text().toUpperCase();
//               var foundKeywords = 0;

//               for (var i in keywords) {
//                   var keyword = keywords[i];

//                   if (~text.indexOf(keyword.toUpperCase()) || ~text.indexOf(Search.convert_symbols("en", "ru", keyword).toUpperCase()) || ~text.indexOf(Search.convert_symbols("ru", "en", keyword).toUpperCase())) {
//                       foundKeywords++;
//                   }
//               }

//               if (foundKeywords == keywords.length) {
//                   $(this).show();
//                   $(this).addClass("search-item");
//               }
//           });

//       } else {
//           $("[s-card-box]").show();
//           $("[s-card-box]").removeClass("search-item");
//       }
//   },
//   convert_symbols: function(from, to, text) {
//       let langSymbols = {
//               ru: "йцукенгшщзхъ\\фывапролджэячсмитьбю.ёЙЦУКЕНГШЩЗХЪ/ФЫВАПРОЛДЖЭЯЧСМИТЬБЮ,Ё!\"№;%:?*()_+",
//               en: "qwertyuiop[]\\asdfghjkl;\"zxcvbnm,./`QWERTYUIOP{}|ASDFGHJKL:\"ZXCVBNM<>?~!@#$%^&*()_+"
//           },
//           fromLang = langSymbols[from],
//           toLang = langSymbols[to],
//           resultText = "";
//       for (var i = 0; i < text.length; i++) {
//           var j = fromLang.indexOf(text.charAt(i));
//           if (j < 0) {
//               resultText += text.charAt(i);
//           } else {
//               resultText += toLang.charAt(j);
//           }
//       }
//       return resultText;
//   },
//   generate_tags: function(obj) {
//       let array = [];
//       for (key in obj.fields) {
//           if (key.match("customfield_")) {
//               if (obj["fields"][key] != null && obj["fields"][key]["value"] != undefined) {
//                   array.push(obj["fields"][key]["value"]);
//               }
//           }
//       }
//       return array.join(", ").toLowerCase();
//   }
// }


// $(function () {
//   var getArr = window.location.search.replace("?", "").split("&");

//   /*$(".article").each(function() {
//     var img = getRandomArbitrary(1, 10),
//       img_url = `img/${img}.png`;
//     $(this).css("background-image", `url(${img_url})`);
//     if (img > 5) {
//       $(this).css("color", "#fff");
//     }
// });*/

//   $("[class^=digest_detail]").hide();

//   $(".article").on("click", function () {
//     var digest_id = $(this).attr("id").slice(-6);
//     $("#digest_main").hide();
//     $(".digest_detail_" + $(this).attr("id")).show();
//     changeUrl(digest_id);
//     $.post("/departments/tinkoff_business/digest/Service.php", {
//       "digest_id": digest_id
//     });
//   });

//   $(".back-button").on("click", function () {
//     $("[class^=digest_detail]").hide();
//     $("#digest_main").show();
//     changeUrl();
//   });

//   if (!!getArr &&
//     !!~window.location.search.indexOf("ID") &&
//     !~window.location.search.indexOf("ID=undefined")) {
//     getArr.forEach(function (val) {
//       if (val.match("ID") && val.split("=")[1] !== "undefined") {
//         $("#digest_main").hide();
//         $(".digest_detail_" + val.split("=")[1]).show();
//         $("html, body").animate({
//           scrollTop: 0
//         }, "slow");
//       }
//     });
//   }
// });

// function getRandomArbitrary(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function changeUrl(value) {
//   var getArr = window.location.search.length ? window.location.search.replace("?", "").split("&") : {},
//     path = window.location.href.replace(window.location.search, "").replace("?", "");

//   if (getArr.length) {
//     if (~window.location.search.indexOf("ID")) {
//       for (var i in getArr) {
//         if (~getArr[i].indexOf("ID" + "=")) {
//           if (value !== "-1" && value !== undefined) {
//             getArr[i] = "ID" + "=" + value;
//           } else {
//             getArr.splice(i, 1);
//           }
//         }
//       }
//     } else {
//       if (value !== "-1" && value !== undefined) {
//         getArr.push("ID" + "=" + value);
//       } else {
//         getArr.splice(getArr.indexOf("ID" + "=" + value));
//       }
//     }
//   } else {
//     if (value !== "-1") {
//       getArr = ["ID" + "=" + value];
//     }
//   }
//   history.pushState(null, null, path + "?" + getArr.join("&"));
// }



// $.ajax({
//   url: "/departments/processes/test_libraries/feedback/json/feedbackData.json",
//   method: "GET",
//   success: function(data) {
//     // console.log(data);
//     let html = "<option value=''>- Выберите направление -</option>";
//     for (const i of data) {
//       html += `<option>${i.name}</option>`;
//     }
//     $('[name=select_direction]').html(html);

//     // Вешаем  событие клика
//     $('[name=select_direction]').on('input', function(event) {
//       console.log(event);
//       console.log($(this).val());
//       if ($(this).val() != '') {
//         let products = "";
//         for (const p of data.find(direction => direction.name == $(this).val()).products) {
//           console.log(p);
//           if (p.name != 'Другое') {
//             products += `<option>${p.name}</option>`;
//           }
//         }
//         $('[name=select_product]').html(products);
//       } else {
//         $('[name=select_product]').empty();
//       }
//     });
//   }
// });






//  // Запуск страницы
//  $(function () {



//    $("button[mui-flex-button]").on('click', function () {
//      const button = $(this);
//      let data = new inputData();

//      button.parent().siblings().each(function () {
//        $(this).find('input').each(function () {




//          const input = $(this);
//          if (input.attr('data-name') == "direction") {
//            data.command = "direction";


//            if (input.hasClass('error')) {
//              console.error('Не все обязательные поля заполнены');
//              return false;
//            } else {
//              if (input.val() == '') {
//                input.trigger('focus');
//                input.trigger('blur');
//                return false;
//              } else {
//                const value = input.val().trim();
//                data.method = '';
//                data.direction_name = value;
//                input.val('');
//                console.log(data);


//                pullMetaData(data);
//              }
//            }
//          } else {
//            if (input.hasClass('error')) {
//              console.error('Не все обязательные поля заполнены');
//              return false;
//            } else {
//              if (input.val() == '') {
//                input.trigger('focus');
//                input.trigger('blur');
//              } else {
//                const value = input.val().trim();
//                data.method = '';
//                input.val('');
//                console.log(data);
//              }
//            }
//          }
//        });
//      });
//    });


//    // Проставляет всем инпутам обязательное заполнение (старая библиотека)
//    $('input[mui-input]').each(function () {
//      if ($(this).hasClass('require')) {
//        $(this).parent('[mui-input-group]').addClass('require');
//      }
//    })



//  function getReasons(direction) {
//   $.ajax({
//     url: "/departments/processes/test_libraries/feedback/json/feedbackData.json",
//     method: "GET",
//     success: function (data) {
//       var products = data.find(x => x.name == direction.name.trim()).products;
//       var allParams = [];
//       products.forEach(function (_product) {
//         if (_product.params) {
//           _product.params.forEach(function (_param) {

//             if (allParams.findIndex(x => x.name == _param.name) == -1) {
//               allParams.push(_param);
//             }
//           });
//         }
//       });
//       console.log(allParams);
//       var html = "";
//       html += "<ul>";
//       for (const i of allParams) {
//         html += `<li mui-item>${i.name}</li>`
//       }
//       html += "</ul>";
//       $("#params_list").empty();
//       $("#params_list").append(`<span class="text-bold">Всего уникальных тематик : ${allParams.length}</span>`)
//       $("#params_list").append(html);
//     }
//   });

// }


// function getContent(callback) {
//   $("#main_select").parent().siblings("[mui-select]").children("ul[mui-list]").children("[mui-item]").on('click', function () {
//     let target = $(this).text().trim();
//     $.ajax({
//       url: "/departments/processes/test_libraries/feedback/json/feedbackData.json",
//       methos: "GET",
//       success: data => {
//         let direction = data.find(x => x.name == target);
//         if (direction) {
//           callback(direction);
//         }
//       }
//     });
//   });
// }


//    logicServices._getDirections(logicServices._createSelectElement);

//    $("[mui-navigation-link]").on('click', function () {
//      let value = $(this).text().trim();
//      let elements = ["#add_direction_panel", "#add_product_panel", "#add_param_panel"];
//      for (const i of elements) {
//        $(i).removeClass('isVisible');
//      }
//      if (value == "Добавить направление") {
//        $("#add_direction_panel").toggleClass('isVisible');
//      } else if (value == "Добавить продукт") {
//        $("#add_product_panel").toggleClass('isVisible');
//      } else if (value == "Добавить тематику") {
//        $("#add_param_panel").toggleClass('isVisible');
//      }
//      $(this).siblings("[mui-navigation-link]").each(function () {
//        if ($(this).hasClass('active')) {
//          $(this).removeClass('active');
//        }
//      });

//      if ($(this).hasClass('active')) {
//        $(this).remove('active');
//      } else {
//        $(this).addClass('active');
//      }


//      $("#select_direction_1").parent().siblings().children("[mui-list]").children("[mui-item]").on('click', function () {

//        $("#select_direction_1").parent().parent().parent().siblings().find('input[mui-input][type="select"]').val(null);

//        let target = $(this).text().trim()
//        $.ajax({
//          url: "/departments/processes/test_libraries/feedback/json/feedbackData.json",
//          method: "GET",
//          success: function (data) {
//            let products = data.find(x => x.name == target).products.sort(function (a, b) {
//              if (a.name > b.name) {
//                return 1;
//              }
//              if (a.name < b.name) {
//                return -1;
//              }
//              return 0;
//            });
//            let html = "";
//            for (const i of products) {
//              html += `<li mui-item>${i.name}</li>`;
//            }
//            $("#select_product_1").parent().parent().children("[mui-select]").children("[mui-list]").empty();
//            $("#select_product_1").parent().parent().children("[mui-select]").children("[mui-list]").append(html);
//          }
//        });
//      });
//    });

//    $("#add_param_panel").children().find('button').on('click', function () {
//      var data = new inputData();
//      $("#add_param_panel").children().find('input, select, textarea').each(function () {
//        if ($(this).attr('data-name') == "type") {
//          data.type = $(this).val().trim();
//        }
//        if ($(this).attr('data-name') == "direction") {
//          data.direction_name = $(this).val().trim();
//        }
//        if ($(this).attr('data-name') == "product") {
//          data.product_name = $(this).val().trim();
//        }
//        if ($(this).attr('data-name') == "param") {
//          data.param_name = $(this).val().trim();
//        }
//        if ($(this).attr('data-name') == "assignee") {
//          data.assignee = $(this).val().trim();
//        }
//        if ($(this).attr('data-name') == "tags") {
//          data.tags = [''];
//          if ($(this).val()) {
//            data.tags = $(this).val().split(', ');
//          }
//        }
//      });

//      data.command = "param";
//      console.log(data);
//      pullMetaData(data);
//      $("#add_param_panel").children().find('input, select, textarea').each(function () {
//        $(this).val('');
//      });

//    });

//    $("#add_product_panel").children().find('button').on('click', function () {
//      var data = new inputData();
//      $("#add_product_panel").children().find('input, select, textarea').each(function () {
//        if ($(this).attr('data-name') == "direction") {
//          data.direction_name = $(this).val().trim();
//        }
//        if ($(this).attr('data-name') == "product") {
//          data.product_name = $(this).val().trim();
//        }
//      });
//      data.command = "product";
//      console.log(data);
//      pullMetaData(data);

//      $("#add_product_panel").children().find('input, select, textarea').each(function () {
//        $(this).val('');
//      });
//    });

//    $("#add_direction_panel").children().find('button').on('click', function () {
//      var data = new inputData();
//      $("#add_product_panel").children().find('input, select, textarea').each(function () {
//        if ($(this).attr('data-name') == "direction") {
//          data.direction_name = $(this).val().trim();
//        }
//      });
//      data.command = "direction";
//      console.log(data);
//      pullMetaData(data);

//      $("#add_direction_panel").children().find('input, select, textarea').each(function () {
//        $(this).val('');
//      });
//    });


//    detailsSelector.parent().siblings('[mui-select]').children('ul').children('li[mui-item]').on('click', function () {
//      console.log($(this));
//      console.log($(this).html().trim());
//    });

//  });


//  const logicServices = {
//   _createSelectElement: function (array) {
//     let html = "";
//     for (const i of array) {
//       html += `<li mui-item>${i.name}</li>`;
//     }
//     $("[data-name='direction']").parent().siblings("[mui-select]").children("ul[mui-list]").empty();
//     $("[data-name='direction']").parent().siblings("[mui-select]").children("ul[mui-list]").html(html);

//     getContent(direction => {
//       let assigneeArray = [];
//       if (direction) {
//         if (direction.name != 'Сквозные процессы') {
//           direction.products.forEach(product => {
//             if (product.name != 'Другое') {
//               product.params.forEach(param => {
//                 if (assigneeArray.findIndex(x => x == param.assignee) == -1) {
//                   assigneeArray.push(param.assignee);
//                 }
//               });
//             }
//           });
//         }
//       }
//       $("#assignee_list").html(logicServices._createHTMLAssingeeList(assigneeArray));

//       getReasons(direction)
//     });
//   },


//   _getDirections: function (callback) {
//     $.ajax({
//       url: "/departments/processes/test_libraries/feedback/json/feedbackData.json",
//       methos: "GET",
//       success: data => {
//         callback(data);
//       }
//     });
//   },

//   _getAssigneesArray: function (direction) {
//     if (direction) {
//       let assigneeArray = [];
//       if (direction.name != 'Сквозные процессы') {
//         direction.products.forEach(product => {
//           if (product.name != 'Другое') {
//             product.params.forEach(param => {
//               if (assigneeArray.findIndex(x => x == param.assignee) == -1) {
//                 assigneeArray.push(param.assignee);
//               }
//             });
//           }
//         });
//       }
//       return assigneeArray;
//     }
//   },

//   _createHTMLAssingeeList: function (array) {
//     let html = "";
//     html = `<span class="text-bold">Всего ответсвенных : ${array.length}</span>`;
//     html += "<ul>";

//     for (const i of array) {
//       html += `<li>${i}</li>`;
//     }
//     html += "</ul>";
//     return html;
//   }

// }



//  // Загрузка данных (старая версия)
//  function uploadData(callback) {
//    let url = isProd ? urlProd : urlTest;
//    let request = new XMLHttpRequest();
//    let result;
//    request.open('GET', url.toString(), false);
//    request.onreadystatechange = () => {
//      if (request.readyState === 4) {
//        result = JSON.parse(request.responseText);
//        console.log("target url is " + url);
//        callback(result);
//      }
//    };
//    request.send();
//  }



// <
// ?
// $new = $_POST['data'];
// echo $new; ?
// >

// $('#feed').on('click', function () {
//   $.post(
//     '', {
//       data: PROCEDURE_NAME
//     },
//     function (response) {
//       console.log(response);
//     });
// });

// var el = 23;
// var i = 0;
// while (i < Math.ceil(el / 2)) {
//   i++;
//   console.log(i);
// }


// Типа слайдер, но нужно изучать максимально детально
// window.onload = () => {
//     const controller = document.getElementById('slide_button');
//     const slider = document.getElementById('slider_menu');
//     const minHeight = 0;
//     const maxHeight = slider.offsetHeight;
//     const time = 500;
//     let timer = null;
//     let toggled = false;
//     console.log(slider.children);
//     // slider.style.height = minheight + 'px'; // not so imp,just for my example
//     controller.onclick = () => {
//         clearInterval(timer);
//         const instanceHeight = parseInt(slider.style.height);  // Current height
//         const init = (new Date()).getTime(); // start time
//         console.log(init);
//         const height = (toggled = !toggled) ? maxHeight : minHeight; // if toggled
//         const disp = height - parseInt(slider.style.height);
//         timer = setInterval(() => {
//             const instance = (new Date()).getTime() - init; // animating time
//             if (instance < time) { // 0 -> time seconds
//                 const pos = instanceHeight + Math.floor(disp * instance / time);
//                 slider.style.height = pos + 'px';
//             } else {
//                 slider.style.height = height + 'px'; // safety side ^^
//                 // slider.style.height = height + 'px'; // safety side ^^
//                 clearInterval(timer);
//             }
//         }, 1);
//     };
// };



//  function showFile(e) {
//     var files = e.target.files;
//     for (var i = 0, f; f = files[i]; i++) {
//       if (!f.type.match('image.*')) continue;
//       var fr = new FileReader();
//       fr.onload = (function(theFile) {
//         return function(e) {
//           var li = document.createElement('li');
//           li.innerHTML = "<img src='" + e.target.result + "' />";
//           document.getElementById('list').insertBefore(li, null);
//         };
//       })(f);
 
//       fr.readAsDataURL(f);
//     }
//   }
 
//   document.getElementById('fileMulti').addEventListener('change', showFile, false);