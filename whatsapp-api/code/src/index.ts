import {http} from './config/http'

http.listen(process.env.WHATSAPP_API_PORT, () => {
  console.log(`Server list on port ${process.env.WHATSAPP_API_PORT}`)
  console.log(`DATABASE_URL ${process.env.DATABASE_URL}`)
})