interface Image {
  alt: string,
  path: string
}

interface Project {
  id?: Number,
  title: string,
  github: string,
  content?: string,
  image: Image,
  year: string,
  infrastructure?: Image[]
  createdAt?: Date,
  updatedAt?: Date,
  published?: Boolean,
}
