import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SlideDialog = ({
  open,
  onClose,
  title,
  content,
  actions,
  transitionComponent = Transition,
  keepMounted = true,
  ariaDescription = 'alert-dialog-slide-description'
}) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={transitionComponent}
      keepMounted={keepMounted}
      onClose={onClose}
      aria-describedby={ariaDescription}
    >
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>
        {typeof content === 'string' ? (
          <DialogContentText id={ariaDescription}>
            {content}
          </DialogContentText>
        ) : (
          content
        )}
      </DialogContent>
      {actions && <DialogActions>{actions}</DialogActions>}
    </Dialog>
  );
};

export default SlideDialog;