export const getTags = ({ fontSizes, fontWeights, colors, toRem, space }) => ({
  default: {
    'font-size': fontSizes.meta2,
    'font-weight': fontWeights.bold,
    'line-height': '1em',
    color: colors.nude[800]
  },
  variants: {
    color: colors.light[100]
  },
  sizes: {
    sm: {
      padding: `${toRem(3.5)} ${space.xxs}`
    },
    md: {
      padding: `${toRem(4.5)} ${space.xxs}`
    },
    lg: {
      padding: `${toRem(6.5)} ${space.xs}`,
      'font-size': fontSizes.meta1
    }
  },
  oneCharacter: {
    sm: {
      width: '1.6363em',
      height: '1.6363em'
    },
    md: {
      width: '1.82em',
      height: '1.82em'
    },
    lg: {
      width: '2em',
      height: '2em'
    }
  }
})