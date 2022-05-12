import { render, screen, cleanup } from '@testing-library/react'
import {Key} from '../components/level-items/Key'

afterEach(cleanup)

it('renders on the page', () => {
  render(<Key />);
  expect(screen.getByTestId('key')).toBeInTheDocument()
})
