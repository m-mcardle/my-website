interface Image {
  text: string,
  path: string,
  description: string | null
}

interface Project {
  id: Number,
  title: string,
  github: string,
  content: string | null,
  image: string,
  year: string,
  infrastructure: Image[]
  createdAt: Date,
  updatedAt: Date,
  published: Boolean,
}
