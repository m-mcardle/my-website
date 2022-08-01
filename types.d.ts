interface Image {
  alt: string,
  path: string
}

interface Tech {
  text: string,
  description?: string
  image: Image
}

interface Project {
  id?: Number,
  link?: string,
  title: string,
  github: string,
  content?: string,
  image: Image,
  year: string,
  infrastructure?: Tech[]
  createdAt?: Date,
  updatedAt?: Date,
  published?: Boolean,
}
