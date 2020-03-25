const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    // async delete(request,response){
    //     const deletadas = await connection('ongs').delete('where id=null');
    //     return response.json(deletadas);
    // },
    
    async index(request,response){
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    },

    async create (request, response){
        const {name, email, whatsapp, city, uf} = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            name, 
            email, 
            whatsapp, 
            city, 
            uf,
        });

        return response.json({id});
    }
};