import { render, screen } from '@testing-library/react';
import LandingPage from './LandingPage';

describe('render landing page', () => {
  test('render landing page header', () => {
    render(<LandingPage />);
    const header = screen.getByRole('heading', { level: 1 });
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent('This is landing page');

    const allH3 = screen.getAllByRole('heading', { level: 3 });
    expect(allH3[0]).toHaveTextContent(
      'landing page description need to be put here.'
    );
  });

  test('render landing page navigation', () => {
    render(<LandingPage />);
    const allH3 = screen.getAllByRole('heading', { level: 3 });
    expect(allH3[1]).toHaveTextContent('navigation');

    const allList = screen.getAllByRole('list');
    expect(allList).toHaveLength(2);
  });

  test('render landing page main section', () => {
    render(<LandingPage />);
    const allH3 = screen.getAllByRole('heading', { level: 3 });
    expect(allH3[2]).toHaveTextContent('this is main content area');

    const allSectionHeadings = screen.getAllByRole('heading', { level: 4 });
    expect(allSectionHeadings).toHaveLength(4);
    expect(allSectionHeadings[2]).toHaveTextContent(/Products/i);

    const pText =
      'Consectetur ipsum nostrud ea sint anim. Cillum nostrud aliqua cillum proident cillum ex non id qui eiusmod cillum nulla nisi sunt. Duis ea fugiat pariatur pariatur adipisicing voluptate consequat est excepteur aute tempor sint. Tempor tempor est proident laboris laboris dolor labore ea officia excepteur sit ut consectetur. Minim pariatur amet irure eiusmod dolore commodo et irure. Excepteur pariatur est consequat nulla eu labore sint elit nostrud enim aute est. Quis ex excepteur magna anim nulla commodo velit Lorem ad duis sunt fugiat. Do ipsum ea enim adipisicing officia consequat. Nostrud consectetur fugiat elit mollit minim mollit nostrud laboris id. Velit anim exercitation irure dolor. Mollit adipisicing fugiat non nisi occaecat quis labore duis ea tempor ea dolore aliquip minim.';
    const allParagraphs = screen.getAllByText(pText);

    expect(allParagraphs).toHaveLength(3);
    expect(allParagraphs[1]).toHaveTextContent(`${pText}`);
  });

  test('render landing page footer', () => {
    render(<LandingPage />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveTextContent('footer goes here');
  });
});
