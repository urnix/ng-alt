(function () {
  'use strict';

  angular.module('ngAlt', [])
    .directive('ngAlt', [
      function () {
        return {
          link: link
        };

        function link (scope, element, attrs) {
          element.bind('error', function () {
            attrs.loading = false;
            applyHolder(element, attrs);
          });
          element.bind('load', function () {
            attrs.loading = false;
            var image = element[0];
            image.style.width = '';
            image.style.height = '';
            image.style.display = '';
          });
          attrs.$observe('ngSrc', function (newValue, oldValue) {
            if (newValue !== oldValue) {
              if (newValue) {
                attrs.loading = true;
              }
              applyHolder(element, attrs);
            }
          });
          attrs.$observe('ngAltSize', function (newValue, oldValue) {
            if (!attrs.ngSrc && newValue !== oldValue) {
              applyHolder(element, attrs);
            }
          });
        }

        function applyHolder (element, attrs) {
          var text = attrs.loading ? 'Image loading...' : attrs.ngAlt;
          var size = attrs.ngAltSize ? attrs.ngAltSize : '100px500';
          attrs.$set('data-src', 'holder.js/' + size + '?text=' + text);
          var image = element[0];
          Holder.run({images: image, renderer: 'canvas'});
          Holder.setResizeUpdate(image, false);
        }
      }]);
})();
