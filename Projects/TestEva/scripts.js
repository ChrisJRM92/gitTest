// Lista base de productos
let globalIdProducts = 0;
let productSelected = 0;

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

//Tabla y acciones de productos
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
//Listar categorias
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

//CRUD
//-----------Leer productos-----------------
const totalBodega = () => {
  let totalProdutos = 0;
  let totalStock = 0;
  let valorTotalInventario = 0;
  for (let i = 0; i < productos.length; i++) {
    totalProdutos = i + 1;
    totalStock += parseInt(productos[i].stock);
    valorTotalInventario += parseFloat(productos[i].precio * productos[i].stock)
  }
  document.getElementById("totalProductos").innerText = totalProdutos;
  document.getElementById("stockTotal").innerText = totalStock;
  document.getElementById("valorInventario").innerText = valorTotalInventario;
}
//------------------------------------------

//-----------------Modal crear producto------
const handleOpenModalProduct = () => {
  console.log("Agregar producto")
  document.getElementById("addProductModal").showModal();
  document.getElementById("errorEmpyName").style.display = "none";
  document.getElementById("errorUpperName").style.display = "none";
  document.getElementById("errorOnlyChar").style.display = "none";

  document.getElementById("errorEmpyDesc").style.display = "none";
  document.getElementById("errorUpperDesc").style.display = "none";
  document.getElementById("errorOnlyCharDesc").style.display = "none";

  document.getElementById("errorEmpyPrice").style.display = "none";

  document.getElementById("errorEmpyStock").style.display = "none";
  listCategories();
}
const saveNewProduct = () => {
  let arr = {};
  let id;
  let nombre;
  let descripcion;
  let categoria;
  let precio;
  let stock;

  let nameIsCorrect = false;
  let descriptionIsCorrect = false;
  let priceIsCorrect = false;
  let stockIsCorrect = false;

  nombre = document.getElementById("nombreN").value;
  descripcion = document.getElementById("descripcionN").value;
  categoria = document.getElementById("categoriaN").value;
  precio = document.getElementById("precioN").value;
  stock = document.getElementById("stockN").value;
  id = (productos.length == 0 ? 1 : productos[productos.length - 1].id + 1);

  //console.log(nombre[0].charCodeAt())
  nameIsCorrect = existValue(nombre);
  descriptionIsCorrect = existValue(descripcion);
  priceIsCorrect = existValue(precio);
  stockIsCorrect = existValue(stock);

  //Validacion nombre
  if (!nameIsCorrect) {
    document.getElementById("errorEmpyName").style.display = "block";
    document.getElementById("errorUpperName").style.display = "block";
    document.getElementById("errorOnlyChar").style.display = "block";

  } else {
    document.getElementById("errorEmpyName").style.display = "none"
    nameIsCorrect = isUpperCase(nombre);
    if (nameIsCorrect) {
      document.getElementById("errorUpperName").style.display = "none"
      nameIsCorrect = noEspecialChar(nombre);
      if (nameIsCorrect) {
        document.getElementById("errorOnlyChar").style.display = "none"
      } else {
        document.getElementById("errorOnlyChar").style.display = "block"
      }
    } else {
      document.getElementById("errorUpperName").style.display = "block"
    }
  }


  //Validacion descripcion
  if (!descriptionIsCorrect) {
    document.getElementById("errorEmpyDesc").style.display = "block";
    document.getElementById("errorUpperDesc").style.display = "block";
    document.getElementById("errorOnlyCharDesc").style.display = "block";

  } else {
    document.getElementById("errorEmpyDesc").style.display = "none"
    descriptionIsCorrect = isUpperCase(descripcion);
    if (descriptionIsCorrect) {
      document.getElementById("errorUpperDesc").style.display = "none"
      descriptionIsCorrect = noEspecialChar(descripcion);
      if (descriptionIsCorrect) {
        document.getElementById("errorOnlyCharDesc").style.display = "none"
      } else {
        document.getElementById("errorOnlyCharDesc").style.display = "block"
      }
    } else {
      document.getElementById("errorUpperDesc").style.display = "block"
    }
  }

  //Validacion price
  if (!priceIsCorrect) {
    document.getElementById("errorEmpyPrice").style.display = "block";

  } else {
    document.getElementById("errorEmpyPrice").style.display = "none";
  }

  if (!stockIsCorrect) {
    document.getElementById("errorEmpyStock").style.display = "block";

  } else {
    document.getElementById("errorEmpyStock").style.display = "none";
  }

  if (nameIsCorrect && descriptionIsCorrect && priceIsCorrect && stockIsCorrect) {
    arr =
    {
      id: id,
      nombre: nombre.trim(),
      descripcion: descripcion.trim(),
      categoria: categoria,
      precio: precio,
      stock: stock,
    }
    saveDataProduct(arr);
  }
}
const saveDataProduct = (arr) => {
  productos.push(arr);
  cargarProductos();
  document.getElementById("addProductModal").close();
  document.getElementById("nombreN").value = "";
  document.getElementById("descripcionN").value = "";
  document.getElementById("categoriaN").value = "";
  document.getElementById("precioN").value = "";
  document.getElementById("stockN").value = "";
}
const handleCloseModal = () => {
  document.getElementById("addProductModal").close();
  document.getElementById("nombreN").value = "";
  document.getElementById("descripcionN").value = "";
  document.getElementById("categoriaN").value = "";
  document.getElementById("precioN").value = "";
  document.getElementById("stockN").value = "";
}
//-------------------------------------------


