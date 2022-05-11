import { render, screen, cleanup } from '@testing-library/react'
import {Paper2} from '../components/level-items/Paper2'

afterEach(cleanup)

it('renders on the page', () => {
  render(<Paper2 />);
  expect(screen.getByTestId('paper-2')).toBeInTheDocument()
})
