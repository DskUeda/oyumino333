//アドレスバー非表示
/*window.onload = function () {
    setTimeout(scrollTo, 100, 0, 1);
}*/

$(function () {
//オーバーレイ
//	$("#fadein").fadeOut(1000);

//スマホメニュー
    var menu = $('#gnav'),
        body = $(document.body),
        menuWidth = menu.outerWidth();
    $('#gnav-menu, #gnav dt a, .overlay').on('click', function () {
        body.toggleClass('open');
        if (body.hasClass('open')) {
            menu.animate({'left': 0}, 500);
        } else {
            menu.animate({'left': -menuWidth}, 500);
        }
    });

//メニュー一瞬消える
    $("header nav a").mouseover(function () {
        $(this).fadeTo(0, 0),
                $(this).fadeTo(1000, 1);
    });
});
