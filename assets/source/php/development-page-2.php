<title>
  Разработка
</title>


<script src="../scripts/mui-scripts/mui-flex-input-script.js"></script>

<script>
  $(function() {

    // Проверяем на наличие обязательных полей
    $("[mui-flex-input][type=\"select\"]").each(function() {
      const attr = $(this).children('input').attr('require');
      if (typeof attr !== undefined && typeof attr !== "undefined" && attr !== false) {
        $(this).addClass('require');
      }
    });




    // Получение фокуса
    $("[mui-flex-input][type=\"select\"]>input").on('focus', function() {

      // Получаем текущий инпут с выбором
      const target_input = $(this);
      // Получаем список элементов
      const panel = target_input.parent().parent().parent().siblings('[mui-flex-select-panel]');
      // Проверка атрибута
      const attr = target_input.attr('require');
      // Проверка иконки
      const icon = target_input.siblings('[mui-flex-input-icon]');
      // Проверка атрибудта на наличие обязательного поля
      const $boolean = typeof attr !== undefined && typeof attr !== "undefined" && attr !== false;

      if (target_input.hasClass('active')) { // Если текущий импут активен 
        if (target_input.val() == "" && !target_input.hasClass(
            'error')) { // Если поле для ввода пустое и поле без ошибок
          target_input.removeClass('active');
          target_input.siblings('span').removeClass('active');
          target_input.attr('placeholder', '');
        } else { // Если поле для ввода не пустое


          icon.addClass('rotate');
          panel.slideDown(300);

          panel.children('ul').children('li').on('click', function() {
            const target = $(this);
            target_input.val(target.text().trim());
            target_input.addClass('active');
            target_input.siblings('span').addClass('active');
          });
          target_input.addClass('active');
          target_input.siblings('span').addClass('active');
        }
      } else {

        target_input.addClass('active');

        icon.addClass('rotate');

        panel.slideDown(300);

        panel.children('ul').children('li').on('click', function() {


          const target = $(this);

          target_input.val(target.text().trim());
          target.parent().parent().slideUp(300);
          icon.removeClass('rotate');
          target_input.addClass('active');
          target_input.siblings('span').addClass('active');

        });

        target_input.on('blur', function() {



          if ($boolean && target_input.val() == '') {
            $(this).addClass('error');
            $(this).parent().parent().siblings('[mui-flex-input-hidden-text]').show(300);
            // $("[mui-flex-input]>input").on('input', function() {
            //   if ($(this).val() != '') {
            //     target_input.removeClass('error');
            //     target_input.parent().parent().siblings('[mui-flex-input-hidden-text]').hide(300);
            //     panel.slideUp(300);
            //   }
            // });


          } else {
            panel.slideUp(300);
            icon.removeClass('rotate');
            target_input.removeClass('active');
            target_input.siblings('span').removeClass('active');
            if (target_input.val() != '') {
              target_input.addClass('active');
              target_input.siblings('span').addClass('active');
            }
          }
        });
        target_input.siblings('span').addClass('active');
      }
    });
  });
</script>



<!-- Тело страницы -->
<div mui-flex-direction="vertical">
  <div mui-flex-direction="vertical" style="width: 100%;">
    <div mui-flex-direcrtion="horizontal" mui-card-box style="background: #fff; color: #333; padding: 16px; margin: 15px;">
      <h1>
        Разработка
      </h1>
      <p>
        JavaScript, CSS, HTML, Angular, ReactJS
      </p>
      <p>
        Здесь можно найти различные шаблоны кода, примеры их работы, описания и многое другое...
      </p>
      <a href="https://codepen.io/Maolink/pen/ExYWGMx" target="_blank">Игра крестики-нолики</a>
    </div>
  </div>
</div>

