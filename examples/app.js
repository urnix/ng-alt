/**
 * Created by Artem I. on 15.04.16.
 */ 

angular
  .module('exampleApp', ['ngAlt'])
  .controller('exampleCtrl', function () {
    var vm = this;
    vm.srcModel = 'https://en.wikipedia.org/static/images/project-logos/enwiki.png';
  });
