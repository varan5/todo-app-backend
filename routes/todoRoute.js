const express = require('express')
const { getAllTodos, createTodo, getTodoById, updateTodoById, deleteTodoById } = require('../controllers/todoController')
const router = express.Router()

router.get('/all', getAllTodos)
router.get('/:id', getTodoById)
router.post('/create', createTodo)
router.post('/update/:id', updateTodoById)
router.post('/delete/:id', deleteTodoById)

module.exports = router