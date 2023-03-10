import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { axiosClient } from '../utils/axios';

import { Comment } from '../components/Comment';
import { convertUnixTime } from '../utils';
import { IStoryDetail } from '../types';

import { Paper, Box, Link, Typography, Button, Breadcrumbs, CircularProgress } from '@mui/material';
import { styled } from '@mui/system';

const initialStory = {
  id: 0,
  title: '',
  by: '',
  time: 0,
  score: 0,
  url: '',
  kids: [],
  descendants: 0,
};

const StyledPaper = styled(Paper)(() => ({
  padding: '20px',
  flexGrow: '1',
  margin: '10px 0',
  overflow: 'hidden',
}));

const StyledText = styled(Typography)(({ theme }) => ({
  fontSize: '20px',
  color: theme.palette.primary.main,
}));

export const StoryPage = () => {
  const [story, setStory] = useState<IStoryDetail>(initialStory);
  const id = Number(useParams().id);
  const { by, time, title, descendants, url, kids } = story;

  const fetchStory = async (id: number) => {
    const res = await axiosClient.get(`/item/${id}.json`);
    setStory({ ...res.data });
  };

  const fetchKids = async (id: number) => {
    const res = await axiosClient.get(`/item/${id}.json`);
    if (res.data.kids) {
      setStory({ ...story, kids: [...res.data.kids] });
    }
  };

  useEffect(() => {
    fetchStory(id);
  }, []);

  const comments = kids
    ? kids
        // sort by latest
        .sort((a, b) => b - a)
        .map((id: number) => (
          <li key={id} style={{ listStyle: 'none' }}>
            <Comment id={id} />
          </li>
        ))
    : null;
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
      <Breadcrumbs aria-label="breadcrumb" sx={{ my: 1 }}>
        <Link underline="hover" color="inherit" href="/">
          Back
        </Link>
        <Typography color="text.primary">{title}</Typography>
      </Breadcrumbs>
      {title ? (
        <StyledPaper>
          <Typography variant="h3" sx={{ fontSize: '30px', fontWeight: 600 }}>
            {title}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 4 }}>
            <Button variant="outlined">
              <Link href={url} target="_blank" underline="none">
                Source link
              </Link>
            </Button>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
              <StyledText>{by}</StyledText>
              <Typography>{convertUnixTime(time)}</Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h4" fontSize={22} m={0} color="secondary.main">
              {descendants ? `Comments (${descendants}):` : `No comments found`}
            </Typography>
            <Button
              variant="outlined"
              onClick={() => {
                fetchKids(id);
              }}
            >
              update
            </Button>
          </Box>
          <Paper component="ul" elevation={1} sx={{ p: 0 }}>
            {comments}
          </Paper>
        </StyledPaper>
      ) : (
        <CircularProgress sx={{ margin: 'auto' }}></CircularProgress>
      )}
    </Box>
  );
};
