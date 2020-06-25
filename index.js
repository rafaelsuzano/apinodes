const express = require('express');
const app = express();         
const bodyParser = require('body-parser');
const port = 3000; //porta padrão


const mysql = require('mysql');


function execSQLQuery(sqlQry, res){
    const connection = mysql.createConnection({
      host     : 'localhost',
      port     : 5432,
      user     : 'root',
      password : '12345678',
      database : 'cotacao'
      
    });
  
    connection.query(sqlQry, function(error, results, fields){
        if(error) 
          res.json(error);
        else
          res.json(result);
        connection.end();
        console.log('executou!');
    });
  }



  

//configurando o body parser para pegar POSTS mais tarde
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//definindo as rotas


//inicia o servidor
app.listen(port);
console.log('API funcionando!');





const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
app.use('/', router);



router.get('/cotacao', (req, res) =>{
    execSQLQuery('select  * from cotacao_last7days_dolar ', res);
})

