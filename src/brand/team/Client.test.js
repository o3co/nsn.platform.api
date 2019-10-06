import {
  Client,
} from './Client'

test('Link changes the class when hovered', () => {
  const client = new Client()

  expect(client.path('', { brand: 'test' })).toBe('/brands/test/teams')
})
