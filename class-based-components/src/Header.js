import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome, {this.props.name}!</p>
      </div>
    );
  }
}

export default Header;
