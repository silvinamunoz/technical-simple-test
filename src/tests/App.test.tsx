import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import App from '../App';

describe('<App />', () => {
  // test('should work', () => {
  //   render(<App />);
  //   expect(screen.getByText("Prueba tecnica")).toBeDefined();
  // })

  test('should add new item and remove it', async () => {
    const user = userEvent.setup();
    render(<App />);
    // screen.debug();
    // buscar el input
    const input = screen.getByRole('textbox'); // role por default del input
    expect(input).toBeDefined();

    //buscar el form
    const form = screen.getByRole('form');
    expect(form).toBeDefined();

    // buscar el boton para agregar
    const button = form.querySelector('button');
    expect(button).toBeDefined();

    // escribir en el input
    const randomText = crypto.randomUUID();
    await user.type(input, randomText);
    if (button) await user.click(button);

    //asegurar que el elemento se ha agregado
    const list = screen.getByRole('list');
    expect(list).toBeDefined();
    expect(list.childNodes.length).toBe(1);

    // asegurarnos que lo podemos borrar
    const item = screen.getByText(randomText);
    expect(item).toBeDefined();
    const deleteButton = item.querySelector('button');

    await user.click(deleteButton!);

    const noResults = screen.getByText('There are no elements in the list')
    expect(noResults).toBeDefined();
  })
})