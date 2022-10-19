import React, { FC, ReactNode } from 'react';

interface PaginationBtnProps {
  disabled?: boolean;
  children?: ReactNode
}

export interface PaginationProps {
  totalPage?: number;
  currentPage?: number;
}

const PaginationBtn: FC<PaginationBtnProps> = (props) => {
  const { disabled, children } = props;

  const hoverStates = 'hover:bg-slate-600 hover:text-slate-200';
  const classes = `px-8 py-4 ${disabled ? 'opacity-40' : ''} ${hoverStates}`;

  return (
    <button className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  )
};

export const Pagination: FC<PaginationProps> = (props) => {
  const { totalPage, currentPage } = props;

  const disablePreviousPage = currentPage ? currentPage === 1 : true;
  const disableNextPage = currentPage ? totalPage == currentPage : true;

  return (
    <div data-testid="pagination" className="driver-pagination text-xl text-slate-800 flex place-content-center w-full pt-8">
      <div>
        <PaginationBtn data-testid="pagination--prev-page" disabled={disablePreviousPage}>
          <span className="mr-4">&#12296;</span>Previous Page
        </PaginationBtn>

        <PaginationBtn data-testid="pagination--next-page" disabled={disableNextPage}>
          Next Page<span className="ml-4">&#12297;</span>
        </PaginationBtn>
      </div>
    </div>
  )
};

export default Pagination;
