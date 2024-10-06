import {AppBar, Button, Toolbar, Typography} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/register');
  }
  const handleLogoClick = () => {
    navigate('/')
  }

  return (
    <AppBar position='static' color='primary' >
      <Toolbar>
        <Typography
          variant="h6"
          component="p"
          onClick={handleLogoClick}
          sx={{ flexGrow: 1, cursor: 'pointer' }}
        >
          Tool Manager
        </Typography>
        <Button onClick={handleLogin}
          sx={{ color: 'white' }}
        >
          Login
        </Button>
      </Toolbar>
    </AppBar>
  )
}
