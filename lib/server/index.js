import express from 'express';

const PORT = 3000;
let app = express();

app.set('view engine', 'pug');
app.use(express.static('assets'));

app.get('/', (request, response) => {
  response.render('index', { content: 'YEY!!!', title: 'WIP' });
});

app.listen(PORT, () => {
  console.log(`Postie being served @ http://localhost:${PORT}`);
});
