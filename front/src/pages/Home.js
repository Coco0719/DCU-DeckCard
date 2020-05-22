import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import { DeckCardContext } from "./../ApplicationStore";
import { Redirect } from 'react-router'

const Home = () => {
  const { userState } = useContext(DeckCardContext);

  if (userState.authenticated === false) return <Redirect to='/login' />
  return (
    <div>
      <Button variant="contained" color="primary">
        {userState.token}
      </Button>
      {
        console.log(userState)
      }
    </div>
  )
}

export default Home;