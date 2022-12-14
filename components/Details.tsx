import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import styled from 'styled-components';
import { useGetPerson } from 'hooks/getPerson';
import Link from 'next/link';
import { useRouter } from 'next/router';
import People from './People';

export const Container = styled.div`
  box-shadow: #0070f3 0px 1px 2px 0px;
  padding: 1.5rem 1rem;
  margin-top: 2rem;
  width: 13rem;
  border-radius: 0.5rem;
  background-color: white;
  @media screen and (max-width: 600px) {
    padding: 1.5rem 0.5rem;
    margin-top: 1rem;
    margin-right: auto;
    margin-left: auto;
  }
`;

export const Title = styled.h1`
  font-size: 16px;
  margin: 0;
  margin-bottom: 8px;
  color: #black;
  a {
    color: #black;
  }
  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`;

const Button = styled.button`
  color: ${(props) => 'white'};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #0070f3;
  background: ${(props) => '0070f3'};
  border-radius: 3px;
`;

export const Box = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1.5rem;

  @media screen and (max-width: 750px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1.5rem;
  }

  @media screen and (max-width: 500px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 1.5rem;
  }
`;

const Details = () => {
  const router = useRouter();

  const { name } = router.query;

  const [person, setPerson] = useState([]);

  const { loading, data , error} = useGetPerson(name);

  useEffect(() => {
    if (data) {
      setPerson(data?.person);
    }
  }, [data]);

  return (
    <>
      <>
        {data?.length > 0 && (
          <>
            <Button>
              <Link href={'/?page=1'} className='link'>Go To Home</Link>
            </Button>
          </>
        )}
        {error && <h1>An Error Occured</h1>}
        {loading && <Loader />}
        {data && <People data={data} />}
      </>
    </>
  );
};

export default Details;
