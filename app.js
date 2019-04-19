const { take } = require('lodash')

const Onboarding = require('./onboarding')
const app = require('./config')
const { fetchNews } = require('./content/fetchNews')

const PORT = app.get('port')

app.show('/', 'index', async req => {
  const news = await fetchNews(req.prismic.api)

  return { news: take(news, 3) }
})

app.listen(PORT, () => {
  Onboarding.trigger()
  process.stdout.write(`Point your browser to: http://localhost:${PORT}\n`)
})
