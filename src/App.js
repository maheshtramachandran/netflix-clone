import "./App.css";
import Categories from "./components/Categories";
import requests from "./constants/requests";

function App() {
  return (
    <div className="">
      {/* Nav */}

      {/* banner */}

      <div className="">
        {/* Categories */}
        <Categories
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />

        <Categories title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Categories title="Trending" fetchUrl={requests.fetchTrending} />
        <Categories
          title="Action Movies"
          fetchUrl={requests.fetchActionMovies}
        />
        <Categories
          title="Comedy Movies"
          fetchUrl={requests.fetchComedyMovies}
        />
        <Categories
          title="Horror Movies"
          fetchUrl={requests.fetchHorrorMovies}
        />
        <Categories
          title="Romance Movies"
          fetchUrl={requests.fetchRomanceMovies}
        />
        <Categories
          title="Documentaries"
          fetchUrl={requests.fetchDocumentaries}
        />
      </div>
    </div>
  );
}

export default App;
