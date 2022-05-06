import { render, screen, cleanup } from '@testing-library/react'
import {CrumpledOnLvl1} from '../components/level-items/CrumpledOnLvl1'

afterEach(cleanup)

it('is rendered on the page', () => {
  render(<CrumpledOnLvl1 />);
  expect(screen.getByRole('crumpled-image')).toBeInTheDocument()
  expect(screen.getByRole('crumpled-image-2')).toBeInTheDocument()
})
