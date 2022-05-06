import { render, screen, cleanup } from '@testing-library/react'
import {Door} from '../components/level-items/Door'

afterEach(cleanup)

it('first appears on the page closed', () => {
  render(<Door />);
  expect(screen.getByRole('door-closed-image')).toBeInTheDocument()
})

