import { useChangeProductAndCartData } from "../../hooks/useChangeProductAndCartData"

export const Counter = ({ product, isChart }) => {
    const { incrementItem, decrementItem } = useChangeProductAndCartData();

    const handleClick = (id, decrement) => (e) => {
        e.stopPropagation();
        decrement ? decrementItem(id, isChart) : incrementItem(id, isChart);
    }

    return (
        <div className="inline-flex p-1.5 pl-4 pr-4 justify-end items-center gap-4 rounded-full bg-white">
            <button onClick={handleClick(product.id, true)} className="cursor-pointer">
                <span className="text-xl font-bold">−</span>
            </button>
            <span className="text-lg">{product.count || 0}</span>
            <button onClick={handleClick(product.id)} className="cursor-pointer">
                <span className="text-xl font-bold">+</span>
            </button>
        </div>
    )
}
