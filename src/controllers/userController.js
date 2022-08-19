import {database} from '../database.js'

const userController = {
   criarUsuario   (request, response) {
        const { name } = request.body
    
        if(name.length < 1){
            return response.status(403).json({mensagem: 'Não é possível criar usuário sem um nome'})
        }
    
        database.push(name)
        return response.status(201).json({'mensagem': `Usuário ${name} criado`})
    },

    listarUsuario(request,response) {
        return response.status(200).json(database)
    }

}

export { userController }