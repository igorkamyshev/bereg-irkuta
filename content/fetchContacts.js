module.exports.fetchContacts = async api => {
  const response = await api.getSingle('contacts')

  return response.data
}
