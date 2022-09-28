import { useQuery, gql } from '@apollo/client';

const GET_PERSON = gql`
  query Person($search: String) {
    getPerson(search: $search) {
      data {
        name
        mass
        gender
        height
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

export const useGetPerson = (personName: any) => {
  let { loading, data } = useQuery<any, any>(GET_PERSON, { variables: { search: personName } });

  return {
    loading,
    data: data?.getPerson?.data,
  };
};
