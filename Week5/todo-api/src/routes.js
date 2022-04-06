const { 
    addTodoHandler, 
    getAllTodoHandler, 
    getTodoByIdHandler, 
    updateTodoHandler, 
    deleteTodoHandler 
} = require("./handler");

const routes =[

{
    method: 'GET',
    path: '/',
    handler:(request,h) => 'Selamat datang di API Todo',
},
{
    method: 'POST',
    path: '/todos',
    handler: addTodoHandler,
},
{
    method: "GET",
    path: "/todos/{id}",
    handler: getTodoByIdHandler,
},

{
    method: 'GET',
    path: '/todos',
    handler: getAllTodoHandler,
},
{
    method: 'PUT',
    path: '/todos/{id}',
    handler: updateTodoHandler,
},

{
    method: 'DELETE',
    path: '/todos/{id}',
    handler: deleteTodoHandler,
},
]

module.exports = {routes};