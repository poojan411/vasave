
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
import '../styles/titleCard.css';



const vbsLogo = '../images/vbs_logo.png';




function TitleCard(props) {
  const { sections, title, headerData } = props;
  const backgroungImg = '../images/shape1.png';
  console.log('title =========>',title);

  return (
    <Grid container spacing={2}>
        <Grid item xs={7}>
            <div className="backgroungImg" style={{ backgroundImage: `url(${require("../images/shape1.png")})`}}>
                <Grid container alignContent='center' justifyContent='center'>

        <Grid container style={{ marginTop: '200px'}} spacing={2}>
            <Grid item lg={12} className="titleStyle" >
              <h2 className="titleStyle">
                {title}
              </h2>
            </Grid>
            <Grid item lg={12}>
            <Typography variant="h5" component="h6">
            Get started
        </Typography>
            </Grid>
      </Grid>
                </Grid>


            </div>
          {/* <img src={require('../images/shape1.png')}  style={{ width: "100%"}}/> */}
         
        </Grid>
        <Grid item xs={5}>
        <img src={require('../images/homepageImageOne.png')} alt="vasave business solution logo" style={ { width: "100%", marginTop: '100px'}}/>
        </Grid>
       
      </Grid>
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

export default TitleCard;