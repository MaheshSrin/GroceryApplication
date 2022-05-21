let startindex = '';
if (item == 1) {
  startindex = 0;
} else {
  startindex = (item - 1) * 8;
}
var express = require('express');
const groceryData = require('./data.json');
var app = express();
let item = 0;

app.get('/:items', (req, res) => {
  let d = [];
  console.log('--------------------------');
  res.header('Access-Control-Allow-Origin', '*');
  item = req.params.items;
  let startindex = '';
  if (item == 1) {
    startindex = 0;
  } else {
    startindex = (item - 1) * 8;
  }
  console.log(item);
  for (let i = startindex; i < startindex + 8; i++) {
    console.log(groceryData[i]);
    console.log('---------------' + groceryData[i]);
    if (groceryData[i] == 'undefined') {
      console.log(groceryData[i]);
    } else {
      d.push(groceryData[i]);
    }
  }
  console.log(d);

  return res.json(d);
});

app.listen(3001);
