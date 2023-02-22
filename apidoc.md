List of available endpoints:

###ENDPOINT /tasks

- Get /tasks
- Post /tasks
- Get /tasks/:id
- Patch /tasks/:id
- Delete /tasks/:id

1. GET /tasks

Description 

- Get all tasks data

Response (200 - OK)



-Body:
```json
    [
    {
        "id": 1,
        "title": "Coding",
        "description": "Latihan coding supaya jago",
        "isDone": true,
        "createdAt": "2023-02-22T11:09:25.913Z",
        "updatedAt": "2023-02-22T11:09:25.913Z"
    },
    {
        "id": 2,
        "title": "Olahraga",
        "description": "Olahraga jogging di sekitar rumah",
        "isDone": false,
        "createdAt": "2023-02-22T11:09:25.913Z",
        "updatedAt": "2023-02-22T11:09:25.913Z"
    },
    ...
    ]
```

2. PATCH /tasks/:id

Description
- change selected tasks's status


-body:

```json
    {
        "title":"string",
        "description": "string",
        "isDone": "boolean",
    }
 ```
    

Response (200 - OK)
    
```json
    {
        
    "message": "success edit Task id {id}"

    }
```
    



Response (400 - Bad Request)

-Body:
```json
    {
        "message":"title cannot be empty"
    }
  OR
     {
        "message":"isDone must be boolean"
    }
```

Response (404 - Not Found)

-Body:
    
```js
    {message: `id not found`}
    
```

3. GET /tasks/:id
    Description
- show task details

Response (200 - OK)


-Body:
```json    
 {
    "id": 5,
    "title": "Tidur",
    "description": "agar tidak sakit",
    "isDone": false,
    "createdAt": "2023-02-22T11:09:40.009Z",
    "updatedAt": "2023-02-22T11:09:40.009Z"
}
```

Response (404 - not found)

-Body:
```js
    {message:`id not found`}
```

4. POST /tasks

Description

- create new task

Request 

-body:

```json
    {
        "title":"string",
        "description": "string",
        "isDone": "boolean",
 ```
    

Response (201 - Created)
    
```json
   {
    "id": 7,
    "title": "Beres-beres",
    "description": "biar rapih",
    "isDone": false,
    "updatedAt": "2023-02-22T11:56:52.554Z",
    "createdAt": "2023-02-22T11:56:52.554Z"
}
```
    
Response (400 - Bad Request)
    
```json
    {
        "message":"title cannot be empty"
    }
``` 
5. DELETE /tasks/:id

Description
- delete one task

Response (200 - OK)



-Body:
```js
    {message:`success delete Task id {id} `}
```

Response (404 - Not Found)


-Body:
    
```js
    {message: `id not found`}
```

Global Error

Response

500 - Internal Server Error
    -Body
```js
    {message: `Internal Server Error`}
```