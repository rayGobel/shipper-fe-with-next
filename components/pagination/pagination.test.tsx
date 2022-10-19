import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom';

import { Pagination } from './pagination';

describe('<Pagination />', () => {
  it('renders pagination component', () => {
    render(<Pagination />);
    const pagination = screen.getByTestId('pagination');
    expect(pagination).toBeInTheDocument();
  });

  it('renders "Previous Page" and "Next Page" buttons', () => {
    render(<Pagination />);
    const previousPageBtn = screen.getByTestId('pagination--prev-page');
    expect(previousPageBtn).toBeInTheDocument();

    const nextPageBtn = screen.getByTestId('pagination--next-page');
    expect(nextPageBtn).toBeInTheDocument();
  });

  it('renders disabled buttons on no totalPage and currentPage', () => {
    render(<Pagination />);
    const previousPageBtn = screen.getByTestId('pagination--prev-page');
    const nextPageBtn = screen.getByTestId('pagination--next-page');

    expect(previousPageBtn).toBeDisabled()
    expect(nextPageBtn).toBeDisabled()
  });

  it('renders correct pagination on one page', () => {
    render(<Pagination totalPage={1} currentPage={1} />);
    const previousPageBtn = screen.getByTestId('pagination--prev-page');
    const nextPageBtn = screen.getByTestId('pagination--next-page');

    expect(previousPageBtn).toBeDisabled()
    expect(nextPageBtn).toBeDisabled()
  });

  it('renders correct pagination on two page where current page is one', () => {
    render(<Pagination totalPage={2} currentPage={1} />);
    const previousPageBtn = screen.getByTestId('pagination--prev-page');
    const nextPageBtn = screen.getByTestId('pagination--next-page');

    expect(previousPageBtn).toBeDisabled()
    expect(nextPageBtn).not.toBeDisabled()
  });

  it('renders correct pagination on two page where current page is two', () => {
    render(<Pagination totalPage={2} currentPage={2} />);
    const previousPageBtn = screen.getByTestId('pagination--prev-page');
    const nextPageBtn = screen.getByTestId('pagination--next-page');

    expect(previousPageBtn).not.toBeDisabled()
    expect(nextPageBtn).toBeDisabled()
  });

  it('renders correct pagination on three page where current page is two', () => {
    render(<Pagination totalPage={3} currentPage={2} />);
    const previousPageBtn = screen.getByTestId('pagination--prev-page');
    const nextPageBtn = screen.getByTestId('pagination--next-page');

    expect(previousPageBtn).not.toBeDisabled()
    expect(nextPageBtn).not.toBeDisabled()
  });
});
