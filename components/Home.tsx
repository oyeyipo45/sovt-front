import { FunctionComponent } from 'react';
import Loader from './Loader';
import { useGetPeople } from 'hooks/getPeople';
import People from './People';
import Pagination from './Pagination';

const Home: FunctionComponent<{ page: number }> = ({ page }) => {
  const { loading, data } = useGetPeople(page);

  const people = data?.data;

  const total = data?.page?.total;

  return (
    <>
      {people?.length > 0 && <Pagination count={total} page={page} />}

      {loading && <Loader />}
      {data && <People data={people} />}
    </>
  );
};

export default Home;
