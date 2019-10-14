let Task = require('mongoose').model('Task');
let errorHandler = require('./helpers/error-Handler');



module.exports = {
    index(req, res){
        Task.find(req.body)
        .then(tasks=>res.json(tasks)) //spits out json
        .catch(errorHandler.bind(res));
    },
    // CREATE
    create(req,res){
        Task.create(req.body)
        .then(task => res.json(task))
        .catch(errorHandler.bind(res));
    },
    // SHOW
    show(req,res){
        Task.findById(req.params.id)
        .then(task => res.json(task))
        .catch(errorHandler.bind(res));
    },
    // update
    update(req, res) {
      Task.findOneAndUpdate({_id: req.params.id}, req.body, { new: true })
        .then(task => res.json(task))
        .catch(errorHandler.bind(res));
    },
    // DESTROY
    destroy(req,res){
        Task.findOneAndDelete({_id:req.params.id})
        .then(result => res.json(result))
        .catch(errorHandler.bind(res));
    }
};
