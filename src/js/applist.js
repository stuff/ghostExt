(function () {

separateProdPreprod();

function separateProdPreprod () {
    var $content = $('table'),
        preprod = [],
        prod = [];

    $content.clone().insertAfter($content);


    $content.each(function (n, table) {
        var $table = $(table),
            types = ['prod', 'preprod'],
            type = types[n],
            className = types.reverse()[n];

        $('thead', table).hide();

        $table.addClass('apptable apptable--' + className);

        $('<h2>').text(className).insertBefore($table);

        $('tbody tr', table).each(function (n, tr) {
            var trtext = $(tr).html(),
                reg = new RegExp("<td>" + type + "<\/td>");

            if (trtext.match(reg)) {
                $(tr).remove();
            }

            $('button', tr)
                .addClass('btn-xs')
                .first()
                .removeClass('btn-xs')
                .addClass( className === 'prod' ? 'btn-danger ' : 'btn-primary');

        });
    });
}

})();
