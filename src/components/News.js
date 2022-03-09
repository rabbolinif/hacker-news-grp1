const News = ({ news }) => {
  return (
    <ul>
      {news &&
        news.map((el) => {
          return <li key={el.objectID}>{el.title}</li>;
        })}
    </ul>
  );
};

export default News;
