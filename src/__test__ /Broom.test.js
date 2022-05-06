import { render, screen, cleanup } from '@testing-library/react'
import {Broom} from '../components/level-items/Broom'

afterEach(cleanup)

it('is rendered on the page', () => {
  render(<Broom />);
  expect(screen.getByRole('broom-image')).toBeInTheDocument()
})
