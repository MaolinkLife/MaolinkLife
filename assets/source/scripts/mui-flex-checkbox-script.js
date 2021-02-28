$(function () {
  $("[mui-flex-checkbox]").on('click', function () {
    $(this).toggleClass('active');
    $(this).children('svg').toggleClass('hidden');
  });
});
