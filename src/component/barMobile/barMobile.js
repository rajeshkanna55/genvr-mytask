
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Collapse, Divider, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import { Style } from '@mui/icons-material';
function LeftSideBar({setOption}) {
  const [state, setState] = useState({
    left: false,
  }),
  [open,setOpen]= useState(false),
  [edit,setEdit]= useState(false),
  [extra,setExtra]= useState(false),
  [explore,setExplore]= useState(false),
  [lora,setLora]= useState(false);
  const handleTarget=(value)=>{
    setOption(value);
  }
  const anchor = "left";
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: "250px" }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          <ListItemButton onClick={() => setOpen(!open)}>
            <ListItemText sx={{ color: "black" }} primary={"Generation"} />
            {open ? (
              <ExpandLessIcon sx={{ color: "black" }} />
            ) : (
              <ExpandMoreIcon sx={{ color: "black" }} />
            )}
          </ListItemButton>
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton >
              <ListItemText
                sx={{ color: "black", textAlign: "center" }}
                primary="Text Based"
                onClick={()=>handleTarget('TextBased')}
              />
            </ListItemButton>
            <ListItemButton>
              <ListItemText
                sx={{ color: "black", textAlign: "center" }}
                primary="Image Based"
                onClick={()=>handleTarget('ImageBased')}
              />
            </ListItemButton>
            <ListItemButton>
              <ListItemText
                sx={{ color: "black", textAlign: "center" }}
                primary="Controlled Generation"
                onClick={()=>handleTarget('ControlledGeneration')}
              />
            </ListItemButton>
            <ListItemButton>
              <ListItemText
                sx={{ color: "black", textAlign: "center" }}
                primary="By Reference"
                onClick={()=>handleTarget('ByReference')}
              />
            </ListItemButton>
            <ListItemButton>
              <ListItemText
                sx={{ color: "black", textAlign: "center" }}
                primary="Variations"
                onClick={()=>handleTarget('Variations')}
              />
            </ListItemButton>
          </List>
        </Collapse>
        <Divider sx={{ backgroundColor: "black" }} />
        <ListItem>
          <ListItemButton onClick={() => setEdit(!edit)}>
            <ListItemText sx={{ color: "black" }} primary={"Editing"} />
            {edit ? (
              <ExpandLessIcon sx={{ color: "black" }} />
            ) : (
              <ExpandMoreIcon sx={{ color: "black" }} />
            )}
          </ListItemButton>
        </ListItem>
        <Collapse in={edit} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton>
              <ListItemText
                sx={{ color: "black", textAlign: "center" }}
                primary="FreeStyle Paint"
              />
            </ListItemButton>
            <ListItemButton>
              <ListItemText
                sx={{ color: "black", textAlign: "center" }}
                primary="Image Filters"
              />
            </ListItemButton>
            <ListItemButton>
              <ListItemText
                sx={{ color: "black", textAlign: "center" }}
                primary="FineTune"
              />
            </ListItemButton>
            <ListItemButton>
              <ListItemText
                sx={{ color: "black", textAlign: "center" }}
                primary="Resize And Crop"
              />
            </ListItemButton>
            <ListItemButton>
              <ListItemText
                sx={{ color: "black", textAlign: "center" }}
                primary="Inpainting"
              />
            </ListItemButton>
          </List>
        </Collapse>
        <Divider sx={{ backgroundColor: "black" }} />
        <ListItem >
          <ListItemButton onClick={() => setExtra(!extra)}>
            <ListItemText sx={{ color: "black" }} primary={"Extra"} />
            {extra ? (
              <ExpandLessIcon sx={{ color: "black" }} />
            ) : (
              <ExpandMoreIcon sx={{ color: "black" }} />
            )}
          </ListItemButton>
        </ListItem>
        <Collapse in={extra} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton>
              <ListItemText
                sx={{ color: "black", textAlign: "center" }}
                primary="Upscaling"
              />
            </ListItemButton>
            <ListItemButton>
              <ListItemText
                sx={{ color: "black", textAlign: "center" }}
                primary="Style Transfer"
              />
            </ListItemButton>
            <ListItemButton>
              <ListItemText
                sx={{ color: "black", textAlign: "center" }}
                primary="Face Swap"
              />
            </ListItemButton>
            <ListItemButton>
              <ListItemText
                sx={{ color: "black", textAlign: "center" }}
                primary="Relighting"
              />
            </ListItemButton>
            <ListItemButton>
              <ListItemText
                sx={{ color: "black", textAlign: "center" }}
                primary="Object Removal"
              />
            </ListItemButton>
            <ListItemButton>
              <ListItemText
                sx={{ color: "black", textAlign: "center" }}
                primary="Foreground Change"
              />
            </ListItemButton>
            <ListItemButton>
              <ListItemText
                sx={{ color: "black", textAlign: "center" }}
                primary="Background Change"
              />
            </ListItemButton>
            <ListItemButton>
              <ListItemText
                sx={{ color: "black", textAlign: "center" }}
                primary="Click And Change"
              />
            </ListItemButton>
          </List>
        </Collapse>
        <Divider sx={{ backgroundColor: "black" }} />
        <ListItem >
          <ListItemButton onClick={() => setExplore(!explore)}>
            <ListItemText sx={{ color: "black" }} primary={"Explore"} />
            {explore ? (
              <ExpandLessIcon sx={{ color: "black" }} />
            ) : (
              <ExpandMoreIcon sx={{ color: "black" }} />
            )}
          </ListItemButton>
        </ListItem>
        <Collapse in={explore} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton>
              <ListItemText
                sx={{ color: "black", textAlign: "center" }}
                primary="Base Models"
              />
            </ListItemButton>
            <ListItemButton>
              <ListItemText
                sx={{ color: "black", textAlign: "center" }}
                primary="Loras"
              />
            </ListItemButton>
            <ListItemButton>
              <ListItemText
                sx={{ color: "black", textAlign: "center" }}
                primary="Textual Inversion"
              />
            </ListItemButton>
            <ListItemButton>
              <ListItemText
                sx={{ color: "black", textAlign: "center" }}
                primary="Styles"
              />
            </ListItemButton>
            <ListItemButton>
              <ListItemText
                sx={{ color: "black", textAlign: "center" }}
                primary="Artist Styles"
              />
            </ListItemButton>
            <ListItemButton>
              <ListItemText
                sx={{ color: "black", textAlign: "center" }}
                primary="Aesthetic Embeddings"
              />
            </ListItemButton>
          </List>
        </Collapse>
        <Divider sx={{ backgroundColor: "black" }} />
        <ListItem >
          <ListItemButton onClick={() => setLora(!lora)}>
            <ListItemText
              sx={{ color: "black" }}
              primary={"Lora Model Gallery"}
            />
            {lora ? (
              <ExpandLessIcon sx={{ color: "black" }} />
            ) : (
              <ExpandMoreIcon sx={{ color: "black" }} />
            )}
          </ListItemButton>
        </ListItem>
        <Collapse in={lora} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton>
              <ListItemText
                sx={{ color: "black", textAlign: "center" }}
                primary="My Models"
              />
            </ListItemButton>
            <ListItemButton>
              <ListItemText
                sx={{ color: "black", textAlign: "center" }}
                primary="Saved Models"
              />
            </ListItemButton>
            <ListItemButton>
              <ListItemText
                sx={{ color: "black", textAlign: "center" }}
                primary="Publicly Shared Models"
              />
            </ListItemButton>
          </List>
        </Collapse>
        <Divider sx={{ backgroundColor: "black" }} />
      </List>
    </Box>
  );

  return (
    <>
        <React.Fragment>
          <button onClick={toggleDrawer(anchor, true)} style={{outline:'none',border:'none',padding:'5px 15px',backgroundColor:'white'}}><MenuIcon /></button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
    </>
  );
}
export default LeftSideBar;