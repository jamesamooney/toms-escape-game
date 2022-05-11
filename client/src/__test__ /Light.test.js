import { render, screen, cleanup } from '@testing-library/react'
import {Light} from '../components/level-items/Light'

afterEach(cleanup)

it('renders on the page', () => {
  render(<Light />);
  expect(screen.getByTestId('light-1')).toBeInTheDocument()
  expect(screen.getByTestId('light-2')).toBeInTheDocument()
  expect(screen.getByTestId('light-3')).toBeInTheDocument()
})
