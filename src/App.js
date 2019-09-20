import React from "react";
import Navigations from "./components/Navigations.js";
import Header from "./components/Header.js";
import { Route } from "react-router-dom";

import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import LocationsList from "./components/LocationsList";
import EpisodeList from "./components/EpisodeList";

export default function App() {
  return (
    <main>
      <Header />
      <Navigations />
      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters" component={CharacterList} />
      <Route path="/locations" component={LocationsList} />
      <Route path="/episodes" component={EpisodeList} />
    </main>
  );
}
