import{e as w,r as n,b,u as z,az as I,j as s,C as k,c as u,B as F,D as M,E as G,F as B,a$ as D,b0 as y,I as O,aT as m}from"./index-BrrnQTzj.js";import{u as R}from"./index-DliO3oX5.js";const T=()=>{const{id:c}=w(),[a,_]=n.useState(null),[r,p]=n.useState([]),{access:d,user:x}=b(e=>e.auth),[f,C]=n.useState(!1),{friends_list:j}=b(e=>e.profile),g=z(),{isOpen:N,onOpen:A,onOpenChange:l}=R(),[$,v]=n.useState([]);n.useEffect(()=>{if(a){const e=new Set(a.users.map(t=>t.id));v(j.filter(t=>!e.has(t.user_id)))}},[j,a]);const h=()=>{m.get(`https://ec2-16-171-173-138.eu-north-1.compute.amazonaws.com/api/chat/group-chats/${c}/`,{headers:{Authorization:`Bearer ${d}`}}).then(e=>{_(e.data.group_chat);const t=e.data.group_chat.admins.some(i=>i.user.id===x.pk);C(t)}).catch(e=>console.error("Error fetching group chat:",e))};n.useEffect(()=>{h(),g(I())},[c,d,g]);const S=()=>{var t,i;console.log((t=r==null?void 0:r.target)==null?void 0:t.value,"newMembers");const e=(i=r==null?void 0:r.target)==null?void 0:i.value.split(",").map(o=>o.trim()).map(o=>parseInt(o));console.log(e,"userIds"),m.post(`https://ec2-16-171-173-138.eu-north-1.compute.amazonaws.com/api/chat/group-chats/${c}/add-member/`,{user_ids:e},{headers:{Authorization:`Bearer ${d}`}}).then(o=>{h(),p([]),l()}).catch(o=>console.error("Error adding members:",o))},E=e=>{m.post(`https://ec2-16-171-173-138.eu-north-1.compute.amazonaws.com/api/chat/group-chats/${c}/remove-member/`,{user_id:e},{headers:{Authorization:`Bearer ${d}`}}).then(t=>{h()}).catch(t=>console.error("Error removing member:",t))};return s.jsxs(k,{children:[s.jsx("h1",{className:"text-lg font-bold",children:"Group Settings"}),a?s.jsxs("div",{children:[s.jsxs("p",{children:[s.jsx("strong",{children:"Group Name:"})," ",a.name]}),s.jsxs("p",{children:[s.jsx("strong",{children:"Description:"})," ",a.description]}),s.jsx("h2",{className:"mt-4 text-md font-bold",children:"Members"}),s.jsx("ul",{className:"list-disc pl-5",children:a.users.map(e=>s.jsxs("li",{className:"flex justify-between items-center gap-2 mb-2",children:[s.jsx("span",{children:e.username}),f&&e.id!==x.pk&&s.jsx("button",{onClick:()=>E(e.id),className:"btn-custom-red",children:"Remove"})]},e.id))}),f&&s.jsxs("div",{className:"mt-4",children:[s.jsx(u,{onClick:A,className:"btn-custom-yellow",children:"Add New Members"}),s.jsx(F,{isOpen:N,onOpenChange:l,children:s.jsxs(M,{children:[s.jsx(G,{children:s.jsx("h1",{className:"text-2xl font-bold",children:"Add New Members"})}),s.jsx(B,{children:s.jsx(D,{label:"Select Friends",placeholder:"Choose friends to add",selectionMode:"multiple",onChange:e=>p(e),children:$.map(e=>s.jsx(y,{value:e,children:e.username},e.user_id))})}),s.jsxs(O,{children:[s.jsx(u,{onClick:l,children:"Cancel"}),s.jsx(u,{onClick:S,children:"Add Members"})]})]})})]})]}):s.jsx("p",{children:"Loading group settings..."})]})};export{T as default};
