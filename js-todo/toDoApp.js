function doIt() {
    var toDos = $('.js-to-dos');
    toDos.children('.js-complete').addClass('complete');
    toDos.parent().removeClass('hidden');
}

doIt();
