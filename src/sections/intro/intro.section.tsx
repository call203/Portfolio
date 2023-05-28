import { Box, Typography } from '@mui/material';

export const IntroSection: React.FC = () => {
  return (
    <Box py={4}>
      <Typography variant="h6">hello, my name is</Typography>
      <Typography variant="h2" mb={1}>
        hello, my name is2
      </Typography>
      <Typography variant="h5" mb={3}>
        hello, my name is3
      </Typography>
      <Typography maxWidth={500} mb={3}>
        hello, my name is5
      </Typography>
    </Box>
  );
};
