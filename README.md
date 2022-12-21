# Personal Portfolio Website 🖥️

## Nuxt Web App

### Description 📚

Porfolio website for providing information about my work experience and personal projects. Contains a home page which contains my skills, interests, and a timeline of my development experience. It also contains a page containing an overview of all of my personal projects and an individual page for each of them containing more detailed information. Lastly it also has pages for my co-op reports going into great detail about my work experience at the companies I have been employed at.

### Infrastructure 🏗️

Built using Nuxt framework which provides tooling for features like SSR and SEO optimization, and styled using Tailwind CSS. Project data is stored in a PostgreSQL database which is accessed through a Prisma client. User authentication is implemented using Firebase Authentication and Vuex. The server is hosted on DigitalOcean and the database is hosted on AWS RDS.

### Related Concepts / Learnings 💭

* Nuxt Framework
* Vue.js
* Vuex
* Server-Side-Rendering (SSR)
* TailwindCSS
* Postgres
* Prisma
* Firebase Authentication
* UI Design (Figma)


# my-website

This repo contains my personal portfolio website that I am building with Nuxt. I am using TailwindCSS for styling, Jest for testing, and Vue for my front-end framework.

[Figma](https://www.figma.com/file/GjWIwe3zgpJCNL2FlVcMd7/Website?node-id=0%3A1)

## Development

To start the hot-reloading development server, run the commands:

```
yarn install
yarn dev
```

There are issues when closing the dev server so after **CTRL + C** run:

```
kill -9 $(pgrep -f nuxt)

# or

yarn kill-nuxt
```

To remove any orphaned processes.

## Deploying

This application is hosted at [](mmcardle.ca) through a VM running on DigitalOcean. The domain is managed through AWS Route 53 and the SSL was generated from Let's Encrypt using the Certbot CLI. The server is managed using NGINX through forward proxy that redirects traffic to port 3000 from HTTP and HTTPS.

To deploy a new version of the app, ssh into the cluster and build the latest version of the application inside of `/var/www/html/my-website` by running `yarn build` and then reload the process using `pm2 reload`.

## Prisma

This project uses the [Prisma](https://www.prisma.io/) ORM for managing the Postgres databases used for storing project and report information. To view the Prisma UI run:

```
yarn prisma
```

