import React from 'react'
import styled from 'styled-components'

const Container = styled.li`
  width: 50%;
  margin-bottom: 16px;
  @media (min-width: 768px) {
    width: 33.3%;
  }
`

const Link = styled.a`
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
`

const Icon = styled.img`
  height: 20px;
  margin-right: 10px;
`

const ListItem = ({name, url, icon}) => (
  <Container>
    <Link href={url}>
      <Icon src={icon || '/icons/link.svg'} alt={`${name} Icon`} />
      <span>{name}</span>
    </Link>
  </Container>
)

export default ListItem