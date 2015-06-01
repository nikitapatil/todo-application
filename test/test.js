var assert = require("assert"); // core module
var task = require('../task.js');  // our module

describe('task', function(){
  describe('Module task', function(){
    it('should have a setTask Method', function(){
      assert.equal(typeof task, 'object');
      assert.equal(typeof task.setTask, 'function');
    })
    it('setTask("test this program", var d = new Date(2015, 5, 6), var complete = false) should equal true', function(){
    assert.deepEqual(task.setTask("test this program",d = new Date(2015, 5, 6), complete = false), true);
})
it('task should be entered', function(){
  assert.deepEqual(task.description, "test this program");
})
it('task should be returned in string format', function()
{
  assert.deepEqual(task.getTask(), "test this program Sat Jun 06 2015 false");
})
  })
});
