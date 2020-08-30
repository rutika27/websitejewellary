import React from 'react';
import './men-jewellary.css';
import Pic1 from '../pic/pic1.jpeg';
import ProductComponent from './product/product';

const JewellaryComponent=(props)=> {
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick= ()=>{
  	console.log(props)
    props.history.push('/detail');
  }


  return(
  	    <div className='jewellary'>
    	<div className='link'>
    		<span>Home</span>
    		<span>/</span>
    		<span>Jewellary</span>
    	</div>

        <div className='container1'>
            <div className='row'>
                {[{img:'', text:''}, {img:'', text:''}, {img:'', text:''}, {img:'', text:''}].map((item)=>
                        <div className='col-lg-3 card_category'>
                            <ProductComponent className='img' onClick={handleClick} />
                        </div>

                    )}
            </div>

            <div className='row'>
                {[{img:'', text:''}, {img:'', text:''}, {img:'', text:""}, {img:'', text:''}].map((item)=>
                        <div className='col-lg-3 card_category'>
                            <ProductComponent className='img' onClick={handleClick} />
                        </div>

                    )}
            </div>

           <div className='row'>
                {[{img:'', text:''}, {img:'', text:''}, {img:'', text:""}, {img:'', text:''}].map((item)=>
                        <div className='col-lg-3 card_category'>
                            <ProductComponent className='img' onClick={handleClick} />
                        </div>

                    )}
            </div>


        </div>


    </div>
  	)

}

export default JewellaryComponent
