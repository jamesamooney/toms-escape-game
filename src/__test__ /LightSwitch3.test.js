import { render, screen, cleanup } from '@testing-library/react'
import {LightSwitch3} from '../components/level-items/LightSwitch3'

afterEach(cleanup)

it('renders on the page', () => {
  render(<LightSwitch3 />);
  expect(screen.getByRole('light-switch-3-image')).toBeInTheDocument()
})

