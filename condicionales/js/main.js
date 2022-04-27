
  // Estructuras de Control

  // OPERACION SUMAR
  // OPERACION MULTIPLICAR



    
  let operacion = prompt(`INGRESA UNA OPERACIÓN: 
                            SUMAR
                            MULTIPLICAR
                            RESTAR
                            DIVIDIR`);

    operacion = operacion.toUpperCase();

    
    if(operacion==="SUMAR" 
        || operacion ==="MULTIPLICAR"
        || operacion ==="RESTAR"
        || operacion ==="DIVIDIR")
    {

        let numero1 = Number(prompt("Ingresa el primer número"));                     
        let numero2 = Number(prompt("Ingresa el segundo número")); 

        if(isNaN(numero1) || isNaN(numero2))
        {
            alert("ALGUNO DE SUS NUMEROS NO ES VALIDO")
        }
        else
        {

            if(operacion === "SUMAR")
            {
                alert(numero1+numero2);
            }
            else if(operacion === "MULTIPLICAR")
            {
                 alert(numero1*numero2);
            }
            else if(operacion === "RESTAR")
            {
                alert(numero1-numero2);
            }
            else 
            {
                if(numero2!==0)
                {
                    alert(numero1/numero2);
                }
                else
                {
                    alert("Numero 2 no es valido para dividir")
                }
            
            }
        }
    }
    else 
    {
        alert("OPCION INVALIDA");
    }


   