import React, { Component } from "react";
// import React from "react";
import "./App.css";
import Clicky from "./components/Clicky";
import Images from "./components/Images";
import imageList from "./imageList.json";
import Jumbo from "./components/Jumbotron";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Clicky />
//         <Images src={imageList[0].image} alt={imageList[0].name} />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// export default App;

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    imageList,
    count: 0
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const imageListFiltered = this.state.imageList.filter(
      image => image.id !== id
    );
    // Set this.state.friends equal to the new friends array
    this.setState({ imageList: imageListFiltered });
  };

  incrementClick = () => {
    if (this.state.count > 0) {
      this.setState({ count: 0 });
      console.log(this.state.imageList);
    } else {
      this.setState({ count: this.state.count + 1 });
      alert("you clicked " + this.state.count);
    }
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Jumbo counter={this.state.count} />
        {this.state.imageList.map(imageList => (
          <Images
            id={imageList.id}
            key={imageList.id}
            name={imageList.name}
            image={imageList.image}
            incrementClick={this.incrementClick}
          />
        ))}
      </div>
    );
  }
}

export default App;
