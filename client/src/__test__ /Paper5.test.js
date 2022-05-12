import { render, screen, cleanup } from '@testing-library/react'
import {Paper5} from '../components/level-items/Paper5'

afterEach(cleanup)

it('renders on the page', () => {
  render(<Paper5 />);
  expect(screen.getByTestId('paper-5')).toBeInTheDocument()
})
