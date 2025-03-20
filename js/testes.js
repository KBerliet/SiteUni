// validacao.js
function validacaoFormulario(email, nome, perfil) {
  if (email == "") {
    return "email e requerido";
  }

  if (nome == "") {
    return "Nome e requerido";
  }

  if (perfil == "") {
    return "Digite uma perfil correto.";
  }

  return true;
}

function adicionar(email, nome, perfil, listausuarios) {
  if (validacaoFormulario(email, nome, perfil) == true) {
    listausuarios.push({
      email: email,
      nome: nome,
      perfil: perfil,
    });
  }
  return listausuarios;
}

module.exports = {
  validacaoFormulario,
  adicionar,
};
