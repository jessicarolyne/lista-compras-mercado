import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export async function authenticateUser(email: string, password: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    })

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return null // Usuário não encontrado ou senha incorreta
    }

    // Autenticação bem-sucedida
    return jwt.sign({ id: user.id }, 'spacetime')
  } catch (error) {
    console.error('Erro ao autenticar usuário:', error)
    throw new Error('Erro ao autenticar usuário')
  }
}

export async function authRoutes(app: FastifyInstance) {
  app.post('/login', async (request, reply) => {
    const { email, password } = request.body as {
      email: string
      password: string
    }

    const token = await authenticateUser(email, password)

    if (!token) {
      return reply.code(401).send({ message: 'Credenciais inválidas' })
    }

    //    reply.send({ token })
    // reply.redirect('/home')
    return 'olá'
  })
}
