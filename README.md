# Personal Portfolio Website 🖥️

## Nuxt Web App

### Description 📚

Porfolio website for providing information about my work experience and personal projects. Built using Nuxt (Vue) and Tailwind CSS.

### Infrastructure 🏗️

Built using Nuxt framework which provides tooling for features like SSR and SEO optimization, and styled using Tailwind CSS.

### Related Concepts / Learnings 💭

* Nuxt Framework
* Vue.js
* Server-Side-Rendering (SSR)
* TailwindCSS
* UI Design (Figma)

# my-website

This repo contains my personal portfolio website that I am building with Nuxt. I am using TailwindCSS for styling, Jest for testing, and Vue for my front-end framework.

[Figma](https://www.figma.com/file/GjWIwe3zgpJCNL2FlVcMd7/Website?node-id=0%3A1)

## Development

To start the hot-reloading development server, run the command:

```
yarn dev
```

there are issues when closing the dev server so after **CTRL + C** run:

```
kill -9 $(pgrep -f nuxt)
```

## Deploying

To deploy this project to Google App Engine, run the command:

```
yarn deploy
```

## Prisma

This project uses the [Prisma](https://www.prisma.io/) ORM for managing the Postgres databases used for storing project and report information. To view the Prisma UI run:

```
yarn prisma
```

