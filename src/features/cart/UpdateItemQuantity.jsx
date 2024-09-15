import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
    const dispatch = useDispatch();
    return (
        <div className="flex gap-1">
            <Button type="round" onClick={() => dispatch(decreaseItemQuantity(pizzaId))}>
                -
            </Button>
            <span className="font-semibold px-2">{currentQuantity}</span>
            <Button type="round" onClick={() => dispatch(increaseItemQuantity(pizzaId))}>
                +
            </Button>
        </div>
    );
}

export default UpdateItemQuantity;
