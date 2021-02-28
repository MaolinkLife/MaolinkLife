    /* SPOILER */

    $(function() {

        $('[mui-spoiler-title]').append("<div class=\"arrow\"><div class=\"icon\"></div></div>");

        $('div[mui-spoiler-title]').click(function() {
            console.log(this);
            $(this).toggleClass('active');
            $(this).parent().children('div[mui-spoiler-content]').slideToggle(400);
            $(this).children(".arrow").children(".icon").toggleClass('active-spoiler');
            return false;
        });


        $("[mui-spoiler-box]").each(function() {
            const attr = $(this).attr("active");
            if (typeof attr !== undefined && typeof attr !== "undefined" && attr !== false) {
                $(this).children("div[mui-spoiler-title]").trigger('click');
                $(this).children('div[mui-spoiler-content]').slideToggle();
            }
        });
    });
