// Lista base de productos
let globalIdProducts = 0;
let productos = [
  {
    id: 1,
    nombre: "Camisa",
    descripcion: "Camisa blanca de algodón",
    categoria: "Ropa",
    precio: 25.99,
    stock: 50,
  },
  {
    id: 2,
    nombre: "Pantalón",
    descripcion: "Pantalón azul jeans",
    categoria: "Ropa",
    precio: 40.0,
    stock: 30,
  },
  {
    id: 3,
    nombre: "Zapatos",
    descripcion: "Zapatos deportivos",
    categoria: "Calzado",
    precio: 60.5,
    stock: 20,
  },
];


const categorias = [
  { id: 1, nombre: "Ropa", descripcion: "Prendas de vestir" },
  { id: 2, nombre: "Calzado", descripcion: "Zapatos, sandalias y más" },
];

const carrito = [
  { nombre: "Camisa", cantidad: 2, precio: 25.99 },
  { nombre: "Zapatos", cantidad: 1, precio: 60.5 },
];

const ventas = [
  {
    cliente: {
      nombre: "Juan Pérez",
      email: "juan.perez@example.com",
      telefono: "0991234567",
      direccion: "Av. Siempre Viva 123",
    },
    total: 112.48,
  },
  {
    cliente: {
      nombre: "María López",
      email: "maria.lopez@example.com",
      telefono: "0987654321",
      direccion: "Calle Falsa 456",
    },
    total: 40.0,
  },
];


const cargarProductos = () => {
  document.getElementById("tableBody").innerHTML = productos.map(n => `
    <tr>
              <td>${n.id}</td>
              <td>${n.nombre}</td>
              <td>${n.descripcion}</td>
              <td>${n.categoria}</td>
              <td>${n.precio}</td>
              <td>${n.stock}</td>
              
              <td>
                <div style="display: flex; gap: 5px;">
                    <button onClick='openModalChanges(${JSON.stringify(n)})' >Editar</button>
                    <button onClick='openModalDelete(${JSON.stringify(n)})'>Eliinar</button>
                </div>
              </td>
            </tr>
    
    `).join(" ");

  totalBodega()
}

let productSelected = 0;

const openModalChanges = (product) => {
  console.log(product)
  document.getElementById("modalChangeData").showModal();
  document.getElementById("id").value = product.id;
  document.getElementById("nombre").value = product.nombre;
  document.getElementById("descripcion").value = product.descripcion;
  document.getElementById("categoria").value = product.categoria;
  document.getElementById("precio").value = product.precio;
  document.getElementById("stock").value = product.stock;
  productSelected = product.id;
  listCategories()
}

const closeModalEdit =() =>{
  document.getElementById("modalChangeData").close();
}

const saveDataModalProduct = () => {
  console.log(productSelected)
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].id == productSelected) {
      console.log("Encontrado")
      productos[i].nombre = document.getElementById("nombre").value;
      productos[i].descripcion = document.getElementById("descripcion").value;
      productos[i].categoria = document.getElementById("categoria").value;
      productos[i].precio = document.getElementById("precio").value;
      productos[i].stock = document.getElementById("stock").value;
      cargarProductos();
      document.getElementById("modalChangeData").close();
      break
    }
  }
}

const listCategories = () => {
  document.getElementById("categoria").innerHTML = categorias.map(c => `
      <optgroup label='${c.descripcion}' id="labelOptGroup">
        <option value='${c.nombre}' id="valueOption">${c.nombre}</option>
      </optgroup>

      `)
  document.getElementById("categoriaN").innerHTML = categorias.map(c => `
      <optgroup label='${c.descripcion}' id="labelOptGroup">
        <option value='${c.nombre}' id="valueOption">${c.nombre}</option>
      </optgroup>

      `)
}

