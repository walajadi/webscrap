
// load the page first

var casper = require('casper').create({
    pageSettings: {
        loadImages: false, //The script is much faster when this field is set to false
        loadPlugins: false,
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36'
    }
});

casper.start().thenOpen("https://mabanque.bnpparibas/sitedemo/ident.html", function(){
	console.log("BNP website opened");
});

// Fill the form with client id and password  
casper.then(function(){
	console.log("current url : " + this.getCurrentUrl());
	console.log("trying to get get screenshot before log.");
	this.capture('pageOpened.png');

	// add client number value
	console.log('trying to fill input for client number');
	this.sendKeys("form input#client-nbr", '1123455');
	this.capture('valueWritten.png');
	console.log('password writing');

	// could select different numbers randomly
	this.click('.password-key')
	this.click('.password-key')
	this.click('.password-key')
	this.click('.password-key')
	this.click('.password-key')
	this.click('.password-key')
	this.click('.password-key')

	this.capture('passwodWritten.png');

});

// Submit the identity to BNP
casper.then(function() {
    this.clickLabel("Accéder à mes comptes", "button");
});

// ensure that we logged successfully.
casper.then(function(){
    console.log("Make a screenshot and save after submitting.");
    this.capture('SuccessLogged.png');
    console.log("current url : " + this.getCurrentUrl());
});

// extract informations : account name, it's number, current balance, next balance. 
casper.then(function(){
	console.log('Get data');
	// console.log(this.getPageContent());
	// this.debugPage();
	console.log("current url : " + this.getCurrentUrl());

});

casper.run();

