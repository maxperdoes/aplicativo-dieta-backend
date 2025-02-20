import {
    FastifyInstance,
    FastifyPluginOptions,
    FastifyRequest,
    FastifyReply
} from 'fastify';
import { CreateNutritionController }  from './controllers/CreateNutritionController';
export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){

    fastify.get("/teste", (Request: FastifyRequest, reply: FastifyReply) => {
        
        let responseText = "```json\n{\n  \"nome\": \"Max\",\n  \"sexo\": \"Masculino\",\n  \"idade\": 38,\n  \"altura\": \"undefined\",\n  \"peso\": 90,\n  \"objetivo\": \"Hipertrofia\",\n  \"refeicoes\": [\n    {\n      \"horario\": \"7:00\",\n      \"nome\": \"Cafe da manha\",\n      \"alimentos\": [\n        \"Aveia (50g)\",\n        \"Leite desnatado (200ml)\",\n        \"Banana (1 unidade)\",\n        \"Nozes (30g)\"\n      ]\n    },\n    {\n      \"horario\": \"10:00\",\n      \"nome\": \"Lanche da manha\",\n      \"alimentos\": [\n        \"Proteina de soro do leite (30g)\",\n        \"Frutas vermelhas (100g)\"\n      ]\n    },\n    {\n      \"horario\": \"13:00\",\n      \"nome\": \"Almoco\",\n      \"alimentos\": [\n        \"Arroz integral (150g)\",\n        \"Frango grelhado (200g)\",\n        \"Salada verde (150g)\",\n        \"Feijao (1 concha)\"\n      ]\n    },\n    {\n      \"horario\": \"16:00\",\n      \"nome\": \"Lanche da tarde\",\n      \"alimentos\": [\n        \"Sanduiche de peito de peru (2 fatias) com queijo branco (30g) e tomate\",\n        \"Iogurte desnatado (1 unidade)\"\n      ]\n    },\n    {\n      \"horario\": \"19:00\",\n      \"nome\": \"Janta\",\n      \"alimentos\": [\n        \"Batata doce (150g)\",\n        \"Carne magra (150g)\",\n        \"Brócolis (100g)\"\n      ]\n    },\n    {\n      \"horario\": \"21:00\",\n      \"nome\": \"Lanche antes de dormir\",\n      \"alimentos\": [\n        \"Caseina (30g)\",\n        \"Leite desnatado (100ml)\"\n      ]\n    }\n  ],\n  \"suplementos\": [\n    \"Creatina\",\n    \"Whey protein\",\n    \"BCAA\"\n  ]\n}\n``` "

        try{

            // Extrair o JSON
            let jsonString = responseText.replace(/```\w*\n/g, '').replace(/\n```/g, '').trim();

            let jsonObject = JSON.parse(jsonString)    

            return reply.send({ data: jsonObject});

        }catch(err){
            console.log(err)
        }
 })

 fastify.post("/create", async (Request: FastifyRequest, reply: FastifyReply) => {
    return new CreateNutritionController().handle(Request, reply)
 })

}
