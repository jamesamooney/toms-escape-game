import { render, screen, cleanup } from '@testing-library/react'
import {PowerSwitch} from '../components/level-items/PowerSwitch'

afterEach(cleanup)

it('renders on the page', () => {
  render(<PowerSwitch />);
  expect(screen.getByTestId('power-switch')).toBeInTheDocument()
})
