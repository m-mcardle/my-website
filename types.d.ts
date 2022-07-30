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
  text: string,
  path: string,
  description: string | null
}

interface Project {
  id?: Number,
  title: string,
  github: string,
  content?: string,
  image: string,
  year: string,
  infrastructure?: Image[]
  createdAt?: Date,
  updatedAt?: Date,
  published?: Boolean,
}
