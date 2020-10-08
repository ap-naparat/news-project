import React from 'react'
import styled from 'styled-components/macro'
import Container from '@material-ui/core/Container'

const ContainerWrapper = styled(Container)`
  @media(max-width: 960px) {
    padding: 0;
    margin: 5px 0;
  }
`
function Detail () {
  return (
    <ContainerWrapper maxWidth="lg">
      hello
    </ContainerWrapper>
  )
}

export default Detail