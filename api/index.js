import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.post('/project', async (req, res) => {
  const { title, content, github } = req.body
  const post = await prisma.project.create({
    data: {
      title,
      content,
      github
    }
  })
  res.status(200).json(post)
})

app.get('/project/:title', async (req, res) => {
  const { title } = req.params
  const project = await prisma.project.findFirst({
    where: { title }
  })
  res.json(project)
})

/**
* logic for our api will go here
*/
export default {
  path: '/api',
  handler: app
}
