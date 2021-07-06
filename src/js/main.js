var reportsWidget = {
    options: {
        containerSelector: '.reports',
        template: (
            '{{#.}}' +
                '<article class="reports_item">' +
                    '<a href="{{cover}}" target="_blank">' +
                        '<img class="reports_cover" src="{{cover}}" alt="{{title}} Cover"/>' +
                    '</a>' +
                    '<footer class="reports_docs">' +
                        '{{#documents}}' +
                            '<h3 class="reports_title">' +
                                '<a href="{{url}}" target="_blank">' +
                                    '{{title}} <span>({{file_size}} {{file_type}})</span>' +
                                '</a>' +
                            '</h3>' +
                        '{{/documents}}' +
                    '</footer>' +
                '</article>' +
            '{{/.}}'
        )
    },

    init: function () {
        // To maintain order, we could expand this to sort data before render
        this.renderReports(reportData || []);
    },

    renderReports: function (reports) { // ES6 allows arrow functions, which preserve binding
        var inst = this,
            options = inst.options; // ES6 would allow us to use const here

        // Above line could be rewritten like below...
        // -------------------------------------------
        // const template = this.template, options = this.options;
        // -------------------------------------------
        // Because the values aren't reassigned, const is preferred

        $(options.containerSelector).html(Mustache.render(options.template, reports));
    }
};

reportsWidget.init();