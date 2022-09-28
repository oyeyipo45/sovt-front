import { FunctionComponent } from 'react';
import Loader from './Loader';
import { useGetPeople } from 'hooks/getPeople';
import Pagination from './Pagination';
import People from './People';

const Home: FunctionComponent<{ page: number }> = ({ page }) => {
  const { loading, data } = useGetPeople(page);

  const people = data?.data;

  return (
    <>
      {people?.length > 0 && <Pagination count={data?.page?.total} page={page} />}

      {loading && <Loader />}
      {data && <People data={people} />}
    </>
  );
};

export default Home;
