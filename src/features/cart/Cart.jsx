import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";

import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";
import EmptyCart from "../cart/EmptyCart";

function Cart() {
    const username = useSelector((state) => state.user.username);
    const cart = useSelector(getCart);
    const dispatch = useDispatch();
    if (!cart.length) return <EmptyCart />;

    return (
        <div className="px-3 py-4 ">
            <LinkButton to="/menu">&larr; Back to menu</LinkButton>

            <h2 className="mt-7 mb-5 font-semibold text-xl flex">Your cart,{username}</h2>
            <ul className="divide-y divide-stone-200 border-b mt-3">
                {cart.map((item) => (
                    <CartItem item={item} key={item.key} />
                ))}
            </ul>
            <div className="mt-6 space-x-2 ">
                <Button type="primary" to="/order/new">
                    Order pizzas
                </Button>
                <Button type="secondray" onClick={() => dispatch(clearCart())}>
                    Clear cart
                </Button>
            </div>
        </div>
    );
}

export default Cart;
