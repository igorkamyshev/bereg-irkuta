const PrismicDOM = require('prismic-dom')

module.exports.fetchAlbum = async (api, id) => {
  const { data } = await api.getByID(id)

  const title = data.title[0].text

  const album = {
    title,
    description: PrismicDOM.RichText.asHtml(data.description),
    photos: data.photos.map(({ photo, comment }) => ({
      url: photo.url,
      alt: comment || title,
    })),
  }

  return album
}
