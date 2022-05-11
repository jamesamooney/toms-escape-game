import { render, screen, cleanup } from '@testing-library/react'
import {Paper1} from '../components/level-items/Paper1'

afterEach(cleanup)

it('renders on the page', () => {
  render(<Paper1 />);
  expect(screen.getByTestId('paper-1')).toBeInTheDocument()
})
