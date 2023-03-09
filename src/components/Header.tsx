import { styled } from '@mui/system';
import { Typography } from '@mui/material';
const StyledHeader = styled('header')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  minHeight: '70px',
  color: theme.palette.primary.main,
  padding: '5px 15px',
  display: 'flex',
  alignItems: 'center',
}));

const StyledLogo = styled('header')(({ theme }) => ({
  fontSize: '20px',
  paddingLeft: '7px',
  width: '50px',
  border: '3px solid transparent',
  borderLeftColor: theme.palette.secondary.main,
  letterSpacing: '6px',
}));

export const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo>
        <Typography sx={{ textTransform: 'uppercase', fontWeight: '500' }}>Hacker</Typography>
        news
      </StyledLogo>
    </StyledHeader>
  );
};
