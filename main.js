let datosDeProductos = [{ marca: "Arcor", producto: "Chocolate", id: "ChocolateArcorNacional21", precio: 1200, disponibilidad: "Disponible" },
{ marca: "Arcor", producto: "Chocolate", precio: 300, disponibilidad: "No disponible" },
{ marca: "Tang", producto: "Bebida", id: "JugoMultifruta32", precio: 500, disponibilidad: "Disponible" },
{ marca: "Luchetti", producto: "Fideos", id: "FideosMoño32", precio: 600, disponibilidad: "Disponible" },
{ marca: "Manaos", producto: "Bebida", id: "GaseosaCola32", precio: 3200, disponibilidad: "No disponible" },
{ marca: "Coca-Cola", producto: "Bebida", id: "GaseosaCola98", precio: 12200, disponibilidad: "Disponible" },
{ marca: "Smirnoff", producto: "Bebida", precio: 700, disponibilidad: "No disponible" },
{ marca: "La cumbrecita", producto: "Yerba mate", precio: 200, disponibilidad: "No disponible" },
{ marca: "Playadito", producto: "Yerba mate", id: "YerbaNacional231", precio: 100, disponibilidad: "Disponible" }]


let operacion = () => {
   numEspecificado = prompt("Bienvenido, Indique un numero para iniciar:                                        1. Ver lista de productos 2. Filtrar productos. 3. Hacer pedidos")
}


operacion()


function mostrarProductos(a) {
    return a.forEach((e) => console.log(e))
}


let filtradoProductos = (a) => datosDeProductos.filter(function (e) {
    return e.producto == a
})

function mayorFiltrado(e) {
    return datosDeProductos < e
}


while (numEspecificado) {
    switch (numEspecificado) {
        case "1":
            alert('Abra la consola para visualizar')
            mostrarProductos(datosDeProductos)
            console.log("--------------------------------------------")
            break;
        case "2":
            let filtrar = prompt("Desea filtrar por: 1. Marca - 2. Tipo. - 3. Precio. - 4. Disponibilidad")
            switch (filtrar) {
                case "1":
                    let filtrarMarca = prompt("Eliga una de las marcas que atendemos: Manaos - Luchetti- Smirnoff - Coca-Cola - Arcor - Tang - Playadito - La cumbrecita")
                    if(filtrarMarca){
                        let marcaFiltradas = datosDeProductos.filter(marcas => marcas.marca === filtrarMarca)
                        console.log(mostrarProductos(marcaFiltradas))
                    } else {
                        alert('Porfavor volver a ingresar la marca')
                    }
                    break;
                case "2":
                    let filtradoProducto = prompt("Especifique el tipo: Bebida - Fideos - Yerba mate - Chocolate")
                    if(filtradoProducto){
                        switch (filtradoProducto) {
                            case "Bebida":
                                console.log(filtradoProductos(filtradoProducto))
                                break;
                            case "Fideos":
                                console.log(filtradoProductos(filtradoProducto))
                                break;
                            case "Yerba mate":
                                console.log(filtradoProductos(filtradoProducto))
                                break;
                            case "Chocolate":
                                console.log(filtradoProductos(filtradoProducto))
                                break;
                            default:
                                console.log("nada")
                                operacion()
                        } 
                    } else {
                        alert('Porfavor volver a ingresar')
                    }
                    break;
                case "3":
                    let filtradoPrecio = prompt("Quiere buscar por MAYOR A o MENOR A?")
                    if(filtradoPrecio){
                        switch (filtradoPrecio) {
                            case "MAYOR A":
                                let filtradoPrecioMayor = parseInt(prompt("Buscar productos con precio mayor a:"))
                                let precioMayor = function (datosDeProductos) {
                                    return datosDeProductos.precio >= filtradoPrecioMayor
                                }
                                let filtradoMayorFinal = datosDeProductos.filter(precioMayor)
                                console.log(mostrarProductos(filtradoMayorFinal))
                                break;
                            case "MENOR A":
                                let filtradoPrecioMenor = prompt("Buscar productos con precio menor a:")
                                let precioMenor = function (datosDeProductos) {
                                    return datosDeProductos.precio <= filtradoPrecioMenor
                                }
                                let filtradoMenorFinal = datosDeProductos.filter(precioMenor)
                                console.log(mostrarProductos(filtradoMenorFinal))
                                break;
                            default:
                                console.log("?")
                        }
                    } else {
                        alert('Porfavor volver a ingresar')
                    }
                    break;
                case "4":
                    let disponibilidadPregunta = prompt('Desea ver los productos "disponibles" o "no disponibles"?')
                    switch (disponibilidadPregunta) {
                        case "disponibles":
                            let disponiblesSi = datosDeProductos.filter(disponible => disponible.disponibilidad === "Disponible")
                            console.log(mostrarProductos(disponiblesSi))
                            console.log("----------------------------------------")
                            break;
                        case "no disponibles":
                            let disponiblesNo = datosDeProductos.filter(disponible => disponible.disponibilidad === "No disponible")
                            console.log(mostrarProductos(disponiblesNo))
                            console.log("----------------------------------------")
                                break;
                    }
            }
            break;
        case "3":
            alert('A continuacion vera la lista de los productos disponibles para su pedido en la consola.')
            let disponibilidadPedido = datosDeProductos.filter(disponible => disponible.disponibilidad === "Disponible")
            console.log(mostrarProductos(disponibilidadPedido))
            let pedirProducto = prompt('Para realizar un pedido especifique el ID del ya mencionado:')
            let productoPedido = datosDeProductos.find((e) => e.id === pedirProducto)
            let estadoPedido = datosDeProductos.push({ PedidoEnConfirmacion: productoPedido })
            console.log(mostrarProductos(datosDeProductos))
            console.log("Producto Anotado")
            alert('A continuacion podra ver su pedido en estado de espera de confirmacion, gracias!')
            break;
        default:
            console.log("Error")
    }
    operacion()
}



