jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 booksales in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/sap/books/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/sap/books/test/integration/pages/App",
	"com/sap/books/test/integration/pages/Browser",
	"com/sap/books/test/integration/pages/Master",
	"com/sap/books/test/integration/pages/Detail",
	"com/sap/books/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.sap.books.view."
	});

	sap.ui.require([
		"com/sap/books/test/integration/MasterJourney",
		"com/sap/books/test/integration/NavigationJourney",
		"com/sap/books/test/integration/NotFoundJourney",
		"com/sap/books/test/integration/BusyJourney"
	], function () {
		QUnit.start();
	});
});