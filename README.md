# ng-alt

AngularJS directive that generate accurate SVG with alternative text instead image with corrupt `ng-src` attribute.
 
## Usage

Install with bower:

```bash
bower install --save ng-alt
```

Add as a dependency in your Angular app:

```javascript
var app = angular.module('app', ['ngAlt']);
```

Use directive:

```html
<img ng-src="{{unreliableSrc}}" ng-alt="Sorry, image not found">
```