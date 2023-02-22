const express = require("express")
const ControllerTask = require("../controllers/ControllerTask")
const errorHandler = require("../middlewares/ErrorHandler")
const router = express.Router()


router.get("/", ControllerTask.test)
router.get("/tasks", ControllerTask.getTasks)
router.post("/tasks", ControllerTask.createTask)
router.get("/tasks/:id", ControllerTask.getOneTask)
router.patch("/tasks/:id", ControllerTask.editTask)
router.delete("/tasks/:id", ControllerTask.deleteTask)

router.use(errorHandler)
module.exports = router