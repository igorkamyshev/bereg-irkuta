const Prismic = require('prismic-javascript')

module.exports.fetchContacts = async api => {
  const response = await api.query(
    Prismic.Predicates.at('document.type', 'contacts'),
  )

  const { data } = response.results[0]

  return data
}
