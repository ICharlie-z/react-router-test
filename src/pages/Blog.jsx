import { useEffect } from "react";
import { useFetch } from "../hooks/useFecth";
import { Link, useSearchParams } from "react-router-dom";
const Blog = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const [searchParams, setSearchParams] = useSearchParams();

  //   useEffect(() => {
  //     console.log(searchParams);
  //     setSearchParams({ filter: "alo2" });
  //   }, [searchParams]);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error...</p>;

  const handleChange = (e) => {
    console.log("Change");
    if (e.target.value) {
      setSearchParams({ filter: e.target.value });
    } else {
      setSearchParams({});
    }
  };
  return (
    <>
      <h1>Blog</h1>
      <input
        type="text"
        name=""
        onChange={handleChange}
        className="form-control my-3"
        value={searchParams.get("filter") || ""}
      />
      <ul className="list-group">
        {data
          .filter((item) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = item.title.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((item) => (
            <li key={item.id} className="list-group-item">
              <Link to={`/blog/${item.id}`}>
                {item.id} - {item.title}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};
export default Blog;
