const PrismicDOM = require('prismic-dom')

module.exports.fetchArticle = async (api, id) => {
  const { data } = await api.getByID(id)

  const article = {
    title: data.title[0].text,
    content: PrismicDOM.RichText.asHtml(data.content),
  }

  return article
}