<div mui-flex-direction="vertical" mui-flex-card-box="light" style="min-height: 150px; margin: 15px;">
  <h1>
    workshop
  </h1>

  <p>
    Mui flex library
  </p>

  <div mui-flex-direction="vertical">


    <h5>
      Поле для ввода с обязательным заполнением
    </h5>

    <!-- Контейнер для инпутов -->
    <div mui-flex-input-container>
      <div mui-flex-input-group>
        <label for="input_0">
          <div mui-flex-input type="default" color="light">
            <input data-placeholder="Введите текст" id="input_0" type="text" require>
            <span mui-flex-input-overview>
              <span>Текст над вводом</span>
            </span>
          </div>
        </label>
        <div mui-flex-input-hidden-text='error' class="hidden">
          Не все обязательные поля заполнены!
        </div>
      </div>
    </div>


    <h5>
      Поле для ввода с необязательным заполнением
    </h5>

    <!-- Контейнер для инпутов -->
    <div mui-flex-input-container>
      <div mui-flex-input-group>
        <label for="input_2">
          <div mui-flex-input type="default" color="light">
            <input data-placeholder="Введите текст" id="input_2" type="text">
            <span mui-flex-input-overview>
              <span>Направление</span>
            </span>
          </div>
        </label>
        <div mui-flex-input-hidden-text class="hidden">
          default text
        </div>
      </div>
    </div>
    <h5>
      Поле для выбора из списка с необязательным заполнением
    </h5>


    <div mui-flex-input-container>
      <div mui-flex-input-group type="select">
        <label for="input_1">
          <div mui-flex-input type="select" color="light">
            <input id="input_1" readonly type="text">
            <span mui-flex-input-overview>
              <span>Выберите направление</span>
            </span>
            <div mui-flex-input-icon style="position: absolute; top: 12px; right: 7px; color: #959ba4;">
              <div mui-flex-icon size="small">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" focusable="false">
                  <path fill="currentColor" d="M15.3 9.7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-3.3 3.3c-.8.8-2 .8-2.8 0l-3.3-3.3c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0L12 13l3.3-3.3z">
                  </path>
                </svg>
              </div>
            </div>
          </div>
        </label>
        <div mui-flex-input-hidden-text="error" class="hidden">
          Не все обязательные поля заполнены!
        </div>
      </div>
      <div mui-flex-select-panel mui-flex-card-box="light" class="hidden">
        <ul>
          <li>
            element1
          </li>
          <li>
            element2
          </li>
          <li>
            element3
          </li>
        </ul>
      </div>
    </div>

    <h5>
      Поле для выбора из списка с обязательным заполнением
    </h5>
    <div mui-flex-input-container>
      <div mui-flex-input-group type="select">
        <label for="input_4">
          <div mui-flex-input type="select" color="light">
            <input id="input_4" readonly type="text" require>
            <span mui-flex-input-overview>
              <span>Выберите направление</span>
            </span>
            <div mui-flex-input-icon style="position: absolute; top: 12px; right: 7px; color: #959ba4;">
              <div mui-flex-icon size="small">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" focusable="false">
                  <path fill="currentColor" d="M15.3 9.7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-3.3 3.3c-.8.8-2 .8-2.8 0l-3.3-3.3c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0L12 13l3.3-3.3z">
                  </path>
                </svg>
              </div>
            </div>
          </div>
        </label>
        <div mui-flex-input-hidden-text="error" class="hidden">
          Не все обязательные поля заполнены!
        </div>
      </div>
      <div mui-flex-select-panel mui-flex-card-box="light" class="hidden">
        <ul>
          <li>
            element1
          </li>
          <li>
            element2
          </li>
          <li>
            element3
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>



