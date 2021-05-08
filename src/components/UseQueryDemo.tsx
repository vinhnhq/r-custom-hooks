import useFetch from "../hooks/useFetch";

const UseQueryDemo = () => {
  const { loading, error, data = [] } = useFetch(
    "https://hn.algolia.com/api/v1/search?query=react"
  );

  if (error) return <p>Error!</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <ul>
        {data?.hits?.map((item) => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseQueryDemo;
