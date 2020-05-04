import React from 'react'

import { render } from '../../src/utils/tests'

import { Accordion } from './index'

const content = 'content'
const title = 'title'

describe('<Accordion>', () => {
  it('should render correctly', () => {
    const { container } = render(<Accordion title={title}>{content}</Accordion>)

    expect(container).toHaveTextContent(content)
    expect(container).toHaveTextContent(title)
  })
})
