import  express  from "express";

const server = express();

server.listen(8080, () => {
    console.log("Servidor rodando na porta 8080")
})