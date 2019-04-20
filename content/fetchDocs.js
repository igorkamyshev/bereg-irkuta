const Prismic = require('prismic-javascript')

module.exports.fetchDocs = async api => {
  const { results } = await api.query(
    Prismic.Predicates.at('document.type', 'docs'),
    { orderings: '[document.first_publication_date desc]', pageSize: 100 },
  )

  const docs = results.map(({ data }) => ({
    title: data.title[0].text,
    url: data.file.url,
  }))

  return { docs }
}
