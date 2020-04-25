import React, { Fragment } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { Typography } from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

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
  exercises,
  catagory,
  onSelect,
  exercise: {
    id,
    title = 'welcome!',
    description = 'Please select an exercise from the list on the left.'
  }
 }) => (
  <Grid container spacing={2}>
    <Grid item sm>
      <Paper style={styles.Paper}>
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
                    onClick={()=> onSelect(id)}
                  >
                    <ListItemText 
                      primary={title}                      
                    />
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
      </Paper>
    </Grid>
  </Grid>
)
