import { render, screen, cleanup } from '@testing-library/react'
import {LightSwitch1} from '../components/level-items/LightSwitch1'

afterEach(cleanup)

it('renders on the page', () => {
  render(<LightSwitch1 />);
  expect(screen.getByTestId('light-switch-1')).toBeInTheDocument()
})
