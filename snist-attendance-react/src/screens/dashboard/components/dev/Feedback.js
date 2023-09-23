import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
} from "@mui/material";
import { Close } from "@mui/icons-material";

const FeedbackButton = ({ status }) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    id: JSON.parse(localStorage.baseData).id,
    name: JSON.parse(localStorage.baseData).name,
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (data) => {
    //send data to server
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    handleSubmit(formData);
    handleClose();
  };

  return (
    <>
      <span className="feedback-btn" onClick={handleOpen}>
        Leave Feedback
      </span>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          Feedback Form
          <IconButton
            aria-label="close"
            className="closeButton"
            onClick={handleClose}
            style={{ position: "absolute", right: "8px", top: "8px" }}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="id"
            name="id"
            label="Id"
            type="text"
            fullWidth
            onChange={handleInputChange}
            defaultValue={
              !status ? JSON.parse(localStorage.baseData).id : "Anonymous"
            }
            disabled={!status ? true : false}
          />
          <TextField
            margin="dense"
            id="name"
            name="name"
            label="Name"
            type="name"
            fullWidth
            onChange={handleInputChange}
            defaultValue={
              !status ? JSON.parse(localStorage.baseData).name : "Anonymous"
            }
            disabled={!status ? true : false}
          />
          <TextField
            margin="dense"
            id="feedback"
            name="feedback"
            label="Feedback"
            multiline
            rows={4}
            fullWidth
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleSubmitForm}
            color="primary"
            style={{
              marginTop: "-1rem",
              marginRight: "1rem",
            }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FeedbackButton;
