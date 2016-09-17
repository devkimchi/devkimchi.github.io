(function($) {
    var pages = [
        {
             "old": "/2891/building-dotnet-core-application-on-amazon-linux/",
             "new": "/2016/06/09/building-dotnet-core-application-on-amazon-linux/"
        }
    ];

    var url = window.location.pathname;

    pages.forEach(function(page, index) {
        if (page.old == url) {
            window.location.href = page.new;
            return;
        }
    });
})(jQuery);