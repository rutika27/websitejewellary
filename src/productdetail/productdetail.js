import React, {useState} from 'react';
import './productdetail.css';
import Pic1 from '../pic/pic1.jpeg';
import Pic2 from '../pic/3.jpg';
import Pic3 from '../pic/4.jpeg';


const ProductDetailComponent = ()=>{

	const [picsCollection, setPicCollection]= useState([Pic1, Pic2, Pic3]);
	const [state, setState]= useState(Pic1);
	const [quantity, setQuantity]= useState(0);
	let hidePlus= false;
	let hideSub= true;

	const handleClick=(event)=>{
		console.log(event.target)
	}

	const handleSub=()=>{
		if(quantity>1){
			setQuantity(quantity-1);
		}
		else{
			hideSub=true;
			hidePlus=false;
		}
	}

	const handlePlus=()=>{
		if(quantity<5){
			setQuantity(quantity+1);
		}
		else{
			hidePlus=true;
			hideSub=false;
		}
	}

	return(
		<div className='detail'>
			<div className='picsCollection'>
				{picsCollection.map((item)=>
					<div className='pic5' onClick={()=> setState(item)} >
						<img src={item} /> 
					</div>
					)}
			</div>

			<div className='display'>
				<img src={state}/>
			</div>

			<div className='details'>
				<div className='title'>
					Diamond and Turquoise Circle Pendant
				</div>

				<div className='subtitle'>
					in 18k White Gold, 16-18"
				</div>
				<div className='quantity'>
					<div className='quantityTitle'>
						Quantity
					</div>

					<div className='add'>
						<button className='sub' onClick={handleSub}>-</button> {quantity} <button className='plus' onClick={handlePlus}>+</button>
					</div>
				</div>

		  		<button className='cart'>
		  			<span> £90</span>
		  			<span>Add to Cart</span>
		  		</button>
				<br />

				<div className='des'>
					<div className='desTitle'>
						Description & Details
					</div>

					<div className='desTitle1'>
						Traced with scintillating diamonds, this circle pendant features turquoise, one of the first stones used in jewellery design and a favourite of Tiffany designers for over a century. The natural formation of the stone creates subtle differences in appearance, ensuring each piece is as unique as its wearer. As multifaceted as it is iconic, the Tiffany T collection is a tangible reminder of the connections we feel but can't always see. Showcase your personal style by pairing this pendant with other Tiffany designs for a bold look.
					</div>
				</div>
				
			</div>
		</div>
		)
}

export default ProductDetailComponent