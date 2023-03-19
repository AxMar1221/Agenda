import { AddOutlined } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { positions } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { startNewNote } from "../../store/agenda";
import { AgendaLayout } from "../layout/AgendaLayout";
import { NoteView, NothingSelected } from "../view";

export const AgendaPage = () => {
  const dispatch = useDispatch();
  const { isSaving, active }= useSelector( state => state.agenda );

  const onClickNewNote = () => {
    dispatch(startNewNote());
  };
  

  return (
    <AgendaLayout>

      {
        (!!active)
        ? <NoteView />
        : <NothingSelected />
      }

      <IconButton
        onClick={onClickNewNote}
        size="large"
        disabled={ isSaving }
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </AgendaLayout>
  );
};
