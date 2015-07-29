(function() {
    var scrollActivated = true,
        $log = $('#log'),
        $header = $('.panel-heading').eq(1),
        $checkLab = $('<label class="pull-right">auto-scroll&nbsp;<input type="checkbox" checked /></label>'),
        $check = $checkLab.find('input');

    if (scrollActivated) {
        $check.prop('checked', scrollActivated);
    }

    $check.on('change', function () {
        scrollActivated = $(this).is(':checked');
    });

    $checkLab.appendTo($header);

    $log
        .css({
            'font-family': 'monospace',
            color: 'white',
            background: 'black',
            height: 700,
            overflow: 'scroll',
            position: 'relative'
        });

    setInterval(function () {
        if (scrollActivated) {
            $log.scrollTop(999999999999);
        }
    }, 1);
})();
