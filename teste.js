var ListaDAO = require("./listaDAO");

var result;

// 1 - Criar Listas
result = ListaDAO.criarLista("Compras");
ListaDAO.criarLista("Presentes");
console.log("1: " + result.message);

// 2 - Renomear Lista
result = ListaDAO.renomearLista("lista-0", "Lista renomeada");
console.log("2: " + result.message);

// 3 - Apagar lista
result = ListaDAO.apagarLista("lista-1");
console.log("3: " + result.message);

// 4 - Listar todas as listas
console.log(ListaDAO.getListas());

// 5 - Criar nova tarefa em uma lista
result = ListaDAO.novaTarefa("Comprar leite", "lista-0");
console.log("5: " + result.message);

// 6 - Alternar tarefa para completa ou não completa
result = ListaDAO.toggleTarefa("lista-0", "tarefa-0");
console.log("6: " + result.message);

// 7 - Apagar tarefa em uma lista
ListaDAO.novaTarefa("Comprar carne", "lista-0");
result = ListaDAO.apagarTarefa("lista-0", "tarefa-1");
console.log("7: " + result.message);

// 8 - Listar tarefas de uma lista
console.log(ListaDAO.getTarefas("lista-0"));