import express from 'express';
import serverRender from '../serverRender';
let router = express.Router();

router.get('/', function(req, res) {
  return res.render('index', {
    content: serverRender() 
  });
});

export default router;
