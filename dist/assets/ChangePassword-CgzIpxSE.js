import{u as x,a as b,b as N,r as c,j as s,N as j,C as v,i,c as C,d as P}from"./index-BrrnQTzj.js";const D=()=>{const h=x();b();const{isAuthenticated:_,loading:p,message:I,error:S}=N(e=>e.auth),[m,g]=c.useState({new_password1:"",new_password2:"",old_password:""}),[a,d]=c.useState({new_password1:!1,new_password2:!1,old_password:!1}),[r,t]=c.useState({new_password1:"",new_password2:"",old_password:""}),{new_password1:o,new_password2:n,old_password:u}=m,l=e=>{g({...m,[e.target.name]:e.target.value}),d({...a,[e.target.name]:!1}),t({...r,[e.target.name]:""})},f=e=>{e.preventDefault();let w=!1;o.trim().length<8&&(d({...a,new_password1:!0}),t({...r,new_password1:"Password must be at least 8 characters"}),w=!0),o!==n&&(d({...a,new_password2:!0}),t({...r,new_password2:"Passwords do not match"}),w=!0),!w&&h(P({new_password1:o,new_password2:n,old_password:u}))};return!_&&!localStorage.getItem("access")?s.jsx(j,{to:"/login"}):s.jsxs(v,{className:"main-box ",children:[s.jsx("h2",{className:"text-center mb-4",children:"Change Password"}),s.jsxs("form",{className:"mb-3",onSubmit:f,children:[s.jsxs("div",{className:"mb-3",children:[s.jsx("label",{htmlFor:"new_password1",className:"form-label",children:"New Password"}),s.jsx(i,{name:"new_password1",value:o,onChange:l,type:"password",className:"form-control",id:"new_password1",isInvalid:a.new_password1,errorMessage:r.new_password1,placeholder:"New password ...",required:!0})]}),s.jsxs("div",{className:"mb-3",children:[s.jsx("label",{htmlFor:"new_password2",className:"form-label",children:"Re-enter New Password"}),s.jsx(i,{name:"new_password2",value:n,onChange:l,type:"password",className:"form-control",id:"new_password2",isInvalid:a.new_password2,errorMessage:r.new_password2,placeholder:"Re-enter new password ...",required:!0})]}),s.jsxs("div",{className:"mb-3",children:[s.jsx("label",{htmlFor:"old_password",className:"form-label",children:"Old Password"}),s.jsx(i,{name:"old_password",value:u,onChange:l,type:"password",className:"form-control",id:"old_password",required:!0,placeholder:"Old password ..."})]}),s.jsx("div",{className:"d-grid gap-2",children:s.jsx(C,{color:"success",type:"submit",disabled:p,children:p?"Changing...":"Change Password"})})]})]})};export{D as default};