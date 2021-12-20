import './App.css';
import 'react-app-polyfill/stable'
import Header from './Header';
import Footer from './Footer';
import Trangchu from './Trangchu';
import Thongtin from './Thongtin';
import LichSuChuyenTien from './LichSuChuyenTien';
import KiHan from './KiHan';
import ThongtinCanhan from './ThongtinCanhan';
import DanhSachKH from './DanhSachKH';
import DangkiB1 from './DangkiB1';
import DangkiB2 from './DangkiB2';
import NhapmaDki from './NhapmaDki';
import RutTien from './RutTien';
import DangNhap from './DangNhap';
import paypal from './paypal';
import {  BrowserRouter,} from "react-router-dom";
import DieuHuongURL from '../router/DieuHuongURL';
import User from './User';
import {NavLink} from "react-router-dom";
function App() {
  return(
      <BrowserRouter>
      <Header/>
      {/* <Trangchu/> */}
      {/* <Thongtin/> */}
      {/* <LichSuChuyenTien/> */}
      {/* <KiHan/> */}
      {/* <ThongtinCanhan/> */}
      {/* <DanhSachKH/> */}
      {/* <DangkiB1/> */}
      {/* <DangkiB2/> */}
      {/* <NhapmaDki/> */}
      {/* <RutTien/> */}
      {/* <DangNhap/> */}
      <DieuHuongURL/>
      {/* <User/> */}
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
