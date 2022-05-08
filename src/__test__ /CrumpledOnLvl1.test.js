import { render, screen, cleanup } from '@testing-library/react'
import {CrumpledOnLvl1} from '../components/level-items/CrumpledOnLvl1'

afterEach(cleanup)

it('is rendered on the page', () => {
  render(<CrumpledOnLvl1 />);
  expect(screen.getByTestId('crumpled-4')).toBeInTheDocument()
  expect(screen.getByTestId('crumpled-5')).toBeInTheDocument()
})
