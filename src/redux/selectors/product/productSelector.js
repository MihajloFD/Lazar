import { createSelector } from 'reselect';

export const productsSelector = state => state.products.productList;
export const cartSelector = state => state.products.cart;

export const countCartSelector = createSelector(
  [cartSelector],
  (cart) => {
    return cart.reduce((agr, cur) => { return agr + (cur.count || 0) }, 0)
  }
);

export const countProductSelector = createSelector(
  [productsSelector],
  (product) => {
    return product.reduce((agr, cur) => { return agr + (cur.count || 0) }, 0)
  }
);

export const selectCartItems = createSelector(
  [cartSelector],
  (cart) => {
    const carts = cart.filter(product => product.count);
    const sumPrice = carts.reduce((a, b) => { return a + (b.count * b.price) }, 0);
    const sumPrevPrice = carts.reduce((a, b) => { return a + (b.count * (b.prevPrice || 1)) }, 0);
    return { carts, sumPrice, sumPrevPrice }
  }
);
