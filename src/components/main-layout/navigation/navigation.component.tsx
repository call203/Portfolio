import React, { useState } from 'react';
import { SectionIdEnum } from 'types';

import {
  AppBar,
  Box,
  Button,
  Dialog,
  Hidden,
  IconButton,
  Slide,
  Toolbar,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { TransitionProps } from '@mui/material/transitions';

const navigationItem = [
  {
    text: 'Work',
    to: SectionIdEnum.work,
  },
  {
    text: 'About Me',
    to: SectionIdEnum.aboutme,
  },
  {
    text: 'Resume',
    to: SectionIdEnum.resume,
  },
];

const Transition = React.forwardRef(
  (
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) => {
    return <Slide direction="left" ref={ref} {...props} />;
  },
);

export const Navigation: React.FC = () => {
  const [open, setOpen] = useState(false);
  const onOpenHandler = () => setOpen(true);
  const onCloseHandler = () => setOpen(false);
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  const mappedItems = navigationItem.map(({ text, to }) => {
    return (
      <AnchorLink key={to}>
        <Button
          variant="text"
          fullWidth={isSmall}
          sx={{
            color: '#111111',
            ':hover': {
              backgroundColor: '#ffffff',
              color: '#111111',
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          {text}
        </Button>
      </AnchorLink>
    );
  });

  return (
    <>
      <Hidden smDown>
        <Box>{mappedItems}</Box>
      </Hidden>
      <Hidden smUp>
        <IconButton onClick={onOpenHandler}>
          <MenuIcon />
        </IconButton>
        <Dialog open={open} fullScreen fullWidth TransitionComponent={Transition} hideBackdrop>
          <AppBar position="static" elevation={0} sx={{ backgroundColor: '#ffffff', height: 50 }}>
            <Toolbar>
              <Box flexGrow={1}></Box>
              <IconButton onClick={onCloseHandler}>
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Box display="flex" flexDirection="column" py={2} px={2} width="100%">
            {mappedItems}
          </Box>
        </Dialog>
      </Hidden>
    </>
  );
};
