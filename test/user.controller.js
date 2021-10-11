const { expect } = require('chai')
const user = require('../src/controllers/user')
const userController = require('../src/controllers/user')
const client = require ('../src/dbClient')

describe('User', () => {


  describe('Create', () => {

    it('create a new user', (done) => {
      const user = {
        username: 'sergkudinov',
        firstname: 'Sergei',
        lastname: 'Kudinov'
      }
      userController.create(user, (err, result) => {
        expect(err).to.be.equal(null)
        expect(result).to.be.equal('OK')
        done()
      })
    })

    it('passing wrong user parameters', (done) => {
      const user = {
        firstname: 'Sergei',
        lastname: 'Kudinov'
      }
      userController.create(user, (err, result) => {
        expect(err).to.not.be.equal(null)
        expect(result).to.be.equal(null)
        done()
      })
    })

    // it('avoid creating an existing user', (done)=> {
    //   // TODO create this test
    //   // Warning: the user already exists
      
    //   done()
    })
  })

 

  describe('Get', ()=> {
    // TODO Create test for the get method
    it('get a user by username', (done) => {
      // 1. First, create a user to make this unit test independent from the others
      const username = "FlorianSez"
      const user = {
        firstname: "Florian",
        lastname: "Sezille"
      }
      // 2. Then, check if the result of the get method is correct
      userController.create(user, (err, result) => {
        expect(err).to.not.be.equal(null)
        expect(result).to.be.equal(null)
        done()
      })
      done()
    })
  
    // TODO Create test for the get method
    it('cannot get a user when it does not exist', (done) => {
      // 1. First, create a user to make this unit test independent from the others
      const username = "FlorianSez"
      const user = {
        firstname: "Florian",
        lastname: "Sezille"
      }
      // 2. Then, check if the result of the get method is correct
      client.hmget(username, user, (err, res) => {
        if (err) return callback(err, null)
        callback(null, res) // Return callback
      })

      done()
    })
  })
