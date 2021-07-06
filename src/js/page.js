var pageLayout = {
    options: {
        containerSelector: '.layout',
        template: (
            '<div class="layout_inner">' +
                '<header class="layout_header">' +
                    '<h1 class="layout_title">{{title}}</h1>' +
                '</header>' +
                '<section class="layout_container">' +
                    '<div class="reports"></div>' +
                '</section>' +
            '</div>'
        )
    },

    init: function () {
        var inst = this,
            options = inst.options; // ES6 would allow us to use const here

        $(options.containerSelector).html(Mustache.render(options.template, { title: "Annual reports" }));
    }
};

pageLayout.init();