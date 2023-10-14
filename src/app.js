  import express from "express";
  import connectDataBase from "./config/dbConnect.js";
  import foto from "./models/foto.js";

  const conexao = await connectDataBase();

  conexao.on("error", (erro)=>{
    console.log("Erro de conexão: ", erro);
  });

  conexao.once("open", ()=>{
    console.log("Conexão com o banco realizada devidamente!")
  });

  const app = express();
  app.use(express.json())
  /*const foto = [
      {id: 1, "titulo": "Casamento"},
      {id: 2, "titulo": "15 anos"},
      {id: 3, "titulo": "Pre wedding"}
    ]
  */
    app.get('/', (req, res) => {
      res.status(200).send('OlharCam');
    }) 
    
    app.get('/foto', async(req, res)=> {
      const listaFoto = await foto.find({});
        res.status(200).json(listaFoto);
    })

   /* app.post('/foto', (req, res) => {
      foto.push(req.body);
      res.status(201).send('Vaga cadastrada com Sucesso!')
    })

    app.put('/foto/:id', (req, res) => {
      let index = buscaVaga(req.params.id);
      foto[index].titulo = req.body.titulo;
      res.json(foto);
    })
    
    app.get('/foto/:id', (req, res)=>{
      const index = buscaVaga(req.params.id);
      res.status(201).json(foto[index]);

    })

    app.delete('/foto/:id',(req, res)=>{
      const index = buscaVaga(req.params.id);
      if (index !== -1) {
        foto.splice(index, 1); // Remove 1 elemento a partir da posição index
        res.status(204).send(); // 204 significa "No Content" (sucesso, mas sem conteúdo)
      } else {
        res.status(404).send('Vaga não encontrada'); // Retorna um erro se o ID não for encontrado
      }
    })
    

    function buscaVaga(id) {
      return foto.findIndex(foto => foto.id == id)
    }*/
    export default app 

        

