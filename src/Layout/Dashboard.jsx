import { FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaMendeley, FaRev, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {
    const [ isAdmin ] = useAdmin();

    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu">
                   {
                    isAdmin ? <>
                        <li><NavLink to="/dashboard/adminHome"><FaHome /> Admin Home</NavLink></li>
                        <li><NavLink to="/dashboard/addItems"><FaUtensils /> Add Items</NavLink></li>
                        <li><NavLink to="/dashboard/manageItems"><FaList /> Manage Items</NavLink></li>
                        <li><NavLink to="/dashboard/bookings"><FaBook /> Manage Bookings</NavLink></li>
                        <li><NavLink to="/dashboard/users"><FaUsers /> All Users</NavLink></li>
                    </>
                    :
                    <>
                        <li><NavLink to="/dashboard/userHome"><FaHome /> User Home</NavLink></li>
                        <li><NavLink to="/dashboard/reservation"><FaCalendar /> Reservation</NavLink></li>
                        <li><NavLink to="/dashboard/cart"><FaShoppingCart /> My Cart</NavLink></li>
                        <li><NavLink to="/dashboard/review"><FaRev /> Add Review</NavLink></li>
                        <li><NavLink to="/dashboard/bookings"><FaBook /> My Booking</NavLink></li>
                    </>
                   }
                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome /> Home</NavLink></li>
                    <li><NavLink to="/order/salad"><FaMendeley /> Menu</NavLink></li>
                    <li><NavLink to="/contact"><FaEnvelope /> Contact</NavLink></li>
                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;