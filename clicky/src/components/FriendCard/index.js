import React from "react";
import "./style.css";


class FriendCard extends React.Component {
  state = {
    id: this.props.id
  };

  handleScore = () => {
    this.setState({id: 1});
    this.props.setScoreCallBack(this.state.id);
  }

  render() {
    return (
      <div className="card" onClick={this.handleScore}>
        <div className="img-container">
          <img src={this.props.image} />
        </div>
        <p>{this.props.id}: {this.props.clicked}</p>
      </div>
    );
  }
}

export default FriendCard;
