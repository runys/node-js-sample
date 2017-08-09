// 1. Importar módulos
var express = require("express");
var bodyParser = require("body-parser");
// 2. Importar o módulo da nossa aplicação
var ListaDAO = require("./listaDAO");
// 3. Iniciar aplicação Express
var app = express();
// 4. Configurar método para ler a propriedade `body` da requisições
app.use(bodyParser.json());

// - Criar nova lista
app.post("/lista", function(request, response) {
    // Pega as informações provenientes da requisição
    var nome = request.body.nome;
    // Cria a nova lista
    var result = ListaDAO.criarLista(nome);

    response.status(200);
    response.json(result);
    response.end();
});

// - Renomear lista
app.put("/lista/:id_lista", function(request, response) {
    // Pega as informações provenientes da requisição
    var novoNome = request.body.nome;
    var idDaLista = request.params.id_lista;
    // Renomeia a lista
    var result = ListaDAO.renomearLista(idDaLista, novoNome);

    response.status(200);
    response.json(result);
    response.end();
});

// - Apagar lista
app.delete("/lista/:id_lista", function(request, response) {
    // Pega as informações provenientes da requisição
    var idDaLista = request.params.id_lista;
    // Apaga a lista com o identificador correspondente
    var result = ListaDAO.apagarLista(idDaLista);

    response.status(200);
    response.json(result);
    response.end();
});

// - Listar todas as listas
app.get("/lista", function(request, response) {
    response.status(200);
    response.json(ListaDAO.getListas());
    response.end();
});

// - Criar nova tarefa em uma lista
app.post("/lista/:id_lista", function(request, response) {
    // Pega as informações provenientes da requisição
    var idDaLista = request.params.id_lista;
    var descricaoDaTarefa = request.body.descricao;
    // Adiciona a nova tarefa na lista de tarefas
    var result = ListaDAO.novaTarefa(descricaoDaTarefa, idDaLista);

    response.status(200);
    response.json(result);
    response.end();
});

// - Alternar tarefa para completa ou não completa
app.put("/lista/:id_lista/tarefa/:id_tarefa", function(request, response) {
    // Pega as informações provenientes da requisição
    var idDaLista = request.params.id_lista;
    var idDaTarefa = request.params.id_tarefa;
    // Alterna o estado da tarefa
    var result = ListaDAO.toggleTarefa(idDaLista, idDaTarefa);

    response.status(200);
    response.json(result);
    response.end();
});

// - Apagar tarefa em uma lista
app.delete("/lista/:id_lista/tarefa/:id_tarefa", function(request, response) {
    // Pega as informações provenientes da requisição
    var idDaLista = request.params.id_lista;
    var idDaTarefa = request.params.id_tarefa;
    // Apaga a tarefa da lista de tarefas
    var result = ListaDAO.apagarTarefa(idDaLista, idDaTarefa);

    response.status(200);
    response.json(result);
    response.end();
});

// - Listar tarefas de uma lista
app.get("/lista/:id_lista/tarefa", function(request, response) {
    // Pegar o identificador da lista na rota
    var idDaLista = request.params.id_lista;

    response.status(200);
    response.json(ListaDAO.getTarefas(idDaLista));
    response.end();
});

// 5. Associar nossa API com a porta 8080
app.listen(8080);