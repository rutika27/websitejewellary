import React, {useState} from 'react';
import './product.css';
import Pic1 from '../../pic/pic1.jpeg';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter} from 'react-router-dom';

const ProductComponent=(props)=> {

	const [dynamicClass, setDynamicClass]=useState('product');
	const [state, setState] = React.useState(false);
	const [cart, setCart]= useState([]);
	const useStyles = makeStyles({
	  list: {
	    width: 350,
	  },
	  drawer: {
	  	opacity: 1
	  }
	});

	const classes = useStyles();
 
 const handleHoverEnter=()=>{
 	setDynamicClass('product1')
 }

 const handleHoverleave=()=>{
 	setDynamicClass('product')
 }

 const handleClick=()=>{
 	setState(true);
 	setCart([...cart, Pic1]);

 }

 	const handleRedirectClick= ()=>{
	  	console.log(props)
	    props.history.push('/detail');
  }





  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(open);
  };

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List className='checkout'>
        Cart
      </List>
      <Divider />
      <List className='cartProduct'>
        {cart.map((pic, index) => (
          <ListItem className='cartItem' button key={index}>
            <img className='cartimg' src={pic} />
            <div>
            	£90
            </div>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return(
  	<div className={dynamicClass} onClick={handleRedirectClick} onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverleave}>
  		<img className='img1' src={Pic1} />
  		<div className='custom-button'>
  			<span>
  				Diamond pendant in 18k white gold
  			</span>
	  		<button className='cart' onClick={handleClick}>
	  			<span> £90</span>
	  			<span>Add to Cart</span>
	  		</button>
  		</div>

  		<Drawer className={classes.drawer} anchor={'right'} open={state} onClose={toggleDrawer(false)}>
            {list()}
        </Drawer>
  	</div>
  	)

 }

 export default withRouter(ProductComponent);