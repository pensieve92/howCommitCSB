import React, { Fragment, Component } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'

export default class extends Component {
  state ={
    open: false
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render(){
    const { open } = this.state

    return <Fragment>
    <Fab 
      size="small" 
      aria-label="add" 
      onClick={this.handleToggle}   
    >
      <AddIcon />
    </Fab>

    <Dialog 
    open={open} 
    onClose={this.handleToggle}     
    aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We will send updates
          occasionally.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button 
          color="primary" variant="contained">
          Cancel
        </Button>
       
      </DialogActions>
    </Dialog>  
  </Fragment>
  }

} 
  