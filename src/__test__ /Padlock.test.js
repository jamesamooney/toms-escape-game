import { render, screen, cleanup } from '@testing-library/react'
import {Padlock} from '../components/level-items/Padlock'

afterEach(cleanup)

it('renders on the page', () => {
  render(<Padlock />);
  expect(screen.getByRole('padlock-image')).toBeInTheDocument()
})
