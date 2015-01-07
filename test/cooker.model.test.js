var CookerModel = require('cooker.model');
var assert = require('assert');

describe('model', function() {
  it('name and value is encoded', function() {
    var co = new CookerModel('ネーム', 'ヴァリュー');
    assert.strictEqual(co.name, '%E3%83%8D%E3%83%BC%E3%83%A0');
    assert.strictEqual(co.value, '%E3%83%B4%E3%82%A1%E3%83%AA%E3%83%A5%E3%83%BC');
  });
});
