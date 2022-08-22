import  express  from "express";


const server = express();
server.use(express.json())


server.listen(8080, () => {
    console.log("Servidor rodando na porta 8080")
})

