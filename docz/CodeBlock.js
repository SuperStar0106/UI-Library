import React from 'react'
import { object } from 'prop-types'
import styled from '@xstyled/styled-components'
import { th } from '@xstyled/system'

const StyledCodeBlock = styled.pre`
  font-family: monospace;
  font-size: body1;
  line-height: h4;
  color: nude.700;
  margin-top: xl;
  padding: xl;
  border: 1px solid ${th.color('nude.200')};
  border-radius: sm;
  overflow: auto;
`

export const DoczCodeBlock = ({ children }) => (
  <StyledCodeBlock>
    <code>{JSON.stringify(children, 0, 2)}</code>
  </StyledCodeBlock>
)

DoczCodeBlock.propTypes = {
  children: object
}
