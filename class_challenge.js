
// ==== Encuentra el error: ====//

/* en este punto encontré dos errores
1) Los métodos en javascrip no llevan la palabra reservada public
2) Como este método es asincrono la palabra async para que pueda funcionar
correntamente debe ir de la mano con la palabra await
*/

// ==== Creamos un a clase llamada Challenge ====//
class Challenge{
    // ====Creamos el contructor====//
    constructor(){
    }

    //==Creamos un método asincrono llamado average que recibe dos parametros==//
   static average(a,b){
    try {
        const response = a + b / 2;
        return response;        
    } catch (e) {
        throw new TypeError("Ha ocurrido un error con este reto");
    }
    }
}



