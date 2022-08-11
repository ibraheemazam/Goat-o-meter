import React, { useState } from 'react';
import {
  Box, FormControl, Input, Select, Button
} from '@chakra-ui/react';
import axios from 'axios';

function PlayerFilter({ setInfoArr }) {
  const allSeasons = [...Array(22).keys()];
  const [player, setPlayer] = useState();
  const [seasonP, setSeasonP] = useState();
  // need to add color as prop to fix dumb select thing

  function handleSubmit(e) {
    e.preventDefault();
    axios.get('/playerStats', {
      params: {
        player,
        season: seasonP,
      },
    })
      .then((result) => {
        console.log('player stats line 22', result.data[0]);
        const currPlayer = result.data[0];
        if (currPlayer) {
          // need to check if player already exist in arr, if so dont add
          setInfoArr((prevArr) => {
            const idArr = [];
            prevArr.forEach((playerInfo) => { idArr.push(playerInfo.player_id); });
            if (idArr.includes(currPlayer.player_id)) {
              console.log('This player was already added');
              return prevArr;
            }
            return prevArr.concat(currPlayer);
          });
        } else {
          console.log('that player was not found');
          setPlayer('Enter player');
          setSeasonP('Enter season');
        }
      });
  }

  return (
    <Box m="3vw" mb="8vw">
      <form onSubmit={(e) => handleSubmit(e)}>
        <Input
          placeholder="Enter a player"
          _placeholder={{ opacity: 0.6, color: 'black' }}
          onChange={(e) => setPlayer(e.target.value)}
        />
        <Select
          onChange={(e) => setSeasonP(e.target.value)}
          placeholder="Select a season"
          color="rgba(0, 0, 0, 0.6)"
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
