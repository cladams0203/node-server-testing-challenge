const router = require('express').Router()
const db = require('./usersModal')

router.get('/', (req,res) => {
    db.find()
        .then(user => {
           res.status(200).json(user)
            
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'unable to get users'})
        })
})
router.post('/', (req,res) => {
    db.insert(req.body)
        .then(user => {
            res.status(201).json({message: 'added user successfully'})
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({"message": 'unable to add user'})
        })
})
router.delete('/:id', (req,res) => {
    db.remove(req.params.id)
        .then(user => {
            res.status(202).json({message: 'user deleted successfully'})
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'unable to delete user'})
        })
})

module.exports = router