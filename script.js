document.write('<p>Estadisticas centro medico ñuñoa</p>');

var radiologia = [
  { hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA' },
  { hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE' },
  { hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE' },
  { hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA' },
  { hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA' },
];

var traumatologia = [
  { hora: '8:00', especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ', rut: '15554774-5', prevision: 'FONASA' },
  { hora: '10:00', especialista: 'RAUL ARAYA', paciente: 'ANGÉLICA NAVAS', rut: '15444147-9', prevision: 'ISAPRE' },
  { hora: '10:30', especialista: 'MARIA ARRIAGADA', paciente: 'ANA KLAPP', rut: '17879423-9', prevision: 'ISAPRE' },
  { hora: '11:00', especialista: 'ALEJANDRO BADILLA', paciente: 'FELIPE MARDONES', rut: '1547423-6', prevision: 'ISAPRE' },
  { hora: '11:30', especialista: 'CECILIA BUDNIK', paciente: 'DIEGO MARRE', rut: '16554741-K', prevision: 'FONASA' },
  { hora: '12:00', especialista: 'ARTURO CAVAGNARO', paciente: 'CECILIA MENDEZ', rut: '9747535-8', prevision: 'ISAPRE' },
  { hora: '12:30', especialista: 'ANDRES KANACRI', paciente: 'MARCIAL SUAZO', rut: '11254785-5', prevision: 'ISAPRE' },
];

var dental = [
  { hora: '8:30', especialista: 'ANDREA ZUÑIGA', paciente: 'MARCELA RETAMAL', rut: '11123425-6', prevision: 'ISAPRE' },
  { hora: '11:00', especialista: 'MARIA PIA ZAÑARTU', paciente: 'ANGEL MUÑOZ', rut: '9878789-2', prevision: 'ISAPRE' },
  { hora: '11:30', especialista: 'SCARLETT WITTING', paciente: 'MARIO KAST', rut: '7998789-5', prevision: 'FONASA' },
  { hora: '13:00', especialista: 'FRANCISCO VON TEUBER', paciente: 'KARIN FERNANDEZ', rut: '18887662-K', prevision: 'FONASA' },
  { hora: '13:30', especialista: 'EDUARDO VIÑUELA', paciente: 'HUGO SANCHEZ', rut: '17665461-4', prevision: 'FONASA' },
  { hora: '14:00', especialista: 'RAQUEL VILLASECA', paciente: 'ANA SEPULVEDA', rut: '14441281-0', prevision: 'ISAPRE' },
];
listaPacientesTraumatologia(traumatologia);

function listaPacientesTraumatologia(traumatologia) {
  let filasTablaTraumatologia = '';

  traumatologia.forEach(registro => {
    filasTablaTraumatologia += `
    <tr>
      <td>${registro.hora}</td>
      <td>${registro.especialista}</td>
      <td>${registro.paciente}</td>
      <td>${registro.rut}</td>
      <td>${registro.prevision}</td>
    </tr>
    `
  });
  let registros = document.getElementById("traumatologia");
  registros.innerHTML = filasTablaTraumatologia;
}
/***
 * 1. Agregar las siguientes horas al arreglo de Traumatología (2 Puntos):  
 */
document.getElementById("agregarpacientes").addEventListener('click', () => {
  let nuevosRegistros = [
    //Agregar horas al array de traumatologia
    { hora: '09:00', especialista: 'RENÉ POBLETE', paciente: 'ANA GELLONA', rut: '13123329-7', prevision: 'ISAPRE' },
    { hora: '09:30', especialista: 'MARIA SOLAR', paciente: 'RAMIRO ANDRADE', rut: '12221451-K', prevision: 'FONASA' },
    { hora: '10:00', especialista: 'RAUL LOYOLA', paciente: 'CARMEN ISLA', rut: '10112348-3', prevision: 'ISAPRE' },
    { hora: '10:30', especialista: 'ANTONIO LARENAS', paciente: 'PABLO LOAYZA', rut: '13453234-1', prevision: 'ISAPRE' },
    { hora: '12:00', especialista: 'MATIAS ARAVENA', paciente: 'SUSANA POBLETE', rut: '14345656-6', prevision: 'FONASA' },
  ];
  /**
   * usé el metodo push para agregar los nuevos registros junto con el operador Spread para poder seguir mostrando 
   * el listado con los registros anteriores y agrego los nuevos con el trigger del boton.
   */
  traumatologia.push(...nuevosRegistros); 
  listaPacientesTraumatologia(traumatologia);
}
)

/**
 * 2. Eliminar el primer y último elemento del arreglo de Radiología (1 Punto).  
 */ 


document.getElementById("primerElemento").addEventListener('click',()=>{
  
  // eliminar primer elemento de arreglo radiologia
  function eliminarPrimerElemento() {
    radiologia.shift()
    console.log(radiologia)
    
  }
  eliminarPrimerElemento();
})
document.getElementById("ultimoElemento").addEventListener('click',()=>{
  
  // eliminar ultimo elemento de arreglo radiologia
  function eliminaUltimoElemento(){
    radiologia.pop()
    console.log(radiologia)
  
  }
  eliminaUltimoElemento();
  
})
document.write(`<p>Cantidad de atenciones para Radiología: ${radiologia.length}</p>`);
document.write(`<p>Cantidad de atenciones para Traumatología: ${traumatologia.length}</p>`);
document.write(`<p>Cantidad de atenciones para Dental: ${dental.length}</p>`);

/***
 * 3.Imprimir en la página HTML, mediante document.write y/o las funciones que estime
conveniente, la lista de consultas médicas de Dental. Sin embargo, debe hacerlo
separando por un guión cada dato desplegado y cada fila de información debe estar
separada por un párrafo. 
*/

joinConGuion(dental);

function joinConGuion (){
  let registrosDental = document.getElementById("dental")
  let recorreArregloDental = dental.map(registro =>{
    return `<p>${[
      registro.hora,
      registro.especialista,
      registro.paciente,
      registro.rut,
      registro.prevision
      ].join(' - ')}
    </p>`
  }).join('');
  registrosDental.innerHTML = recorreArregloDental;
}


document.write(`<p>Primera atencion: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención: ${radiologia[radiologia.length - 1].paciente} - ${radiologia[radiologia.length - 1].prevision}.</p>`);
document.write(`<p>Primera atencion: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención: ${traumatologia[traumatologia.length - 1].paciente} - ${traumatologia[traumatologia.length - 1].prevision}.</p>`);
document.write(`<p>Primera atencion: ${dental[0].paciente} - ${dental[0].prevision} | Última atención: ${dental[dental.length - 1].paciente} - ${dental[dental.length - 1].prevision}.</p>`);
