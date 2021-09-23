//Ingreso de datos para variables despues utilizadas.
var Nombre = prompt("Ingresa tu nombre y apellido: ", "Nombre Apellido");
var Carrera = prompt("Ingresa el nombre de tu carrera: ", "Carrera");
var Ramo1 = prompt("Ingresa el primer ramo: ", "HTML");
var Ramo2 = prompt("Ingresa el segundo ramo: ", "Javascript");
var Ramo3 = prompt("Ingresa el tercer ramo: ", "CSS");
var Nota1_1 = prompt("Ingresa la primera nota del ramo " + Ramo1, "4");
var Nota1_2 = prompt("Ingresa la segunda nota del ramo " + Ramo1, "4");
var Nota1_3 = prompt("Ingresa la tercera nota del ramo " + Ramo1, "4");
var Nota2_1 = prompt("Ingresa la primera nota del ramo " + Ramo2, "4");
var Nota2_2 = prompt("Ingresa la segunda nota del ramo " + Ramo2, "4");
var Nota2_3 = prompt("Ingresa la tercera nota del ramo " + Ramo2, "4");
var Nota3_1 = prompt("Ingresa la primera nota del ramo " + Ramo3, "4");
var Nota3_2 = prompt("Ingresa la segunda nota del ramo " + Ramo3, "4");

//Calculo de promedios con las notas antes ingresadas.
var Promedio1 = ((parseFloat(Nota1_1) + parseFloat(Nota1_2) + parseFloat(Nota1_3))/ 3).toFixed(2);
var Promedio2 = ((parseFloat(Nota2_1) + parseFloat(Nota2_2) + parseFloat(Nota2_3))/ 3).toFixed(2);
var Nota3_3 = "-";
var Promedio3 = "-";
var Promedio3_E = 4;

//Calculo de la nota faltante para conseguir el promedio esperado.
var Nota3_E = 3 * Promedio3_E - (parseFloat(Nota3_1) + parseFloat(Nota3_2));

//Contenido de la pagina, estableciendo los disenos con bootstrap 5.
document.write("<div class='container-fluid px-0'>");
document.write("<h1 class='py-2'>Notas finales</h1>");

//Primera columna dedicada a los datos de Nombre y Carrera del alumno ingresadas con las variables.
document.write("<div class='row col-12 align-items-center'>");
document.write("<div class='col-1'><h4>Nombre: </h4></div>");
document.write("<div class='col-1'>"+Nombre+"</div>");
document.write("</div>");
document.write("<div class='row mb-2 col-12 align-items-center'>");
document.write("<div class='col-1'><h4>Carrera: </h4></div>");
document.write("<div class='col-1'>"+Carrera+"</div>");
document.write("</div>");

//Tabla de tanto ramos, notas y promedios del alumno.
document.write("<table class='table'>");

//Encabezado de nuestra tabla.
document.write("<thead>");
document.write("<tr class='table-dark bg-dark'>");
document.write("<th scope='col'>Ramo</th>");
document.write("<th scope='col'>Nota 1</th>");
document.write("<th scope='col'>Nota 2</th>");
document.write("<th scope='col'>Nota 3</th>");
document.write("<th scope='col'>Promedio</th>");
document.write("</tr>");
document.write("</thead>");

//Contenido de nuestra tabla usando las variables.
document.write("<tbody>");
document.write("<tr>");
document.write("<th scope='row'>"+Ramo1+"</th>");
document.write("<td>"+Nota1_1+"</td>");
document.write("<td>"+Nota1_2+"</td>");
document.write("<td>"+Nota1_3+"</td>");
document.write("<td>"+Promedio1+"</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<th scope='row'>"+Ramo2+"</th>");
document.write("<td>"+Nota2_1+"</td>");
document.write("<td>"+Nota2_2+"</td>");
document.write("<td>"+Nota2_3+"</td>");
document.write("<td>"+Promedio2+"</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<th scope='row'>"+Ramo3+"</th>");
document.write("<td>"+Nota3_1+"</td>");
document.write("<td>"+Nota3_2+"</td>");
document.write("<td>"+Nota3_3+"</td>");
document.write("<td>"+Promedio3+"</td>");
document.write("</tr>");
document.write("</tbody>");
document.write("</table>");
document.write("</div>");

//Se le da al alumno la nota faltante para conseguir aprobar en el 3er ramo establecido.
document.write("<p>",'Para aprobar el ramo '+Ramo3+' con nota 4, necesitas obtener un '+Nota3_E.toFixed(2)+' en la nota 3',"</p>");
