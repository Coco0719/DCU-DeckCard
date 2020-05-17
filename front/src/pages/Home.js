import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class Home extends Component {
  render() {
    return (
      <div>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        This is Home
      </div>
    )
  }
}

export default Home;