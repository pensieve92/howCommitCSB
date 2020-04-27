import React, { Fragment } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { Typography } from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Form from './Form'

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflowY: 'auto'
  }
}
export default ({ 
  muscles,
  exercises,
  catagory,
  editMode,
  onSelect,
  exercise,
  exercise: {
    id,
    title = 'welcome!',
    description = 'Please select an exercise from the list on the left.'
  },
  onDelete,
  onSelectEdit,
  onEdit
 }) => (
  <Grid container spacing={2}>
    <Grid item sm>
      <Paper style={styles.Paper}>
      {/* {exercises.map(([group, exercises]) =>
        // console.log(group)  
        console.log(exercises)  
      )} */}
        {exercises.map(([group, exercises]) =>
        !catagory || catagory === group
          ? <Fragment key={group}>
              <Typography 
                variant="h4" 
                style={{ textTransform: 'capitalize' }}
              >
                {group}
              </Typography>
              <List component="ul">
                {exercises.map(({ id, title }) => 
                  <ListItem 
                    button 
                    key={id}
                    onClick={() => onSelect(id)}
                  >
                    <ListItemText 
                      primary={title}                      
                    />
                    <ListItemSecondaryAction>
                      
                    <IconButton 
                      edge="end" 
                      aria-label="delete"
                      onClick={() => onSelectEdit(id)}
                    >
                      <EditIcon />
                    </IconButton>
                    
                    <IconButton 
                      edge="end" 
                      aria-label="delete"
                      onClick={() => onDelete(id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                  </ListItem>
                )}
              </List>
            </Fragment>
          : null
        )}
      </Paper>
    </Grid>
    <Grid item sm>
      <Paper style={styles.Paper}>
        {editMode
          ? <Form 
            muscles={muscles}
            onSubmit={onEdit}
            exercise={exercise}
            />
          : <Fragment>
             <Typography 
                variant="h4"
              >
                {title}
              </Typography>
              <Typography 
                variant="h6" 
                style={{ marginTop: 20 }}
              >
               {description}
             </Typography> 
        </Fragment>
    }
       
      </Paper>
    </Grid>
  </Grid>
)
