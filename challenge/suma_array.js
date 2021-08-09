
let new_data = [];
let suma_total=0;
let suma_ent=0;
let suma_par=0;
let suma_impar=0;
function suma_array(arreglo){    
    for (let index = 0; index < arreglo.length; index++) {
        const element = arreglo[index];
        if (!isNaN(element)) {
            new_data.push(element);            
        }             
    }
    
    for (const key in new_data) {
        // === Suma total de la matriz ===//
        suma_total += parseInt(new_data[key]); 
        
        // === Suma de sus enteros positivos ===//
        if(new_data[key]>0){
            suma_ent += new_data[key];
        }
        
        // === Suma de de los números pares ===//
        if(new_data[key] % 2 == 0){
            suma_par += new_data[key];
        } 
        
        // === Suma de de los números impares ===//
        if(new_data[key] % 2 != 0){
            suma_impar += new_data[key];
        }  
    }
    console.log();
    console.log("Matriz");
    console.log(new_data);
    console.log();
    console.log("Suma total de la matriz");
    console.log("Total: "+suma_total);
    console.log();
    console.log("La suma de sus entero positivos");
    console.log("Total: "+suma_ent);
    console.log();
    console.log("La suma de los numero pares");
    console.log("Total: "+suma_par);
    console.log();
    console.log("La suma de los numero impares");
    console.log("Total: "+suma_impar);
    console.log();

}
suma_array([]);