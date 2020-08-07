import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Navbar from '../Navbar/Navbar';

describe("Toggle classes in <Hamburger /> button onClick", () => {
  it("returns className 'hamburger' as defult", async () => {
    const { getByTestId } = render(<Navbar />);
    const hamburger = getByTestId('hamburger');

    expect(hamburger).toHaveClass('hamburger');
  });

  it("returns className 'hamburger hamburger--active' after onClick event", async () => {
    const { getByTestId } = render(<Navbar />);
    const hamburger = getByTestId('hamburger');

    fireEvent.click(hamburger);
    const hamburgerAfterClick = await waitFor(() => getByTestId('hamburger'));

    expect(hamburgerAfterClick).toHaveClass('hamburger hamburger--active');
  });

  it("returns className 'hamburger' after another onClick event", async () => {
    const { getByTestId } = render(<Navbar />);
    const hamburger = getByTestId('hamburger');

    fireEvent.click(hamburger);
    fireEvent.click(hamburger);
    const hamburgerAfterClick = await waitFor(() => getByTestId('hamburger'));

    expect(hamburgerAfterClick).toHaveClass('hamburger');
  });
});

describe("Toggle classes in <NavMenu /> after click on <Hamburger />", () => {
  it("returns className 'nav__menu' as defult", async () => {
    const { getByTestId } = render(<Navbar />);
    const navMenu = getByTestId('navMenu');

    expect(navMenu).toHaveClass('nav__menu');
  });

  it("returns className 'nav__menu nav__menu--active' after onClick event", async () => {
    const { getByTestId } = render(<Navbar />);
    const hamburger = getByTestId('hamburger');

    fireEvent.click(hamburger);
    const navMenuAfterClick = await waitFor(() => getByTestId('navMenu'));

    expect(navMenuAfterClick).toHaveClass('nav__menu nav__menu--active');
  });

  it("returns className 'nav__menu' after another onClick event", async () => {
    const { getByTestId } = render(<Navbar />);
    const hamburger = getByTestId('hamburger');

    fireEvent.click(hamburger);
    fireEvent.click(hamburger);
    const navMenuAfterClick = await waitFor(() => getByTestId('navMenu'));

    expect(navMenuAfterClick).toHaveClass('nav__menu');
  });
});