import { render, screen, cleanup } from '@testing-library/react'
import {Paper3} from '../components/level-items/Paper3'

afterEach(cleanup)

it('renders on the page', () => {
  render(<Paper3 />);
  expect(screen.getByTestId('paper-3')).toBeInTheDocument()
})
