
    var page = require('webpage').create();
    page.viewportSize = { width: 1024, height: 768 };
    
    page.open('http://facebook.com', function () {
        page.render('facebook.com1326613884_1024_768.jpg');
        phantom.exit();
    });
    