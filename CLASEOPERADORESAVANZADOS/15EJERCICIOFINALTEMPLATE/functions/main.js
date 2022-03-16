function init()
{
    cargarCategorias();
   
}


/* Escriba la funcion cargarCategorias
    Las categorías deben estar en botones (<button>)
    Cada botón debe tener una acción que al oprimirlo, se carguen los productos asociados
    (cargarProductos)
*/

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

/*
    La función cargar productos recibe una categoría (OBJETO) como parámetro y muestra el listado de productos 
    Use elementos UL Y LI para cada producto de la cetagoría 
    Use un Elemento <h4>Productos de {categoria}</h4> como título del contenedor
    Para validar la integridad de la información, use operadores avanzados, en donde aplique
    Cada Producto debe mostrar:    
        Nombre (en un <h5>)
        Precio 
        Si el producto tiene descuento, debe mostrar el descuento
        Si el producto no tiene descuento, debe mostrar el texto 'Sin descuento'
    Si el producto tiene inventario, debe mostrar el botón 'Comprar' (NO DEBE PROGRAMAR LA FUNCIONALIDAD DE ESTE BOTÓN)

*/
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

