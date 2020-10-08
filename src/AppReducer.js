import Cookies from 'js-cookie'

const SET_THEME = 'SET_THEME'
const SET_LANG = 'SET_LANG'
const SET_PROGRESS_LOADING = 'SET_PROGRESS_LOADING'

const initialState = {
  theme: 'light',
  lang: 'th',
  // isTH: Cookies.get('bitkub_lang') === 'th' ? true : false,
  loading: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        theme: action.payload,
      }
    case SET_LANG:
      return {
        ...state,
        lang: action.payload,
        // isTH: action.payload === 'th',
      }
    case SET_PROGRESS_LOADING:
      return {
        ...state,
        loading: action.payload,
      }
    default:
      return state
  }
}
export default reducer

// action creators
export const setTheme = (theme = 'light') => ({
  type: SET_THEME,
  payload: theme
})

export const setLang = (nextLang = 'th') => ({
  type: SET_LANG,
  payload: nextLang,
})

export const setProgressLoading = isLoading => ({ type: SET_PROGRESS_LOADING, payload: isLoading })
