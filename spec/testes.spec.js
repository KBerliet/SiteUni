// validacao.spec.js
const {
  calcularValorTotal,
  validacaoFormulario,
  adicionar,
} = require("../js/testes");

describe("Testes de validação do formulário", function () {
  it("deve retornar mensagem de erro se o nome estiver vazio", function () {
    expect(validacaoFormulario("", "10", "100.00", "123")).toBe(
      "Nome e requerido"
    );
  });

  it("deve retornar mensagem de erro se o nome estiver vazio", function () {
    expect(validacaoFormulario("", "10", "100.00", "123")).toBe(
      "Nome e requerido"
    );
  });
});

describe("Testes de cálculo do valor total", function () {
  it("deve calcular o valor total dos usuarios como uma string", function () {
    const mockListausuarios = [
      { preco: "10.00", perfil: "2" },
      { preco: "5.00", perfil: "1" },
    ];

    const valorTotal = calcularValorTotal(mockListausuarios);
    expect(valorTotal).toBe("25.00"); // Isso verifica se o valor retornado é a string '25.00'
  });
});

describe("Testes da função adicionar", function () {
  it("deve adicionar um usuario à lista", function () {
    const mockListausuarios = [];
    const novocurso = {
      nome: "usuario Teste",
      perfil: "1",
      preco: "10.00",
      codigoindent: "123",
    };

    const listaAtualizada = adicionar(
      novocurso.nome,
      novocurso.perfil,
      novocurso.preco,
      novocurso.codigoindent,
      mockListausuarios
    );
    expect(listaAtualizada).toContain(jasmine.objectContaining(novocurso));
  });

  // Essa parte contem erro de proposito
  it("deve adicionar um usuario à lista", function () {
    const mockListausuarios = [];
    const novocurso = {
      nome: "",
      perfil: "1",
      preco: "10.00",
      codigoindent: "123",
    };

    const listaAtualizada = adicionar(
      novocurso.nome,
      novocurso.perfil,
      novocurso.preco,
      novocurso.codigoindent,
      mockListausuarios
    );
    expect(listaAtualizada).toContain(jasmine.objectContaining(novocurso));
  });

  it("deve adicionar um usuario à lista", function () {
    const mockListausuarios = [];
    const novocurso = {
      nome: "usuario Teste2",
      perfil: "1",
      preco: "10.00",
      codigoindent: "1234",
    };

    const listaAtualizada = adicionar(
      novocurso.nome,
      novocurso.perfil,
      novocurso.preco,
      novocurso.codigoindent,
      mockListausuarios
    );
    expect(listaAtualizada).toContain(jasmine.objectContaining(novocurso));
  });
});

// products.spec.js
// describe('Display products in the DOM', function() {
//     let tbody;

//     beforeEach(function() {
//         tbody = jasmine.createSpyObj('tbody', ['innerHTML']);
//         spyOn(document, 'querySelector').and.returnValue(tbody);
//     });

//     it('deve inserir HTML no tbody', async function() {
//         const mockProducts = [{
//             id: 1,
//             title: "usuario Teste",
//             category: "Categoria Teste",
//             price: 9.99,
//             image: "url-da-imagem"
//         },]; // Um array simulado de usuarios

//         await displayProducts(mockProducts);

//         expect(tbody.innerHTML).toEqual(jasmine.any(String));
//     });
// });
