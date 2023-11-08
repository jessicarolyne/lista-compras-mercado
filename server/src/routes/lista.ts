import { FastifyInstance } from 'fastify'

export async function listaRotas(app: FastifyInstance) {
  app.get('/login', async () => {
    const users = await prisma.user.findMany()
    return users
  })
}
