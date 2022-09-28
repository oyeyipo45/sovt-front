/* eslint-disable jsx-a11y/anchor-is-valid */
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { PaginationProps } from '../@types';
import utilStyles from '../styles/utils.module.css'

const PaginationContainer = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  margin: 2rem 0;
  border: 2px solid #0070f3;
  border-radius: 10px;
  font-size: 14px;
  & > * {
    margin: 0;
    padding: 15px 30px;
    border-right: 2px solid #0070f3;
    border-left: 2px solid #0070f3;
    &:last-child {
      border-right: 0;
    }
  }
  @media screen and (max-width: 600px) {
    font-size: 11px;
    & > * {
      padding: 12px 14px;
    }
  }
`;

const Button = styled.button`
  color: ${(props) => 'white'};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #0070f3;
  background-color : #0070f3;
  border-radius: 3px;
`;

const Pagination = ({ page, count }) => {
  const perPage = 10;
  const pageCount: number = Math.ceil(count / perPage);

  return (
    <PaginationContainer>
      <Link href={`/?page=${page - 1}`}>
        <Button disabled={page <= 1}>Prev</Button>
      </Link>
      <p>
        Page <span className={utilStyles.bold}>{page}</span> of <span className={utilStyles.bold}>{pageCount}</span>
      </p>
      <p>
        Total of <span className={utilStyles.bold}>{count}</span> People
      </p>
      <Link href={`/?page=${page + 1}`}>
        <Button disabled={page >= pageCount}>Next</Button>
      </Link>
    </PaginationContainer>
  );
};

export default Pagination;
