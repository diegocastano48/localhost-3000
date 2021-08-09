
let new_array=[];
function transform_array(arreglo){
    for (let a = 0; a < arreglo.length; a++) {
        for (let b = 0; b < arreglo.length; b++) {
            let element = arreglo[a][b];            
            if(!isNaN(element)){
                new_array.push(element);               
            }            
        }        
    }
    console.log();
    console.log("Arreglo bidimensional");
    console.log(arreglo);
    console.log();

    console.log("Arreglo ordenado ASC solo enteros");
    new_array.sort(function(a,b){return a-b})
    console.log(new_array);

    console.log();
    console.log("Arreglo ordenado DESC solo enteros");
    new_array.sort(function(a,b){return b-a})
    console.log(new_array);
    console.log();
}

transform_array([[1,6,'a'],[2,4,'c']]);