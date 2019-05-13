import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Navbar from "./components/Nav";
import friends from "./friends.json";


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends: friends,
    selectedFriends: [],
    score: 0,
    topScore: 0,
    resultText: "Click a picture you haven't clicked yet!"
  };

  removeFriend = id => {

    var arr1 = [];
    var sortedFriends = [];
    var selected = this.state.selectedFriends;
    var resultText = "";


    if (selected.includes(id)) {
      resultText = "WRONG!!"
      var newTopScore = 0;
      selected = [];

      if (this.state.score > this.state.topScore) {
        newTopScore = this.state.score;
      }
      else {
        newTopScore = this.state.topScore;
      }

      this.setState({ topScore: newTopScore, score: 0, selectedFriends: selected, resultText:  resultText});

    }
    else {

      resultText = "You chose correctly!!";
      var score = this.state.score + 1;
      var topScore = this.state.topScore;
      if (score > topScore) {
        topScore++;
      }
      selected.push(id);

      this.setState({
        score: score,
        selectedFriends: selected,
        topScore: topScore,
        resultText: resultText
      });
    }

    this.state.friends.map((friend) => {
      return arr1.push(this.state.friends.indexOf(friend));
    });

    //randomly shuffle the array using the Fisher-Yates shuffle algorithm
    for (let i = arr1.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr1[i], arr1[j]] = [arr1[j], arr1[i]];
    }

    //reorder the friends array using he randomly shuffled indexes in arr1 array
    arr1.map(item => {
      return sortedFriends.push(this.state.friends[item]);
    })

    this.setState({ friends: sortedFriends });
  };


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
          topScore={this.state.topScore}
          resultText={this.state.resultText}
        />
        <Wrapper>
         <Title></Title>
          {this.state.friends.map(friend => (
            <FriendCard
              removeFriend={this.removeFriend}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
              occupation={friend.occupation}
              location={friend.location}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
