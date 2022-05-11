import { render, screen, cleanup } from '@testing-library/react'
import {Paper4} from '../components/level-items/Paper4'

afterEach(cleanup)

it('renders on the page', () => {
  render(<Paper4 />);
  expect(screen.getByTestId('paper-4')).toBeInTheDocument()
})
