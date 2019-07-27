import React from "react";
import "./style.css";


class FriendCard extends React.Component {
/*  state = {
    clicked: "Not Clicked"
  };*/

  handleScore = () => {
    //this.setState({id: 1});
    this.props.setScoreCallBack(this.props.id);
  }

  render() {
    return (
      <div className="card" onClick={this.handleScore}>
        <div className="img-container">
          <img src={this.props.image} alt={this.props.name}/>
          <p>{this.props.id} - {this.props.clicked}</p>
        </div>
      </div>
    );
  }
}

export default FriendCard;
