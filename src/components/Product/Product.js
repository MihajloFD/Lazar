import Cart from '../../assets/darkCart.svg';
import { Counter } from "../Counter/Counter";


export const Product = ({ product, selectItem, updateCart }) => {
    const { id, name, price, selected, count } = product;


    return (
        <div key={id} className="group" onClick={() => selectItem(id)}>
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 relative">
                <img
                    src={`${process.env.PUBLIC_URL}${product.image}`}
                    alt={name}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
                {(selected || count) && (
                    <div className="absolute bottom-2 left-2 flex justify-center items-center">
                        <Counter product={product} />
                        <div onClick={() => updateCart(product)} className="w-7 h-7 ml-2 bg-black rounded-full flex justify-center items-center cursor-pointer">
                            <img src={Cart} alt="dark bag" />
                        </div>
                    </div>
                )}
            </div>
            <div>
                <p className="text-lg font-bold">{name}</p>
                <p className="text-2xl font-normal">{price}<sup className='text-sm'>RSD</sup></p>
            </div>
        </div>
    );
};

