// arreglo
const produccion_diaria =[
    {dia:1,vaca_a:4,prod:7.0,vaca_b:5,prod2:10.1,vaca_c:50,prod3:10.3},
    {dia:2,vaca_a:4,prod:5.7,vaca_b:5,prod2:11.2,vaca_c:50,prod3:11.0},
    {dia:3,vaca_a:4,prod:4.9,vaca_b:5,prod2:7.2,vaca_c:50,prod3:9.9},
    {dia:4,vaca_a:4,prod:10.6,vaca_b:5,prod2:8.1,vaca_c:50,prod3:10.3},
    {dia:5,vaca_a:4,prod:9.7,vaca_b:5,prod2:9.2,vaca_c:50,prod3:9.4},
    {dia:6,vaca_a:4,prod:7.3,vaca_b:5,prod2:10.8,vaca_c:50,prod3:11.7},
    {dia:7,vaca_a:4,prod:9.3,vaca_b:5,prod2:11.9,vaca_c:50,prod3:8.9}
    
];

let dia1=0,dia2=0,dia3=0,dia4=0,dia5=0,dia6=0,dia7=0;
let prod_vacas =[];
//Validamos con la funcion filter si el numero de vacas el menor de 4
const data1= produccion_diaria.filter(x => x.vaca_a <4 || x.vaca_a >50 || x.vaca_b <4 || x.vaca_b >50 || x.vaca_c <4 || x.vaca_c >50);

//Validamos con la funcion filter si la producción de leche está entre 0.0 y 11.9
const data2= produccion_diaria.filter(x => x.prod <0.0 || x.prod >11.9 || x.prod2 <0.0 || x.prod2 >11.9 || x.prod3 <0.0 || x.prod3 >11.9);

