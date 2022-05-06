import { render, screen, cleanup } from '@testing-library/react'
import {Light} from '../components/level-items/Light'

afterEach(cleanup)

it('renders on the page', () => {
  render(<Light />);
  expect(screen.getByRole('light-image')).toBeInTheDocument()
  expect(screen.getByRole('light-image-2')).toBeInTheDocument()
  expect(screen.getByRole('light-image-3')).toBeInTheDocument()
})
