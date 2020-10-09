import React from 'react'
import styled from 'styled-components/macro'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'

const ContainerWrapper = styled(Container)`
  @media(max-width: 960px) {
    padding: 0;
    margin: 5px 0;
  }
`

const PaperContent = styled(Paper)`
  min-height: calc(100vh - 165px);
  @media(max-width: 960px) {
    min-height: calc(100vh - 115px);
  }
`
function Detail () {
  return (
    <ContainerWrapper maxWidth="lg">
      <PaperContent elevation={0}>
        hello
      </PaperContent>
    </ContainerWrapper>
  )
}

export default Detail