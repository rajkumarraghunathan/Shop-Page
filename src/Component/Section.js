import { useState } from 'react';
import Navbar from './Navbar';
import Header from './Header'

const Section = () => {
    
    const [isAddToCart ,setIsAddToCart] = useState(true);
    const [isAddToCart1 ,setIsAddToCart1] = useState(true);
    const [isAddToCart2 ,setIsAddToCart2] = useState(true);
    const [isAddToCart3 ,setIsAddToCart3] = useState(true);
    const [isAddToCart4 ,setIsAddToCart4] = useState(true);
    const [isAddToCart5 ,setIsAddToCart5] = useState(true);
    const [isAddToCart6 ,setIsAddToCart6] = useState(true);
    const [isAddToCart7 ,setIsAddToCart7] = useState(true);
    
    const [count,setCount] = useState(0);

const isAdd = () => {
    setIsAddToCart(false);
    setCount(count+1);
}
const isRemove = () => {
    setIsAddToCart(true);
    setCount(count-1);
}

const isAdd1 =() =>{
    setIsAddToCart1(false);
    setCount(count+1);
}
const isRemove1 = () => {
    setIsAddToCart1(true);
    setCount(count-1);
}
const isAdd2 =() =>{
    setIsAddToCart2(false);
    setCount(count+1);
}
const isRemove2 = () => {
    setIsAddToCart2(true);
    setCount(count-1);
}
const isAdd3 =() =>{
    setIsAddToCart3(false);
    setCount(count+1);
}
const isRemove3 = () => {
    setIsAddToCart3(true);
    setCount(count-1);
}
const isAdd4 =() =>{
    setIsAddToCart4(false);
    setCount(count+1);
}
const isRemove4 = () => {
    setIsAddToCart4(true);
    setCount(count-1);
}
const isAdd5 =() =>{
    setIsAddToCart5(false);
    setCount(count+1);
}
const isRemove5 = () => {
    setIsAddToCart5(true);
    setCount(count-1);
}
const isAdd6 =() =>{
    setIsAddToCart6(false);
    setCount(count+1);
}
const isRemove6 = () => {
    setIsAddToCart6(true);
    setCount(count-1);
}
const isAdd7 =() =>{
    setIsAddToCart7(false);
    setCount(count+1);
}
const isRemove7 = () => {
    setIsAddToCart7(true);
    setCount(count-1);
}



    return(
        <>
        <Navbar count ={count} />
        <Header />
     <div className='container py-5 customies-section'>
        <div className='container mt-5  mb-5 grid'>
            {/* 1         */}
            <div className="card card-margin" style={{width: "16rem"}}>
                <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title text-center">Fancy Product</h5>
                    <p className="card-text text-center">$40.00-$80.00</p>
                    <div className='text-center mt-5'>
                        {isAddToCart?
                     (<a onClick={isAdd} href="#" className="btn btn-outline-dark">Add to cart</a>):
                     (<a onClick={isRemove} href="#" className="btn btn-outline-dark">Remove from cart</a>)}
                    </div>
                    
                </div>
            </div>
            {/* 2         */}
            <div className="card card-margin" style={{width: "16rem"}}>
                <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title text-center">Special Item</h5>
                  <div className='text-center'> <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span></div> 
                    <p className="card-text text-center"><del className='opacity-50'>$20.00</del>$18.00</p>
                    <div className='text-center mt-4'>
                    {isAddToCart1?
                     (<a onClick={isAdd1} href="#" className="btn btn-outline-dark">Add to cart</a>):
                     (<a onClick={isRemove1} href="#" className="btn btn-outline-dark">Remove from cart</a>)}
                    </div>
                    
                </div>
            </div>
            {/* 3         */}
            <div className="card card-margin" style={{width: "16rem"}}>
                <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title text-center">Sale Item</h5>
                    <p className="card-text text-center"><del className='opacity-50'>$50.00</del>$25.00</p>
                    <div className='text-center mt-5'>
                    {isAddToCart2?
                     (<a onClick={isAdd2} href="#" className="btn btn-outline-dark">Add to cart</a>):
                     (<a onClick={isRemove2} href="#" className="btn btn-outline-dark">Remove from cart</a>)}
                    </div>
                    
                </div>
            </div>
            {/* 4         */}
            <div className="card card-margin" style={{width: "16rem"}}>
                <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title text-center">Popular Item</h5>
                    <div className='text-center'> <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span></div>
                    <p className="card-text text-center">$40.00</p>
                    <div className='text-center mt-4 '>
                    {isAddToCart3?
                     (<a onClick={isAdd3} href="#" className="btn btn-outline-dark">Add to cart</a>):
                     (<a onClick={isRemove3} href="#" className="btn btn-outline-dark">Remove from cart</a>)}
                    </div>
                    
                </div>
            </div>
            {/* 5       */}
            <div className="card card-margin" style={{width: "16rem"}}>
                <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title text-center">Sale Item</h5>
                    <p className="card-text text-center"><del className='opacity-50'>$50.00</del>$25.00</p>
                    <div className='text-center mt-5'>
                    {isAddToCart4?
                     (<a onClick={isAdd4} href="#" className="btn btn-outline-dark">Add to cart</a>):
                     (<a onClick={isRemove4} href="#" className="btn btn-outline-dark">Remove from cart</a>)}
                    </div>
                    
                </div>
            </div>
            {/* 6         */}
            <div className="card card-margin" style={{width: "16rem"}}>
                <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title text-center">Fancy Product</h5>
                    <p className="card-text text-center">$120.00-$280.00</p>
                    <div className='text-center mt-5'>
                    {isAddToCart5?
                     (<a onClick={isAdd5} href="#" className="btn btn-outline-dark">Add to cart</a>):
                     (<a onClick={isRemove5} href="#" className="btn btn-outline-dark">Remove from cart</a>)}
                    </div>
                    
                </div>
            </div>
            {/* 7         */}
            <div className="card card-margin" style={{width: "16rem"}}>
                <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title text-center">Special Item</h5>
                    <div className='text-center'> <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span></div>
                    <p className="card-text text-center"><del className='opacity-50'>$20.00</del>$18.00</p>
                    <div className='text-center mt-4 '>
                    {isAddToCart6?
                     (<a onClick={isAdd6} href="#" className="btn btn-outline-dark">Add to cart</a>):
                     (<a onClick={isRemove6} href="#" className="btn btn-outline-dark">Remove from cart</a>)}
                    </div>
                    
                </div>
            </div>
            {/* 8         */}
            <div className="card card-margin" style={{width: "16rem"}}>
                <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title text-center">Popular Item</h5>
                    <div className='text-center'> <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span></div>
                    <p className="card-text text-center">$40.00</p>
                    <div className='text-center mt-4 '>
                    {isAddToCart7?
                     (<a onClick={isAdd7} href="#" className="btn btn-outline-dark">Add to cart</a>):
                     (<a onClick={isRemove7} href="#" className="btn btn-outline-dark">Remove from cart</a>)}
                    </div>
                    
                </div>
            </div>
        </div>
            
      </div>
      </> 
      
    )
}

export default Section;