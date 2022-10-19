import React, { FC, ReactNode } from 'react';

interface PaginationBtnProps {
  disabled?: boolean;
  children?: ReactNode
}

const PaginationBtn: FC<PaginationBtnProps> = ({ disabled, children }) => {
  const hoverStates = 'hover:bg-slate-600 hover:text-slate-200';
  const classes = `px-8 py-4 ${disabled ? 'opacity-40' : ''} ${hoverStates}`;

  return (
    <button className={classes} disabled={disabled}>
      {children}
    </button>
  )
};

export const Pagination = () => {
  return (
    <div className="driver-pagination text-xl text-slate-800 flex place-content-center w-full pt-8">
      <div>
        <PaginationBtn disabled={true}>
          <span className="mr-4">&#12296;</span>Previous Page
        </PaginationBtn>

        <PaginationBtn>
          Next Page<span className="ml-4">&#12297;</span>
        </PaginationBtn>
      </div>
    </div>
  )
};

export default Pagination;
