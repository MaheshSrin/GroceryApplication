// var express = require("express");
// const groceryData = require("./data.json");
// var app = express()
// const cors = require( 'cors' );
// app.use( cors() );

// console.log(groceryData)
// app.get('/', (req, res) => {
//     return res.json(groceryData);
// });

// app.listen(3001)

var express = require('express');
const groceryData = require('./data.json');
var app = express();
let item = 0;

app.get('/:items', (req, res) => {
  let d = [];
//   console.log('--------------------------');
  res.header('Access-Control-Allow-Origin', '*');
  item = req.params.items;
//   console.log(item);
//   for (let i = item; i <= 8 * item; i++) {
//     if (groceryData[i * item] == 'undefined') {
//       console.log('*',groceryData[i]);
//     } else {
//       d.push(groceryData[i * item]);
//     }
//   }
  
//   console.log(d);

let startindex = '';
    if (item == 1){
        startindex = ((item-1)*8)+1
    }else{
        startindex =item
    }
    item = req.params.items
    console.log(item)
    for (let i =startindex; i<startindex+8; i++){
        if (groceryData[i*item] == 'undefined'){
            console.log(groceryData[i*item])
        }
        else{
            d.push(groceryData[i*item])
        }       
        
    }


  return res.json(d);
});

app.listen(3001);
