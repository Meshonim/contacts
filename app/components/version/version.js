'use strict';

angular.module('contactApp.version', [
  'contactApp.version.interpolate-filter',
  'contactApp.version.version-directive'
])

.value('version', '0.1');
