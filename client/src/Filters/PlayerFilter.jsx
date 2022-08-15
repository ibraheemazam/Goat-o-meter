import React, { useState } from 'react';
import {
  Box, FormControl, Input, Select, Button, Modal, ModalContent, ModalOverlay, ModalBody, useToast
} from '@chakra-ui/react';
import axios from 'axios';

function PlayerFilter({ setInfoArr }) {
  const allSeasons = [...Array(22).keys()];
  const [player, setPlayer] = useState();
  const [seasonP, setSeasonP] = useState();
  // const [showAlert, setShowAlert] = useState(false);
  // need to add color as prop to fix dumb select thing
  const toast = useToast();

  function handleSubmit(e) {
    e.preventDefault();
    axios.get('/playerStats', {
      params: {
        player,
        season: seasonP,
      },
    })
      .then((result) => {
        const currPlayer = result.data[0];
        if (currPlayer) {
          setInfoArr((prevArr) => {
            const idArr = [];
            prevArr.forEach((playerInfo) => { idArr.push(playerInfo.player_id); });
            if (idArr.includes(currPlayer.player_id)) {
              toast({
                title: 'Player already added',
                duration: 2000,
              });
              return prevArr;
            }
            toast({
              title: 'Player added',
              duration: 2000,
              status: 'success',
            });
            return prevArr.concat(currPlayer);
          });
        } else {
          return toast({
            title: 'that player was not found',
            duration: 1000,
          });
        }
      });
  }

  return (
    <Box m="3vw" mb="2vw" h="15vh">
      {/* <Button
        onClick={() =>
          toast({
            title: 'Account created'
          })
        }
      >
        Show toast
      </Button> */}
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
          Add player
        </Button>
      </form>
    </Box>
  );
}

export default PlayerFilter;
