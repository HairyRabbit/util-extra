import getIconLinkElement from './getIconLinkElement'
import getNodes from './getNodes'

afterEach(() => {
  getNodes('link', document.head).forEach(link => link.remove())
})

test('undefined', () => {
  expect(getIconLinkElement()).toBeUndefined()
})

test('single', () => {
  const link = document.createElement('link')
  link.setAttribute('rel', 'icon')
  document.head.appendChild(link)
  expect(getIconLinkElement()).toBe(link)
})

test('multi', () => {
  const link1 = document.createElement('link')
  link1.setAttribute('rel', 'icon')
  document.head.appendChild(link1)
  const link2 = document.createElement('link')
  link2.setAttribute('rel', 'icon')
  document.head.appendChild(link2)
  expect(getIconLinkElement()).toBe(link2)
})