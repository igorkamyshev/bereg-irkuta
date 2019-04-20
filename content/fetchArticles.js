const Prismic = require('prismic-javascript')

module.exports.fetchArticles = async (api, pageSize, page = 1) => {
  const { results, total_pages } = await api.query(
    Prismic.Predicates.at('document.type', 'articles'),
    { orderings: '[document.first_publication_date desc]', pageSize, page },
  )

  const articles = results.map(({ data: { title, content }, id }) => ({
    id,
    title: title[0].text,
    description: content[0].text,
  }))

  return { articles, totalPages: total_pages }
}
