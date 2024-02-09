const express = require('express');

const app = express();


app.use(express.json());
app.use(express.urlencoded());


//const bodyParser = require('body-parser');

let tasks = [{
    "id": 2,
    "title": "Create a new project",
    "description": "Create a new project using Magic",
    "completed": false
  }
];

//app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
//app.use(bodyParser.json());


/**
 * 
 * Task schema:

{
  "id": 2,
  "title": "Create a new project",
  "description": "Create a new project using Magic",
  "completed": false
}
Implement a RESTful API with the following endpoints:

GET /tasks: Retrieve all tasks.

GET /tasks/:id: Retrieve a single task by its ID.

POST /tasks: Create a new task.

PUT /tasks/:id: Update an existing task by its ID.

DELETE /tasks/:id: Delete a task by its ID.


 */

/**GET /tasks: Retrieve all tasks. */
app.get('/tasks' , (req,res) => {
    if(tasks) res.status(200).send(tasks);
})

/**GET /tasks/:id: Retrieve a single task by its ID. */
app.get('/tasks/:id' , (req,res) => {
    let id = req.params.id;
    let singleTask = tasks.find((task) => task.id == id);
    console.log(singleTask);
    res.status(200).send(singleTask);
})

/**POST /tasks:  */
app.post('/tasks' ,(req,res) => {
    console.log(req.body);
    let task = {
        id : req.body.id,
        title : req.body.title,
        description : req.body.description,
        completed : req.body.completed
    };
    tasks.push(task);
    res.status(200).send(task);
});

/**PUT /tasks/:id */
app.put('/tasks/:id',(req,res) => {
    let id = req.params.id;
    let singleTask = tasks.find((task) => task.id == id);
    singleTask.id = req.body.id;
    singleTask.title = req.body.title;
    singleTask.description = req.body.description;
    singleTask.completed = req.body.completed;
    
    tasks.push(singleTask);
    res.status(200).send(task);
});

app.delete('/tasks/:id' , (req,res) => {
    let id = req.params.id;
    let singleTask = tasks.find((task) => task.id == id);
    let index = tasks.findIndex(singleTask);
    tasks.splice(index, 1);
    res.status(200).status("Successfully deleted");
})


app.listen(3000,() => {console.log("app is running on 3000")});
