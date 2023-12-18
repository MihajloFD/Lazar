import products from '../data/products.json';

export const mockLogin = (email, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email === 'test@test.com' && password === 'password') {
                resolve({ email: 'test@test.com', token: 'mockToken' });
            } else {
                reject(new Error('Invalid credentials'));
            }
        }, 1000);
    });
};

export const mockFetchProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 1000);
    });
};


