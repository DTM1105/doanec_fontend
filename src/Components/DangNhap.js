import React from 'react';
import {useState,useEffect} from 'react';
import {NavLink} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
function DangNhap(){
  const [username,setusername]=useState("");
    const [password,setpassword]=useState("");
    const navigate = useNavigate();
    useEffect(()=>{
        if(localStorage.getItem('tkkh-info')){
            navigate('/home');
        }
    },[])
    async function login(){
      let tkkh ={username,password};
      console.log(tkkh);
     let result = await fetch("http://webec1-env.eba-mppppyr4.ap-southeast-1.elasticbeanstalk.com/api/auth/signin",{
          method:"POST",
          headers:{"Content-Type":"application/json",
          "Accept":"application/json"},
          body:JSON.stringify(tkkh)
      });
      result= await result.json();
      localStorage.setItem("user-info",JSON.stringify(result));
      let user= JSON.parse(localStorage.getItem("user-info"));
      let permission=user.roles;
      console.warn(permission);
      console.warn(typeof(permission) );
      if(permission == 'ROLE_ADMIN')
      {
        console.warn("Dang nhap bang admin");
        navigate('/quanlikhachhang');
        window.location.reload(<Footer/>);
      }
      else{
        navigate('/user');
        window.location.reload(<Footer/>);
        }
      }
      function dki_tk(){
          navigate('/register')
      }
      
     
        return (
            <div>
                <div className="container-fluid">
  <div className="row">
    <div className="col-8">
      <div style={{textAlign: 'center'}}><img src="DangNhap.jpg" alt="Slogan" />
      </div></div>
    <div className="col-3">
      <div className="card text-left">
        <div className="card mb-3">
          <div style={{backgroundColor: '#07184E', borderRadius: '20px'}}>
            <div className="card-body">
              <div><br /></div>
              <div><br /></div>
              <div><br /></div>
              <div style={{textAlign: 'center', color: 'white'}}><h2>Đăng Nhập</h2></div>
              <div><br /></div>
              <div><br /></div>
              <div className="form-group">
                <input type="text" className="form-control" name id="name" aria-describedby="helpId" 
                placeholder="Username"  onChange={(e)=>setusername(e.target.value)}/>
              </div>
              <div className="form-group">
                <input type="password" className="form-control" name id="mkhau" aria-describedby="helpId" 
                placeholder="Password"  onChange={(e)=>setpassword(e.target.value)} />
              </div>
              <div><br /></div>
              <div style={{textAlign: 'right'}}><NavLink to="quenmatkhau" style={({ isActive }) => {
          return { display: "block", color: isActive ? "yellow" : "", backgroundColor:isActive ? "black":""};}}>Quên mật khẩu?</NavLink></div>
              <div><br /></div>
              <div className="btn btn-danger" style={{textAlign: 'center'}} onClick={login}>Đăng Nhập</div>
              <div><br /></div>
              <div style={{textAlign: 'right'}}><NavLink to="dangkitaikhoanb1" style={({ isActive }) => {
          return { display: "block", color: isActive ? "yellow" : "", backgroundColor:isActive ? "black":""};}}>Bạn chưa có tài khoản? Đăng kí</NavLink></div>
              <div><br /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

            </div>
        );
    }

export default DangNhap;