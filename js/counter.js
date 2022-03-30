$(document).ready(function () {
    $('.counter-number').each(function () {
        $(this).prop('counter', 0).animate({
            counter: $(this).text()
        }, {
            duration: 3500,
            ease: 'swin',
            step: function (now) {
                $(this).text(Math.floor(now) + '+');
            }
        });
    });
});