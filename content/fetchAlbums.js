const Prismic = require('prismic-javascript')

module.exports.fetchAlbums = async (api, pageSize, page = 1) => {
  const { results, total_pages } = await api.query(
    Prismic.Predicates.at('document.type', 'album'),
    { orderings: '[document.first_publication_date desc]', pageSize, page },
  )

  const albums = results.map(
    ({ data: { title, photos, description }, id }) => ({
      id,
      title: title[0].text,
      preview: photos[0].photo.url,
      description: description[0].text,
    }),
  )

  return { albums, totalPages: total_pages }
}