//Validamos si las variables data1 y data2 est'an vacia
if(data1 == ""){
    if(data2 == ""){
    //Sumamo la producción del dia 1
    const elem1 = produccion_diaria[0];    
    dia1 =parseFloat(elem1.prod) + parseFloat(elem1.prod2) + parseFloat(elem1.prod3);

    // Validamos que vaca produjo mas leche en el dia 1
    if(parseFloat(elem1.prod) >= parseFloat(elem1.prod2) & parseFloat(elem1.prod) >= parseFloat(elem1.prod3) ){
        prod_vacas.push({dia:elem1.dia,vaca:elem1.vaca_a,prod:elem1.prod});
    }else if(parseFloat(elem1.prod2) >= parseFloat(elem1.prod) & parseFloat(elem1.prod2) >= parseFloat(elem1.prod3) ){
        prod_vacas.push({dia:elem1.dia,vaca:elem1.vaca_b,prod:elem1.prod2});
    }else{
        prod_vacas.push({dia:elem1.dia,vaca:elem1.vaca_c,prod:elem1.prod3});
    }
    
    //Sumamo la producción del dia 2
    const elem2 = produccion_diaria[1];    
    dia2 = parseFloat(elem2.prod) + parseFloat(elem2.prod2) + parseFloat(elem2.prod3);

    // Validamos que vaca produjo mas leche en el dia 2
    if(parseFloat(elem2.prod) >= parseFloat(elem2.prod2) & parseFloat(elem2.prod) >= parseFloat(elem2.prod3) ){
        prod_vacas.push({dia:elem2.dia,vaca:elem2.vaca_a,prod:elem2.prod});
    }else if(parseFloat(elem2.prod2) >= parseFloat(elem2.prod) & parseFloat(elem2.prod2) >= parseFloat(elem2.prod3) ){
        prod_vacas.push({dia:elem2.dia,vaca:elem2.vaca_b,prod:elem2.prod2});
    }else{
        prod_vacas.push({dia:elem2.dia,vaca:elem2.vaca_c,prod:elem2.prod3});
    } 
    
    //Sumamo la producción del dia 3
    const elem3 = produccion_diaria[2];
    dia3 = parseFloat(elem3.prod) + parseFloat(elem3.prod2) + parseFloat(elem3.prod3);

    // Validamos que vaca produjo mas leche en el dia 3
    if(parseFloat(elem3.prod) >= parseFloat(elem3.prod2) & parseFloat(elem3.prod) >= parseFloat(elem3.prod3) ){
        prod_vacas.push({dia:elem3.dia,vaca:elem3.vaca_a,prod:elem3.prod});
    }else if(parseFloat(elem3.prod2) >= parseFloat(elem3.prod) & parseFloat(elem3.prod2) >= parseFloat(elem3.prod3) ){
        prod_vacas.push({dia:elem3.dia,vaca:elem3.vaca_b,prod:elem3.prod2});
    }else{
        prod_vacas.push({dia:elem3.dia,vaca:elem3.vaca_c,prod:elem3.prod3});
    } 
   
    //Sumamo la producción del dia 4
    const elem4 = produccion_diaria[3];
    dia4 = parseFloat(elem4.prod) + parseFloat(elem4.prod2) + parseFloat(elem4.prod3); 

    // Validamos que vaca produjo mas leche en el dia 4
    if(parseFloat(elem4.prod) >= parseFloat(elem4.prod2) & parseFloat(elem4.prod) >= parseFloat(elem4.prod3) ){
        prod_vacas.push({dia:elem4.dia,vaca:elem4.vaca_a,prod:elem4.prod});
    }else if(parseFloat(elem4.prod2) >= parseFloat(elem4.prod) & parseFloat(elem4.prod2) >= parseFloat(elem4.prod3) ){
        prod_vacas.push({dia:elem4.dia,vaca:elem4.vaca_b,prod:elem4.prod2});
    }else{
        prod_vacas.push({dia:elem4.dia,vaca:elem4.vaca_c,prod:elem4.prod3});
    } 
    
    //Sumamo la producción del dia 5
    const elem5 = produccion_diaria[4];
    dia5 = parseFloat(elem5.prod) + parseFloat(elem5.prod2) + parseFloat(elem5.prod3);

    // Validamos que vaca produjo mas leche en el dia 5
    if(parseFloat(elem5.prod) >= parseFloat(elem5.prod2) & parseFloat(elem5.prod) >= parseFloat(elem5.prod3) ){
        prod_vacas.push({dia:elem5.dia,vaca:elem5.vaca_a,prod:elem5.prod});
    }else if(parseFloat(elem5.prod2) >= parseFloat(elem5.prod) & parseFloat(elem5.prod2) >= parseFloat(elem5.prod3) ){
        prod_vacas.push({dia:elem5.dia,vaca:elem5.vaca_b,prod:elem5.prod2});
    }else{
        prod_vacas.push({dia:elem5.dia,vaca:elem5.vaca_c,prod:elem5.prod3});
    } 
    
    //Sumamo la producción del dia 6
    const elem6 = produccion_diaria[5];
    dia6 = parseFloat(elem6.prod) +parseFloat(elem6.prod2) + parseFloat(elem6.prod3);

    // Validamos que vaca produjo mas leche en el dia 6
    if(parseFloat(elem6.prod) >= parseFloat(elem6.prod2) & parseFloat(elem6.prod) >= parseFloat(elem6.prod3) ){
        prod_vacas.push({dia:elem6.dia,vaca:elem6.vaca_a,prod:elem6.prod});
    }else if(parseFloat(elem6.prod2) >= parseFloat(elem6.prod) & parseFloat(elem6.prod2) >= parseFloat(elem6.prod3) ){
        prod_vacas.push({dia:elem6.dia,vaca:elem6.vaca_b,prod:elem6.prod2});
    }else{
        prod_vacas.push({dia:elem6.dia,vaca:elem6.vaca_c,prod:elem6.prod3});
    } 
    
    //Sumamo la producción del dia 7
    const elem7 = produccion_diaria[6];
    dia7 = parseFloat(elem7.prod) + parseFloat(elem7.prod2) + parseFloat(elem7.prod3);

    // Validamos que vaca produjo mas leche en el dia 7
    if(parseFloat(elem7.prod) >= parseFloat(elem7.prod2) & parseFloat(elem7.prod) >= parseFloat(elem7.prod3) ){
        prod_vacas.push({dia:elem7.dia,vaca:elem7.vaca_a,prod:elem7.prod});
    }else if(parseFloat(elem7.prod2) >= parseFloat(elem7.prod) & parseFloat(elem7.prod2) >= parseFloat(elem7.prod3) ){
        prod_vacas.push({dia:elem7.dia,vaca:elem7.vaca_b,prod:elem7.prod2});
    }else{
        prod_vacas.push({dia:elem7.dia,vaca:elem7.vaca_c,prod:elem7.prod3});
    } 
   
    //Se imprime la producción de leche por dia
    console.log();
    console.log("Producción total de leche por día");
    console.log("Dia 1: "+ dia1.toFixed(1) + " Litros");
    console.log("Dia 2: "+ dia2.toFixed(1) + " Litros");
    console.log("Dia 3: "+ dia3.toFixed(1) + " Litros");
    console.log("Dia 4: "+ dia4.toFixed(1) + " Litros");
    console.log("Dia 5: "+ dia5.toFixed(1) + " Litros");
    console.log("Dia 6: "+ dia6.toFixed(1) + " Litros");
    console.log("Dia 7: "+ dia7.toFixed(1) + " Litros");
    
    // Obtner el día con mayor producción de leche
    if(dia1 > dia2 & dia1 > dia3 & dia1 > dia4 & dia1 > dia5 & dia1 > dia6 & dia1 > dia7){
        console.log();
        console.log("Dia con mayor producción");
        console.log("Dia 1: "+dia1.toFixed(1)+ " Litros");
        console.log();
    }else if(dia2 > dia1 & dia2 > dia3 & dia2 > dia4 & dia2 > dia5 & dia2 > dia6 & dia2 > dia7){
        console.log();
        console.log("Dia con mayor producción");
        console.log("Dia 2: "+dia2.toFixed(1)+ " Litros");
        console.log();
    }else if(dia3 > dia1 & dia3 > dia2 & dia3 > dia4 & dia3 > dia5 & dia3 > dia6 & dia3 > dia7){
        console.log();
        console.log("Dia con mayor producción");
        console.log("Dia 3: "+dia3.toFixed(1)+ " Litros");
        console.log();
    }else if(dia4 > dia1 & dia4 > dia2 & dia4 > dia3 & dia4 > dia5 & dia4 > dia6 & dia4 > dia7){
        console.log();
        console.log("Dia con mayor producción");
        console.log("Dia 4: "+dia4.toFixed(1)+ " Litros");
        console.log();
    }else if(dia5 > dia1 & dia5 > dia2 & dia5 > dia3 & dia5 > dia4 & dia5 > dia6 & dia5 > dia7){
        console.log();
        console.log("Dia con mayor producción");
        console.log("Dia 5: "+dia5.toFixed(1)+ " Litros");
        console.log();
    }else if(dia6 > dia1 & dia6 > dia2 & dia6 > dia3 & dia6 > dia4 & dia6 > dia5 & dia6 > dia7){
        console.log();
        console.log("Dia con mayor producción");
        console.log("Dia 6: "+dia6.toFixed(1)+ " Litros");
        console.log();
    }else{
        console.log();
        console.log("Dia con mayor producción");
        console.log("Dia 7: "+dia7.toFixed(1)+ " Litros");    
    }

    // Obtner el día con menor producción de leche
    if(dia1 < dia2 & dia1 < dia3 & dia1 < dia4 & dia1 < dia5 & dia1 < dia6 & dia1 < dia7){
        console.log();
        console.log("Dia con menor producción");
        console.log("Dia 1: "+dia1.toFixed(1)+ " Litros");
        console.log();
    }else if(dia2 < dia1 & dia2 < dia3 & dia2 < dia4 & dia2 < dia5 & dia2 < dia6 & dia2 < dia7){
        console.log();
        console.log("Dia con menor producción");
        console.log("Dia 2: "+dia2.toFixed(1)+ " Litros");
        console.log();
    }else if(dia3 < dia1 & dia3 < dia2 & dia3 < dia4 & dia3 < dia5 & dia3 < dia6 & dia3 < dia7){
        console.log();
        console.log("Dia con menor producción");
        console.log("Dia 3: "+dia3.toFixed(1)+ " Litros");
        console.log();
    }else if(dia4 < dia1 & dia4 < dia2 & dia4 < dia3 & dia4 < dia5 & dia4 < dia6 & dia4 < dia7){
        console.log();
        console.log("Dia con menor producción");
        console.log("Dia 4: "+dia4.toFixed(1)+ " Litros");
        console.log();
    }else if(dia5 < dia1 & dia5 < dia2 & dia5 < dia3 & dia5 < dia4 & dia5 < dia6 & dia5 < dia7){
        console.log();
        console.log("Dia con menor producción");
        console.log("Dia 5: "+dia5.toFixed(1)+ " Litros");
        console.log();
    }else if(dia6 < dia1 & dia6 < dia2 & dia6 < dia3 & dia6 < dia4 & dia6 < dia5 & dia6 < dia7){
        console.log();
        console.log("Dia con menor producción");
        console.log("Dia 6: "+dia6.toFixed(1)+ " Litros");
        console.log();
    }else{
        console.log();
        console.log("Dia con menor producción");
        console.log("Dia 7: "+dia7.toFixed(1)+ " Litros");
        console.log();
    }

    console.log("Vacas que dieron mas leche por día");
    for (let index = 0; index < prod_vacas.length; index++) {
        let dia = index + 1;
        const element = prod_vacas[index];
        console.log("Dia: "+dia+ " Vaca: "+element.vaca+ " Leche: "+element.prod+ " Litros");        
    }
    console.log();
    }
    else{
        console.log();
        console.log("Hay litros de leche mayor a lo permitido");
        console.log();
    }   
}
else{
    console.log();
    console.log("Hay cantidad de vacas mayor o nemor a lo permitido");
    console.log();
}

