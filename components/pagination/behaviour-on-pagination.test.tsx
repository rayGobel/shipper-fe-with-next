import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom';

import { Pagination } from './pagination';

describe('<Pagination /> component behaviour', () => {
  it('will call "onChangePage" event', async () => {
    const changePageHandler = jest.fn();
    render(
      <Pagination
        onChangePage={changePageHandler}
        totalPage={2}
        currentPage={1}
      />
    );

    const nextPageBtn = screen.getByTestId('pagination--next-page');

    fireEvent.click(nextPageBtn);

    await waitFor(() => {
      expect(changePageHandler).toBeCalled();
    });

    expect(changePageHandler).toBeCalledWith(2);

  });

  it('will call "onChangePage" event on previous page click', async () => {
    const changePageHandler = jest.fn();
    render(
      <Pagination
        onChangePage={changePageHandler}
        totalPage={2}
        currentPage={2}
      />
    );

    const previousPageBtn = screen.getByTestId('pagination--prev-page');

    fireEvent.click(previousPageBtn);

    await waitFor(() => {
      expect(changePageHandler).toBeCalled();
    });

    expect(changePageHandler).toBeCalledWith(1);
  });

  it('will not call "onChangePage" event disabled buttons', async () => {
    const changePageHandler = jest.fn();
    render(
      <Pagination
        onChangePage={changePageHandler}
        totalPage={1}
        currentPage={1}
      />
    );

    const previousPageBtn = screen.getByTestId('pagination--prev-page');

    fireEvent.click(previousPageBtn);

    await waitFor(() => {
      expect(changePageHandler).not.toBeCalled();
    });

    const nextPageBtn = screen.getByTestId('pagination--next-page');

    fireEvent.click(nextPageBtn);

    await waitFor(() => {
      expect(changePageHandler).not.toBeCalled();
    });
  });
});
