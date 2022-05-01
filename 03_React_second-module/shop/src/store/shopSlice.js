import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import shopList from "../shopList";

export const fetchProducts = createAsyncThunk(
    'shop/fetchProducts',
    async function(_, {rejectWithValue}) {
        try {
            // This is imitation getting data
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!response.ok) {
                throw new Error('Server Error!');
            }
            const data = response.json();
            // return shopList - mock json file
            return shopList
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);

export const shopSlice = createSlice({
    name: 'shop',
    initialState: {
        error: null,
        status: 'loading',
        goods:[],
        order: [],
        brands:[],
        filterProduct: [],
        showProduct:[],
        productById: [],
        isBasketShow: false,
        alertName: '',
    },
    reducers: {
        addToBasket: (state, action) => {
            const itemIndex = state.order.findIndex(
                (orderItem) => orderItem.id === action.payload.id
            );
            if (itemIndex < 0) {
                const newItem = {
                    ...action.payload,
                    quantity: 1,
                };
                state.order = [...state.order, newItem];
            } else {
                const newOrder = state.order.map((orderItem, index) => {
                    if (index === itemIndex) {
                        return {
                            ...action.payload,
                            quantity: orderItem.quantity + 1,
                        };
                    } else {
                        return orderItem;
                    }
                });
                state.order = newOrder;
            }
            state.alertName = action.payload.name;
        },
        handleBasketShow: (state) => {
            state.isBasketShow = !state.isBasketShow;
        },
        closeAlert: (state) => {
            state.alertName = '';
        },
        incQuantity: (state, action) => {
            const newOrder = state.order.map((el) => {
                if (el.id === action.payload.id) {
                    return {
                        ...el,
                        quantity: el.quantity + 1,
                    };
                } else {
                    return el;
                }
            });
            state.order = newOrder;
        },
        decQuantity: (state, action) => {
            const newOrder = state.order.map((el) => {
                if (el.id === action.payload.id) {
                    const newQuantity = el.quantity - 1;
                    return {
                        ...el,
                        quantity: newQuantity > 1 ? newQuantity : 1,
                    };
                } else {
                    return el;
                }
            });
            state.order = newOrder;
        },
        removeFromBasket: (state, action) => {
            state.order = state.order.filter((el) => el.id !== action.payload.id);
        },
        searchProducts: (state, action) => {
            const searchArr = (state.filterProduct.length) ? state.filterProduct : state.goods;
            state.showProduct = searchArr.filter((item) => item.name.toLowerCase().includes(action.payload.value));
        },
        filteredProductsByBrand: (state, action) => {
            if (action.payload.isChecked) {
                state.goods.filter(item => (item.brand === action.payload.brandName) ? state.filterProduct.push(item) : '');
                state.showProduct = [...state.filterProduct];
            } else {
                state.filterProduct = state.filterProduct.filter(item => item.brand !== action.payload.brandName);
                state.showProduct = state.filterProduct;
                if (!state.showProduct.length) {
                    state.showProduct = state.goods;
                }
            }
        },
        findProductById: (state, action) => {
            state.productById = state.goods.filter((item) => item.id === +action.payload.id);
        }
    },
    extraReducers: {
        [fetchProducts.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchProducts.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.goods = action.payload;
            state.showProduct = action.payload;
            action.payload.forEach(item => {
                if (!state.brands.includes(item.brand)) {
                        state.brands.push(item.brand);
                    };
            });
        },
        [fetchProducts.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
    }
  })
  
  // Action creators are generated for each case reducer function
  export const { 
      addToBasket,
      handleBasketShow,
      closeAlert,
      incQuantity,
      decQuantity,
      removeFromBasket,
      searchProducts,
      filteredProductsByBrand,
      findProductById,
    } = shopSlice.actions
  
  export default shopSlice.reducer