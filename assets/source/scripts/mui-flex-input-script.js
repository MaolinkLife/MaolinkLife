$(function() {

    // Проверяем на наличие обязательных полей
    $("[mui-flex-input][type=\"default\"]").each(function() {
        const attr = $(this).children('input').attr('require');
        if (typeof attr !== undefined && typeof attr !== "undefined" && attr !== false) {
            $(this).addClass('require');
        }
    });

    // Получение фокуса
    $("[mui-flex-input][type=\"default\"]>input").on('focus', function() {
        const target_input = $(this);
        if (target_input.hasClass('active')) {
            if (target_input.val() == "" && !target_input.hasClass('error')) {
                target_input.removeClass('active');
                target_input.siblings('span').removeClass('active');
                target_input.attr('placeholder', '');
            } else {
                target_input.addClass('active');
                target_input.siblings('span').addClass('active');
            }
        } else {
            target_input.addClass('active');
            target_input.siblings('span').addClass('active');
            target_input.attr('placeholder', target_input.attr('data-placeholder'));
        }
    });


    // Потеря фокуса
    $("[mui-flex-input][type=\"default\"]>input").on('blur', function() {
        const target_input = $(this);
        const attr = target_input.attr('require');
        if ((typeof attr !== undefined && typeof attr !== "undefined" && attr !== false) && target_input.val() == '') {
            target_input.addClass('error');
            target_input.parent().parent().siblings('[mui-flex-input-hidden-text]').show(300);
            $("[mui-flex-input]>input").on('input', function() {
                if (target_input.val() != '') {
                    target_input.removeClass('error');
                    target_input.parent().parent().siblings('[mui-flex-input-hidden-text]').hide(300);
                }
            });
        } else {
            target_input.removeClass('error');
            target_input.parent().parent().siblings('[mui-flex-input-hidden-text]').hide(300);
            if (target_input.hasClass('active')) {
                if (target_input.val() == "") {
                    target_input.removeClass('active');
                    target_input.siblings('span').removeClass('active');
                    target_input.attr('placeholder', '');
                } else {
                    target_input.addClass('active');
                    target_input.siblings('span').addClass('active');
                }
            } else {
                target_input.addClass('active');
                target_input.siblings('span').addClass('active');
            }
        }
    });
});



function onFocus(target) {

    if (target.hasClass('active')) {
        console.log('disable');
        if (!target.val().length) {
            target.siblings('span').removeClass('active');
            target.removeClass('active');
            console.log('non value');
        }
    } else {
        target.siblings('span').addClass('active');
        target.addClass('active');
        console.log('enable');
    }
}

function onInput(target) {

}

$(function() {

    $("input[mui-flex-input]").each(function() {
        let isRequire = false;
        const placeholder = $(this).attr('data-placeholder');
        const overview = $(this).attr('data-overview');
        const id = $(this).attr('id');
        const error_text = $(this).attr('data-error-text');
        const require = $(this).attr('require');



        if (typeof require != 'undefined') {
            isRequire = true;
        } else {
            isRequire = false;
        }
        const data_name = $(this).attr('data-name');


        let html = '';
        html = `<div mui-flex-input-container>
            <div mui-flex-input-group>
              <label for="${id}">
                <div mui-flex-input type="default" color="light">
                  <input data-placeholder="${placeholder}" data-name="${data_name}" id="${id}" type="text" ${isRequire ? 'require' : ''}>
                  <span mui-flex-input-overview>
                    <span>${overview}</span>
                  </span>
                </div>
              </label>
              <div mui-flex-input-hidden-text='error' class="hidden">
                ${error_text}
              </div>
            </div>
          </div> `;
        $(this).replaceWith(html);
    });



    // Получение фокуса
    $("[mui-flex-input][type=\"default\"]>input").on('focus', function() {
        const input = $(this);
        if (input.hasClass('active')) {
            if (input.val() == "" && !input.hasClass('error')) {
                input.removeClass('active');
                input.siblings('span').removeClass('active');
                input.attr('placeholder', '');
            } else {
                input.addClass('active');
                input.siblings('span').addClass('active');
            }
        } else {
            input.addClass('active');
            input.siblings('span').addClass('active');
            input.attr('placeholder', input.attr('data-placeholder'));
        }
    });

    // Проверяем на наличие обязательных полей
    $("[mui-flex-input][type=\"default\"]").each(function() {
        const attr = $(this).children('input').attr('require');
        if (typeof attr !== undefined && typeof attr !== "undefined" && attr !== false) {
            $(this).addClass('require');
        }
    });


    // Потеря фокуса
    $("[mui-flex-input][type=\"default\"]>input").on('blur', function() {
        const target_input = $(this);
        const attr = target_input.attr('require');
        if ((typeof attr !== undefined && typeof attr !== "undefined" && attr !== false) && target_input.val() == '') {
            target_input.addClass('error');
            target_input.parent().parent().siblings('[mui-flex-input-hidden-text]').show(300);
            $("[mui-flex-input]>input").on('input', function() {
                if (target_input.val() != '') {
                    target_input.removeClass('error');
                    target_input.parent().parent().siblings('[mui-flex-input-hidden-text]').hide(300);
                }
            });
        } else {
            target_input.removeClass('error');
            target_input.parent().parent().siblings('[mui-flex-input-hidden-text]').hide(300);
            if (target_input.hasClass('active')) {
                if (target_input.val() == "") {
                    target_input.removeClass('active');
                    target_input.siblings('span').removeClass('active');
                    target_input.attr('placeholder', '');
                } else {
                    target_input.addClass('active');
                    target_input.siblings('span').addClass('active');
                }
            } else {
                target_input.addClass('active');
                target_input.siblings('span').addClass('active');
            }
        }
    });
});