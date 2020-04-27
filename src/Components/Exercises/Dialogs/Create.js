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
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  formContorl: {
    width: 500
  }
})

export default withStyles(styles) (class extends Component {
  state ={
    open: false,
    exercise: {
      title: '',
      description: '',
      muscles: ''
    }  
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  handleChange = name => ({target: {value}}) => {
    // console.location("...this.state.exercise: ", ...this.state.exercise)
    this.setState({
      exercise: {
        ...this.state.exercise,
        [name]: value
      }
    })
  }

  handleSubmit = () => {
    // TODO: validate

    const { exercise } = this.state
    
    this.props.onCreate({
      ...exercise,
      id: exercise.title.toLocaleLowerCase().replace( / /g, '-')
    })


    this.setState({
      open: false,
      exercise: {
        title: '',
        description: '',
        muscles: ''
      }
    })


  }

  render(){
    const { open, exercise: { title, description, muscles} } = this.state,
     {classes, muscles: categories} = this.props
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
          To subscribe to this website, please enter your email address here. We will send updates
          occasionally.
        </DialogContentText>
        <form>
          <TextField
            autoFocus            
            label="Title"            
            margin="dense"            
            value={title}
            onChange={this.handleChange('title')}
            className={classes.formContorl}
          />
          <br />
          <FormControl 
            className={classes.formContorl}
          >
            <InputLabel id="demo-simple-select-label">
              Muscles
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={muscles}
              onChange={this.handleChange('muscles')}
            >
              {categories.map(category => 
                <MenuItem 
                key={category} 
                value={category}>
                  {category}
                </MenuItem>
              )}
            </Select>
          </FormControl>
          <br />
          <TextField            
            label="Description"
            margin="dense"
            multiline            
            rows={4}            
            value={description}
            onChange={this.handleChange('description')}
            className={classes.formContorl}
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button 
          color="primary" 
          variant="contained"
          onClick={this.handleSubmit}>
          Create
        </Button>
       
      </DialogActions>
    </Dialog>  
  </Fragment>
  }

})
  