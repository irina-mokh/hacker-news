import { Card, Typography, Box, CircularProgress } from '@mui/material';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IStory } from '../types';
import { convertUnixTime } from '../utils';
import { axiosClient } from '../utils/axios';
import { styled } from '@mui/system';
import StarBorderIcon from '@mui/icons-material/StarBorder';

type StoryThumbProps = {
  id: number,
};

const initialStory = {
  id: 0,
  title: '',
  by: '',
  time: 0,
  score: 0,
};

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '20px',
  fontSize: '14px',
  minHeight: '170px',
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.secondary,
}));

const StyledTitle = styled(Typography)(() => ({
  flexGrow: '1',
  fontSize: '20px',
  textDecoration: 'none',
  fontWeight: 600,
}));

const StyledText = styled(Typography)(({ theme }) => ({
  fontStyle: 'italic',
  fontWeigh: '600',
  color: theme.palette.primary.main,
}));

const StyledScore = styled(Box)(({ theme }) => ({
  color: theme.palette.secondary.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  fontSize: '16px',
}));

export const StoryThumb = ({ id }: StoryThumbProps) => {
  const [story, setStory] = useState<IStory>(initialStory);

  const { by, time, title, score } = story;
  const fetchStory = async (id: number) => {
    const res = await axiosClient.get(`/item/${id}.json`);
    setStory({ ...res.data });
  };

  useEffect(() => {
    fetchStory(id);
  }, []);

  return (
    <Link to={`/stories/${id}`} style={{ textDecoration: 'none' }}>
      <StyledCard>
        {id && title ? (
          <>
            <StyledTitle variant="h3">{title}</StyledTitle>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <Box>
                <StyledText>{by}</StyledText>
                <Typography color="text.secondary" fontSize={14}>
                  {convertUnixTime(time)}
                </Typography>
              </Box>
              <StyledScore>
                <StarBorderIcon sx={{ mr: '3px' }}></StarBorderIcon>
                {score}
              </StyledScore>
            </Box>
          </>
        ) : (
          <CircularProgress sx={{ margin: 'auto' }}></CircularProgress>
        )}
      </StyledCard>
    </Link>
  );
};
