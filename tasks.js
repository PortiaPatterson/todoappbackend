const express = require("express");
const serverless = require("serverless-http");

const app = express();

app.get("/tasks", function (request, response) {
  const username = request.query.username;
  let newTask = [];
  const tasks = [
    {
      description: "Create lesson plans",
      completed: true,
      date: "29-01-2019"
    },
    {
      description: "Create reading list and glossary",
      completed: false,
      date: "30-01-2019"
    },
    {
      description: "Differentiate lessons",
      completed: false,
      date: "31-01-2019"
    },
    {
      description: "Create Assessment test",
      completed: true,
      date: "05-02-2019"
    },
    {
      description: "Give Assessment Feedback",
      completed: false,
      date: "14-02-2019"

    }
  ]
  tasks.forEach(function (task) {
    if (task.completed == true) {
      newTask.push = task;
    }
  });
  
  // response.json({
  //   message:`Username ${username} requested tasks`
  // });
  return newTask;
});

module.exports.handler = serverless(app);

