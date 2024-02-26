import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="Links ">
        <Link to="/" className=""> Shop </Link>
        <Link to="/cart" className=""> 
            <ShoppingCart size={32} /> 
        </Link>
      </div>
    </div>
  )
}

export default Navbar
