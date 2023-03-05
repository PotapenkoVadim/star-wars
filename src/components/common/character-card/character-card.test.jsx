import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CharacterCard from './index';

const character = {
  birth_year: '19BBY',
  eye_color: 'blue',
  gender: 'male',
  hair_color: 'blond',
  name: 'Luke Skywalker',
  skin_color: 'fair'
};

const handleClick = jest.fn();

describe('Character card', () => {
  test('Renders the information correctly', () => {
    render(<CharacterCard character={character} handleClick={handleClick} />);

    expect(screen.getByText(/luke skywalker/i)).toBeInTheDocument();
    expect(screen.getByText(/19BBY/i)).toBeInTheDocument();

    expect(screen.queryByText(/C-3PO/i)).toBeNull();
    expect(screen.queryByText(/unknown/i)).toBeNull();
    expect(screen.queryByText(/n\/a/i)).toBeNull();
  });

  test('Correct operation of onClick', () => {
    render(<CharacterCard character={character} handleClick={handleClick} />);

    userEvent.click(screen.getByTestId('charactercard'));
    handleClick.mockReturnValue(character);

    expect(handleClick).toHaveBeenCalled();
    expect(handleClick()).toBe(character);
  });

  test('Match snapshot', () => {
    const { container } = render(<CharacterCard character={character} handleClick={handleClick} />);

    expect(container).toMatchSnapshot();
  });
});