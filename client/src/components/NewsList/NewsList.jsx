import NewsCard from "../NewsCard/NewsCard";
import "./newsList.styles.scss";

const NewsList = ({ articles = [] }) => {
  if (articles.length === 0) {
    return (
      <div className="news-empty">
        <p className="news-empty__text">No stories found in the digest.</p>
      </div>
    );
  }

  return (
    <div className="news-list">
      {articles.map((article, index) => (
        <NewsCard key={article.url || index} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
