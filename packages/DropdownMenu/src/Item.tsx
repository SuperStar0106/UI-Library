import React from 'react'
import { MenuItem, MenuItemProps } from 'reakit/Menu'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

import * as S from './Item.styled'

import { DropdownMenuOptions } from '.'

export type ItemProps = CreateWuiProps<
  'button',
  MenuItemProps & { state: DropdownMenuOptions['state'] }
>

export const Item = forwardRef<'button', ItemProps>(({ as, children, state, ...rest }, ref) => {
  return (
    <MenuItem as={undefined} type="button" {...state} {...rest} ref={ref}>
      {menuItemProps => {
        return (
          <S.Item as={as} {...menuItemProps}>
            {children}
          </S.Item>
        )
      }}
    </MenuItem>
  )
})

Item.displayName = 'Item'
