import { FunctionComponent } from 'react';
import Loader from './Loader';
import { useGetPeople } from 'hooks/getPeople';
import People from './People';
import Pagination from './Pagination';

const Home: FunctionComponent<{ page: number }> = ({ page }) => {
  const { loading, data, error } = useGetPeople(page);

  const people = data?.data;

  const total = data?.page?.total;

  return (
    <>
      {loading && <Loader />}
      {people?.length > 0 && <Pagination count={total} page={page} />}
      {error && <h1>An error occured</h1>}
      {data && <People data={people} />}
    </>
  );
};

export default Home;
