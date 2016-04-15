(function () {
  'use strict';

  angular.module('ngAlt', [])
    .directive('ngAlt', [
      function () {
        return {
          link: link
        };

        //noinspection JSUnusedLocalSymbols
        function link(scope, element, attrs) {

          element.bind('error', function () {
            applyHolder(element, attrs);
          });
          attrs.$observe('ngSrc', function (newValue) {
            if (!newValue) {
              applyHolder(element, attrs);
            }
          });
        }

        function applyHolder(element, attrs) {
          // console.log('catch!');
          
          //noinspection JSUnresolvedVariable
          var text = attrs.ngAlt;
          //noinspection JSUnresolvedVariable
          var size = attrs.ngAltSize ? attrs.ngAltSize : '100px500';
          attrs.$set('data-src', 'holder.js/' + size + '?text=' + text);
          //noinspection JSUnresolvedVariable
          Holder.run({images: element[0]});
        }
      }]);
})();
