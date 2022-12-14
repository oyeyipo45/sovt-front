import { FunctionComponent } from 'react';
import { Person } from '../@types';
import styled from 'styled-components';
import Link from 'next/link';

export const Container = styled.div`
  box-shadow: #0070f3 0px 1px 2px 0px;
  padding: 1.5rem 1rem;
  margin-top: 2rem;
  width: 13rem;
  border-radius: 0.5rem;
  background-color: white;
  cursor: pointer;
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


const People: FunctionComponent<{ data: [Person] }> = ({ data }) => {

  return (
    <>
      <Box>
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
      </Box>
    </>
  );
};

export default People;
