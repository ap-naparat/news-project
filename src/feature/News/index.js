import React from 'react'
import styled from 'styled-components/macro'
import Container from '@material-ui/core/Container'
import CardList from './components/CardList'
import Grid from '@material-ui/core/Grid'

const ContainerWrapper = styled(Container)`
  @media(max-width: 960px) {
    padding: 0;
    margin: 5px 0;
  }
`

export const newsList = [
  {
    title: 'Title',
    desc: 'hello world',
    date: '22 October 2020'
  },
  {
    title: 'Title',
    desc: 'hello world',
    date: '22 October 2020'
  },
  {
    title: 'Title',
    desc: 'hello world',
    date: '22 October 2020'
  },
  {
    title: 'Title',
    desc: 'hello world',
    date: '22 October 2020'
  }
]
function News () {
  return (
    <ContainerWrapper maxWidth="lg">
      <Grid container spacing={3}>
        {newsList?.map((item, index) => {
          return (
            <Grid item md={4} xs={12} key={index}>
              <CardList 
                title={item.title}
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