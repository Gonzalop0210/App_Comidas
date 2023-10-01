let mostrarCarta = window.confirm("¿Quieres visualizar la carta?");
let cartaPlatos = {
   "ARROZ CON POLLO": [2, 8],
   "ARROZ CHAUFA": [5, 10],
   "LOMO SALTADO": [3, 12],
   "POLLO FRITO": [1, 5]
}
let pedidos = [];
let precios = [];

if (mostrarCarta === true) {
   console.log("Menú del día:");
   for (let plato in cartaPlatos) {
      console.log(`${plato}`);
   }
   proceso()
} else {
   console.log("gracias por su visita!");
}


function proceso() {
   let escribirPedido = prompt("¿Que es lo que vas a pedir hoy?");
   while (escribirPedido != null) {
      let pedidoMayuscula = escribirPedido.toUpperCase();
      let confirmacionPlato = Object.keys(cartaPlatos).find(p => p == pedidoMayuscula);
      if (confirmacionPlato != undefined) {
         if (cartaPlatos[confirmacionPlato][0] < 1) {
            let respuesta = prompt(`Ya no queda más ${confirmacionPlato}, ¿deseas seguir pidiendo? (si/no)`);
            if (respuesta == "no") {
               break
            }
         } else {
            pedidos.push(confirmacionPlato);
            precios.push(cartaPlatos[confirmacionPlato][1]);
            cartaPlatos[confirmacionPlato][0]--
         }
      } else {
         alert("Plato no Disponible!")
      }
      
      escribirPedido = prompt("¿Que es lo que vas a pedir hoy?");
   }

   let count = {};
   
   pedidos.forEach(pedidoCliente => {
      if(!count[pedidoCliente]) {
         count[pedidoCliente] = 1
      } else {
         count[pedidoCliente]++
      }
      /* console.log(`${count[pedidoCliente]} ${pedidoCliente}_______ ${cartaPlatos[pedidoCliente][1]*count[pedidoCliente]}$`); */
   })

   console.log("");
   console.log("TU BOLETA");
   for (let pedidoCliente in count) {
      console.log(`${count[pedidoCliente]} ${pedidoCliente}_______ ${cartaPlatos[pedidoCliente][1] * count[pedidoCliente]}$`);
    }

   let precioConsumo = precios.reduce((a,b) => a + b);
   console.log(`Total a pagar: ${precioConsumo}$`);
}