import  express  from "express";
import { routes } from './routes.js';

const server = express();
server.use(express.json())
server.use(routes)

server.listen(8080, () => {
    console.log("Servidor rodando na porta 8080")
})

