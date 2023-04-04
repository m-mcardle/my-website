import express, { json } from 'express'

const app = express()

const ADMIN_USERS = [
  process.env.ADMIN_UID,
  process.env.ADMIN_UID2
]

app.use(json())

app.get('/validate-user/:uid', (req, res) => {
  const { uid } = req.params
  const isAdmin = ADMIN_USERS.includes(uid)

  res.send(isAdmin)
})

/**
* logic for our api will go here
*/
export default {
  path: '/api',
  handler: app
}
