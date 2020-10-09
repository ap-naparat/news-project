import React, { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components/macro'
import Container from '@material-ui/core/Container'
import CardList from './components/CardList'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControl from '@material-ui/core/FormControl'
import SearchIcon from '@material-ui/icons/Search'
import { useSelector, useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button'
import { color } from 'theme/color'
import Box from '@material-ui/core/Box'
import Search from './components/Search'
import { getNewsList } from './redux'

const ContainerWrapper = styled(Container)`
  @media(max-width: 960px) {
    padding: 0;
    margin: 5px 0;
  }
`

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
}));
function News () {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const { lang } = useSelector(state => state.app)
  const { newsList } = useSelector(state => state.news)
  const [values, setValues] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [listToShow, setListToShow] = useState([])
  const listPerPage = 15
  const ref = useRef(listPerPage)
  let arrayForHoldingPosts = []

  useEffect(() => {
    dispatch(getNewsList())
  }, [dispatch])
  
  const handleChange = (event) => {
    setValues(event.target.value)
  }

  const loopWithSlice = (start, end) => {
    const newsListData = newsList?.data
    const slicedPosts = newsListData?.slice(start, end)
    arrayForHoldingPosts = [...listToShow, ...slicedPosts]
    setListToShow(arrayForHoldingPosts)
  }

  const handleLoadMore = () => {
    loopWithSlice(ref.current, ref.current + listPerPage)
    ref.current += listPerPage
  }

  useEffect(() => {
    if(values !== '') {
      const results = newsList?.data?.filter(item => {
        return item?.[`title_${lang}`].toLowerCase().includes(values)
      })
      setSearchResults(results)
    }
  }, [lang, values, newsList])

  useEffect(() => {
    if (newsList?.data) {
      loopWithSlice(0, listPerPage)
    }
  }, [newsList])

  const isSearch = searchResults?.length > 0 ? searchResults : listToShow

  return (
    <ContainerWrapper maxWidth="lg">
      <FormControl fullWidth className={classes.margin} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-amount">{t('common.search')}</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          value={values}
          onChange={handleChange}
          startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
          labelWidth={60}
        />
      </FormControl>
      <Grid container spacing={3}>
        {isSearch?.map((item) => {
          return (
            <Grid item md={4} xs={12} key={item.id}>
              <CardList 
                href={`/news/${item.id}`}
                image={item.image}
                title={item?.[`title_${lang}`]}
                desc={item?.desc_en}
                date={item.update_at}
              />
            </Grid>
          )
        })}
      </Grid>
      {listToShow.length > 0 &&
        <Box textAlign="center">
          <Button variant="outlined" onClick={handleLoadMore} color={color.black}>
            {t('common.loadmore')}
          </Button>
        </Box>
      }
      
    </ContainerWrapper>
  )
}

export default News