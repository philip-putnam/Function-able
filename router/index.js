import express from 'express';
import serverRender from '../serverRender';
let router = express.Router();

router.get('/', (req, res) => {
  return res.render('index', {
    content: serverRender('/')
  });
});

router.get('/register', (req, res) => {
  return res.render('index', {
    content: serverRender('register')
  });
});


export default router;
