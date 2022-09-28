import { useQuery, gql } from '@apollo/client';

const GET_PEOPLE = gql`
  query People($filter: PageFilter) {
    getPeople(filter: $filter) {
      data {
        name
        height
        mass
        gender
        homeworld
      }
      page {
        total
        previous
        next
      }
    }
  }
`;

export const useGetPeople = (page: any) => {
  let { loading, data } = useQuery<any, any>(GET_PEOPLE, { variables: { filter: { page } } });

  return { loading, data: data?.getPeople };
};
