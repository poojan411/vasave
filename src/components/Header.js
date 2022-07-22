
import React, { useState } from "react";
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

// import IconButton from '@mui/material/IconButton';
// import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import ImageListItem from '@mui/material/ImageListItem';
import { height } from '@mui/system';
import '../styles/header.css';


const vbsLogo = '../images/vbs_logo.png';

const headerOptions = [
  {
    title: 'home',
    detials: 'homepage'
},
{
  title: 'about',
  detials: 'about'
},
{
  title: 'services',
  detials: 'services'
},
{
  title: 'contact',
  detials: 'contact'
},
]


function Header(props) {
  const { sections, title, headerData } = props;
  console.log('headerData',headerData);

  return (
    <div className="header"
    style={{
      //  position:'absolute', 
      // position:'fixed',
      //  width: '100%',
      //   marginTop: '20px',
      //    boxShadow: '0 4px 2px -2px gray'
         }}
         >
      <Toolbar style={{ padding: "10px 40px" }} sx={{ borderBottom: 1, borderColor: 'divider' }}>

      <Grid container spacing={2}>

        <Grid item lg={4}>
        <ImageListItem>
          <img src={require('../images/vbs_logo.png')} alt="vasave business solution logo" style={ {height:65, width: "100%"}}/>
        </ImageListItem>

        </Grid>
        <Grid item lg={6} alignSelf="center">
          
      <Grid container spacing={2} justifyContent="flex-end">
      {headerData && headerData.map((item, index) =>{
    console.log('headerOptions', item?.title);
          return (
            <Grid item lg={2} >
        

              <Typography
              key={index}
              component="h2"
              variant="h6"
              color="green"
              align="center"
              style={{
           
                lineHeight: 2.3,
                color: '#181c51',
                fontSize: '20px',
                textTransform: 'capitalize'
              }}
              noWrap
              sx={{ flex: 1 }}
            >
             {item?.title}
              
            </Typography>
              </Grid>
          )

        })}
        
      </Grid>
          </Grid>
      </Grid>
        
       
       

     
       
       
      </Toolbar>

    </div>
  );
}

// Header.propTypes = {
//   sections: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       url: PropTypes.string.isRequired,
//     }),
//   ).isRequired,
//   title: PropTypes.string.isRequired,
// };

export default Header;