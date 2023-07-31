const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/save_form_data', (req, res) => {
  const formData = {
    name: req.body['contact-name'],
    phoneNumber: req.body['contact-pnumber'],
  };

  console.log(formData);

  const jsonData = JSON.stringify(formData) + '\n'; // Додаємо символ нового рядка

  // Дописуємо дані у файл "data.json"
  fs.appendFile('./api/data.json', jsonData, (err) => {
    if (err) {
      console.error('Помилка збереження даних:', err);
      res.status(500).send('Помилка збереження даних');
    } else {
      console.log('Дані успішно дописано у файл data.json');
      res.send('Дані успішно дописано');
    }
  });
});

app.listen(port, () => {
  console.log(`Сервер запущено на порту ${port}`);
});