<div mui-flex-direction="vertical" style="margin:16px;" mui-flex-card-box="light">
  <h3>
    Иконки
  </h3>

  <h5>
    IMG
  </h5>
  <div mui-flex-direction="horizontal">

    <div mui-flex-icon size="small" class="preview">
      <div>
        <img src="../libraries/icons/ic-avatar-full-48x48.png" alt="">
      </div>
    </div>


    <div mui-flex-icon size="small" class="preview">
      <div>
        <img src="../libraries/icons/ic-eye-full-32x32.png" alt="">
      </div>
    </div>




    <div mui-flex-icon size="small" class="preview">
      <div>
        <img src="../libraries/icons/ic-edit-pen.png" alt="">
      </div>
    </div>


    <div mui-flex-icon size="small" class="preview">
      <div>
        <img src="../libraries/icons/ic-left-arrow-bold.png" alt="">
      </div>
    </div>


    <div mui-flex-icon size="small" class="preview">
      <div>
        <img src="../libraries/icons/ic-right-arrow-bold.png" alt="">
      </div>
    </div>


    <div mui-flex-icon size="small" class="preview">
      <div>
        <img src="../libraries/icons/ic-check-mark.png" alt="">
      </div>
    </div>


    <div mui-flex-icon size="small" class="preview">
      <div>
        <img src="../libraries/icons/ic-mobile-full-64x64.png" alt="">
      </div>
    </div>


    <div mui-flex-icon size="small" class="preview">
      <div>
        <img src="../libraries/icons/ic-search-outline-64x64.png" alt="">
      </div>
    </div>


    <div mui-flex-icon size="small" class="preview">
      <div>
        <img src="../libraries/icons/ic-chat-outline-64x64.png" alt="">
      </div>
    </div>


    <div mui-flex-icon size="small" class="preview">
      <div>
        <img src="../libraries/icons/ic-email-outline-64x64.png" alt="">
      </div>
    </div>


    <div mui-flex-icon size="small" class="preview">
      <div>
        <img src="../libraries/icons/ic-home-2-full-64x64.png" alt="">
      </div>
    </div>

    <div mui-flex-icon size="small" class="preview">
      <div>
        <img src="../libraries/icons/icons8-file-96.png" alt="">
      </div>
    </div>


    <div mui-flex-icon size="small" class="preview">
      <div>
        <img src="../libraries/icons/ic-folder.png" alt="">
      </div>
    </div>


    <div mui-flex-icon size="small" class="preview">
      <div>
        <img src="../libraries/icons/ic-delete.png" alt="">
      </div>
    </div>


    <div mui-flex-icon size="small" class="preview">
      <div>
        <img src="../libraries/icons/night.png" alt="">
      </div>
    </div>


    <div mui-flex-icon size="small" class="preview">
      <div>
        <img src="../libraries/icons/night2.png" alt="">
      </div>
    </div>


    <div mui-flex-icon size="small" class="preview">
      <div>
        <img src="../libraries/icons/pie-chart.png" alt="">
      </div>
    </div>

    <div mui-flex-icon size="small" class="preview">
      <div>
        <img src="../libraries/icons/musical-note.png" alt="">
      </div>
    </div>





  </div>
  <h5>
    background
  </h5>
  <div mui-flex-direction="horizontal">


    <div mui-flex-icon size="small" class="preview">
      <div style="background-size: contain; background-image: url(../libraries/icons/night2.png); background-repeat: no-repeat;background-position: center;">
      </div>
    </div>

    <div mui-flex-icon size="small" class="preview">
      <div style="background-size: contain; background-image: url(../libraries/icons/night.png); background-repeat: no-repeat;background-position: center;">
      </div>
    </div>

    <div mui-flex-icon size="small" class="preview">
      <div style="background-size: contain; background-image: url(../libraries/icons/ic-delete.png); background-repeat: no-repeat;background-position: center;">
      </div>
    </div>

    <div mui-flex-icon size="small" class="preview">
      <div style="background-size: contain; background-image: url(../libraries/icons/ic-folder.png); background-repeat: no-repeat;background-position: center;">
      </div>
    </div>
    <div mui-flex-icon size="small" class="preview">
      <div style="background-size: contain; background-image: url(../libraries/icons/icons8-file-96.png); background-repeat: no-repeat;background-position: center;">
      </div>
    </div>




  </div>




  <h5>
    SVG
  </h5>
  <div mui-flex-direction='horizontal' class="wrapper">

    <div mui-flex-icon size="small" class="preview">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" focusable="false">
        <path fill="currentColor" d="M5 8c0-.3.1-.5.3-.7l4.1-4c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.3L7.3 8l3.4 3.4c.4.4.4 1 0 1.3-.4.4-1 .4-1.4 0l-4.1-4C5.1 8.5 5 8.3 5 8">
        </path>
      </svg>
    </div>


    <div mui-flex-icon size="small" class="preview">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" focusable="false">
        <path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-1.818a8.182 8.182 0 1 0 0-16.364 8.182 8.182 0 0 0 0 16.364zm-1.107-6.615l4.339-5.207a1 1 0 0 1 1.536 1.28l-5 6a1 1 0 0 1-1.432.107l-3-2.666a1 1 0 1 1 1.328-1.495l2.229 1.98z">
        </path>
      </svg>
    </div>

    <div mui-flex-icon size="small" class="preview">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" focusable="false">
        <path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM11 8v4a1 1 0 0 0 2 0V8a1 1 0 0 0-2 0zm.293 7.707a1 1 0 1 0 1.414-1.414 1 1 0 0 0-1.414 1.414z">
        </path>
      </svg>
    </div>


    <div mui-flex-icon size="small" class="preview">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" focusable="false">
        <path fill="currentColor" d="M15.3 9.7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-3.3 3.3c-.8.8-2 .8-2.8 0l-3.3-3.3c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0L12 13l3.3-3.3z">
        </path>
      </svg>
    </div>


    <div mui-flex-icon size="small" class="preview">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" focusable="false">
        <path d="M21 19H3v-1.5l2-1.9v-4.8c0-3 2-5.7 5-6.5v-.4c0-1 .9-1.9 2-1.9s2 .9 2 1.9v.3c3 .9 5 3.5 5 6.5v4.8l2 1.9V19zm-7 1c0 1.1-.9 2-2 2s-2-.9-2-2" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"></path>
      </svg>
    </div>

    <div mui-flex-icon size="small" class="preview">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" focusable="false">
        <path d="M7 10V7.1C7 4.3 9.2 2 12 2s5 2.3 5 5.1V10h1.2c.9 0 1.8.6 1.8 1.4v9.2c0 .8-.8 1.4-1.8 1.4H5.8c-1 0-1.8-.6-1.8-1.4v-9.2c0-.8.8-1.4 1.8-1.4H7zm2 0h6V7.1C15 5.4 13.6 4 12 4S9 5.4 9 7.1V10zm3 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" fill="currentColor"></path>
      </svg>
    </div>




  </div>