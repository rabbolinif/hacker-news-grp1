const News = ({ news }) => {
    return (
      <ul>
        {news &&
          news.map((el) => {
            return <div>
                <li key={el.objectID}>{<a href={el.url}>{el.title}</a>} 
                <br></br>- by {el.author}</li><p></p>
            </div>
          })}
      </ul>
    );
  };
  
  export default News;
  