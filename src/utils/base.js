import { createGlobalStyle, css } from '@xstyled/styled-components'
import { getColor, getFont } from '@xstyled/system'
import { normalize } from 'polished'

import { fonts } from './font'

function getFontFamilies(...fonts) {
  return fonts.filter(Boolean).join(', ')
}

const baseBoxSizing = css`
  * {
    &,
    &::before,
    &::after {
      box-sizing: border-box;
    }
  }
`

function baseFonts(props) {
  const texts = getFont('texts')(props)
  const headings = getFont('headings')(props)
  const sansSerif = 'sans-serif'
  return css`
    @media (max-width: 1200px) {
      html {
        font-size: 87.5%;
      }
    }

    @media (max-width: 1300px) and (max-height: 700px) {
      html {
        font-size: 87.5%;
      }
    }

    @media (max-width: 600px) {
      html {
        font-size: 100%;
      }
    }

    body,
    button,
    input,
    select,
    textarea {
      font-family: ${getFontFamilies(texts, sansSerif)};
      -webkit-font-smoothing: antialiased;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: ${getFontFamilies(headings, texts, sansSerif)};
    }
  `
}

function baseSelection(props) {
  const selectionBgColor = getColor('primary.500')(props) || null
  const selectionColor = getColor('primary.200')(props) || null
  return css`
    ::selection {
      ${selectionBgColor &&
        css`
          background-color: ${selectionBgColor};
        `}
      ${selectionColor &&
        css`
          background-color: ${selectionColor};
        `}
    }
  `
}

export const GlobalStyle = createGlobalStyle`
  ${normalize()}
  ${fonts()}
  ${baseBoxSizing}
  ${baseFonts}
  ${baseSelection}
`
