(function(window) {
    var app = window.app || {};

    function Datastore() {
        console.log("Running Datastore Function")
        this.data = {};
    }
    app.Datastore = Datastore;
    window.app = app;
})(window);
