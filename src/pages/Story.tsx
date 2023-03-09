import { axiosClient } from '../utils/axios';
import { useState, useEffect } from 'react';
import { IStoryDetail } from '../types';
import { useParams } from 'react-router-dom';
import { Paper, Box, Link, Typography, Button, Breadcrumbs } from '@mui/material';
import { convertUnixTime } from '../utils';
import { styled } from '@mui/system';
import { Comment } from '../components/Comment';

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

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: '30px',
  flexGrow: '1',
  margin: '10px 0',
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
      console.log('!!new comments!');
      setStory({ ...story, kids: [...res.data.kids] });
    }
  };

  useEffect(() => {
    fetchStory(id);
  }, []);

  const comments = kids
    ? kids.map((id: number) => (
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
      <StyledPaper>
        <Typography variant="h3" sx={{ fontSize: '30px', fontWeight: 600 }}>
          {title}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 4 }}>
          <Box>
            <StyledText>{by}</StyledText>
            <Typography>{convertUnixTime(time)}</Typography>
          </Box>
          <Button variant="outlined">
            <Link href={url} target="_blank" underline="none">
              Source link
            </Link>
          </Button>
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
        <Box component="ul" sx={{ p: 0 }}>
          {comments}
        </Box>
      </StyledPaper>
    </Box>
  );
};
