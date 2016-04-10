(function () {
  'use strict';

  angular.module('ngAlt', [])
    .directive('ngAlt', [
      function () {
        return {
          link: function (scope, element, attrs) {
            if (!attrs.ngSrc && attrs.ngAlt) {
              var text = attrs.ngAlt;
              var size = attrs.ngAltSize ? attrs.ngAltSize : '100px500';
              attrs.$set('data-src', 'holder.js/' + size + '?text=' + text);
            }
            Holder.run({images: element[0]});
          }
        };
      }]);
})();
