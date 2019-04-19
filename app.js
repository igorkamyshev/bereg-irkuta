const Onboarding = require('./onboarding')
const app = require('./config')

const { fetchAbout } = require('./content/fetchAbout')

const PORT = app.get('port')

app.get('/', async (req, res) => {
  const data = await fetchAbout(req.prismic.api)

  res.render('index', data)
})

app.listen(PORT, () => {
  Onboarding.trigger()
  process.stdout.write(`Point your browser to: http://localhost:${PORT}\n`)
})
