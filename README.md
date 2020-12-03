# Requirement
Build a kanban board application with Angular which included these features:

### Board List
A page for managed all my boards;

- I can create a new board with a specific name here.
- I can view all created boards.
- I can navigate into board detail page when click on a board.

### User Management
A page for managed all users

- I can create a new users.
- I can view all users that I haved created.

### Board Detail
A page for managed all information related to a specific board.

- I can create a task which belong to this board.
- I can view all tasks which belong to this board.
- I can assign a user into a tasks.
- There are 3 status which is TODO, IN_PROGRESS, DONE and I can change task status by drag & drop task into corresponding column.

You can refer to Trello, Jira for the design and functionality. You are allowed to used any library for building this application.

# Proposal

If you don't want to build the kanban requirement above. You can submit your proposal here https://github.com/dinhhai281/board-api/issues, I will evaluating the complexity of it. When the complexity is approximately with the kanban board requirement it will be approve and you can implement it instead of the kanban board.

Notes:
- The proposal should show your angular skill not just redirect page to page and fetching data.
- If it require back-end, you should submit back-end source code follow with instruction to run your application.


## Metrics

### Angular (30%)

Angular will be the most imporant skill need to be proven.

- Angular fundamental (the usage of component, service, directive, form, ...)
- Code organization.

### Features (30%)

Base on requirement, the more features completed, the higher score you will get.
This metric will not consider your implementation, the feature just need to work.

### Quality (20%)

- Type safety.
- RxJS.
- Unit Test.
- Naming Convention.
- ...

### UI/UX (10%)

You can use Trello, Jira, Github Project as design preference.

### Documentation (10%)

You should spend time on describe your solution. README.md is the best place your this.
- Which features you have in your application.
- Explain how you organizing your application, which folders are important and what they do.
- How to start the application.

# How to start

This repository is the back-end for final assignment.

## Run this repo

### With docker (recommended)

It is recommended to use docker to start the back-end server.

