(function () {
  'use strict';

  angular.module('ngAlt', [])
    .directive('ngAlt', [
      function () {
        return {
          link: link
        };

        //noinspection JSUnusedLocalSymbols
        function link (scope, element, attrs) {

          element.bind('error', function () {
            applyHolder(element, attrs);
          });
          attrs.$observe('ngSrc', function (newValue) {
            if (!newValue) {
              applyHolder(element, attrs);
            } else {
              var image = element[0];
              image.style.height = '';
              image.style.width = '';
            }
          });
        }

        function applyHolder (element, attrs) {
          // console.log('catch!');

          //noinspection JSUnresolvedVariable
          var text = attrs.ngAlt;
          //noinspection JSUnresolvedVariable
          var size = attrs.ngAltSize ? attrs.ngAltSize : '100px500';
          attrs.$set('data-src', 'holder.js/' + size + '?text=' + text);
          //noinspection JSUnresolvedVariable
          var image = element[0];
          Holder.run({images: image});
          Holder.setResizeUpdate(image, false);
          image.style.height = '';
          image.style.width = '';
        }
      }]);
})();
