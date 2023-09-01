function ConvertHandler() {
 
  this.getNum = function(input) {
         const idx = input.search(/[a-z]/i); 
        let num = input.slice(0, idx)
        let unit = input.slice(idx)

        
        if (this.validUnits.includes(unit) === false) return 'invalid number'
        if (/\d+\/\d+\/\d+/.test(num)) return 'invalid number'
        if (/\/\//.test(num)) return 'invalid number'
        if (num === '') return 1

        try {
          const result = eval(num);
          if (Number.isInteger(result)) {
        return result 
      } else {
        const roundedResult = Number(Math.round(result + 'e' + 5) + 'e-' + 5); 
      return roundedResult
      }
        } 
        catch {
          return 'invalid number'
        }

    }
    
    
this.validUnits = ["gal", "kg", "L", "l", "lbs", "km", "mi"]
  
  this.getUnit = function(input) {
    const metric = input.split(/[0-9]+/)
    
    const unit = metric.length - 1
    
    const lowerUnit = metric[unit].toLowerCase()

   if (this.validUnits.includes(lowerUnit)) {
       return (lowerUnit === 'l') ?  lowerUnit.toUpperCase(): lowerUnit;
    } else {
      return 'Invalid unit';
    } 
  }
  
  this.getReturnUnit = function(initUnit) {
    const conversions = {
      'gal': 'L',
      'L': 'gal',
      'lbs': 'kg',
      'kg': 'lbs',
      'mi': 'km',
      'km': 'mi'
    };
    return conversions[initUnit] || null;
  };

  this.validUnits = ["gal", "kg", "L", "l", "lbs", "km", "mi"]


  this.spellOutUnit = function(unit) {
    switch (unit) {
      case "gal":
        return "gallons";
      case "L":
        return "liters";
      case "kg":
        return "kilograms";
      case "lbs":
        return "pounds";
      case "km":
        return "kilometers";
      case "mi":
        return "miles";
      default:
        return 'Invalid unit';
    }
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    switch (initUnit.toLowerCase()) {
      case 'gal':
        result = initNum * galToL;
        break;
      case 'l':
        result = initNum / galToL;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
      case 'km':
        result = initNum / miToKm;
        break;
    }

    return result
  
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
