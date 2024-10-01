import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';

const SearchExercises = () => {
  const [search, setSearch] = useState('');

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList');
      console.log(exercisesData);
    
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '30px' } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You <br />
        Should Know
      </Typography>

      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: '700',
              border: 'none',
              borderRadius: '4px',
            },
            width: { lg: '1170px', xs: '350px' },
          }}
          height="76px"
          value={search} 
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Exercises"
          type="text"
        />
        <Button 
          sx={{ 
            bgcolor: '#3C40C6', 
            color: '#fff', 
            textTransform: 'none', 
            height: '56px', 
            position: 'absolute', 
            right: '0' 
          }} 
          onClick={handleSearch} 
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
}

export default SearchExercises;