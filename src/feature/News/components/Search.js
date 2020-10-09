import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControl from '@material-ui/core/FormControl'
import SearchIcon from '@material-ui/icons/Search'
import { useSelector } from 'react-redux'

export const newsList = [
  {
    id: '1',
    title_en: 'Title1',
    title_th: 'สวัสดีจ้า',
    image: 'https://via.placeholder.com/150/333333/FFFFFF?Text=Mock',
    desc_en: 'hello world',
    desc_th: 'สวัสดีชาวโลก',
    date: '22 October 2020'
  },
  {
    id: '2',
    title_en: 'Title2',
    title_th: 'สวัสดีจ้า',
    image: 'https://via.placeholder.com/150/333333/FFFFFF?Text=Mock',
    desc_en: 'hello world',
    desc_th: 'สวัสดีชาวโลก',
    date: '22 October 2020'
  },
  {
    id: '3',
    title_en: 'Titl333e',
    title_th: 'สวัสดีจ้า',
    image: 'https://via.placeholder.com/150/333333/FFFFFF?Text=Mock',
    desc_en: 'hello world',
    desc_th: 'สวัสดีชาวโลก',
    date: '22 October 2020'
  },
  {
    id: '4',
    title_en: 'Title',
    title_th: 'สวัสดีจ้า',
    image: 'https://via.placeholder.com/150/333333/FFFFFF?Text=Mock',
    desc_en: 'hello world',
    desc_th: 'สวัสดีชาวโลก',
    date: '22 October 2020'
  },
  {
    id: '5',
    title_en: 'Title',
    title_th: 'สวัสดีจ้า',
    image: 'https://via.placeholder.com/150/333333/FFFFFF?Text=Mock',
    desc_en: 'hello world',
    desc_th: 'สวัสดีชาวโลก',
    date: '22 October 2020'
  },
  {
    id: '6',
    title_en: 'Title',
    title_th: 'สวัสดีจ้า',
    image: 'https://via.placeholder.com/150/333333/FFFFFF?Text=Mock',
    desc_en: 'hello world',
    desc_th: 'สวัสดีชาวโลก',
    date: '22 October 2020'
  },
  {
    id: '7',
    title_en: 'Title',
    title_th: 'สวัสดีจ้า',
    image: 'https://via.placeholder.com/150/333333/FFFFFF?Text=Mock',
    desc_en: 'hello world',
    desc_th: 'สวัสดีชาวโลก',
    date: '22 October 2020'
  },
  {
    id: '8',
    title_en: 'Title',
    title_th: 'สวัสดีจ้า',
    image: 'https://via.placeholder.com/150/333333/FFFFFF?Text=Mock',
    desc_en: 'hello world',
    desc_th: 'สวัสดีชาวโลก',
    date: '22 October 2020'
  },
  {
    id: '9',
    title_en: 'Title',
    title_th: 'สวัสดีจ้า',
    image: 'https://via.placeholder.com/150/333333/FFFFFF?Text=Mock',
    desc_en: 'hello world',
    desc_th: 'สวัสดีชาวโลก',
    date: '22 October 2020'
  },
  {
    id: '10',
    title_en: 'Title',
    title_th: 'สวัสดีจ้า',
    image: 'https://via.placeholder.com/150/333333/FFFFFF?Text=Mock',
    desc_en: 'hello world',
    desc_th: 'สวัสดีชาวโลก',
    date: '22 October 2020'
  },
  {
    id: '11',
    title_en: 'Title',
    title_th: 'สวัสดีจ้า',
    image: 'https://via.placeholder.com/150/333333/FFFFFF?Text=Mock',
    desc_en: 'hello world',
    desc_th: 'สวัสดีชาวโลก',
    date: '22 October 2020'
  },
  {
    id: '12',
    title_en: 'Title',
    title_th: 'สวัสดีจ้า',
    image: 'https://via.placeholder.com/150/333333/FFFFFF?Text=Mock',
    desc_en: 'hello world',
    desc_th: 'สวัสดีชาวโลก',
    date: '22 October 2020'
  },
  {
    id: '13',
    title_en: 'Title',
    title_th: 'สวัสดีจ้า',
    image: 'https://via.placeholder.com/150/333333/FFFFFF?Text=Mock',
    desc_en: 'hello world',
    desc_th: 'สวัสดีชาวโลก',
    date: '22 October 2020'
  },
  {
    id: '14',
    title_en: 'Title',
    title_th: 'สวัสดีจ้า',
    image: 'https://via.placeholder.com/150/333333/FFFFFF?Text=Mock',
    desc_en: 'hello world',
    desc_th: 'สวัสดีชาวโลก',
    date: '22 October 2020'
  },
  {
    id: '15',
    title_en: 'Title',
    title_th: 'สวัสดีจ้า',
    image: 'https://via.placeholder.com/150/333333/FFFFFF?Text=Mock',
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
function Search (props) {
  const classes = useStyles()
  const { t } = useTranslation()
  const { lang } = useSelector(state => state.app)
  const [values, setValues] = useState('')
  const [searchResults, setSearchResults] = React.useState([])
  
  const handleChange = (event) => {
    setValues(props.value)
  }

  useEffect(() => {
    if(values !== '') {
      const results = newsList?.filter(item => {
        return item?.[`title_${lang}`].toLowerCase().includes(values)
      })
      setSearchResults(results)
    }
  }, [lang, values])

  return (
    <FormControl fullWidth className={classes.margin} variant="outlined">
    <InputLabel htmlFor="outlined-adornment-amount">{t('common.search')}</InputLabel>
      <OutlinedInput
        id="outlined-adornment-amount"
        value={props.value}
        onChange={handleChange}
        startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
        labelWidth={60}
      />
    </FormControl>
  )
}

export default Search