import { Card, Box, Typography, Button } from '@mui/material';
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

const StyledComment = styled('article')(({ theme }) => ({
  fontSize: '18px',
  padding: '10px',
  border: '3px solid transparent',
  borderLeftColor: theme.palette.primary.dark,
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
  console.log(kids);
  return (
    <StyledComment>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography color="primary.main" variant="subtitle1">
          {by}
        </Typography>
        <Typography color="text.secondary">{convertUnixTime(time)}</Typography>
      </Box>
      <Typography>{text}</Typography>
      <Button onClick={toggleSubs} sx={{ fontSize: '12px', marginLeft: 'auto' }}>
        {kids && `Show thread (${kids.length})`}
      </Button>
      {openSubs && kids && (
        <Box sx={{ ml: 3 }}>
          {kids &&
            kids.map((id: number) => (
              <li key={id}>
                <Comment id={id} />
              </li>
            ))}
        </Box>
      )}
    </StyledComment>
  );
};
