import React, { Component } from 'react'
import { connect } from 'react-redux';
import { delProduct } from '../redux/Reducer/QuanLyKhachHang';

 class Table extends Component {



  







 



  render() {
    const {edit} = this.props
    return (
        <table className='table container mt-4'>
        <thead className='bg-dark text-light'>
        <tr>
            
            <th>Tài khoản</th>
            <th>Họ tên</th>
            <th>Mật khẩu  </th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Loại khách hàng</th>
            <th></th>
            
        </tr>
    </thead>
    <tbody  >
    {this.props.arrProduct.map((item,index)=>{
             return <tr key={index}>
                
                
              <td>{item.taiKhoan}</td>
              <td>{item.hoTen}</td>
              <td>{item.matKhau}</td>
              <td>{item.email}</td>
              <td>{item.sdt}</td>
              <td>{item.loaiKhachHang}</td>
              <td>
              <button className='btn btn-primary'onClick={()=>{
                     edit(item)
                }}>Chỉnh sửa</button>
                <button className='btn btn-danger mx-3' onClick={()=>{
                    const action = delProduct(item.taiKhoan)
                    this.props.dispatch(action)
                }}> Xóa</button>
              
            </td>
            
             </tr>
           })}
    </tbody>
        </table>









           
    )


   
  }
}
const mapStatetoProp = (state) => {
    return {
      arrProduct: state.QuanLyKhachHang.arrProduct,
    };
  };
  export default connect(mapStatetoProp)(Table);
  