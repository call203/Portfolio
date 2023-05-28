import React from 'react';
import { Box, AppBar, Toolbar, Typography } from '@mui/material';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Navigation } from './navigation/navigation.component';

export type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Box height="100vh">
      <AppBar position="fixed" elevation={0} sx={{ background: '#ffffff', marginTop: 1 }}>
        <Toolbar>
          <Box flexGrow={1}>
            <AnchorLink>
              <Box display="flex" alignItems="center" gap={0.5}>
                <Typography color="#111111" fontSize={23} fontWeight={300}>
                  Soyeon
                </Typography>
              </Box>
            </AnchorLink>
          </Box>
          <Navigation></Navigation>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
