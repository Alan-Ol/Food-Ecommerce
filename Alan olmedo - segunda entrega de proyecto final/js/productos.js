

const productos = [
    {
        id: 1,
        foto: "./img/burguer-pollo.png",
        nombre: "Pollo crispy",
        precio: 760
    },
    {
        id: 2,
        foto: "./img/americana.png",
        nombre: "Americana",
        precio: 820
    },
    {
        id: 3,
        foto: "./img/sanwich-pollo.png",
        nombre: "sanwich de pollo",
        precio: 550
    },
    {
        id: 4,
        foto: "./img/bondiola.png",
        nombre: "bondiola cheese",
        precio: 830
    },
    {
        id: 5,
        foto: "./img/doblejyq.png",
        nombre: "Doble JYQ",
        precio: 660
    },
    {
        id: 6,
        foto: "./img/simple2.png",
        nombre: "simple cheese",
        precio: 510
    },

]

let carrito = [];
let lista=document.getElementById("milista");

renderizarProductos();

function renderizarProductos (){
    
    for (const producto of productos) {
        lista.innerHTML+=`
        <div class="card">
            <div class="imgBx">
                <img src="${producto.foto}" alt="">
            </div>
            <div class="contentBx">
                <h3>${producto.nombre}</h3>
                <h2 class="price">$${producto.precio}</h2>
                <a href="#" class="buy" id='btn${producto.id}'>Buy now</a>
            </div>
        </div> `
    }

    productos.forEach(producto => {
        document.getElementById(`btn${producto.id}`).addEventListener('click', function() {
            agregarAlCarrito(producto);
        })
    })
}

function agregarAlCarrito(productoNuevo) {
    carrito.push(productoNuevo);
    console.log(carrito);

    //notificacion del carrito
    Swal.fire({
        title: 'felicitaciones!',
        text: `Haz agregado ${productoNuevo.nombre} al carrito`,
        imageUrl: `${productoNuevo.foto}`,
        imageWidth: 400,
        imageHeight: 300,
    })
    document.getElementById("tablabody").innerHTML +=`
    
    <p>${productoNuevo.id}</p>
    <p>${productoNuevo.nombre}</p>
    <p>${productoNuevo.precio}</p>

    `
}



