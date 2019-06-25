import React from 'react'

import { Box, Icon } from '../src/index'

export const IconsList = icons => (
  <Box display="flex" flexWrap="wrap">
    {icons.map(icon => (
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        key={icon}
        margin="10px"
        width="120px"
      >
        <Box
          backgroundColor="light.500"
          color="dark.200"
          display="flex"
          justifyContent="center"
          padding="15px 10px"
          width={1}
        >
          <Icon name={icon} size="lg" />
        </Box>
        <Box fontSize="meta1" fontWeight="medium" padding="5px 0" textAlign="center" width={1}>
          {icon}
        </Box>
      </Box>
    ))}
  </Box>
)
