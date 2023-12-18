import { useDispatch, useSelector } from "react-redux";
import { cartSelector, productsSelector } from "../redux/selectors/product/productSelector";
import { setCart, setProducts } from "../redux/actions/product/productAction";

export const useChangeProductAndCartData = () => {
    const dispatch = useDispatch();
    const products = useSelector(productsSelector);
    const cart = useSelector(cartSelector);

    const onRemoveChart = (productId) => {
        const cartIndex = cart.findIndex(p => p.id === productId);
        const newCart = [...cart];
        onUpdateItemQuantity(productId, -cart[cartIndex].count)
        newCart.splice(cartIndex, 1);
        dispatch(setCart(newCart));
    }

    const onSelectItem = (productId) => {
        const productIndex = products.findIndex(p => p.id === productId);
        const selectedIndex = products.findIndex(p => p.selected);
        const newProducts = [...products];
        if (newProducts[productIndex]) {
            if (newProducts[selectedIndex]) {
                newProducts[selectedIndex] = {
                    ...newProducts[selectedIndex],
                    selected: false
                };
            }
            newProducts[productIndex] = {
                ...newProducts[productIndex],
                selected: true
            };
            dispatch(setProducts(newProducts));
        }
    }
    const onUpdateChart = (product) => {
        const newCart = [...cart];
        const cartIndex = cart.findIndex(p => p.id === product.id);
        if (cartIndex === -1) {
            newCart.push(product);
        } else {
            newCart[cartIndex] = {
                ...newCart[cartIndex],
                count: product.count
            }
        }
        dispatch(setCart(newCart));
    }
    const onUpdateItemQuantity = (productId, quantityChange, isChart) => {
        const newProducts = [...products];
        const productIndex = products.findIndex(p => p.id === productId);
        if (newProducts[productIndex]) {
            newProducts[productIndex] = {
                ...newProducts[productIndex],
                count: (newProducts[productIndex].count <= 1 && quantityChange === -1) ? 0 : (newProducts[productIndex].count || 0) + quantityChange
            };
            dispatch(setProducts(newProducts));
            if (isChart) {
                dispatch(setCart(newProducts))
            }
        }
    };

    return {
        incrementItem: (productId, isChart) => onUpdateItemQuantity(productId, 1, isChart),
        decrementItem: (productId, isChart) => onUpdateItemQuantity(productId, -1, isChart),
        updateCart: product => onUpdateChart(product),
        selectItem: productId => onSelectItem(productId),
        removeCart: productId => onRemoveChart(productId)
    }
}