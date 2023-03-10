import { StoryThumb } from '../components/StoryThumb';
import { Button, Grid, Box, CircularProgress } from '@mui/material';

import { axiosClient } from '../utils/axios';
import { useEffect, useState } from 'react';

export const HomePage = () => {
  const [data, setData] = useState<Array<number>>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchStories = async () => {
    const res = await axiosClient.get('/newstories.json');
    const sortedIds = res.data.sort((a: number, b: number) => b - a).slice(0, 100);

    setData([...sortedIds]);
    setIsLoading(false);
  };

  useEffect(() => {
    const timer = setInterval(fetchStories, 60000);
    return () => {
      clearInterval(timer);
    };
  });
  useEffect(() => {
    fetchStories();
  }, []);
  const elems = data.map((id) => (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      component="li"
      key={id}
      sx={{ listStyle: 'none', height: '100%' }}
    >
      <StoryThumb id={id}></StoryThumb>
    </Grid>
  ));
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h2>Latest news:</h2>
        <Button variant="outlined" onClick={fetchStories}>
          Refresh
        </Button>
      </Box>
      {isLoading ? (
        <CircularProgress sx={{ margin: 'auto' }}></CircularProgress>
      ) : (
        <Grid container spacing={2} component="ul" p={0} justifyContent="space-between">
          {elems}
        </Grid>
      )}
    </>
  );
};
