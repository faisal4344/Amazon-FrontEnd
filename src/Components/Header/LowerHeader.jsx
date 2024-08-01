import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import './Header.css';


function LowerHeader() {
return (
<div className='lower_container'>
<ul>
<li>
<AiOutlineMenu />
<p>A11</p>
</li>
<li>Today's Deals</li>
<li>Costumer Service</li>
<li>Registry</li>
<li>Gift Cards</li>
<li>Sell</li>
</ul>
</div>
);
}
export default LowerHeader


