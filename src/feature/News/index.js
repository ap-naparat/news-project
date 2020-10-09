import React, { useState } from 'react'
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
import { useSelector } from 'react-redux'

const ContainerWrapper = styled(Container)`
  @media(max-width: 960px) {
    padding: 0;
    margin: 5px 0;
  }
`

export const newsList = [
  {
    id: '1',
    title_en: 'Title',
    title_th: 'สวัสดีจ้า',
    desc_en: 'hello world',
    desc_th: 'สวัสดีชาวโลก',
    date: '22 October 2020'
  },
  {
    id: '2',
    title_en: 'Title',
    title_th: 'สวัสดีจ้า',
    desc_en: 'hello world',
    desc_th: 'สวัสดีชาวโลก',
    date: '22 October 2020'
  },
  {
    id: '3',
    title_en: 'Title',
    title_th: 'สวัสดีจ้า',
    desc_en: 'hello world',
    desc_th: 'สวัสดีชาวโลก',
    date: '22 October 2020'
  },
  {
    id: '4',
    title_en: 'Title',
    title_th: 'สวัสดีจ้า',
    desc_en: 'hello world',
    desc_th: 'สวัสดีชาวโลก',
    date: '22 October 2020'
  }
]

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
  const { lang } = useSelector(state => state.app)
  const [values, setValues] = useState({
    news: '',
  })
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  }
  return (
    <ContainerWrapper maxWidth="lg">
      <FormControl fullWidth className={classes.margin} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          value={values.news}
          onChange={handleChange('Search')}
          startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
          labelWidth={60}
        />
      </FormControl>
      <Grid container spacing={3}>
        {newsList?.map((item, index) => {
          return (
            <Grid item md={4} xs={12} key={item.id}>
              <CardList 
                href={`/news/${item.id}`}
                title={item?.[`title_${lang}`]}
                desc={item.desc}
                date={item.date}
              />
            </Grid>
          )
        })}
      </Grid>
    </ContainerWrapper>
  )
}

export default News