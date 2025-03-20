// Validacao do formulario
function validacaoFormulario() {
  var email = document.getElementById("email").value;
  var nome = document.getElementById("nome").value;
  var perfil = document.getElementById("perfil").value;

  if (email == "") {
    alert("Digite um email correto.");
    return false;
  }

  if (nome == "") {
    alert("Nome e requerido");
    return false;
  }

  if (perfil == "") {
    alert("Digite uma perfil correta.");
    return false;
  }

  return true;
}

// Funcao para mostrar todos os dados.

function mostrarDados() {
  var listausuarios;
  if (localStorage.getItem("listausuarios") == null) {
    listausuarios = [];
  } else {
    listausuarios = JSON.parse(localStorage.getItem("listausuarios"));
  }

  var html = "";

  listausuarios.forEach(function (element, index) {
    html += "<tr>";
    html += "<td>" + element.email + "</td>";
    html += "<td>" + element.nome + "</td>";
    html += "<td>" + element.perfil + "</td>";
    html +=
      '<td><button onclick="deleteData(' +
      index +
      ')" class="btn btn-danger">Deletar</button><button onclick="updateData(' +
      index +
      ')" class="btn btn-warning m-2">Editar</button></td>';
    html += "</tr>";
  });

  document.querySelector("#crudTable tbody").innerHTML = html;
}
// Carrega todos os dados quando o documento ou pagina e carregada.

document.onload = mostrarDados();

// funcao para adicionar usuarios

function adicionar() {
  if (validacaoFormulario() == true) {
    var email = document.getElementById("email").value;
    var nome = document.getElementById("nome").value;
    var perfil = document.getElementById("perfil").value;

    var listausuarios;
    if (localStorage.getItem("listausuarios") == null) {
      listausuarios = [];
    } else {
      listausuarios = JSON.parse(localStorage.getItem("listausuarios"));
    }

    listausuarios.push({
      email: email,
      nome: nome,
      perfil: perfil,
    });

    localStorage.setItem("listausuarios", JSON.stringify(listausuarios));
    mostrarDados();
    document.getElementById("Email").value = "";
    document.getElementById("Nome").value = "";
    document.getElementById("Perfil").value = "";
  }
}

// Funcao para deletar usuarios

function deleteData(index) {
  var listausuarios;
  if (localStorage.getItem("listausuarios") == null) {
    listausuarios = [];
  } else {
    listausuarios = JSON.parse(localStorage.getItem("listausuarios"));
  }

  listausuarios.splice(index, 1);
  localStorage.setItem("listausuarios", JSON.stringify(listausuarios));
  mostrarDados();
}

// Funcao para editar usuarios

function updateData(index) {
  document.getElementById("Submit").style.display = "none";
  document.getElementById("Update").style.display = "block";

  var listausuarios;
  if (localStorage.getItem("listausuarios") == null) {
    listausuarios = [];
  } else {
    listausuarios = JSON.parse(localStorage.getItem("listausuarios"));
  }
  document.getElementById("email").value = listausuarios[index].email;
  document.getElementById("nome").value = listausuarios[index].nome;
  document.getElementById("perfil").value = listausuarios[index].perfil;
  listausuarios[index].codigoindent;

  document.querySelector("#Update").onclick = function () {
    if (validacaoFormulario() == true) {
      listausuarios[index].email = document.getElementById("email").value;
      listausuarios[index].nome = document.getElementById("nome").value;
      listausuarios[index].perfil = document.getElementById("perfil").value;

      localStorage.setItem("listausuarios", JSON.stringify(listausuarios));
      mostrarDados();

      document.getElementById("email").value = "";
      document.getElementById("nome").value = "";
      document.getElementById("perfil").value = "";

      document.getElementById("Submit").style.display = "block";
      document.getElementById("Update").style.display = "none";
    }
  };
}
