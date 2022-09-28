/* eslint-disable jsx-a11y/anchor-is-valid */
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { PaginationProps } from '../@types';

const PaginationContainer = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  margin: 2rem 0;
  border: 2px solid rgba(255, 255, 255, 1);
  border-radius: 10px;
  font-size: 14px;
  & > * {
    margin: 0;
    padding: 15px 30px;
    border-right: 2px solid rgba(255, 255, 255, 1);
    &:last-child {
      border-right: 0;
    }
  }
  @media only screen and (max-width: 600px) {
    font-size: 11px;
    & > * {
      padding: 12px 14px;
    }
  }
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => 'palevioletred'};
  color: ${(props) => 'white'};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Pagination: FunctionComponent<PaginationProps> = ({ page, count }) => {
  const perPage = 10;
  const pageCount: number = Math.ceil(count / perPage);

  console.log(page, 'dfdf');

  return (
    <PaginationContainer>
      <div>
        <div>
          Sovtech - Page {page} of {pageCount}
        </div>
      </div>
      <Link href={`/?page=${page - 1}`}>
        <Button disabled={page <= 1}>Prev</Button>
      </Link>
      <p>
        Page {page} of {pageCount}
      </p>
      <p>{count} People Total</p>
      <Link href={`/?page=${page + 1}`}>
        <Button disabled={page >= pageCount}>Next</Button>
      </Link>
    </PaginationContainer>
  );
};

export default Pagination;
