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
          attrs.$observe('ngSrc', function (newValue, oldValue) {
            if (newValue !== oldValue) {
              if (attrs.ngSrc) {
                var image = element[0];
                image.style.width = '';
                image.style.height = '';
                image.style.display = '';
              } else {
                applyHolder(image, attrs);
              }
            }
          });
          attrs.$observe('ngAltSize', function (newValue, oldValue) {
            if (!attrs.ngSrc && newValue !== oldValue) {
              applyHolder(element, attrs);
            }
          });
        }

        function applyHolder (element, attrs) {
          //noinspection JSUnresolvedVariable
          var text = attrs.ngAlt;
          //noinspection JSUnresolvedVariable
          var size = attrs.ngAltSize ? attrs.ngAltSize : '100px500';
          attrs.$set('data-src', 'holder.js/' + size + '?text=' + text);
          //noinspection JSUnresolvedVariable
          var image = element[0];
          Holder.run({images: image});
          Holder.setResizeUpdate(image, false);
        }
      }]);
})();
