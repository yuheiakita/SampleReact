import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from '../../components/Burger/Burger';

class BugerBulider extends Component {
  render() {
    return (
      <Aux>
        <div>
          <Burger />
          <div>Build Controls</div>
        </div>
      </Aux>
    );
  }
}

export default BugerBulider;
