import { useEffect } from "react";
import { baseUrl } from "./constants/constants";
import { useQuery } from "@tanstack/react-query";
import NewsList from "./components/NewsList/NewsList";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const App = () => {
  const getNews = async () => {
    try {
      const res = await fetch(`${baseUrl}/api/news`);
      if (!res.ok) {
        throw new Error("somethign went wrong");
      }
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error.message);
    }
  };
  const { data } = useQuery({
    queryKey: ["news"],
    queryFn: getNews,
  });

  return (
    <div>
      <Header />
      <div>{data && <NewsList articles={data} />}</div>
      <Footer />
    </div>
  );
};

export default App;