//----------Modal actualizar productos------
const openModalChanges = (product) => {
  console.log(product)

  document.getElementById("errorEmpyNameEdit").style.display = "none";
  document.getElementById("errorUpperNameEdit").style.display = "none";
  document.getElementById("errorOnlyCharEdit").style.display = "none";

  document.getElementById("errorEmpyDescEdit").style.display = "none";
  document.getElementById("errorUpperDescEdit").style.display = "none";
  document.getElementById("errorOnlyCharDescEdit").style.display = "none";

  document.getElementById("errorEmpyPriceEdit").style.display = "none";

  document.getElementById("errorEmpyStockEdit").style.display = "none";

  //--------------------
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
const closeModalEdit = () => {
  document.getElementById("modalChangeData").close();
}
const saveDataModalProduct = () => {
  console.log(productSelected)
  let nameIsCorrect = false;
  let descriptionIsCorrect = false;
  let priceIsCorrect = false;
  let stockIsCorrect = false;

  const nombre = document.getElementById("nombre").value;
  const descripcion = document.getElementById("descripcion").value;
  const precio = document.getElementById("precio").value;
  const stock = document.getElementById("stock").value;

  nameIsCorrect = existValue(nombre);
  descriptionIsCorrect = existValue(descripcion);
  priceIsCorrect = existValue(precio);
  stockIsCorrect = existValue(stock);


  //Validacion nombre
  if (!nameIsCorrect) {
    document.getElementById("errorEmpyNameEdit").style.display = "block";
    document.getElementById("errorUpperNameEdit").style.display = "block";
    document.getElementById("errorOnlyCharEdit").style.display = "block";

  } else {
    document.getElementById("errorEmpyNameEdit").style.display = "none"
    nameIsCorrect = isUpperCase(nombre);
    if (nameIsCorrect) {
      document.getElementById("errorUpperNameEdit").style.display = "none"
      nameIsCorrect = noEspecialChar(nombre);
      if (nameIsCorrect) {
        document.getElementById("errorOnlyCharEdit").style.display = "none"
      } else {
        document.getElementById("errorOnlyCharEdit").style.display = "block"
      }
    } else {
      document.getElementById("errorUpperNameEdit").style.display = "block"
    }
  }


  //Validacion descripcion
  if (!descriptionIsCorrect) {
    document.getElementById("errorEmpyDescEdit").style.display = "block";
    document.getElementById("errorUpperDescEdit").style.display = "block";
    document.getElementById("errorOnlyCharDescEdit").style.display = "block";

  } else {
    document.getElementById("errorEmpyDescEdit").style.display = "none"
    descriptionIsCorrect = isUpperCase(descripcion);
    if (descriptionIsCorrect) {
      document.getElementById("errorUpperDescEdit").style.display = "none"
      descriptionIsCorrect = noEspecialChar(descripcion);
      if (descriptionIsCorrect) {
        document.getElementById("errorOnlyCharDescEdit").style.display = "none"
      } else {
        document.getElementById("errorOnlyCharDescEdit").style.display = "block"
      }
    } else {
      document.getElementById("errorUpperDescEdit").style.display = "block"
    }
  }

  //Validacion price
  if (!priceIsCorrect) {
    document.getElementById("errorEmpyPriceEdit").style.display = "block";

  } else {
    document.getElementById("errorEmpyPriceEdit").style.display = "none";
  }

  if (!stockIsCorrect) {
    document.getElementById("errorEmpyStockEdit").style.display = "block";

  } else {
    document.getElementById("errorEmpyStockEdit").style.display = "none";
  }

  if (nameIsCorrect && descriptionIsCorrect && priceIsCorrect && stockIsCorrect) {
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

}
//-------------------------------------------


//------------Modal eliminar producto--------
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
const handleDeleteProduct = () => {
  console.log(productSelected)
  let newData = productos.filter(p => p.id !== productSelected);
  productos = newData;
  cargarProductos();
  console.log(newData);
  closeModaleDeleteProduct()
}
const closeModaleDeleteProduct = () => {
  document.getElementById("modalDeleteProduct").close();
}
//-------------------------------------------


//----------Funciones reutilizables----------
const existValue = (value) => {
  if (value) {
    return true;
  } else {
    return false;
  }
}
const isUpperCase = (value) => {
  if (value[0].charCodeAt() >= 65 && value[0].charCodeAt() <= 90) {
    return true;
  } else {
    return false;
  }
}
const noEspecialChar = (value) => {
  let isCorrect = false;
  for (let i = 0; i < value.length; i++) {
    if ((value[i].charCodeAt() >= 65 && value[i].charCodeAt() <= 90) || 
    (value[i].charCodeAt() >= 97 && value[i].charCodeAt() <= 122) || 
    (value[i].charCodeAt() == 32) || 
    (value[i].charCodeAt() == 225) ||
    (value[i].charCodeAt() == 233) ||
    (value[i].charCodeAt() == 237) ||
    (value[i].charCodeAt() == 243) ||
    (value[i].charCodeAt() == 250)){
      isCorrect = true;
    } else {
      isCorrect = false;
      break
    }
  }
  return isCorrect;
}
//------------------------------------------

//*****************************************************************
//------------Nueva categoria ---------------
const handleOpenModalCategory = () =>{
  document.getElementById("modalAddCategory").showModal();
}

const handleCloseModalCategory = () =>{
  document.getElementById("modalAddCategory").close();
}
//-------------------------------------------

//-------------Listar categorias-------------
const getCategories = () =>{
  document.getElementById("dataBodyCategory").innerHTML = categorias.map(c => `
    <tr>
      <td>1</td>
      <td>Ropa</td>
      <td>Descripcion corta</td>
      <td style="display: flex; gap: 5px; justify-content: center;">
        <button style="width: 100px;" onclick="">Editar</button>
        <button style="width: 100px;" onclick="">Eliminar</button>
      </td>
    </tr>
    `).join(" ")
}