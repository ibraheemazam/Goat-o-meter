import React, { useState } from 'react';
import {
  Box, FormControl, Input, Select, Button
} from '@chakra-ui/react';
import axios from 'axios';

function PlayerFilter({ setInfoArr }) {
  const allSeasons = [...Array(22).keys()];
  const [player, setPlayer] = useState();
  const [seasonP, setSeasonP] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    const newPInfo = {
      player,
      season: seasonP,
    };
    // first check if player exists, else send an alert saying player does not exist
    axios.get('/playerStats', {
      params: {
        player,
        season: seasonP,
      },
    })
      .then((result) => {
        console.log('player stats line 22', result.data[0]);
        if (result.data[0]) {
          setInfoArr((prevArr) => prevArr.concat(result.data[0]));
        } else {
          console.log('that player was not found');
          setPlayer('Enter player');
          setSeasonP('Enter season');
        }
      })
    // console.log('newPinfo line 19', newPInfo);
  }

  return (
    <Box m="3vw" mb="8vw">
      <form onSubmit={(e) => handleSubmit(e)}>
        <Input
          placeholder="Enter a player"
          onChange={(e) => setPlayer(e.target.value)}
        />
        <Select
          onChange={(e) => setSeasonP(e.target.value)}
          placeholder="Select a season"
        >
          {allSeasons.map((season) => <option key={season}>{2000 + season}</option>)}
        </Select>
        <Button type="submit" loadingText="calculating">
          Add comp
        </Button>
      </form>
    </Box>
  );
}

export default PlayerFilter;
