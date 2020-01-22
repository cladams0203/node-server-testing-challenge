const db = require('../dbConfig')

module.exports = {
    find,
    findById,
    insert,
    remove
}

function find() {
    return db('users')
}

function findById(id) {
    return db('users').where({ id })
}

function insert(user) {
    return db('users').insert(user)
}
function remove(id) {
    return db('users').where({ id }).del()
}