import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'

import { overflowEllipsis } from '../../common/styles/text'
import { getMax, getVariantColor, system } from '../../utils/'

const shapeStyles = (size, width, height, shape = 'square') => css`
  ${th(`tags.shape.${shape}.${size}`)}
  width: ${width ? getMax(width, height) : null};
  height: ${height ? getMax(width, height) : null};
  padding: 0;
  border-radius: ${shape === 'circle' && '50%'};
`

export const Tag = styled.div(
  ({ height, length, shape, size, variant, width }) => css`
    ${th('tags.default')};
    ${th(`tags.sizes.${size}`)}
    ${variant !== 'default' && th('tags.variants')};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: ${getVariantColor(variant)};
    border-radius: md;
    ${overflowEllipsis};
    ${system};
    ${(shape || length === 1) && shapeStyles(size, width, height, shape)};
  `
)
