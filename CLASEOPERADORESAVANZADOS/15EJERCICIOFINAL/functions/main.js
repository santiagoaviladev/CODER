function init()
{
    cargarCategorias();
   
}

function cargarCategorias()
{
    const nodo = document.querySelector("#categorias"); 
    categorias.forEach(element=>{
        const btn = document.createElement("button");
        btn.addEventListener("click", ()=>{
            cargarProductos(element);
        });
        btn.innerHTML=element.nombre;
        nodo.appendChild(btn);
    });

}

function cargarProductos(categoria)
{
    const productosCat = productos.filter(element=>element.idCategoria===categoria.id); 
    const nodo = document.querySelector("#productos") 
                ? document.querySelector("ul")
                : document.createElement("ul");
    nodo.setAttribute("id", "productos");
    nodo.innerHTML="";
    nodo.innerHTML = productosCat.length>0 
                    ? `<h4>${categoria.nombre}</h4>` 
                    : `<h4>NO HAY PRODUCTOS</h4>`;
    
                    console.log(productosCat)
    productosCat.length>0 && 
    
    productosCat.forEach(element=>{
        const li = document.createElement("li");
        li.innerHTML=`
            <h5>${element.nombre}</h5>
            $${element.precio}<br>
            ${element.descuento || 'Sin Descuento'}<br>
            ${element.inventario && element.inventario>0 ? '<button>Comprar</button>' : 'No Disponible'}
        `
        nodo.appendChild(li);
    });
    const contenedor = document.querySelector("#contenedor");
    contenedor.appendChild(nodo);
}

function cargarCategoriasConDescuento()
{
    
}