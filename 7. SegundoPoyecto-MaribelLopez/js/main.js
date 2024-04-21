class Alumno {
        constructor(id, nombre, apellido, nota1, nota2, nota3) {
                this.id = parseInt(id);
                this.nombre = nombre;
                this.apellido = apellido;
                this.nota1 = parseFloat(nota1);
                this.nota2 = parseFloat(nota2);
                this.nota3 = parseFloat(nota3);
        }
}
const estudiantes=[];

const espacioEstudiantes= document.getElementById('estudiantes');
function estudiantesUI(estudiantes) {
        espacioEstudiantes.innerHTML= "";

for (const Alumno of estudiantes){        
        let divEstudiante= document.createElement('div');    
        divEstudiante.innerHTML=`<h2>Nombre estudiante: ${Alumno.nombre}</h2>
                                <h2>Apellido estudiante: ${Alumno.apellido} </h2>
                                <h2>Nota primer corte: ${Alumno.nota1} </h2>
                                <h2>Nota segundo corte: ${Alumno.nota2} </h2>
                                <h2>Nota tercer corte: ${Alumno.nota3} </h2>
                                <button id="${Alumno.id}" class="btnPromedio" >Promedio</button>`;  
        espacioEstudiantes.append(divEstudiante);         
        }
}
if('ListaEstudiantes' in localStorage){
        const guardados= JSON.parse(localStorage.getItem('ListaEstudiantes'));
        console.log(guardados);
        for (const generico of guardados) {
                estudiantes.push(new Alumno(generico.id, generico.nombre, generico.apellido, generico.nota1, generico.nota2, generico.nota3));                
        }
        console.log(estudiantes);
        estudiantesUI(estudiantes);
}
let miFormulario= document.getElementById('registroAlumno');
miFormulario.onsubmit = (e) => {      
        e.preventDefault(); 
        const inputs= miFormulario.children;
        estudiantes.push(new Alumno(estudiantes.length+1,inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value, inputs[4].value));
        localStorage.setItem('ListaEstudiantes',JSON.stringify(estudiantes)); 
        estudiantesUI(estudiantes);
}