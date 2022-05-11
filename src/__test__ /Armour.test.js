import { render, screen, cleanup } from '@testing-library/react'
import {Armour} from '../components/level-items/Armour'

afterEach(cleanup)

it('is rendered on the page', () => {
  render(<Armour />);
  expect(screen.getByTestId('armour')).toBeInTheDocument()
})
