const Onboarding = require('./onboarding')
const app = require('./config')
const { fetchNews } = require('./content/fetchNews')

const PORT = app.get('port')

app.show('/', 'index', async req => {
  const news = await fetchNews(req.prismic.api, 2)

  return { news }
})

app.listen(PORT, () => {
  Onboarding.trigger()
  process.stdout.write(`Point your browser to: http://localhost:${PORT}\n`)
})
