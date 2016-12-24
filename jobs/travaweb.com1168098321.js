
    var page = require('webpage').create();
    page.viewportSize = { width: 1024, height: 768 };
    
    page.open('http://travaweb.com', function () {
        page.render('travaweb.com2141744641_1024_768.jpg');
        phantom.exit();
    });
    