import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component.jsx";
import { SearchBox } from "./components/search-box/search-box.component.jsx";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }));
  }

  //Class Method with Arrow Function
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1 className="title">Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;

//Open Weather Map just testing
// const url =
//   "https://api.openweathermap.org/data/2.5/weather?q=" +
//   "manila" +
//   "&units=" +
//   "metric" +
//   "&appid=" +
//   "6c0dc10b6a570b3d44a0bdc8a9bb8a79";
// fetch(url)
//   .then((res) => res.json())
//   .then((items) => console.log(items));

//Clash Royale API
// var myHeaders = new Headers();
// myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImZkNWI4NzU2LTc4MGYtNDMzNy1iMWY5LTM0ODQ4ZjYyMDZhMSIsImlhdCI6MTYwMTU1ODIxNiwic3ViIjoiZGV2ZWxvcGVyLzA4MjYzYWNjLTg4MTUtNTE2Yy0xZDhjLTJjMjY0M2VjOWVhMCIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxMzAuMTA1LjIzNS4xMDIiXSwidHlwZSI6ImNsaWVudCJ9XX0.zqlGF2WNvQEyKLGtaw_DA9862i84ST8HEmffvxFqixLzFKnEi-ic17PUUIh1cU3xtU0z8w5xMiacOuRrEjtg9Q");

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow'
// };

// fetch("https://api.clashroyale.com/v1/players/%23YY8LLJ9R/battlelog", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
