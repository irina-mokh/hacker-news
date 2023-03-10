import { Box, Typography, Button, Paper } from '@mui/material';
import { styled } from '@mui/system';
import { axiosClient } from '../utils/axios';
import { useState, useEffect } from 'react';
import { IComment } from '../types';
import { convertUnixTime } from '../utils';

const initialComment = {
  by: '',
  id: 0,
  kids: [],
  parent: 0,
  text: '',
  time: 0,
};

const StyledComment = styled(Paper)(({ theme }) => ({
  fontSize: '18px',
  padding: '5px 10px',
  border: '3px solid transparent',
  borderLeftColor: theme.palette.primary.dark,
  marginBottom: '10px',
}));

const StyledText = styled(Typography)(({ theme }) => ({
  a: {
    color: theme.palette.text.secondary,
  },
}));

type CommentProps = {
  id: number,
};
export const Comment = ({ id }: CommentProps) => {
  const [comment, setComment] = useState<IComment>(initialComment);

  const [openSubs, setOpenSubs] = useState(false);
  const toggleSubs = () => {
    setOpenSubs((openSubs) => !openSubs);
  };
  const fetchComment = async (id: number) => {
    const res = await axiosClient.get(`/item/${id}.json`);
    setComment({ ...res.data });
  };

  useEffect(() => {
    fetchComment(id);
  }, []);

  const { by, text, time, kids } = comment;
  return (
    <StyledComment>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography color="primary.main" variant="subtitle1">
          {by}
        </Typography>
        <Typography color="text.secondary" fontSize={14}>
          {convertUnixTime(time)}
        </Typography>
      </Box>
      <StyledText dangerouslySetInnerHTML={{ __html: text }}></StyledText>
      {kids && (
        <Button onClick={toggleSubs} sx={{ fontSize: '12px', marginLeft: 'auto' }}>
          {kids && (openSubs ? 'Hide ' : 'Show ') + `thread (${kids.length})`}
        </Button>
      )}
      {openSubs && kids && (
        <Box sx={{ ml: 3 }} component="ul" p={0}>
          {kids &&
            kids.map((id: number) => (
              <li key={id} style={{ listStyle: 'none' }}>
                <Comment id={id} />
              </li>
            ))}
        </Box>
      )}
    </StyledComment>
  );
};
