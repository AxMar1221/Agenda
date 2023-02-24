import { AddOutlined } from '@mui/icons-material';
import { IconButton, Typography } from '@mui/material';
import { positions } from '@mui/system';
import { AgendaLayout } from '../layout/AgendaLayout';
import { NoteView, NothingSelected } from '../view';

export const AgendaPage = () => {
  return (
    <AgendaLayout>

      <NothingSelected />
      {/* <NoteView /> */}

      <IconButton
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9},
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30}}/>
      </IconButton>

    </AgendaLayout>

  )
}
