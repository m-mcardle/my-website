interface Section {
  title: string,
  body: string
  images: Array<string>
}
interface Goal {
  title: string,
  description: string,
  outcome: number,
  body: string
}

interface Image {
  alt: string,
  path: string,
}

interface Tech {
  text: string,
  description: string,
  image: Image
}

interface Project {
  id?: Number,
  title: string,
  github: string,
  content?: string,
  link?: string,
  image: Image,
  year: string,
  infrastructure?: Image[]
  createdAt?: Date,
  updatedAt?: Date,
  published?: Boolean,
}
