import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, recipe, image, price, _id } = item;
  const {user} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handleAddToCart = () => {
    if (user && user.email) {
      // send cart information to database
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price
      };

      axiosSecure.post('/carts', cartItem)
      .then(res => {
        if(res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to the cart`,
            showConfirmButton: false,
            timer: 1500
          });
          refetch();
        }
      })

    } else {
      Swal.fire({
        title: "You are not Logged In!",
        text: "Please login to add to the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', {state: {from: location}});
        }
      });
    }
  }

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <p className="absolute bg-slate-900 right-0 mr-4 mt-4 px-4 text-white">${price}</p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button onClick={handleAddToCart} className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-10">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
