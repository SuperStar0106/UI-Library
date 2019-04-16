import { css } from 'styled-components'
import get from 'lodash.get'
import concat from 'lodash.concat'

import hexToRGB from './hexToRGB'

export const createHelpers = theme => {
  let helpers = Object.keys(theme).reduce((acc, key) => {
    return {
      ...acc,
      [key]: (...path) => props => {
        if (!props.theme) {
          props = { ...props, theme }
        }
        const value = get(props, ['theme', key, ...path])
        if (process.env.NODE_ENV === 'development' && value === undefined) {
          console.warn(`${key}[${[...path]}] is not available in this theme`)
        }

        return value
      }
    }
  }, {})

  helpers.rgba = (...args) => {
    return props => {
      const opacity = args[args.length - 1]
      const path = args.slice(0, -1)
      const color = get(props, ['theme', 'color', ...path]) || args[0] // Handle rgba('#COFFEE', 0.3)

      return `rgba(${hexToRGB(color)}, ${opacity})`
    }
  }

  helpers.centeredContainerWidth = (...path) => {
    return props => {
      const basename = ['theme', 'centeredContainerWidth']
      const pathname = props.width || (path.length && [...path]) || 'lg'
      return get(props, concat(basename, pathname))
    }
  }

  helpers.textStyles = key => {
    return props => {
      const value = get(props, ['theme', 'text', key])
      const { size, weight, transform, spacing } = value
      return css`
        font-size: ${size ? helpers.fontSize(size) : 'inherit'};
        font-weight: ${weight ? helpers.fontWeight(weight) : 'inherit'};
        text-transform: ${transform ? transform : null};
        letter-spacing: ${spacing ? helpers.letterSpacing(spacing) : null};
      `
    }
  }

  return helpers
}

export default createHelpers
