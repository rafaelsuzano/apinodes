const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql');



var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:'12345678',
    database: "cotacao"
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
            