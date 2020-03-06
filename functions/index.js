// Este texto se ejecuta en el servidor.
/** Se importa el objeto functions de la librería "firebase-functions". */
const functions = require('firebase-functions');

/* Se exporta la función sobre https llamada "reco". */
exports.reco = functions.https.onRequest(
  /** Código para la función saludo.
   * @param {{query:Object}} request solicitud que recibe el servidor.
   * Corresponde a la librería Express.
   * @param {{send:(texto:string)=>void}} response respuesta que devuelve el
   * servidor. Corresponde a la librería Express. */
  (request, response) => {
    try {
        
      // verifica que el parámetro nombre1 recibido del navegador esté correcto.
      if (!request.query.bebida) {
        // Entra aquí si el nombre1 es null, undefined o ""
        throw new Error("Falta seleccionar la bebida ");
      } else if (!request.query.edad) {
        // Entra aquí si el nombre2 es null, undefined o ""
        throw new Error("Falta colocar la edad");
      }
      /* Solo se llega a esta parte si nombre1 y nombre 2 tienen un texto.
       * Devuelve un saludo. */

      if (request.query.bebidas == "1" && request.query.edad >= 5 && request.query.edad < 60) {
        alert("Te recomiendo Coca cola o Red cola");
      } 

      else if (request.query.bebidas == "2"){
        if(request.query.edad >= 18){
          alert("Te recomiendo cerveza, vodka, tequila, ron, whisky, pulque");
        }
        else{
          alert("No te puedo recomendar este tipo por ser menor de edad");
        }
          } 

      else if (request.query.bebidas == "3" && request.query.edad >= 6 && request.query.edad < 70) {
              alert("Te recomiendo agua de horchata, avena, tamarindo, melón o limón");
        
          } 
      else if (request.query.bebidas == "4" && request.query.edad >= 6 && request.query.edad < 70) {
              alert("Te recomiendo Fanta, squirt, sidral mundet");

        }

      
    } catch (e) {
      // Devuelve un texto de error.
      response.send(e.message);
    }
  });