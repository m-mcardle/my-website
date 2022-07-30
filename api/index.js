import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express()

const ADMIN_USERS = [
  process.env.ADMIN_UID,
  process.env.ADMIN_UID2
]

app.use(express.json())

app.post('/project', async (req, res) => {
  const { title, content, github, image, year } = req.body
  const project = await prisma.project.create({
    data: {
      title,
      content,
      github,
      image,
      year
    }
  })
  res.status(200).json(project)
})

app.get('/projects', async (_, res) => {
  const projects = await prisma.project.findMany({
    orderBy: {
      year: 'desc'
    },
    include: {
      infrastructure: true,
      image: true
    }
  })
  res.json(projects)
})

app.get('/project/:title', async (req, res) => {
  const { title } = req.params
  const project = await prisma.project.findFirst({
    where: { title }
  })
  res.json(project)
})

app.delete('/project/:title', async (req, res) => {
  const { title } = req.params

  try {
    const project = await prisma.project.findFirst({
      where: { title }
    })

    if (!project) {
      throw new Error('Project not found')
    }

    await prisma.project.delete({
      where: { id: project.id }
    })

    res.send(true)
  } catch (ex) {
    res.status(404).send(false)
  }
})

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
