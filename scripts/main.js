(function(window) {
    'use strict';
    var FORM_SELECTOR = '[data-coffee-order]';
    var SERVER_URL = 'http://coffeerun-v2-rest-api.herokuapp.com/api/coffeeorders';
    var App = window.App;
    var Truck = App.Truck;
    var RemoteDataStore = App.RemoteDataStore;
    var Datastore = App.Datastore;
    var remoteDS = new RemoteDataStore(SERVER_URL);
    var Validation = App.Validation;
    var FormHandler = App.FormHandler;
    var myTruck = new Truck('ncc-1701', remoteDS);
    window.myTruck = myTruck;
    var formHandler = new FormHandler(FORM_SELECTOR);
    formHandler.addInputHandler(Validation.isCompanyEmail);
    formHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));
    console.log(formHandler);

})(window);
