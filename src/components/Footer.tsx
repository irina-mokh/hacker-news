import GitHubIcon from '@mui/icons-material/GitHub';
import { Link, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledFooter = styled('footer')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  padding: '10px 0',
  height: '50px',
  fontSize: '14px',
  color: theme.palette.text,
  backgroundColor: theme.palette.background.paper,
}));

const StyledGH = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  color: 'inherit',
  ':hover': {
    color: theme.palette.primary.main,
  },
  ':active': {
    color: theme.palette.primary.dark,
  },
}));

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledGH href="https://github.com/irina-mokh" target="_blank">
        <GitHubIcon sx={{ marginRight: '5px' }}></GitHubIcon>
        irina-mokh
      </StyledGH>
      <Typography>2023</Typography>
    </StyledFooter>
  );
};
