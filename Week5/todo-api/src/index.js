const hapi = require("@hapi/hapi");

const {routes} = require("./routes");


(async () => {
    const server = hapi.server({
        host: processenv.NODE_ENV ='production'? 'localhost' : '0.0.0.0',
        port: 5000
    });

    server.route(routes)

    await server.start();
    console.log(`Server sedang jalan di ${server.info.uri}`);
})();