import { FaShoppingCart } from 'react-icons/fa';

 const Navbar = (props) => {
  const { count }= props;
  return (
   
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container nav ">
      <a className="navbar-brand" href="#">Start Bootstrap</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto ms-5  mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Shop
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">All Product</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="#">Popular Items</a></li>              
              <li><a className="dropdown-item" href="#">New Arrivals</a></li>
            </ul>
          </li>
          
        </ul>
        <form className="d-flex  me-5" role="search">
        <button className="btn btn-outline-dark pe-3" type="submit">
        <FaShoppingCart/> Cart
        <span className="ms-1 bg-dark text-light count ps-2 pe-2">{count}</span>
        </button>
      </form>
      </div>
    </div>
    {/* <img src='https://pixabay.com/photos/tower-building-road-lotus-tower-7314495/'/> */}
  </nav>
        
  )
}






export default Navbar