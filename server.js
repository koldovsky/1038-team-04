const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.post('/post', (req, res) => {
  const data = req.body;
  console.log('Отримані дані з POST-запиту:', data);

  fs.appendFile(path.join(__dirname, 'api/data.txt'), JSON.stringify(data) + '\n', (err) => {
    if (err) {
      console.error('Помилка при збереженні даних:', err);
      res.status(500).send('Помилка при збереженні даних');
    } else {
      res.send('Дякую за ваш POST-запит!');
    }
  });
});

app.all('*', (req, res) => {
  res.status(404).send('Сторінку не знайдено');
});

app.listen(port, () => {
  console.log(`Сервер запущений на порті ${port}`);
});
