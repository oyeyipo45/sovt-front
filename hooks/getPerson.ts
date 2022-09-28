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
        hair_color
        skin_color
        eye_color
        birth_year
        films
        vehicles
        starships
        created
        edited
        url
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
  console.log(data, 'data');

  return {
    loading,
    data: data?.getPerson?.data,
  };
};
