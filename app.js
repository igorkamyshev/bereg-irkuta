const Onboarding = require('./onboarding')
const app = require('./config')

const PORT = app.get('port')

app.show('/', 'index')

app.listen(PORT, () => {
  Onboarding.trigger()
  process.stdout.write(`Point your browser to: http://localhost:${PORT}\n`)
})
