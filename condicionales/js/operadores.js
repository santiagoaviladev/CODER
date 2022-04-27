
  const a = 1;
  const b= "1";

  const c = a == b; 
  console.log("IGUALDAD NO ESTRICTA", c); //true

  const d = a===b;
  console.log("IGUALDAD  ESTRICTA", d); //true

  const f = a!=b;
  console.log("DIFERENCIA NO  ESTRICTA", f); //false

  const g = a!==b;
  console.log("DIFERENCIA  ESTRICTA", g); //true


  const x = 10;
  const y = -2;

  const z = x<y;
  console.log("MENOR QUE", z)//false

  const w= x>y;
  console.log("MAYOR QUE", w)//true

  console.log(" NO MAYOR QUE", !w)//false

  console.log(" NO NO MAYOR QUE", !!w)//true


  