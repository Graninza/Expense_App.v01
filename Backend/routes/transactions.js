const { addExpense, getExpense, deleteExpense } = require('../controllers/expense');
const { addIncome, getIncomes, deleteIncome } = require('../controllers/income');
const {addUser, getUsers, login} = require('../controllers/user');



const router = require('express').Router();

router
    .post('/add-income', addIncome)
    .get('/get-incomes', getIncomes)
    .delete('/delete-income/:id', deleteIncome)

    .post('/add-expense', addExpense)
    .get('/get-expenses', getExpense)
    .delete('/delete-expense/:id', deleteExpense)

    .post('/register', addUser)
    .get('/get-users', getUsers)
    .post('/login', login)

module.exports = router