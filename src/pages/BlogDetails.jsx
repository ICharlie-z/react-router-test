import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFecth";

const Blogdetails = () => {
  const params = useParams();
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/" + params.id
  );

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error...</p>;
  console.log(params);

  return (
    <>
      <h1>
        {data.id} - {data.title}
      </h1>
      <p>{data.body}</p>
    </>
  );
};
export default Blogdetails;
