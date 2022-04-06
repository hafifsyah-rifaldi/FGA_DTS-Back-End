const hapi = require("@hapi/hapi");
const nanoid = require("nanoid");
const todos = [];
(async () => {
    const server = hapi.server({
        host: 'localhost',
        port: 5000
    });

    server.route([
        {
            method: 'GET',
            path: '/',
            handler: (request,h) => {
            return 'Selamat datang di API Todo'
            }
        },
        {
            method: 'POST',
            path: '/todos',
            handler: (request,h) => {
               const { todo } = request.payload;
               const id = nanoid(16);
               const now = new Date().toISOString();

               todos.push({
                   id: id,
                   todo: todo,
                   status: false,
                   created_at: now,
                   updated_at: now
               });

               if(todos.findIndex(todo => todo.id === id) !== -1){
                    return h.response({
                        status:'success',
                        message: 'Berhasil menambahkan Todo item',
                        data: {
                            todoId: id
                        }
                    }).code(201);
               }

               return h.response({
                   status: 'fail',
                   message: 'Gagal menambahkan Todo Item'
               }).code(500);
            }
        },
        {
            method: "GET",
            path: "/todos/{id}",
            handler: (request,h) => {
                const { id } = request.params;
                const todo = todos.find(todo => todo.id === id);
                
                if(todo !== undefined){
                    return h.response({
                        status: 'success',
                        data: {
                            todo
                        }
                    }).code(200);
                }
                
                return h.response({
                    status: 'fail',
                    message: 'Todo item tidak ditemukan'
                }).code(404);
            }
        }
    ])

    await server.start();
    console.log(`Server sedang jalan di ${server.info.uri}`);
})();