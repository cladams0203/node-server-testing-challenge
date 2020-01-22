const server = require('./server')
const request = require('supertest')
const db = require('./dbConfig')

beforeEach(() => db.seed.run())

describe('users', () => {
    
    it('get /api/users', async () => {
        const res = await request(server).get('/api/users')
        expect(res.status).toBe(200)
        
    })

    it('get /api/users', async () => {
        const res = await request(server).get('/api/users')
        expect(res.body[0]).toEqual({id: 1, name: 'Chris', role: 'student'})
    })

    it('post /api/users', async () => {
        const res = await request(server)
        .post('/api/users')
        .send({name: 'John', role: 'Student'})
        expect(res.status).toBe(201)
    })

    it('post /api/users', async () => {
        const res = await request(server)
        .post('/api/users')
        .send({name: 'John', role: 'student'})
        console.log(res.body)
        expect(res.body).toEqual({message: 'added user successfully'})
    })

    it('delete /api/users/1', async () => {
        const res = await request(server).delete('/api/users/1')
        expect(res.status).toBe(202)
    })

    it('delete /api/users/1', async () => {
        const res = await request(server).delete('/api/users/1')
        expect(res.body).toEqual({message: 'user deleted successfully'})
    })
})