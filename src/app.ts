import Fastify from 'fastify'
import cookie from '@fastify/cookie'

import { transactionRoutes } from './routes/transactions'

export const app = Fastify()

app.register(cookie)
app.register(transactionRoutes, {
  prefix: 'transactions',
})
