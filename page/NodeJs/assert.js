const assert = require("assert");
function add(a, b){
	return a+b;
};
// console.log(assert);
assert.equal(6, add(3, 3), '预期3+3=6');
/*

{ [Function: ok]
  fail: [Function: fail],
  AssertionError: [Function: AssertionError],
  ok: [Circular],
  equal: [Function: equal],
  notEqual: [Function: notEqual],
  deepEqual: [Function: deepEqual],
  notDeepEqual: [Function: notDeepEqual],
  deepStrictEqual: [Function: deepStrictEqual],
  notDeepStrictEqual: [Function: notDeepStrictEqual],
  strictEqual: [Function: strictEqual],
  notStrictEqual: [Function: notStrictEqual],
  throws: [Function: throws],
  rejects: [AsyncFunction: rejects],
  doesNotThrow: [Function: doesNotThrow],
  doesNotReject: [AsyncFunction: doesNotReject],
  ifError: [Function: ifError],
  strict:
   { [Function: strict]
     fail: [Function: fail],
     AssertionError: [Function: AssertionError],
     ok: [Circular],
     equal: [Function: strictEqual],
     notEqual: [Function: notStrictEqual],
     deepEqual: [Function: deepStrictEqual],
     notDeepEqual: [Function: notDeepStrictEqual],
     deepStrictEqual: [Function: deepStrictEqual],
     notDeepStrictEqual: [Function: notDeepStrictEqual],
     strictEqual: [Function: strictEqual],
     notStrictEqual: [Function: notStrictEqual],
     throws: [Function: throws],
     rejects: [AsyncFunction: rejects],
     doesNotThrow: [Function: doesNotThrow],
     doesNotReject: [AsyncFunction: doesNotReject],
     ifError: [Function: ifError],
     strict: [Circular] } }
*/