
    var page = require('webpage').create();
    page.viewportSize = { width: 1024, height: 768 };
    
    page.open('http://google.com', function () {
        page.render('google.com1897975629_1024_768.jpg');
        phantom.exit();
    });
    