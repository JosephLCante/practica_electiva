const sayHello = require('./hello');

test('sayHello function returns ¡Hola Mundo!', () => {
  expect(sayHello()).toBe('¡Hola Mundo!');
});