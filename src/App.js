import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";
import HomeBanner from "./HomeBanner";
import Scroll_component from "./Scroll_component";
import Faq from "./Faq";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import SignIn from "./SignIn";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Nav />
                <HomeBanner />
                <Scroll_component
                  title={"Enjoy on your TV"}
                  paragraph={
                    "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more"
                  }
                  image={
                    "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                  }
                />
                <Scroll_component
                  title={"Download your shows to watch offline"}
                  paragraph={
                    "Save your favourites easily and always have something to watch.."
                  }
                  image={
                    "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                  }
                />

                <Scroll_component
                  title={"Watch everywhere"}
                  paragraph={
                    "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV"
                  }
                  image={
                    "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
                  }
                />
                <Scroll_component
                  title={"Create profiles for kids"}
                  paragraph={
                    "Send children on adventures with their favourite characters in a space made just for them—free with your membership."
                  }
                  image={
                    "https://occ-0-4875-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d"
                  }
                />
                <Faq />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
          <Route
            path="/banner"
            element={
              <>
                <Banner />
                <Row
                  title="NETFLIX ORIGINALS"
                  fetchUrl={requests.fetchTrending}
                  isLargeRow
                />
                <Row
                  title="Trending Now"
                  fetchUrl={requests.fetchNetflixOriginals}
                />
                <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />

                <Row
                  title="Action Movies"
                  fetchUrl={requests.fetchActionMovies}
                />

                <Row
                  title="Comedy Movies"
                  fetchUrl={requests.fetchComedyMovies}
                />

                <Row
                  title="Horror Movies"
                  fetchUrl={requests.fetchHorrorMovies}
                />

                <Row
                  title="Romance Movies"
                  fetchUrl={requests.fetchRomanceMovies}
                />
                <Row
                  title="Documnentaries"
                  fetchUrl={requests.fetchDocumentaries}
                />
              </>
            }
          />

          {/* {nav} */}

          {/* banner */}
          {/* <HomeBanner/>
        <Scroll_component title={"Enjoy on your TV"} paragraph={"Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more"} image={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"}/>
        <Scroll_component title={"Download your shows to watch offline"} paragraph={"Save your favourites easily and always have something to watch.."} image={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"}/>

        <Scroll_component title={"Watch everywhere"} paragraph={"Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV"} image={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"}/>
        <Scroll_component title={"Create profiles for kids"} paragraph={"Send children on adventures with their favourite characters in a space made just for them—free with your membership."} image={"https://occ-0-4875-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d"}/>
      <Faq/> */}
        </Routes>
      </Router>
      {/* <Banner/>
      
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchTrending} isLargeRow/>
      <Row title="Trending Now" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />

      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />

      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />

      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />

      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documnentaries" fetchUrl={requests.fetchDocumentaries} /> */}
    </div>
  );
}

export default App;
// https://api.themoviedb.org/3/movie/550?api_key=db2c5357acea5cf690080a5d18d2881c
