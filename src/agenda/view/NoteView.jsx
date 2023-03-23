import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";

import { useForm } from "../../hooks/useForm";
import { ImageGallery } from "../components";
import { setActiveNote } from "../../store/agenda/agendaSlice";
import { startSaveNote } from "../../store/agenda/thunks";

export const NoteView = () => {
  const dispatch = useDispatch();
  const { active: note } = useSelector((state) => state.agenda);
  const { body, title, date, onInputChange, formState } = useForm(note);

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toUTCString();
  });
  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  const onSaveNote = () => {
    dispatch( startSaveNote() );
  }

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          {dateString}
        </Typography>
      </Grid>

      <Grid item>
        <Button
          color="primary"
          sx={{ padding: 2 }}
          onClick={ onSaveNote }
        >
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>

      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un titulo"
          label="Título"
          sx={{ border: "none", mb: 1 }}
          name="title"
          value={title}
          onChange={onInputChange}
        />

        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="evento"
          minRows={5}
          name="body"
          value={body}
          onChange={onInputChange}
        />
      </Grid>

      <ImageGallery />
    </Grid>
  );
};
