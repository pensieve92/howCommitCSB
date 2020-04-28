import React, { Fragment, Component } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import Form from './Form'


export default class extends Component {
  state ={
    open: false 
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  handleFormSubmit = exercise => {
    this.handleToggle()

    this.props.onCreate(exercise)
  }

  render(){
    const {open} = this.state,
          {muscles} = this.props
     // {muscles} = this.props already defined

    //  console.log("{muscles: categories}: ", {muscles: categories})
    //  console.log("{categories}: ", {categories})

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
          create new Exercise
        </DialogContentText>       
        <Form 
          muscles={muscles}    
          onSubmit={this.handleFormSubmit}      
        />
      </DialogContent>     
    </Dialog>  
  </Fragment>
  }

}
  