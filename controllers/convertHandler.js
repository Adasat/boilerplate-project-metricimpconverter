function ConvertHandler() {

  
  
  this.getNum = function(input) {
         const re = /^\d+(\.\d+)?(\/\d+)?[a-zA-Z]+$/
  let result = input.trim();
        
        if (input === "") {
            return 1; // Valor predeterminado de 1 si no se proporciona un número
        } else if(re.test(result) === false) {
            return 'invalid number';  
        }
       
        

        // Buscar la posición del primer caracter no numérico
        const nonNumericIndex = result.search(/[^\d./-]/);
  console.log(nonNumericIndex)       

        // Si hay caracteres no numéricos, dividir la cadena en parte numérica y resto
        const numericPart = input.slice(0, nonNumericIndex);
        const rest = input.slice(nonNumericIndex);

        // Verificar si el resto representa una fracción válida (número/número)
        const fractionParts = rest.split('/');
        if (fractionParts.length === 2) {
            const numerator = parseFloat(fractionParts[0]);
            const denominator = parseFloat(fractionParts[1]);

            if (!isNaN(numerator) && !isNaN(denominator) && denominator !== 0) {
                return numerator / denominator;  // Calcular el valor de la fracción
            } else {
              return 'invalid fractional number'
            }
        }
  

        return parseInt(numericPart); 
    }
    },
    

  
  this.getUnit = function(input) {
    let result;
    
    return result;
  };
  
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

  this.spellOutUnit = function(unit) {
    let result;
    
    return result;
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
