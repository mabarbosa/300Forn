angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.detalhesOC', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/detalhesOC.html',
        controller: 'detalhesOCCtrl'
      }
    }
  })

  .state('tabsController.detalhesOC2', {
    url: '/page12',
    views: {
      'tab1': {
        templateUrl: 'templates/detalhesOC2.html',
        controller: 'detalhesOC2Ctrl'
      }
    }
  })

  .state('tabsController.itensOC', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/itensOC.html',
        controller: 'itensOCCtrl'
      }
    }
  })

  .state('tabsController.localizaO', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/localizaO.html',
        controller: 'localizaOCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('inicio', {
    url: '/page5',
    templateUrl: 'templates/inicio.html',
    controller: 'inicioCtrl'
  })

  .state('login', {
    url: '/page6',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('avisos', {
    url: '/page7',
    templateUrl: 'templates/avisos.html',
    controller: 'avisosCtrl'
  })

  .state('prCadastro', {
    url: '/page8',
    templateUrl: 'templates/prCadastro.html',
    controller: 'prCadastroCtrl'
  })

  .state('ofertasDeCompras', {
    url: '/page9',
    templateUrl: 'templates/ofertasDeCompras.html',
    controller: 'ofertasDeComprasCtrl'
  })

  .state('tabsController.simOC', {
    url: '/page10',
    views: {
      'tab1': {
        templateUrl: 'templates/simOC.html',
        controller: 'simOCCtrl'
      }
    }
  })

  .state('tabsController.nOOC', {
    url: '/page11',
    views: {
      'tab1': {
        templateUrl: 'templates/nOOC.html',
        controller: 'nOOCCtrl'
      }
    }
  })

  .state('tabsController.dadosItem', {
    url: '/page13',
    views: {
      'tab2': {
        templateUrl: 'templates/dadosItem.html',
        controller: 'dadosItemCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page5')


});