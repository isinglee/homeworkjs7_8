$(function() {
    var $links = $('li a');
    $links.on('click', function(event) {
        event.preventDefault();
        // Скрываем предыдущую активную вкладку
        var activeId = $('li.active a').attr('href');
        var that = this;
        $(activeId).fadeOut('slow', function() {
            // Убираем класс active у предыдущей активной закладки
            $('li.active').removeClass('active');
            // Назначаем класс active новой закладке
            $(that).parent().addClass('active');
            // Показываем новую активную вкладку
            activeId = $('li.active a').attr('href');
            $(activeId).fadeIn('slow');
        });
    });
    // Активируем событие click, чтобы показать первую активную вкладку
    $('li.active a').trigger('click');
    // Генерируем подсказку для каждого элемента input
    var $inputs = $('input');
    $inputs.each(function() {
        // Находим текст подсказки в data-поле в input
        var hintText = $(this).data('hint');
        // Создаем div с подсказкой и помещаем после input
        var $hint = $('<div class="hint">' + hintText + '</div>').insertAfter($(this));
        // Создаем обработчик по наведению мыши на input
        $(this).on('mouseenter', function() {
            $hint.slideDown();
        });
        // Создаем обработчик по уходу мыши c input
        $(this).on('mouseleave', function() {
            $hint.slideUp();
        });
    });
    // По клику на кнопку активируем событие mouseenter у всех input
    var $btn = $('.btn');
    $btn.on('click', function() {
        $('input').trigger('mouseenter');
    })
});
