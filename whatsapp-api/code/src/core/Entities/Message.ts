import User from './User'

export default class Message {
  content: string
  author: User

  constructor (content: string, author: User) {
    this.content = content
    this.author = author
  }
}
