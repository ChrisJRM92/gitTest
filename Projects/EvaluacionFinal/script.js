let students = [
  {id: 1122334455, name: "Christian Romero", mail: "cjromerom28@gmail.com"},
  {id: 1234567891, name: "Sofia Romero", mail: "sofi@gmail.com"},
  {id: 1234845456, name: "Andre Velez", mail: "andrea@gmail.com"}
];

let studenSelected = 0;

//----------Get Students----------
const getStudents = () =>{
  document.getElementById("tableBody").innerHTML = students.map(std => `
      <tr>
              <td>${std.id}</td>
              <td>${std.name}</td>
              <td>${std.mail}</td>
              <td>
                <div style="display: flex; gap: 5px;">
                    <button onClick='openModalChanges(${JSON.stringify(std)})' >Editar</button>
                    <button onClick='openModalDelete(${JSON.stringify(std)})' >Eliinar</button>
                </div>
              </td>
            </tr>
    `).join(" ")
};


//----------Delete students--------
const openModalDelete = (student) =>{
  document.getElementById("modalDeleteStudent").showModal();
  document.getElementById("id").value = student.id;
  document.getElementById("name").value = student.name;
  document.getElementById("mail").value = student.mail;
  studenSelected = student.id;
};
const closeModaleDeleteStudent = () =>{
  document.getElementById("modalDeleteStudent").close();
};
const handleDeleteStudent = () =>{
  console.log(studenSelected);
  let newData = students.filter(std => std.id !== studenSelected);
  students = newData;
  getStudents();
  closeModaleDeleteStudent()
};



//-----------Add Students----------------
const handleOpenAddStudent = () =>{
  document.getElementById("modalAddStudent").showModal();
  document.getElementById("errorExistId").style.display = "none";
  document.getElementById("errorEmpyId").style.display = "none";
  document.getElementById("errorNameEmpy").style.display = "none";
  document.getElementById("errorUpperName").style.display = "none";
  document.getElementById("errorMail").style.display = "none";

  document.getElementById("idAddStd").value = "";
  document.getElementById("nameAddStd").value = "";
  document.getElementById("mailAddStd").value = "";
}
const handleAddStudent = () =>{

  let idIsCorrect = false;
  let nameIsCorrect = false;
  let idExist = false;

  let id = document.getElementById("idAddStd").value;
  let name = document.getElementById("nameAddStd").value;
  let mail = document.getElementById("mailAddStd").value;

  console.log(name)

  idIsCorrect = existValue(id);
  nameIsCorrect = existValue(name);
  console.log(idIsCorrect);
  console.log(nameIsCorrect);


  if(idIsCorrect){
    document.getElementById("errorEmpyId").style.display = "none";
    idExist = idExistFunct(id);
    if(idExist){
      document.getElementById("errorExistId").style.display = "block";
    }else{
      document.getElementById("errorExistId").style.display = "none";
    }
  }else{
    document.getElementById("errorEmpyId").style.display = "block";
    document.getElementById("errorNameEmpy").style.display = "block";
    document.getElementById("errorMail").style.display = "block";
  }
  
  
  if(!idExist && nameIsCorrect){
    students.push({
      id: id,
      name: name,
      mail: mail
    })
    getStudents();
    handleCloseModalAddStudent();
    studenSelected = 0;
  }
  


}
const handleCloseModalAddStudent = () => {
  document.getElementById("modalAddStudent").close();
}


//---------Modify Students----------------
const openModalChanges = (student) =>{
  document.getElementById("modalEditStudent").showModal();
  document.getElementById("errorExistIdEdit").style.display = "none";
  document.getElementById("errorEmpyIdEdit").style.display = "none";
  document.getElementById("errorNameEmpyEdit").style.display = "none";
  document.getElementById("errorUpperNameEdit").style.display = "none";
  document.getElementById("errorMailEdit").style.display = "none";

  document.getElementById("idEditStd").value = student.id;
  document.getElementById("nameEditStd").value = student.name;
  document.getElementById("mailEditStd").value = student.mail;

  studenSelected = student.id;
}
const handleSaveDataStudent = () =>{
  const id = document.getElementById("idEditStd").value;
  const name = document.getElementById("nameEditStd").value;
  const mail = document.getElementById("mailEditStd").value;

  let mailIsCorrect = existValue(mail);
  let nameIsCorrect = existValue(name);

  if(!nameIsCorrect){
    document.getElementById("errorNameEmpyEdit").style.display = "block"
  }

  if (nameIsCorrect && mailIsCorrect) {
    for (let i = 0; i < students.length; i++) {
      if (students[i].id == studenSelected) {
        console.log("Encontrado")
        students[i].id = document.getElementById("idEditStd").value;
        students[i].name = document.getElementById("nameEditStd").value;
        break
      }
    }
  }
  getStudents();
  handleCloseModalEdit();
  studenSelected = 0;
}
const handleCloseModalEdit = () =>{
  document.getElementById("modalEditStudent").close();
}



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
      (value[i].charCodeAt() == 250)) {
      isCorrect = true;
    } else {
      isCorrect = false;
      break
    }
  }
  return isCorrect;
}
const idExistFunct = (id) =>{
  for(let i=0; i<students.length; i++)
    if(students[i].id == id){
      return true
    }
}