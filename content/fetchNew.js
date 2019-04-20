const PrismicDOM = require('prismic-dom')

module.exports.fetchNew = async (api, id) => {
  const { data } = await api.getByID(id)

  const title = data.title[0].text

  const oneNew = {
    title,
    photos: data.photos.map(({ photo, comment }) => ({
      url: photo.url,
      alt: comment || title,
    })),
    content: PrismicDOM.RichText.asHtml(data.content),
  }

  return oneNew
}
