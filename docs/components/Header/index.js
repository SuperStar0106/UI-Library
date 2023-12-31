import React, { useEffect, useState } from 'react'
import { Box } from '@welcome-ui/box'
import { InformationIcon, MenuIcon } from '@welcome-ui/icons'
import NextLink from 'next/link'
import { Drawer, useDrawerState } from '@welcome-ui/drawer'
import { useModalState } from '@welcome-ui/modal'
import { Button } from '@welcome-ui/button'
import { CrossIcon } from '@welcome-ui/icons'
import { DocSearch } from '@docsearch/react'
import { useRouter } from 'next/router'
import '@docsearch/css'

import { ComponentsList } from '../ComponentsList'
import { Logo } from '../Logo'
import { ThemeHelper } from '../ThemeHelper'

import { ThemeSelector } from './ThemeSelector'
import * as S from './styles'
import { NavBar } from './NavBar'

export const Header = () => {
  const mobileMenuDrawerState = useDrawerState()
  const modalState = useModalState()
  const { pathname } = useRouter()
  const variants = {
    '/': 'gray',
  }
  const variant = variants[pathname]
  const [hasBeenHydrated, setHasBeenHydrated] = useState(false)

  // Workaround for hydration warning UI for Reakit dialog (fix in ariakit 2.0)
  useEffect(() => {
    setHasBeenHydrated(true)
  }, [])

  function openThemeHelper() {
    modalState.show()
  }

  return (
    <S.Header variant={variant}>
      <Box alignItems="center" display="flex">
        <NextLink href="/" passHref>
          <Box alignItems="center" alt="Homepage" as="a" display="flex">
            <Logo h={37} isDark={variant === 'gray'} w={63} />
          </Box>
        </NextLink>
        <Box ml="lg" w={{ xs: 180, md: 220 }}>
          <DocSearch
            apiKey="32543c62b03cbc6b714a873dca1feec4"
            appId="1ZI5OZ0946"
            disableUserPersonalization
            indexName="welcome-ui"
            placeholder="Search the docs"
          />
        </Box>
        <ThemeSelector ml="lg" />
        <Button h={30} ml="xxs" onClick={openThemeHelper} shape="circle" variant="ghost" w={30}>
          <InformationIcon color="light-900" />
        </Button>
      </Box>
      <NavBar display={{ xs: 'none', md: 'flex' }} />
      {hasBeenHydrated && (
        <>
          <Drawer.Trigger
            as={Button}
            display={{ md: 'none' }}
            shape="circle"
            size="sm"
            state={mobileMenuDrawerState}
          >
            {mobileMenuDrawerState.visible ? <CrossIcon /> : <MenuIcon />}
          </Drawer.Trigger>
          <Drawer.Backdrop backdropVisible={false} state={mobileMenuDrawerState}>
            <S.MenuMobileDrawer aria-label="Menu backdrop" state={mobileMenuDrawerState}>
              <NavBar drawerState={mobileMenuDrawerState} isMobileMenu mb="lg" />
              <ComponentsList onClick={() => mobileMenuDrawerState.hide()} />
            </S.MenuMobileDrawer>
          </Drawer.Backdrop>
        </>
      )}
      <ThemeHelper modalState={modalState} />
    </S.Header>
  )
}
