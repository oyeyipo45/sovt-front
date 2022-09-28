import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import { Person } from '../@types';
import styled from 'styled-components';
import { useGetPerson } from 'hooks/getPerson';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const Container = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  padding: 1.5rem 1rem;
  margin-top: 2rem;
  width: 13rem;
  border-radius: 0.5rem;
  background-color: white;
  @media only screen and (max-width: 600px) {
    padding: 1.5rem 0.5rem;
    margin-top: 1rem;
  }
`;

export const Title = styled.h1`
  font-size: 18px;
  margin: 0;
  margin-bottom: 8px;
  color: #b26c10;
  a {
    color: #b26c10;
  }
  @media only screen and (max-width: 600px) {
    font-size: 16px;
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

const Details = () => {

  const router = useRouter();
    
  const { name } = router.query;

  const personName = name;

  const [person, setPerson] = useState([]);

  const { loading, data } = useGetPerson(personName);

  useEffect(() => {
    if (data) {
      setPerson(data?.person);
    }
  }, [data]);

  return (
    <>
      {data?.length > 0 && (
        <>
          <Button>
            <Link href={'/?page=1'}>Go To Home</Link>
          </Button>
          <div>Details</div>
        </>
      )}
      {loading && <Loader />}
      {data &&
        data?.map((person: Person, index: any) => (
          <Link href={`/details/${person.name}`} key={index}>
            <Container>
              <Title>Name: {person.name}</Title>
              <Title>
                Gender: <span>{person.gender}</span>
              </Title>
              <Title>
                Mass: <span>{person.mass}</span>
              </Title>
              <Title>
                Height: <span>{person.height}</span>
              </Title>
              <Title>
                Mass: <span>{person.mass}</span>
              </Title>
            </Container>
          </Link>
        ))}
    </>
  );
};

export default Details;