const totalBodega = () =>{
  let totalProdutos = 0;
  let totalStock = 0;
  let valorTotalInventario = 0;
  for(let i=0; i<productos.length; i++){
    totalProdutos = i+1;
    totalStock += parseInt(productos[i].stock);
    valorTotalInventario += parseFloat(productos[i].precio*productos[i].stock)
  }
  document.getElementById("totalProductos").innerText = totalProdutos;
  document.getElementById("stockTotal").innerText = totalStock;
  document.getElementById("valorInventario").innerText = valorTotalInventario;
}

const handleOpenModalProduct = () =>{
  console.log("Agregar producto")
  document.getElementById("addProductModal").showModal();
  document.getElementById("errorEmpyName").style.display = "none";
  document.getElementById("errorUpperName").style.display = "none";
  document.getElementById("errorOnlyChar").style.display = "none";
  listCategories();
}

const saveNewProduct = () =>{
  let arr = {};
  let id;
  let nombre;
  let descripcion;
  let categoria;
  let precio;
  let stock;

  let nameIsCorrect = false;
  
  nombre = document.getElementById("nombreN").value;
  descripcion = document.getElementById("descripcionN").value;
  categoria = document.getElementById("categoriaN").value;
  precio = document.getElementById("precioN").value;
  stock = document.getElementById("stockN").value;
  id = productos[productos.length-1].id+1;

  //console.log(nombre[0].charCodeAt())

  if(!nombre){
    document.getElementById("errorEmpyName").style.display = "block";
  }else{
    document.getElementById("errorEmpyName").style.display = "none";
    if(nombre[0].charCodeAt() >= 65 && nombre[0].charCodeAt() <=90){
      console.log("Paso primera mayuscula")
      for(let i=0; i<nombre.length; i++){
        if((nombre[i].charCodeAt() >= 65 && nombre[i].charCodeAt() <= 90) || (nombre[i].charCodeAt() >= 97 && nombre[i].charCodeAt() <= 122)){
          nameIsCorrect = true;
          console.log(nameIsCorrect);
        }else{
          nameIsCorrect = false;
          document.getElementById("errorOnlyChar").style.display = "block";
          console.log(nameIsCorrect);
          break
        }
      }
    }else{
      document.getElementById("errorUpperName").style.display = "block";
    }
    
  }

  if(nameIsCorrect){
    arr = 
    {
      id: id,
      nombre: nombre,
      descripcion: descripcion,
      categoria: categoria,
      precio: precio,
      stock: stock,
    }
    saveDataProduct(arr);
  }
}

const saveDataProduct = (arr) =>{
  productos.push(arr);
  cargarProductos();
  document.getElementById("addProductModal").close();
  document.getElementById("nombreN").value = "";
  document.getElementById("descripcionN").value = "";
  document.getElementById("categoriaN").value = "";
  document.getElementById("precioN").value = "";
  document.getElementById("stockN").value = "";
}

const handleCloseModal = () =>{
  document.getElementById("addProductModal").close();
  document.getElementById("nombreN").value = "";
  document.getElementById("descripcionN").value = "";
  document.getElementById("categoriaN").value = "";
  document.getElementById("precioN").value = "";
  document.getElementById("stockN").value = "";
}

const openModalDelete = (product) => {
  console.log(product)
  document.getElementById("modalDeleteProduct").showModal();
  document.getElementById("idDP").value = product.id;
  document.getElementById("nombreDP").value = product.nombre;
  document.getElementById("descripcionDP").value = product.descripcion;
  document.getElementById("categoriasDP").value = product.categoria;
  document.getElementById("preciokDP").value = product.precio;
  document.getElementById("stockDP").value = product.stock;
  productSelected = product.id;
}

const handleDeleteProduct = () =>{
  console.log(productSelected)
  let newData = productos.filter(p => p.id!==productSelected);
  productos = newData;
  cargarProductos();
  console.log(newData);
}

const closeModaleDeleteProduct = () =>{
  document.getElementById("modalDeleteProduct").close();
}