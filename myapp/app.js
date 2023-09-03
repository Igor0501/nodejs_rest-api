const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

// app.get('/contact', (req, res) => {
//   res.send('<h1>Contact page</h1>');
// });

app.get('/contact/:id', (req, res) => {
  res.send(`<h1>Contact</h1> Параметр: ${req.params.id}`);
});

app.use((req, res, next) => {
  console.log('Наше проміжне ПЗ');
  next();
});

app.use(express.urlencoded({ extended: false }));

app.patch('/user/:userid', (req, res) => {
  const id = req.params.userid;
  // виконуємо необхідні дії
});

<form action="/login" method="POST">
  <label for="email">Email</label>
  <input type="text" name="email" id="email" />
  <label for="password">Пароль</label>
  <input type="password" name="password" id="password" />
  <button type="submit">Увійти</button>
</form>

app.post('/login', (req, res, next) => {
  const { email, password } = req.body;
  // Виконуємо необхідні операції
});

{
  email: 'Значення, що було введено в поле input',
  password: 'Значення, що було введено в поле input'
}

app.use(express.json());

app.post('/login', (req, res, next) => {
  const { email, password } = req.body;
  // Виконуємо необхідні операції
});

const express = require('express');
const router = express.Router();

// визначимо домашній роутер
router.get('/', (req, res) => {
  res.send('Це головний роутер');
});

// визначимо роутер about
router.get('/about', (req, res) => {
  res.send('About');
});

module.exports = router;