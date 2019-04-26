import styled from 'styled-components'

import themeHelpers from '../../theme/helpers'
import { overflowEllipsis } from '../../common/styles/text'

const {
  colors,
  fontWeight,
  boxShadow,
  borderWidth,
  gutter,
  radius,
  textStyles,
  transition
} = themeHelpers

export const InputRadioWrapper = styled.div`
  flex: 1;
`

export const InputRadio = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  opactiy: 0;
`

export const InputRadioLabel = styled.label`
  position: relative;
  cursor: pointer;
  user-select: none;
  display: block;
  padding: ${gutter('xs')};
  padding-right: calc(${gutter('xs')} + ${borderWidth('input')});
  text-align: center;
  background-color: ${colors('bg', 'light')};
  border: ${borderWidth('input')} solid ${colors('border', 'primary')};
  margin-left: -${borderWidth('input')};
  ${textStyles('input')};
  transition: ${transition('sm')};
  line-height: 1;
  ${overflowEllipsis};

  ${InputRadio}:checked + & {
    z-index: 2;
  }
  &:hover,
  ${InputRadio}:checked + & {
    background-color: ${colors('white')};
    box-shadow: ${boxShadow('xs')};
  }

  ${InputRadio}:checked + & {
    border-color: ${colors('primary')};
    font-weight: ${fontWeight('medium')};
  }

  ${InputRadioWrapper}:first-child & {
    border-radius: ${radius('sm')} 0 0 ${radius('sm')};
    margin-left: 0;
  }

  ${InputRadioWrapper}:last-child & {
    border-radius: 0 ${radius('sm')} ${radius('sm')} 0;
    padding-right: ${gutter('xs')};
  }
`
