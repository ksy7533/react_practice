import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import NewsItem from "./NewsItem";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = () => {
  const [articles, setArticles] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=kr&apiKey=b9da5dc4df844d2b9586ae7dd28ebf39"
        );
        setArticles(response.data.articles);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <NewsListBlock>isLoading....</NewsListBlock>;
  }

  if (!articles) {
    // 첫번째 렌더링시 articles값이 null이므로 처리해줘야한다
    return null;
  }

  return (
    <NewsListBlock>
      {articles.map(article => (
        <NewsItem article={article} key={article.url} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
