'use strict';

describe('contactApp.version module', function() {
  beforeEach(module('contactApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
