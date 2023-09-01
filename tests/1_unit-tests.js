const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  this.timeout(500)
 test('should correctly read a whole number input', function(done) {
    const input = '42L';
        assert.isNumber(convertHandler.getNum(input))
        assert.equal(convertHandler.getNum(input), 42)
        done()
 });

  test('should correctly read a decimal number input', function() {
    const input = '3.14L';
    const expected = 3.14;
    assert.strictEqual(convertHandler.getNum(input), expected);
  });

  test('should correctly read a fractional input', function() {
    const input = '1/2L';
    const expected = 0.5;
    assert.strictEqual(convertHandler.getNum(input), expected);
  });

      test('#Fractional with decimal', function(done) {
        const input = '3/0.5km'
        assert.isNumber(convertHandler.getNum(input))
        assert.equal(convertHandler.getNum(input), 6 )
        done()
  });

  test('#double fraction', function(done) {
        const input = '2/3/4kg'
        assert.isNotNumber(convertHandler.getNum(input))
        assert.equal(convertHandler.getNum(input), 'invalid number' )
        done()
    })

  test('should correctly default to a numerical input of 1 when no numerical input is provided', function() {
    const input = 'kg';
    const expected = 1;
    assert.strictEqual(convertHandler.getNum(input), expected);
  });

  // Get Unit

  test('should correctly read each valid input unit', function() {
    const unit = '10L'
    const expected = 'L'
    assert.equal(convertHandler.getUnit(unit), expected);
  });

  test('should correctly return an error for an invalid input unit', function() {
    assert.notEqual(convertHandler.getUnit('10kgs'), '10kg', 'invalid unit');
  });

  test('should return the correct return unit for each valid input unit', function() {
    assert.strictEqual(convertHandler.getReturnUnit('L'), 'gal');
    assert.strictEqual(convertHandler.getReturnUnit('gal'), 'L');
  });

  test('should correctly return the spelled-out string unit for each valid input unit', function() {
    assert.strictEqual(convertHandler.spellOutUnit('L'), 'liters');
    assert.strictEqual(convertHandler.spellOutUnit('gal'), 'gallons');
  });

  test('should correctly convert gal to L', function() {
    const input = 5;
    const initUnit = 'gal';
    const expected = 18.92705;
    assert.approximately(convertHandler.convert(input, initUnit), expected, 0.1);
  });
});