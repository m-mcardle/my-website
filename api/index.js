import express, { json } from 'express'
import prisma from './helpers/prisma'

import { createFilter } from './helpers/filters.js'

const app = express()

const ADMIN_USERS = [
  process.env.ADMIN_UID,
  process.env.ADMIN_UID2
]

app.use(json())

app.post('/project', async (req, res) => {
  const { title, content, github, year, link } = req.body
  const project = await prisma.project.create({
    data: {
      title,
      content,
      github,
      year,
      link,
      image: {
        connect: { id: 1 }
      }
    },
    include: {
      image: true
    }
  })
  res.status(200).json(project)
})

app.get('/projects', async (req, res) => {
  const { technologies } = req.query

  const filters = technologies
    ? createFilter(technologies)
    : {}

  const projects = await prisma.project.findMany({
    ...filters,
    orderBy: [
      {
        year: 'desc'
      },
      {
        id: 'desc'
      }
    ],
    include: {
      infrastructure: {
        include: {
          image: true
        }
      },
      image: true
    }
  })
  res.json(projects)
})

app.get('/project/:link', async (req, res) => {
  const { link } = req.params
  const project = await prisma.project.findFirst({
    where: { link }
  })
  res.json(project)
})

app.delete('/project/:link', async (req, res) => {
  const { link } = req.params

  if (!link) { res.status(404).send(false) }

  try {
    const project = await prisma.project.findFirst({
      where: { link }
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

app.get('/report/:link', async (req, res) => {
  const { link } = req.params
  const report = await prisma.report.findFirst({
    where: { link },
    include: {
      image: true,
      goals: {
        include: {
          image: true
        }
      }
    }
  })
  res.json(report)
})

app.get('/tech', async (_, res) => {
  const technologies = await prisma.tech.findMany({
    orderBy: [
      {
        text: 'asc'
      }
    ]
  })
  res.json(technologies)
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
