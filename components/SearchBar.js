import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
  height: 36px;
  background-color: #fff !important;
  padding: 10px;
  border-radius: 6px;
  border: none;
  max-width: 100%;
  width: 500px;
  font-size: 16px;
  margin-bottom: 20px;
`;

export default () => (
  <form target="_blank" action="https://duckduckgo.com/">
    <Input name="q" type="text" placeholder="Search..." />
  </form>
)
