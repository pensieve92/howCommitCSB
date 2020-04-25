import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

export default ({ muscles, catagory, onSelect }) => {
  const index = catagory
  ? muscles.findIndex(group => group === catagory) + 1
  : 0

  const onIndexSelect = (e, index) => 
    onSelect(index === 0 ? '' : muscles[index -1])

  return <Paper>
  <Tabs 
    value={index} 
    onChange={onIndexSelect}
    indicatorColor="primary"
    textColor="primary"
    centered      
  >
    <Tab label="All" />
    {muscles.map((group, index) => 
      <Tab key={index} label={group} />
    )}
  </Tabs>
</Paper>
}

  

