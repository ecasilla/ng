'use strict';

angular.module('bms')
  .constant('Config', angular.deepExtend({
    viewsDir: 'views/',
    environment: 'production', //development or production
    API: {
      protocol: window.location.protocol.split(':')[0], 
      host: window.location.hostname,
      port: String(window.location.port || 80),
      path: ''
    }
  }, angular._localConfig || {}))
  .factory('BaseUrl', function (Config) {
    return (Config.API.protocol + '://' + Config.API.host + ':' + Config.API.port + '/');
  })
  .factory('APIBaseUrl', function (Config) {
    return (Config.API.protocol + '://' + Config.API.host + ':' + Config.API.port + Config.API.path + '/');
  });
