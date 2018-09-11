const Express= require('express');
const Router = Express.Router();
const Task = require('../models/lista');

Router.get('/',(req,res)=>{
res.render('index')
});


Router.get('/Registro', async (req,res)=>{
        const tasks = await Task.find();
        console.log(tasks);
        res.render('Registros',{
            tasks:tasks
        });
    });
    
Router.post('/add', async (req, res)=>{
const task = new Task(req.body);
await task.save();
res.redirect('/Registro');
});
    
Router.get('/delete/:id', async (req,res)=>{
  const { id }= req.params;
  await Task.remove({_id: id});
  res.redirect('/Registro');
});

Router.get('/edit/:id', async (req,res)=>{
    const { id }= req.params;
    const task = await Task.findById(id);
    res.render('edit',{
        task
    });

    Router.post('/edit/:id', async(req, res)=>{
        const { id }= req.params;
        await Task.update({_id:id}, req.body);
        res.redirect('/Registro');
    });
});
module.exports = Router;