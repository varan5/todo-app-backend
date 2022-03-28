const TodoModel = require('../models/todoModel')


const getAllTodos = async (req, res, next) => {
  try {
    const allTodos = await TodoModel.find()
    if (allTodos) {
      res.status(201).json({
        status: 'Success',
        message: 'All todos found',
        todos: allTodos,
      })
    } else {
      res.status(400).json({
        status: 'Failure',
        message: 'Unable to find all the todos',
      })
    }
  } catch (error) {
    res.status(500).json({
      status: 'Failure',
      message: 'Server error occurred while finding todos'
    })
  }

}

const getTodoById = async (req, res) => {
  const id = req.params.id
  try {
    const todoById = await TodoModel.findById(id)
    if (todoById) {
      res.status(201).json({
        status: 'Success',
        message: 'Todo found',
        todos: todoById,
      })
    } else {
      res.status(400).json({
        status: 'Failure',
        message: 'Unable to find the todo by id',
      })
    }
  } catch (error) {
    res.status(500).json({
      status: 'Failure',
      message: 'Server error occurred while finding todo'
    })
  }
}

const createTodo = async (req, res) => {
  const { title, description } = req.body

  try {
    const newTodo = await TodoModel.create({ title, description })
    if (newTodo) {
      res.status(201).json({
        status: 'Success',
        message: 'Todo created successfully',
        todo: newTodo,
      })
    } else {
      res.status(400).json({
        status: 'Failure',
        message: 'Unable to create todo',
      })
    }
  } catch (error) {
    res.status(500).json({
      status: 'Failure',
      message: 'Server error occurred while creating todo'
    })
  }

}

const updateTodoHelper = async (todoToEdit, updatedData) => {
  todoToEdit.title = updatedData.updatedTitle
  todoToEdit.description = updatedData.updatedDescription
  todoToEdit.isCompleted = updatedData.updatedIsCompleted
}

const updateTodoById = async (req, res) => {
  const id = req.params.id
  const updatedData = req.body

  const { updatedTitle, updatedDescription, updatedIsCompleted } = req.body
  try {
    const todoToEdit = await TodoModel.findById(id)
    if (todoToEdit) {
      updateTodoHelper(todoToEdit, updatedData)
      await todoToEdit.save()
      res.status(200).json({
        status: 'Success',
        message: 'Todo updated successfully',
      })
    } else {
      res.status(400).json({
        status: 'Failure',
        message: 'Unable to update todo',
      })
    }
  } catch (error) {
    res.status(500).json({
      status: 'Failure',
      message: 'Server error occurred while updating todo'
    })
  }

}

const deleteTodoById = async (req, res) => {
  const id = req.params.id

  try {
    const todoToDelete = await TodoModel.findByIdAndDelete(id)
    if (todoToDelete) {
      res.status(200).json({
        status: 'Success',
        message: 'Todo deleted successfully',
      })
    } else {
      res.status(400).json({
        status: 'Failure',
        message: 'Unable to delete todo',
      })
    }
  } catch (error) {
    res.status(500).json({
      status: 'Failure',
      message: 'Server error occurred while updating todo'
    })
  }

}




module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodoById,
  deleteTodoById
}