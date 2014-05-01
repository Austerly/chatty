'use strict';

angular.module('chattyApp').service('MessageService', 
    function MessageService($http){
    return {
      getMessages: function() {
        return $http.get('http://localhost:12200')
      }
    }
  });