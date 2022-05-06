import { render, screen, cleanup } from '@testing-library/react'
import {LightSwitch2} from '../components/level-items/LightSwitch2'

afterEach(cleanup)

it('renders on the page', () => {
  render(<LightSwitch2 />);
  expect(screen.getByRole('light-switch-2-image')).toBeInTheDocument()
})
