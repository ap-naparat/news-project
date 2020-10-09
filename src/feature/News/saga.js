import { call, put, takeEvery } from 'redux-saga/effects'
import * as Api from 'api/news.api'
import { ACTION_TYPE } from './redux'

export function* fetchNewsList(action) {
  try {
    const data = yield call(Api.getNewsList, action.payload)
    if (data.error === 0) {
      yield put({ 
        type: ACTION_TYPE.GET_NEWS_LIST_SUCCEEDED, 
        payload: {
          data: data?.data?.newsList,
          error: data?.error
        } 
      })
    } else {
      yield put({ 
        type: ACTION_TYPE.GET_NEWS_LIST_FAILED, 
        payload: {
          data: data?.data,
          error: data?.error
        } 
      })
    }
    yield put({
      type: ACTION_TYPE.SET_NEWS_LOADING,
      payload: false,
    })
  } catch (error) {
    console.error('error', error)
  }
}
export function* watchFetchNewsList() {
  yield takeEvery(ACTION_TYPE.GET_NEWS_LIST_REQUESTED, fetchNewsList)
}