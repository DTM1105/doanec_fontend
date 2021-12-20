import React, { Component } from 'react';
import {Routes,Route} from "react-router-dom";
import Header from '../Components/Header';
import Footer from '../Components//Footer';
import Trangchu from '../Components//Trangchu';
import Thongtin from '../Components/Thongtin';
import LichSuChuyenTien from '../Components/LichSuChuyenTien';
import KiHan from '../Components/KiHan';
import ThongtinCanhan from '../Components/ThongtinCanhan';
import DanhSachKH from '../Components/DanhSachKH';
import DangkiB1 from '../Components/DangkiB1';
import DangkiB2 from '../Components/DangkiB2';
import NhapmaDki from '../Components/NhapmaDki';
import RutTien from '../Components/RutTien';
import DangNhap from '../Components/DangNhap';
import GioiThieu from '../Components/GioiThieu';
import User from '../Components/User';
import DatLaiMK from '../Components/DatLaiMK';
import Naptien from '../Components/Naptien';
import TktietkiemDetail from '../Components/TktietkiemDetail';
import Tao_tkthanhtoan from '../Components/Tao_tkthanhtoan';
import Ad_DS_tktietkiem from '../Components/Ad_DS_tktietkiem';
import Ad_DS_tk from '../Components/Ad_DS_tk';
import Ad_DS_tkthanhtoan from '../Components/Ad_DS_tkthanhtoan';
import Thongketheothang from '../Components/Thongketheothang';
import Thongketheoquy from '../Components/Thongketheoquy';
import Thongketheonam from '../Components/Thongketheonam';
import Thongkeusertheothang from '../Components/Thongkeusertheothang';
import Thongkeusertheoquy from '../Components/Thongkeusertheoquy';
import Thongkeusertheonam from '../Components/Thongkeusertheonam';
import List_tkthanhtoan from '../Components/List_tkthanhtoan';
class DieuHuongURL extends Component {
    render() {
        return (
            <div>
                <Routes>
                {/* admin */}
                
                <Route path="quanlikhachhang" element={<Ad_DS_tktietkiem />} />
                <Route path="quanlitaikhoan" element={<Ad_DS_tk />} />
                <Route path="quanlitktt" element={<Ad_DS_tkthanhtoan />} />

                <Route path="thongketheothang" element={<Thongketheothang />} />
                <Route path="thongketheoquy" element={<Thongketheoquy />} />
                <Route path="thongketheonam" element={<Thongketheonam />} />

                <Route path="thongkeusertheothang" element={<Thongkeusertheothang />} />
                <Route path="thongkeusertheoquy" element={<Thongkeusertheoquy />} />
                <Route path="thongkeusertheonam" element={<Thongkeusertheonam />} />


    <Route path="/" element={<Trangchu />} />
      <Route path="dangnhap" element={<DangNhap />} />
      <Route path="tietkiem" element={<Thongtin />} />
      <Route path="gioithieu" element={<GioiThieu />} />
      <Route path="dangkitaikhoanb2" element={<DangkiB2 />} />
      <Route path="taotkthanhtoan" element={<Tao_tkthanhtoan />} />
      <Route path="listtkthanhtoan" element={<List_tkthanhtoan />} />

      <Route path="user" element={<User />} />
      <Route path="tktietkiem_detail/naptien" element={<Naptien />} />
      <Route path="ruttien" element={<RutTien />} />
      <Route path="tktietkiem_detail" element={<TktietkiemDetail />} />

      <Route path="dangnhap/user" element={<User />} />
      <Route path="tktietkiem_detail/thongtintaikhoan" element={<ThongtinCanhan />} />
      <Route path="dangnhap/user/ruttien" element={<RutTien />} />
      <Route path="dangnhap/user/lichsugiaodich" element={<LichSuChuyenTien />} />
      <Route path="thongtinlaisuat" element={<KiHan />} />

      <Route path="dangnhap/quenmatkhau" element={<DatLaiMK />} />
      <Route path="dangnhap/quenmatkhau/dangkitaikhoanb1" element={<DangkiB1 />} />
      <Route path="dangnhap/quenmatkhau/dangkitaikhoanb1/dangkitaikhoanb2" element={<DangkiB2 />} />
      <Route path="dangnhap/quenmatkhau/dangkitaikhoanb1/dangkitaikhoanb2/user" element={<User />} />
      <Route path="dangnhap/dangkitaikhoanb1" element={<DangkiB1 />} />
      <Route path="dangnhap/dangkitaikhoanb1/dangkitaikhoanb2" element={<DangkiB2 />} />
      <Route path="dangnhap/dangkitaikhoanb1/dangkitaikhoanb2/user" element={<User />} />



      <Route path="dangnhap/dangkitaikhoanb1/dangkitaikhoanb2/user/ruttien" element={<RutTien />} />
      <Route path="dangnhap/dangkitaikhoanb1/dangkitaikhoanb2/user/thongtintaikhoan" element={<ThongtinCanhan />} />
      <Route path="dangnhap/dangkitaikhoanb1/dangkitaikhoanb2/user/lichsugiaodich" element={<LichSuChuyenTien />} />
      <Route path="tktietkiem_detail/thongtinlaisuat" element={<KiHan />} />

      <Route path="dangnhap/quenmatkhau/dangkitaikhoanb1/dangkitaikhoanb2/user/ruttien" element={<RutTien />} />
      <Route path="dangnhap/quenmatkhau/dangkitaikhoanb1/dangkitaikhoanb2/user/thongtintaikhoan" element={<ThongtinCanhan />} />
      <Route path="dangnhap/quenmatkhau/dangkitaikhoanb1/dangkitaikhoanb2/user/lichsugiaodich" element={<LichSuChuyenTien />} />
      <Route path="dangnhap/quenmatkhau/dangkitaikhoanb1/dangkitaikhoanb2/user/thongtinlaisuat" element={<KiHan />} />
                </Routes>
            </div>
        );
    }
}

export default DieuHuongURL;