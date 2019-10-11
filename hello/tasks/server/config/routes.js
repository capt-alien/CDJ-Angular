let tasks = require('./../controllers/tasks');

module.exports = function(app){
    app.get('/tasks/', tasks.index)
    // post
    app.post('/tasks/', tasks.create)
    // get one
    app.get('/tasks/:id', tasks.show)
    // update
    app.put('/tasks/:id', tasks.update)
    // delete
    app.delete('/tasks/:id', tasks.destroy)

}
