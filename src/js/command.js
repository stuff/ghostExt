(function() {
    var $success = $('.alert-success a'),
        path = $success.attr('href');

    // auto redirect
    if (path) {
        window.location.replace(path);
    }
})();
