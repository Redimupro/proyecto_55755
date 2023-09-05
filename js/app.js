/**
 * ->Escribir Bienvenido al carrito de compras!!!
 * ->Ingrese su nombre!
 * ->Ingrese nuevo item:
 * ->Ingrese nombre de item
 * ->Ingrese precio del item
 * ->Ingrese cantidad del item
 * ->Hacer validaciones con respecto al precio >=0 y la cantidad > 0 BONUS
 * ->Le preguntamos si desea volver a ingresar otro item (si/no)  
 * ->Una vez que dice que no, le mostramos el total del carrito y lo despedimos..
 */
const SI = 'si';
const NO = 'no';
let nombreUsuario;
let nombreProducto;
let precio;
let total = 0;
let cantidad;
let continuar;
let ticket = 'nombre   precio   cantidad    \n';


function cargaProducto() {
    nombreProducto = prompt('Ingrese nombre del item:');
    precio = +prompt('Ingrese precio:');
    precio = validacionPrecio(precio);
    cantidad = +prompt('Ingrese cantidad: ');
}

function generarDetalle(nombreProducto, precio, cantidad) {
    let detalle = `${nombreProducto}     ${precio}       ${cantidad}     ${precio*cantidad}\n`;
    ticket = ticket + detalle;
}

function validacionPrecio(price) {
    while (price < 0) {
        price = prompt('precio incorrecto, vuelva a ingresarlo: ');
    }
    return price;
}


nombreUsuario = prompt('Bienvenido al carrito de compras!!! \n Ingrese su nombre: ');
do {
   cargaProducto();
   continuar = prompt('Desea ingresar otro item? si/no');
   while (continuar !== SI && continuar !== NO) {
        continuar = prompt('respuesta invalida, por favor vuelva a ingresar si desea continuar o no:');
   }
   generarDetalle(nombreProducto,precio,cantidad);
   total = total + precio * cantidad;

}while(continuar == SI);

ticket = ticket + `total: ${total}`;
alert(ticket);




