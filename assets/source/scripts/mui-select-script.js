/* SELECT */

$(function () {
  $("label[mui-input-placeholder]").on('click', function () {
    let input = $(this).siblings('input[mui-input]');
    let select = $(this).parent().siblings('div[mui-select]');
    let icon = $(this).siblings('div[mui-icon]');

    if (select.hasClass('hidden')) {
      icon.addClass('rotate');
      select.slideDown(300, function () {
        $(select).children("ul").find("li").each(function () {
          $(this).on('click', function () {
            input.val($(this).text().trim());
            icon.removeClass('rotate');
            select.slideUp(300, function () {
              select.addClass('hidden');
            });
          });
        });
      });
    } else {
      icon.removeClass('rotate');
      select.slideUp(300);
    }
    select.toggleClass('hidden');
    if (input.val() == "" && input.hasClass('active')) {
      input.removeClass('active');
      $(this).children('span').removeClass('active');
    } else {
      input.addClass('active');
      $(this).children('span').addClass('active');
    }
  });

  $("input[mui-input]").on('blur', function () {
    let input = $(this)
    let select = $(this).parent().siblings('div[mui-select]');
    let icon = $(this).siblings('div[mui-icon]');
    icon.removeClass('rotate');
    select.slideUp(300);
    select.addClass('hidden');
    if (input.val() == "" && input.hasClass('active')) {
      input.removeClass('active');
      $(this).children('span').removeClass('active');
    } else {
      input.addClass('active');
      $(this).children('span').addClass('active');
    }
  });
});
