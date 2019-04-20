module.exports.fetchAbout = async api => {
  const response = await api.getSingle('about')

  const { data } = response

  const content = {
    name: data.name[0].text,
    tagline: data.tagline[0].text,
    description: data.description.map(({ text }) => text),
    logo: data.logo.url,
  }

  return content
}
