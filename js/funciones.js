function suma(){
    var a=0;
    var b=0;
    a= parseInt(prompt(" ingrese el primer numero "));
    b= parseInt(prompt(" ingrese el segunto numero "));
    suma = a + b;
    alert(" la suma de los dos numeros es: " + suma)
}




function operaciones (){
    var a = 0;
    var b = 0;
    var suma = 0;
    var resta = 0;
    var multi = 0;
    var divi = 0;

        a= parseInt (prompt("Por favor ingrese un numero para operar "));
        b= parseInt (prompt("Por favor otro numero para operar"));

            suma= a+b;
            resta= a-b;
            multi= a*b;
            divi = a/b
    
     alert ("El resultado de la suma es: " + suma);
     alert ("El resultado de la resta es: " + resta);
     alert ("El resultao de la multiplicacion es: " + multi);
     alert ("El resultado de la division es: " + divi);
    }


    function numeroMayor() {
        var n1 =0;
        var n2=0;
    n1= parseInt (prompt("Por favor ingrese un numero para operar "));
    n2= parseInt (prompt("Por favor otro numero para operar"));
    
        if (n1==n2) {
            alert("Los valores ingresados son iguales")
        }   
        else if (n1>n2){
            alert (n1 + " es mayor que " + n2)

        }
        else {
            alert (n2 + " es mayor que " + n1)
        }


    }

    function cuadrado(params) {
        var o1= 0;
        var cuadrado= 0;
    o1= parseInt (prompt("Por favor ingrese un numero para operar "));
            
    cuadrado= o1*o1;
            alert ("El cuadrado de el numero es: " + cuadrado);

        
    }

    function triangulo(params) {
        var b = 0;
        var h = 0;
        var area = 0;
    
    b = parseInt (prompt("Ingrese la base del triangulo "));
    h = parseInt (prompt("Ingrese la altura de el triangulo "));
        
        area = (b*h)/2;
    
            alert ("El area del triangulo es: " +area);
    }

    function metrosPulgadas(params) {
        var pul = 0;
        var opera2 = 0;
        var opera1 = 0;
    pul = parseInt (prompt ( "Ingrese pulgadas a covertir "));

        opera1 = 39.3701* pul
        opera2 = 0.393701 * pul 

        alert ("Los metros que hay en las pulgadas son: " + opera1);
        alert ("Los centimetros que hay en las pulgadas son: " + opera2);
    }


    function tienda (params) {
        var  ope1= 0;
        var kilo = 0;
        var resu2 = 0;
        var ope2 =0;
        var ope3 = 0;
        var resu3 = 0;
        var ope4 = 0;
        var resu4 =0;
    
    kilo = parseInt (prompt("Ingrese los kilos del cliente a comprar"));
        if (kilo<=2) {
            ope1 = kilo * 4500
            alert ("usted debe pargar: "+ ope1);
    }else if (kilo<=5 && kilo>2){
            ope2 = kilo*4500
            resu2= ope2*0.10
            resu22= ope2-resu2
    alert ("usted debera pagar: " + resu22);

    }else if (kilo<=10 && kilo>5){
            ope3 = kilo* 4500
            resu3 = ope3*0.15
            resu33 = ope3-resu3

    alert ("usted debera pagar: " + resu33);

    }else  if (kilo>10) {
            ope4 = kilo *4500
            resu4 = ope4*0.20
            resu44 = ope4-resu4
    alert ("usted debra pagar: " + resu44);
}
    }