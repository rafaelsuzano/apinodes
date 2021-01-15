var http = require('http');


const hostname = '142.47.102.214';
const port = 3000;

var config = {
    hostname: hostname,
    port: port,
    method: 'post',
    path: '/produtos',
    headers: {
        'accept': 'application/json'
    }
};





const express = require('express')
const app = express()
const port = 3306
const mysql = require('mysql');



var connection = mysql.createConnection({
    host:"prd-cotacao.mysql.uhserver.com",
    user:"rsc1985",
    password:'Suz@no3001',
    database: "prd-cotacao"
});



connection.connect();
const dados = {nome:"Rafael", idade:35}
const dados1 = {nome:"Suzano", idade:35}

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


app.get('/api/v1', (req, res) => {
    res.json(
        { dados}
    )
  }
     )


app.get('/api/v2', (req, res) => {
res.json(
{ dados1}
        )
      }
         )     




app.get('/api/v3', (req, res) => {
res.json(
{ dados1}
        )
      }

      )     

app.get('/api/cotacao', (req, res) => {
    connection.query(' select * from cotacao_full_dolar', function(err, rows, fields) {
        if (err) throw err;
        res.json({cotacao:rows});

      });
      
      

}
                 ) ;        
            
