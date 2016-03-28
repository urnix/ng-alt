(function () {
    'use strict';

    angular.module('ngAlt', [])
        .directive('ngAlt', [
            function () {
                return {
                    link: function (scope, element, attrs) {
                        if (!attrs.ngSrc && attrs.ngAlt)
                            attrs.$set('data-src', 'holder.js/100px500?text=' + attrs.ngAlt);
                        Holder.run({images: element[0]});
                    }
                };
            }]);
})();
