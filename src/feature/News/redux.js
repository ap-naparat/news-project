export const ACTION_TYPE = {
  SET_NEWS_LOADING: 'SET_NEWS_LOADING',
  GET_NEWS_LIST_REQUESTED: 'GET_NEWS_LIST_REQUESTED',
  GET_NEWS_LIST_SUCCEEDED: 'GET_NEWS_LIST_SUCCEEDED',
  GET_NEWS_LIST_FAILED: 'GET_NEWS_LIST_FAILED',
}

const initialState = {
  loading: true,
  newsList: {}
}

export default (state = initialState, action) => {
  switch(action.type) {
    case ACTION_TYPE.SET_NEWS_LOADING:
      return {
        ...state,
        loading: action.payload,
      }
    case ACTION_TYPE.GET_NEWS_LIST_REQUESTED:
      return {
        ...state,
        newsList: {
          ...state.newsList,
        }
      }
    case ACTION_TYPE.GET_NEWS_LIST_SUCCEEDED:
      return {
        ...state,
        newsList: {
          ...state.newsList,
          data: action.payload.data,
          error: action.payload.error
        }
      }
    case ACTION_TYPE.GET_NEWS_LIST_FAILED:
      return {
        ...state,
        newsList: {
          ...state.newsList,
          error: action.payload.error
        }
      }
    default:
      return state
  }
}

export const getNewsList = newsList => ({
  type: ACTION_TYPE.GET_NEWS_LIST_REQUESTED,
  payload: newsList,
})
