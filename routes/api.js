'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler()

  app.route('/api/convert')
    .get((req, res) => {
      const input = req.query.input // Obtener el valor del parámetro 'input' desde la consulta

      // Aquí puedes usar convertHandler para manejar la conversión
      const result = convertHandler.convert(input)

      // Devolver el resultado como una respuesta JSON
      res.json(result)
    });
}


