    for (let repetir=0; repetir<2; repetir++)
    {
    let ingresaNombre = prompt("Ingrese el nombre del estudiante");
    let ingresaApellido = prompt("Ingrese el apellido del estudiante");
    {
    let nota1 = parseFloat (prompt("Ingrese la nota del primer corte"));
    let nota2 = parseFloat (prompt("Ingrese la nota del segundo corte"));
    let nota3 = parseFloat (prompt("Ingrese la nota del tercer corte"));

    function promedio ()
    {
        let resultado = parseFloat (nota1 + nota2 + nota3);
        let resultado1 = parseFloat (resultado/3);
        alert ("La nota final es " + resultado1);
    
        if(resultado1<3)
        {
        alert("De acuerdo al promedio el estudiante REPROBÓ");
        }
        else 
        {
            alert("De acuerdo al promedio el estudiante APROBÓ");
        }
    }
    promedio();  
}
function mostrarNombre()
{    
    const nombres =[]
    const apellido=[]
    
    nombres.push(ingresaNombre);
    apellido.push(ingresaApellido);
       
    alert ("Cantidad de datos ingresados son " + nombres.length);
    const completo = nombres.concat(apellido);
    alert (completo);    
}
mostrarNombre();
}
