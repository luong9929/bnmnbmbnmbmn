import {configureStore} from '@reduxjs/toolkit'
import QuanLyKhachHang from './Reducer/QuanLyKhachHang'






export const store = configureStore({

    reducer:{
        QuanLyKhachHang:QuanLyKhachHang
    }











})