
import * as React from 'react';
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
  const { sections, title } = props;
  console.log('vbsLogo',vbsLogo);

  return (
    <div>
      <Toolbar style={{ padding: "10px 40px" }} sx={{ borderBottom: 1, borderColor: 'divider' }}>

      <Grid container spacing={2}>

        <Grid item lg={4}>
        <ImageListItem>
          <img src={require('../images/vbs_logo.png')} alt="vasave business solution logo" style={ {height:65, width: "100%"}}/>
        </ImageListItem>

        </Grid>
        <Grid item lg={8} alignSelf="center">
          
      <Grid container spacing={2} justifyContent="flex-end">
      {headerOptions.map((item, index) =>{
    console.log('headerOptions', item?.title);
          return (
            <Grid item={3} >
        

              <Typography
              key={index}
              component="h2"
              variant="h6"
              color="green"
              align="center"
              noWrap
              sx={{ flex: 1 }}
            >
              <Button variant="text">{item?.title}</Button>
              
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