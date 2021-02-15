var http = require('http');





var config = {
    hostname: 'localhost',
    port: 3000,
    method: 'post',
    path: '/produtos',
    headers: {
        'accept': 'application/json'
    }
};





const express = require('express')
const app = express()

const mysql = require('mysql');



var connection = mysql.createConnection({
    host:"localhost",
	port:"3385",
    user:"root",
    password:'12345678',
    database: "prd_cotacao"
	
});


connection.connect();
const dados = {nome:"Rafael", idade:35}
const dados1 = {nome:"Suzano", idade:35}

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log(`Example app listening on port `))


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
            
