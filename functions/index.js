// Este texto se ejecuta en el servidor.
/** Se importa el objeto functions de la librería "firebase-functions". */
const functions = require('firebase-functions');

/* Se exporta la función sobre https llamada "saludo". */
exports.saludo = functions.https.onRequest(
  /** Código para la función saludo.
   * @param {{query:Object}} request solicitud que recibe el servidor.
   * Corresponde a la librería Express.
   * @param {{send:(texto:string)=>void}} response respuesta que devuelve el
   * servidor. Corresponde a la librería Express. */
  (request, response) => {
    try {
      // verifica que el parámetro nombre1 recibido del navegador esté correcto.
      if (!request.query.nombre) {
        // Entra aquí si el nombre es null, undefined o ""
        throw new Error("Se requiere llenar el campo del nombre");
      
        } else if (!request.query.apellido) {
        // Entra aquí si el apellido es null, undefined o ""
        throw new Error("Se requiere llenar el campo del apellido");
    
        } else if (!request.query.correo) {
        // Entra aquí si el correo es null, indefinido o ""
        throw new Error("Se requiere llenar el campo del correo electronico");
      }
      /* Solo se llega a esta parte si el nombre, apellido y correo electronico tienen un texto.
       * Devuelve un saludo. */
      response.send(
        `Datos capturados con exito: 
        Nombre: ${request.query.nombre} 
        Apellido ${request.query.apellido}
        Correo ${request.query.correo}`);
    } catch (e) {
      // Devuelve un texto de error.
      response.send(e.message);
    }
  });