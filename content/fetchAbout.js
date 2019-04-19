const Prismic = require('prismic-javascript')

module.exports.fetchAbout = async api => {
  const response = await api.query(
    Prismic.Predicates.at('document.type', 'about'),
  )

  const { data } = response.results[0]

  const content = {
    name: data.name[0].text,
    tagline: data.tagline[0].text,
    description: data.description.map(({ text }) => text),
  }

  return content
}
