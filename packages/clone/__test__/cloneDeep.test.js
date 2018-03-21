const cloneDeep = require('../index')

function testArrar() {
  const person=[{name:'zhou'},{name:'wang'}]
  let newA = cloneDeep(person)
  person[0].name='xin';
  return newA[0].name == 'zhou'
}

function testTime() {
  var x = {};
  for (var i = 0; i < 1000; i++) {
      x[i] = {};
      for (var j = 0; j < 1000; j++) {
          x[i][j] = Math.random();
      }
  }
  var start = Date.now();
  var y = cloneDeep(x);
  var runtime = Date.now() - start;
  return runtime
}

test('edit clone name is zhou', ()=> {
  expect(testArrar()).toBe(true);
});

test('runTime clone Less 400', ()=> {
  let rTime = testTime()
  expect(rTime).toBeLessThan(400);
});