import { styled } from '@mui/system';
import { Typography, Container } from '@mui/material';
import { relative } from 'path';

const StyledHeader = styled('header')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  minHeight: '70px',
  color: theme.palette.primary.main,
  padding: '10px 0',
}));

const StyledLogo = styled('header')(({ theme }) => ({
  position: 'relative',
  fontSize: '20px',
  fontWeight: 600,
  padding: '5px 0 0 15px',
  textTransform: 'uppercase',
  '&::before': {
    position: 'absolute',
    content: '""',
    top: 0,
    left: '0px',
    display: 'block',
    width: '4px',
    height: '100%',
    border: `2px solid ${theme.palette.primary.main}`,
  },
}));

const LogoUp = styled('p')(({ theme }) => ({
  margin: 0,
  fontSize: '20px',
  color: theme.palette.primary.main,
}));
const LogoDown = styled('p')(({ theme }) => ({
  margin: 0,
  fontSize: '24px',
  letterSpacing: '5px',
  color: theme.palette.secondary.main,
}));

export const Header = () => {
  return (
    <StyledHeader>
      <Container sx={{ display: 'flex', alignItems: 'center' }}>
        <StyledLogo>
          <LogoUp>Hacker</LogoUp>
          <LogoDown>news</LogoDown>
        </StyledLogo>
      </Container>
    </StyledHeader>
  );
};
