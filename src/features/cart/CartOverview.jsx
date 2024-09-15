import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCartQuantitiy, getCartTotalPrice } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
    const totalCartQuantity = useSelector(getCartQuantitiy);
    const totalCartPtice = useSelector(getCartTotalPrice);
    if (!totalCartQuantity) return null;
    return (
        <div className=" flex items-center justify-between bg-stone-800 px-4 py-4 text-sm sm:px-6 md:text-base text-stone-200 uppercase">
            <p className="font-semibold text-stone-300 space-x-4">
                <span>{totalCartQuantity} pizzas</span>
                <span>{formatCurrency(totalCartPtice)}</span>
            </p>
            <Link to="/cart">Open cart &rarr;</Link>
        </div>
    );
}

export default CartOverview;
