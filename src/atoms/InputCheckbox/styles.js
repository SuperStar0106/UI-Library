import styled, { css } from 'styled-components'

// common form styles
import { fieldTypeStyles } from '../../common/styles/form'

import { get } from '../../theme/helpers'

const checkedStyles = css`
  background-color: ${get('color', 'primary')};
  border-color: ${get('color', 'primary')};
  &::after {
    opacity: 1;
  }
`

export const InputCheckbox = styled.div(
  props => css`
    ${fieldTypeStyles};
    position: relative;
    width: ${get('checkboxSize', 'md')};
    height: ${get('checkboxSize', 'md')};
    padding: 0;
    cursor: pointer;
    order: ${props.order || null};
    border-radius: ${get('radius', 'sm')};
    transition: ${get('transition', 'sm')};

    &::after {
      content: '✓';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      line-height: 1;
      text-align: center;
      color: ${get('color', 'white')};
      opacity: 0;
      transition: ${get('transition', 'sm')};
    }

    ${props.checked && checkedStyles};
  `
)

export default InputCheckbox