(function(){
    'use strict';

    /* RestAngular factory Starts  */

    angular.module('app').factory('pocRestangularService', pocRestangularService);
    function pocRestangularService(Restangular){

        var newBaseUrl = "http://localhost:3000/";

        Restangular.setBaseUrl(newBaseUrl);
        Restangular.setFullResponse(true);
        Restangular.setDefaultHttpFields({cache: false});
        Restangular.setDefaultHeaders();



       /* RestAngular setErrorInterceptor Starts  */

        Restangular.setErrorInterceptor(function(response, deferred, responseHandler) {
            //console.log("Server Response header for ErrorInterceptor::",response );
            toastr["error"]("Server Response header for ErrorInterceptor:");
            return true;
        });

        /* RestAngular setErrorInterceptor Ends  */


        /* RestAngular addResponseInterceptor Starts  */

        Restangular.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
            //console.log("Server Response header for ResponseInterceptor::",response);
            return data;
        });

        /* RestAngular addResponseInterceptor Ends  */

        this.getdata = function(url, callback) {
            Restangular.one(url).get().then(function(results) {
                callback(results);
            },function(error){
                callback(error);
            });
        };
        this.postdata = function(url,param,callback){
              Restangular.all(url).post(param).then(function(postresult){
                  callback(postresult);
            },function(error){
                  callback(error);
            });
        };
        this.deletedata = function(url,callback){
              Restangular.all(url).remove().then(function(result){
              callback(result);
            },function(error){
              callback(error);
            });
        };

        return{
            getdata: this.getdata,
            postdata: this.postdata,
            deletedata: this.deletedata

        };

    };

    /* RestAngular Factory Ends  */
})();
