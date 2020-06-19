import React from 'react'
import { fireEvent, waitForElement } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ConnectedField } from '@welcome-ui/connected-field'
import { Icon } from '@welcome-ui/icon'
import { Shape } from '@welcome-ui/shape'

import { Form, getFormValues } from '../../docz/Form'
import { render } from '../../src/utils/tests'

import { Search } from './index'

const results = [
  { title: 'Big Fish', year: '2003', poster: 'big-fish.jpg' },
  { title: 'A Fish Called Wanda', year: '1988', poster: 'wanda.jpg' },
  { title: 'Food Tank', year: '2009', poster: 'food-tank.jpg' }, // Doesn't match 'fish'
  { title: 'Rumble Fish', year: '1983', poster: 'rumble-fish.jpg' },
  { title: 'Cold Fish', year: '2010', poster: 'cold-fish.jpg' }
]

const defaultProps = {
  itemToString: item => item.Title,
  // eslint-disable-next-line react/display-name
  renderItem: item => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Shape mr="xs" size="sm" width="20px">
        <img src={item.poster} />
      </Shape>
      <span>{item.title}</span>
    </div>
  ),
  search: async function asyncSearch(q) {
    await new Promise(resolve => setTimeout(resolve, 100))
    return results.filter(result => result.title.toLowerCase().indexOf(q) > -1)
  }
}

test('<Search> has default attributes', () => {
  const { container, getByTestId } = render(
    <Form>
      <ConnectedField
        component={Search}
        dataTestId="search"
        label="Search"
        name="search"
        {...defaultProps}
      />
    </Form>
  )
  const search = getByTestId('search')
  const label = container.querySelector('label')

  expect(label).toHaveTextContent('Search')
  expect(search.getAttribute('placeholder')).toBe('Search…')
  expect(search).toHaveTextContent('')
})

test('<Search> shows options when searching', async () => {
  const { getByRole, getByTestId } = render(
    <Form initialValues={{}}>
      <ConnectedField
        component={Search}
        dataTestId="search"
        label="Search"
        name="search"
        {...defaultProps}
      />
    </Form>
  )

  const search = getByTestId('search')
  userEvent.type(search, 'fish')

  const options = await waitForElement(() => getByRole('listbox').querySelectorAll('li'))
  expect(options.length).toBe(4)
  expect(options[0]).toHaveTextContent(results[0].title)
})

test('<Search> can choose option', async () => {
  const { getByRole, getByTestId } = render(
    <Form initialValues={{}}>
      <ConnectedField
        component={Search}
        dataTestId="search"
        label="Search"
        name="search"
        {...defaultProps}
      />
    </Form>
  )

  const search = getByTestId('search')
  userEvent.type(search, 'fish')

  const options = await waitForElement(() => getByRole('listbox').querySelectorAll('li'))
  fireEvent.click(options[1])

  // TODO: Fix this
  // expect(search.value).toEqual(results[1].title)

  const formValues = getFormValues(getByTestId('values'))
  expect(formValues.search).toStrictEqual(results[1])
})

test('<Search> calls onChange with correct (object) values', async () => {
  const handleChange = jest.fn()
  const { getByRole, getByTestId } = render(
    <Form initialValues={{}}>
      <ConnectedField
        component={Search}
        dataTestId="search"
        label="Search"
        name="search"
        {...defaultProps}
        onChange={handleChange}
      />
    </Form>
  )

  const search = getByTestId('search')
  userEvent.type(search, 'fish')

  const options = await waitForElement(() => getByRole('listbox').querySelectorAll('li'))
  fireEvent.click(options[1])

  expect(handleChange).toHaveBeenCalledTimes(1)
  expect(handleChange).toHaveBeenCalledWith(
    results[1],
    expect.objectContaining({
      target: { name: 'search', value: results[1] }
    }) // Ignore preventDefault
  )
})

test('<Search> formats items', async () => {
  const { getByRole, getByTestId } = render(
    <Form initialValues={{ search: 'february' }}>
      <ConnectedField
        component={Search}
        dataTestId="search"
        label="Search"
        name="search"
        {...defaultProps}
      />
    </Form>
  )

  const search = getByTestId('search')
  userEvent.type(search, 'fish')

  const options = await waitForElement(() => getByRole('listbox').querySelectorAll('li'))
  const image = options[0].querySelector('img')

  expect(image.getAttribute('src')).toBe('big-fish.jpg')
})

test.skip('<Search icon> shows icon', () => {
  const { container } = render(
    <Form initialValues={{ search: 'february' }}>
      <ConnectedField
        component={Search}
        dataTestId="search"
        icon={<Icon color="light.100" name="avatar" />}
        label="Search"
        name="search"
        {...defaultProps}
      />
    </Form>
  )

  const icon = container.querySelector('[title="avatar"]')
  expect(icon).toBeInTheDocument()
})

test("<Search> doesn't show list if no results", () => {
  const { getByTestId, queryByRole } = render(
    <Form initialValues={{}}>
      <ConnectedField
        component={Search}
        dataTestId="search"
        label="Search"
        name="search"
        {...defaultProps}
      />
    </Form>
  )

  const search = getByTestId('search')
  userEvent.type(search, 'Fish')

  const options = queryByRole('listbox')
  expect(options).toBeNull()
})
