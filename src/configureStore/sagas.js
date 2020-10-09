import { all } from 'redux-saga/effects'
import { watchFetchNewsList } from 'feature/News/saga'

export default function* rootSaga() {
  yield all([
    watchFetchNewsList(),
  ])
}
