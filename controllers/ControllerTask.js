const {Task} = require("../models")
class ControllerTask{
    static test(req,res){

        res.status(200).json("Ok")
    }
    static async getTasks(req,res,next){
        try {
            const tasks = await Task.findAll()

            res.status(200).json(tasks)
        } catch (error) {
            next(error)
        }
    }

    static async createTask(req,res,next){
        try {
            const {title, description, isDone} = req.body

            const newTask = await Task.create({title,description,isDone})

            res.status(201).json(newTask)
        } catch (error) {
            next(error)
        }
    }

    static async getOneTask(req,res,next){
        try {
            const {id} = req.params

            const task = await Task.findByPk(id)

            if(!task){
                throw {name:"not found"}
            }

            res.status(200).json(task)
        } catch (error) {
            next(error)
        }
    }

    static async editTask(req,res,next){
        try {
            const {id} = req.params
            const {title,description,isDone} = req.body

            const task = await Task.findByPk(id)

            if(!task){
                throw {name:"not found"}
            }

            const updatedTask = await Task.update({title, description, isDone}, {where:{id}})

            res.status(200).json({message:`Success edit Task id ${id}`})
        } catch (error) {
            next(error)
        }
    }

    static async deleteTask(req,res,next){
        try {
            const {id} = req.params

            const deletedTask = await Task.destroy({where:{id}})

            if(!deletedTask){
                throw {name:"not found"}
            }

            res.status(200).json({message:`Success delete Task id ${id}`})
        } catch (error) {
            next(error)
        }
    }
}

module.exports = ControllerTask