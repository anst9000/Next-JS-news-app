import feedStyles from "../../css/Feed.module.css";
import { useRouter } from "next/router";
import { Toolbar } from "../../components/toolbar";

export const Feed = ({ pageNumber, articles }) => {
  const router = useRouter();

  return (
    <div className={feedStyles.pageContainer}>
      <Toolbar />
      <div className={feedStyles.main}>
        {articles.map((article, index) => (
          <div key={index} className={feedStyles.post}>
            <h2 onClick={() => (window.location.href = article.url)}>
              {article.title}
            </h2>
            <p>{article.description}</p>
            {!!article.urlToImage && (
              <img src={article.urlToImage} alt={article.description} />
            )}
          </div>
        ))}
      </div>

      <div className={feedStyles.paginator}>
        <div
          onClick={() => {
            if (pageNumber > 1) {
              router.push(`/feed/${pageNumber - 1}`);
            }
          }}
          className={pageNumber === 1 ? feedStyles.disabled : feedStyles.active}
        >
          Previous Page
        </div>
        <div className={feedStyles.pageNumber}>{pageNumber}</div>
        <div
          onClick={() => {
            if (pageNumber < 5) {
              router.push(`/feed/${pageNumber + 1}`);
            }
          }}
          className={pageNumber === 5 ? feedStyles.disabled : feedStyles.active}
        >
          Next Page
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageNumber = pageContext.query.slug;

  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: {
        articles: [],
        pageNumber: 1
      }
    };
  }

  const url = `https://newsapi.org/v2/top-headlines?country=se&pageSize=5&page=${pageNumber}`;
  // https://newsapi.org/v2/everything?q=keyword&apiKey=
  const apiResponse = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`
    }
  });

  const apiJson = await apiResponse.json();

  const { articles } = apiJson;
  return {
    props: {
      articles,
      pageNumber: Number.parseInt(pageNumber, 10)
    }
  };
};

export default Feed;
