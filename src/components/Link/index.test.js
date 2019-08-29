import React from 'react'

import { render } from '../../utils/tests'

import { Link } from './index'

const content = 'Jungle'

describe('<Link>', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<Link>{content}</Link>)
    const button = getByTestId('link')

    expect(button).toHaveTextContent(content)
    expect(button).toHaveStyleRule('color', '#2d2d2d')
  })

  it('should render correctly with a target blank', () => {
    const { getByTestId } = render(<Link target="_blank">{content}</Link>)
    const button = getByTestId('link')

    expect(button).toHaveAttribute('rel', 'noopener noreferrer')
  })
})