- Install Docker [Windows](https://docs.docker.com/docker-for-windows/install/) | [Mac](https://docs.docker.com/docker-for-mac/install/) | [Ubuntu](https://docs.docker.com/engine/install/ubuntu/)
- In project folder run this command
```bash
docker-compose up
```
This command will build the image which included MongoDB and the NestJS application. Database can be access on port `27017`, the API can be access on port `3000`
- To turn off
```bash
docker-compose down
```

### Manually

- Install MongoDB
- Create .env file with the information in file .env.example and you may need to update .env file to match your mongodb config.
- In the project folder run this command to install dependencies
```bash
yarn
```
- To start the application run
```bash
yarn start
```

# API Specs

## /users

### GET
Return all users

```
GET http://localhost:3000/users
```

Response
```json
[
  {
    "_id": "5fc6851e93ff940027f1a0a5",
    "firstname": "John",
    "lastname": "Doe",
    "createdAt": "2020-12-01T18:02:06.751Z",
    "updatedAt": "2020-12-01T18:02:06.751Z",
    "__v": 0
  },
  {
    "_id": "5fc6856193ff940027f1a0a6",
    "firstname": "Firstname",
    "lastname": "Lastname",
    "createdAt": "2020-12-01T18:03:13.529Z",
    "updatedAt": "2020-12-01T18:03:13.529Z",
    "__v": 0
  }
]
```

### POST
Create a user

```
POST http://localhost:3000/users
```

Body
```json
{
  "firstname": "Firstname",
  "lastname": "Lastname"
}
```

Reponse
```json
{
  "_id": "5fc6856193ff940027f1a0a6",
  "firstname": "Firstname",
  "lastname": "Lastname",
  "createdAt": "2020-12-01T18:03:13.529Z",
  "updatedAt": "2020-12-01T18:03:13.529Z",
  "__v": 0
}
```

## /boards

### GET
Return all boards

```
GET http://localhost:3000/boards
```

Response
```json
[
  {
    "_id": "5fc6862193ff940027f1a0a7",
    "name": "board name",
    "createdAt": "2020-12-01T18:06:25.503Z",
    "updatedAt": "2020-12-01T18:06:25.503Z",
    "__v": 0
  },
  {
    "_id": "5fc6863e93ff940027f1a0a8",
    "name": "another board",
    "createdAt": "2020-12-01T18:06:54.071Z",
    "updatedAt": "2020-12-01T18:06:54.071Z",
    "__v": 0
  }
]
```

### POST
Create a board

```
POST http://localhost:3000/boards
```

Body
```json
{
  "name": "another board"
}
```

Reponse
```json
{
  "_id": "5fc6863e93ff940027f1a0a8",
  "name": "another board",
  "createdAt": "2020-12-01T18:06:54.071Z",
  "updatedAt": "2020-12-01T18:06:54.071Z",
  "__v": 0
}
```

## /tasks

### GET
Return all taks

```
GET http://localhost:3000/tasks
```

Query
```
boardId: return only task belong to board which specific id.
```

Response
```json
[
  {
    "joined": [
      {
          "_id": "5fc6851e93ff940027f1a0a5",
          "firstname": "John",
          "lastname": "Doe",
          "createdAt": "2020-12-01T18:02:06.751Z",
          "updatedAt": "2020-12-01T18:02:06.751Z",
          "__v": 0
      }
    ], //assigned users
    "_id": "5fc687b193ff940027f1a0a9",
    "title": "sameple task",
    "status": "TODO",
    "board": {
        "_id": "5fc6862193ff940027f1a0a7",
        "name": "board name",
        "createdAt": "2020-12-01T18:06:25.503Z",
        "updatedAt": "2020-12-01T18:06:25.503Z",
        "__v": 0
    },
    "createdAt": "2020-12-01T18:13:05.688Z",
    "updatedAt": "2020-12-01T18:14:06.872Z",
    "__v": 0
  },
  {
    "joined": [],
    "_id": "5fc687b993ff940027f1a0aa",
    "title": "sameple task2",
    "status": "TODO",
    "board": {
        "_id": "5fc6862193ff940027f1a0a7",
        "name": "board name",
        "createdAt": "2020-12-01T18:06:25.503Z",
        "updatedAt": "2020-12-01T18:06:25.503Z",
        "__v": 0
    },
    "createdAt": "2020-12-01T18:13:13.855Z",
    "updatedAt": "2020-12-01T18:13:13.855Z",
    "__v": 0
  }
]
```

### POST
Create a task

```
POST http://localhost:3000/tasks
```

Body
```json
{
  "title": "sameple task3",
  "status": "TODO",
  "board": "5fc6862193ff940027f1a0a8"
}
```

Reponse
```json
{
  "joined": [],
  "_id": "5fc68a7c5f17de00265c07f2",
  "title": "sameple task3",
  "status": "TODO",
  "board": "5fc6862193ff940027f1a0a8",
  "createdAt": "2020-12-01T18:25:00.370Z",
  "updatedAt": "2020-12-01T18:25:00.370Z",
  "__v": 0
}
```

### PUT
Update a task

Avaivable status: "TODO" | "IN_PROGRESS" | "DONE"

```
PUT http://localhost:3000/tasks/{id}
```

Body
```json
{
  "joined": ["5fc6851e93ff940027f1a0a5"],

}
```

Reponse
```json
{
  "joined": [
      "5fc6851e93ff940027f1a0a5"
  ],
  "_id": "5fc687b193ff940027f1a0a9",
  "title": "sameple task",
  "status": "IN_PROGRESS",
  "board": "5fc6862193ff940027f1a0a7",
  "createdAt": "2020-12-01T18:13:05.688Z",
  "updatedAt": "2020-12-01T18:14:06.872Z",
  "__v": 0
}
```