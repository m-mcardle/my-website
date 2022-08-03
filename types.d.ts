interface Section {
  title: string,
  body: string
  images: Array<string>
}
interface Goal {
  title: string,
  description: string,
  outcome: string,
  body: string
}

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
