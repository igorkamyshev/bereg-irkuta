const Onboarding = require('./onboarding')
const app = require('./config')
const { fetchNews } = require('./content/fetchNews')

const PORT = app.get('port')

const getPage = req => parseInt(req.query.page || '1', 10)

app.show('/', 'index', async req => {
  const { news } = await fetchNews(req.prismic.api, 2)

  return { news }
})

app.show('/news', 'news', async req => {
  const page = getPage(req)
  const { news, totalPages } = await fetchNews(req.prismic.api, 2, page)

  return { news, page, totalPages }
})

app.listen(PORT, () => {
  Onboarding.trigger()
  process.stdout.write(`Point your browser to: http://localhost:${PORT}\n`)
})
