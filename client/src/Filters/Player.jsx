import React, { useState } from 'react';
import {
  Box, Stack, Input, Select,
} from '@chakra-ui/react';
import axios from 'axios';

function PlayerFilter() {
  const allSeasons = [...Array(22).keys()];

  const [players, setPlayers] = useState([]);
  const [seasonP, setSeasonP] = useState(2021);

  // axios.get('https://www.balldontlie.io/api/v1/players', {
  //   params: {
  //     search: 'lebron',
  //   },
  // })
  //   .then((result) => console.log(result.data.data)) //data.data[0] is actual lebron info
  //   .catch((err) => console.log('error retrieving player info from API:\n', err));

  return (
    <div>
      <Stack>
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
      </Stack>
    </div>
  );
}

export default PlayerFilter;
