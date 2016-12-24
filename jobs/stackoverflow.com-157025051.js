
    var page = require('webpage').create();
    page.viewportSize = { width: 1024, height: 768 };
    
    page.open('http://stackoverflow.com', function () {
        page.render('stackoverflow.com464046323_1024_768.jpg');
        phantom.exit();
    });
    