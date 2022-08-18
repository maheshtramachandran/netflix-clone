import "./App.css";
import Banner from "./components/Banner/Banner";
import Categories from "./components/Categories/Categories";
import Nav from "./components/Nav/Nav";
import requests from "./constants/requests";

function App() {
  return (
    <div className="app">
      {/* Nav */}
      <Nav />

      {/* banner */}
      <Banner />

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
