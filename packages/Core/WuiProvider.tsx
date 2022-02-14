import React from 'react'
import { ThemeProvider, useTheme as useXstyledTheme } from '@xstyled/styled-components'
import { HideFocusRingsRoot } from '@welcome-ui/utils'

import { WuiTheme } from './theme/types'
import { GlobalStyle } from './utils/base'

export interface WuiProviderProps {
  hasGlobalStyle?: boolean
  reactRootId?: string
  shouldHideFocusRingOnClick?: boolean
  theme: WuiTheme
  useReset?: boolean
}

export const WuiProvider: React.FC<WuiProviderProps> = ({
  children,
  hasGlobalStyle = true,
  reactRootId = 'root',
  shouldHideFocusRingOnClick = true,
  theme,
  useReset,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        {hasGlobalStyle && <GlobalStyle useReset={useReset} />}
        {shouldHideFocusRingOnClick ? (
          <HideFocusRingsRoot reactRootId={reactRootId}>{children}</HideFocusRingsRoot>
        ) : (
          children
        )}
      </>
    </ThemeProvider>
  )
}

WuiProvider.displayName = 'WuiProvider'

export const useTheme = (): WuiTheme => {
  const theme = useXstyledTheme() as WuiTheme

  if (!theme) {
    throw Error(
      'useTheme: `theme` is undefined. Seems you forgot to wrap your app in <WuiProvider />'
    )
  }

  return theme
}