import React, { useState } from 'react';
import {
  Box, FormControl, Input, Select, Button
} from '@chakra-ui/react';
import axios from 'axios';

function PlayerFilter() {
  const allSeasons = [...Array(22).keys()];

  // axios.get('https://www.balldontlie.io/api/v1/players', {
  //   params: {
  //     search: 'lebron',
  //   },
  // })
  //   .then((result) => console.log(result.data.data)) //data.data[0] is actual lebron info
  //   .catch((err) => console.log('error retrieving player info from API:\n', err));

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ players, seasonP });
  }

  return (
    <Box m="3vw" mb="8vw">
      <form onSubmit={(e) => handleSubmit(e)}>
        <Input
          placeholder="Enter a player"
          onChange={(e) => setPlayers([e.target.value])}
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
