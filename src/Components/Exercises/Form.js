import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  formContorl: {
    width: 300
  }
})

const a = 1

export default withStyles(styles) (class extends Component {
  state = this.getInitState()
  
  getInitState(){
    const {exercise} = this.props

    return exercise ? exercise : {
      title: '',
      description: '',
      muscles: ''
    }
  }  

 

  handleChange = name => ({target: {value}}) => {
    // console.location("...this.state.exercise: ", ...this.state.exercise)
    this.setState({     
        [name]: value
    })
  }

  handleSubmit = () => {
    // TODO: validate

    const { exercise } = this.state
    
    this.props.onSubmit({
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

    const {  title, description, muscles } = this.state,
          {classes, muscles: categories} = this.props         

    return <form>
            <TextField
              autoFocus            
              label="Title"            
              margin="dense"            
              value={title} // state로 관리
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
                  value={category}
                >
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
            <br />
            <Button 
              color="primary" 
              variant="contained"
              onClick={this.handleSubmit}>
              Create
            </Button>
          </form>
  }
})
