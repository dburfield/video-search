import React from "react";
import SearchBar from './SearchBar'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <header>
          <h2>Search Videos</h2>
        </header>
        <article>
            <SearchBar />
        </article>
      </div>
    );
  }
}

export default App;
