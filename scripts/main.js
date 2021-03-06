(function(window) {
    'use strict';
    var FORM_SELECTOR = '[data-coffee-order="form"]';  //grab form
    var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
    var SERVER_URL = 'http://coffeerun-v2-rest-api.herokuapp.com/api/coffeeorders';
    var App = window.App;
    var Truck = App.Truck;
    var RemoteDataStore = App.RemoteDataStore;
    var remoteDS = new RemoteDataStore(SERVER_URL);
    var Validation = App.Validation;
    var FormHandler = App.FormHandler;
    var CheckList = App.CheckList;
    var myTruck = new Truck('ncc-1701', remoteDS);
    window.myTruck = myTruck;
    var checkList = new CheckList(CHECKLIST_SELECTOR);
    var formHandler = new FormHandler(FORM_SELECTOR);
    formHandler.addInputHandler(Validation.isCompanyEmail);
    formHandler.addSubmitHandler(function(data) {
        myTruck.createOrder.call(myTruck, data);
        checkList.addRow.call(CheckList, data);
    });
    console.log(formHandler);
})(window);
