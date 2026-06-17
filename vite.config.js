import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

function contactApiPlugin() {
  return {
    name: 'contact-api-middleware',
    configureServer(server) {
      server.middlewares.use('/api/contact', async (req, res) => {
        try {
          const { default: contactHandler } = await import('./api/contact.js')
          let body = ''

          for await (const chunk of req) {
            body += chunk
          }

          req.body = body ? JSON.parse(body) : {}

          const response = {
            setHeader: res.setHeader.bind(res),
            status(code) {
              res.statusCode = code
              return this
            },
            json(payload) {
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify(payload))
            },
            end() {
              res.end()
            },
          }

          await contactHandler(req, response)
        } catch (error) {
          res.statusCode = 500
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ message: 'Something went wrong. Please try again.' }))
        }
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  if (env.GMAIL_USER) {
    process.env.GMAIL_USER = env.GMAIL_USER
  }

  if (env.GMAIL_APP_PASSWORD) {
    process.env.GMAIL_APP_PASSWORD = env.GMAIL_APP_PASSWORD
  }

  if (env.CONTACT_RECEIVER_EMAIL) {
    process.env.CONTACT_RECEIVER_EMAIL = env.CONTACT_RECEIVER_EMAIL
  }

  return {
    base: '/Portfolio/',
    plugins: [react(), contactApiPlugin()],
    server: {
      host: true,
      port: 5173,
    },
  }
})
