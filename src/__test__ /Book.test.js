import { render, screen, cleanup } from '@testing-library/react'
import {Book} from '../components/level-items/Book'

afterEach(cleanup)

it('is rendered on the page', () => {
  render(<Book />);
  expect(screen.getByRole('book-image')).toBeInTheDocument()
})
