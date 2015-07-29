(function () {
    var $table = $('table')
        .addClass('joblist')
        .first(),
        $tr = $table.find('tbody tr');

    $tr.each(function (n, tr) {
            var $tdApplication = $('td', tr).eq(2),
                className = '';

            if ($tdApplication.html().match(/\(prod\)/)) {
                className = 'prod';
            } else {
                className = 'preprod';
            }

            $(tr).addClass('joblist__line--' + className);
        });


    $tr.each(function (n, tr) {
        var $th = $('th', tr),
            $tdCommand = $('td', tr).eq(4),
            className = '';

        if ($tdCommand.html().match(/failed/)) {
            className = 'failed';
        } else if ($tdCommand.html().match(/done/)) {
            className = 'done';
        } else {
            className = 'unknown';
        }

        $th.addClass('joblist__case--' + className);
    });

})();
