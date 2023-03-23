import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrProduct: [],
};

const QuanLyKhachHang = createSlice({
  name: "QuanLyKhachHang",
  initialState,
  reducers: {
    addNewProduct: (state, { type, payload }) => {
      const newArr = payload;
      state.arrProduct.push(newArr);
      let stringArrProduct = JSON.stringify(state.arrProduct);
      localStorage.setItem("arrProduct", stringArrProduct);
    },
    delProduct: (state, { type, payload }) => {
      const taiKhoan = payload;
      state.arrProduct = state.arrProduct.filter(
        (item) => item.taiKhoan !== taiKhoan
      );
      let stringArrProduct = JSON.stringify(state.arrProduct);
      localStorage.setItem("arrProduct", stringArrProduct);
    },
   
  },
});

export const { addNewProduct, delProduct } = QuanLyKhachHang.actions;

export default QuanLyKhachHang.reducer;
