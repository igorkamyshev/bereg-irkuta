const Prismic = require('prismic-javascript')
const PrismicDOM = require('prismic-dom')
const PrismicConfig = require('./prismic-configuration')
const Onboarding = require('./onboarding')
const app = require('./config')

const { fetchAbout } = require('./content/fetchAbout')

const PORT = app.get('port')

// Middleware to inject prismic context
app.use((req, res, next) => {
  res.locals.ctx = {
    endpoint: PrismicConfig.apiEndpoint,
    linkResolver: PrismicConfig.linkResolver,
  }
  // add PrismicDOM in locals to access them in templates.
  res.locals.PrismicDOM = PrismicDOM
  Prismic.api(PrismicConfig.apiEndpoint, {
    accessToken: PrismicConfig.accessToken,
    req,
  })
    .then(api => {
      req.prismic = { api }
      next()
    })
    .catch(error => {
      next(error.message)
    })
})

app.get('/', async (req, res) => {
  const data = await fetchAbout(req.prismic.api)

  res.render('index', data)
})

app.listen(PORT, () => {
  Onboarding.trigger()
  process.stdout.write(`Point your browser to: http://localhost:${PORT}\n`)
})
