import httpClient from './httpClient'

const getNewsList = (payload, config) => httpClient
  .get('/api/news_list', payload, config)
  .then(res => res.data)
  .catch(err => {
    throw err
  })

  export {
    getNewsList
  }