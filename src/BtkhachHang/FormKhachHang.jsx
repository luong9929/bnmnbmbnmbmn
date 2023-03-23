import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewProduct, update } from "../redux/Reducer/QuanLyKhachHang";
import Table from "./Table";

 class FormKhachHang extends Component {
  state = {
    values:{
      
      taiKhoan: "",
      matKhau: "",
      email: "",
      hoTen: "",
      sdt: "",
      loaiKhachHang: "",
    },
    errors: {
      stt:'',
      taiKhoan: "",
      password: "",
      name: "",
      email: "",
      tel: "",
      loaiKhachHang: "",
    },
  };


  handleChange = (e) =>{
    let {id , value} = e.target
    let newValues = {...this.state.values}
    newValues[id] = value
    let newErrors = { ...this.state.errors };
    let errMessage = "";
    if (value.trim() === "") {
      errMessage = " Dữ liệu không được bỏ trống ";
    } else {
      let dataType = e.target.getAttribute("data-type");
      if (dataType === "number") {
        let regexNumber = /^\d+$/;
        if (!regexNumber.test(value)) {
          errMessage = "Dữ liệu nhập phải là số!";
        }
      }
      if (dataType == "email") {
        let regexEmail =
          /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!regexEmail.test(value)) {
          errMessage = "Email không đúng định dạng!";
        }
      }
    }
    newErrors[id] = errMessage;
    this.setState({
      values: newValues,
      errors: newErrors,
    });
    console.log(newValues)
    
  }


  handleSubmit = (e) =>{
    e.preventDefault();
    const newArr = { ...this.state.values } ;
    const action = addNewProduct(newArr);
    this.props.dispatch(action);

  }
  layStore = () => {
    if (localStorage.getItem("arrProduct")) {
      let arrProduct = JSON.parse(localStorage.getItem("arrProduct"));
      
      return arrProduct;
    }
    return [];
  };

  editProduct = (prodEdit) => {
   
    this.setState({
      values: prodEdit,
    });
  };
 


  
  render() {
    return (
      <div className=" container">
        <form onSubmit={this.handleSubmit}>
          <div className="card">
            <div className="card-hearder bg-dark ">
              <h3 className="text-white px-3">Form đăng ký</h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-6">
                  <div className="from-group">
                    <p>Tài khoản</p>
                    <input
                      type="text"
                      id="taiKhoan"
                      value={this.state.values.taiKhoan}
                      className="form-control"
                      onChange={this.handleChange}
                    />
                     <p className="text-danger mt-3 px-2">
                      {this.state.errors.taiKhoan}
                    </p>
                  </div>
                  <div className="from-group">
                    <p>Mật khẩu</p>
                    <input
                      type="password"
                      id="matKhau"
                      value={this.state.values.matKhau}
                      className="form-control"
                      onChange={this.handleChange}
                    />
                     <p className="text-danger mt-3 px-2">
                      {this.state.errors.matKhau}
                    </p>
                  </div>
                  <div className="from-group">
                    <p>Email</p>
                    <input
                      type="email"
                      id="email"
                      value={this.state.values.email}
                      className="form-control"
                      onChange={this.handleChange}
                      data-type="email"
                    />
                     <p className="text-danger mt-3 px-2">
                      {this.state.errors.email}
                    </p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="from-group">
                    <p>Họ tên</p>
                    <input
                      type="text"
                      id="hoTen"
                      value={this.state.values.hoTen}
                      className="form-control"
                      onChange={this.handleChange}
                    />
                     <p className="text-danger mt-3 px-2">
                      {this.state.errors.hoTen}
                    </p>
                  </div>
                  <div className="from-group">
                    <p>Số điện thoại</p>
                    <input
                      type="tel"
                      id="sdt"
                      value={this.state.values.sdt}
                      className="form-control"
                      onChange={this.handleChange}
                      data-type="number"
                    />
                     <p className="text-danger mt-3 px-2">
                      {this.state.errors.sdt}
                    </p>
                  </div>
                  <div className="from-group">
                    <p>Loại khách hàng</p>
                    <input
                      type="text"
                      id="loaiKhachHang"
                      value={this.state.values.loaiKhachHang}
                      className="form-control"
                      onChange={this.handleChange}
                    />
                     <p className="text-danger mt-3 px-2">
                      {this.state.errors.loaiKhachHang}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-success mx-3">
                {" "}
                Đăng ký
              </button>
              <button type="button" className="btn btn-primary"  onClick={() => {
                 
                }}>
                {" "}
                Cập nhật
              </button>
            </div>
          </div>
        </form>

        <Table  edit={this.editProduct} />
      </div>
    );
  }
}

const mapStatetoProp = (state) => {
  return {
    arrProduct: state.QuanLyKhachHang.arrProduct,
  };
};
export default connect(mapStatetoProp)(FormKhachHang);
