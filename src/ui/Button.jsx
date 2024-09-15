import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
    const base =
        "bg-yellow-400 uppercase font-semibold  text-stone-800   tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300  focus:bg-yellow-300 focus:ring focus:ring-offset-2 focus:outline-none focus:ring-yellow-300 disabled:cursor-none ";
    const styles = {
        primary: base + "px-4 py-3  md:px-6 md:py-4",
        small: base + "py-2 px-4 sm:px-5 sm:py-3 ",
        round: base + "px-2.5 py-1  md:px-3.5 md:py-2 text-sm",
        secondray:
            "border-2  border-stone-300 hover:text-stone-800 focus:text-stone-800 uppercase font-semibold  text-stone-400   tracking-wide rounded-full hover:bg-stone-300 transition-colors duration-300  focus:bg-stone-300 focus:ring focus:ring-offset-2 focus:outline-none focus:ring-yellow-300 disabled:cursor-none px-4 py-2.5 md:px-6 md:py-3.5",
    };
    if (to)
        return (
            <Link to={to} className={styles[type]}>
                {children}
            </Link>
        );
    if (onClick)
        return (
            <button onClick={onClick} disabled={disabled} className={styles[type]}>
                {children}
            </button>
        );
    return (
        <button disabled={disabled} className={styles[type]}>
            {children}
        </button>
    );
}

export default Button;
