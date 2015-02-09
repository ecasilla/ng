angular.module('firebase.config', [])
  .constant('FBURL', 'https://flickering-inferno-6672.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password','facebook','google'])

  .constant('loginRedirectPath', '/login');
