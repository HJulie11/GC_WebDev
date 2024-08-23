(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[22],{316:function(e,t,s){Promise.resolve().then(s.bind(s,4375)),Promise.resolve().then(s.bind(s,4942))},4375:function(e,t,s){"use strict";var a=s(7437),l=s(2265),r=s(6463),n=s(8472),d=s(3501);t.default=()=>{let[e,t]=(0,l.useState)(0),{url:s,setToken:m}=(0,l.useContext)(d.A);(0,r.useRouter)();let[i,c]=(0,l.useState)({adminname:"",email:"",password:"",mobilenumber:"",address:"",position:"",registerDate:"",institute:"",group:"",studentlist:"",studentnumber:0,groupadmin:""});return(0,l.useEffect)(()=>{(async()=>{try{let e=localStorage.getItem("token");if(!e){console.error("Token not found");return}let t=await n.Z.get("".concat(s,"/api/admin/myaccount"),{headers:{token:e}});console.log("Response data:",t.data);let a={adminname:t.data.adminname,email:t.data.email,password:t.data.password,mobilenumber:t.data.mobilenumber,address:t.data.address,position:t.data.position,registerDate:t.data.registerDate,institute:t.data.institute,group:t.data.group,studentlist:t.data.studentlist,studentnumber:t.data.studentnumber,groupadmin:t.data.groupadmin};c(a)}catch(e){console.error("Error fetching user data:",e)}})()},[]),(0,a.jsxs)("div",{className:"flex flex-col center items-center p-10",children:[(0,a.jsxs)("div",{className:"flex flex-col center justify-start w-[75%] ml-0",children:[(0,a.jsxs)("h1",{className:"text-4xl font-bold text-purple-heavy mb-2",children:["@",i.adminname," ",(0,a.jsx)("span",{className:"text-4xl font-bold text-gray-20 mb-2",children:"님의 계정"})]}),(0,a.jsx)("p",{className:"text-[23px] text-gray-30",children:"Admin Profile"})]}),(0,a.jsxs)("div",{className:"flex flex-row center justify-center w-[80%] ml-0 mt-10",children:[(0,a.jsx)("div",{className:"flex flex-col w-[35%] p-2",children:(0,a.jsxs)("div",{className:"flex flex-col center items-center justify-center w-full",children:[(0,a.jsx)("div",{className:"w-[100px] h-[100px] bg-gray-20 rounded-full"}),(0,a.jsxs)("div",{className:"mt-5 flex flex-row center items-center justify-center",children:[(0,a.jsx)("h1",{className:"text-purple-heavy text-[20px] mr-2",children:i.adminname}),(0,a.jsx)("button",{className:"text-gray-30 text-[20px]",children:"✐"})]}),(0,a.jsxs)("div",{className:"text-[14px] text-gray-30 mt-2",children:["가입일자: ",i.registerDate," "]})]})}),(0,a.jsxs)("div",{className:"w-[65%] p-3",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"mt-0 ml-0 text-[25px] font-bold text-purple-heavy",children:"계정 정보 "}),(0,a.jsx)("table",{className:"w-full mt-5 ml-5 text-[18px]",children:(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"mb-5 w-[30%] p-3 ml-0 text-gray-50",children:"사용자 ID "}),(0,a.jsx)("td",{className:"mb-5 w-[70%] p-3 ml-0",children:"abcd03$$"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"mb-5 w-[30%] p-3 ml-0 text-gray-50",children:"비밀번호 "}),(0,a.jsx)("td",{className:"mb-5 w-[70%] p-3 ml-0",children:(0,a.jsx)("button",{className:"text-purple-middle underline text-[18px]",children:"비밀번호 변경 "})})]})]})})]}),(0,a.jsxs)("div",{className:"mt-10",children:[(0,a.jsx)("div",{className:"mt-0 ml-0 text-[25px] font-bold text-purple-heavy",children:"가입 정보 "}),(0,a.jsx)("table",{className:"w-full mt-5 ml-5 text-[18px]",children:(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"mb-5 w-[30%] p-3 ml-0 text-gray-50",children:"기관이름"}),(0,a.jsx)("td",{className:"mb-5 w-[70%] p-3 ml-0",children:i.institute})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"mb-5 w-[30%] p-3 ml-0 text-gray-50",children:"직책"}),(0,a.jsx)("td",{className:"mb-5 w-[70%] p-3 ml-0",children:i.position})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"mb-5 w-[30%] p-3 ml-0 text-gray-50",children:"담당자 이름"}),(0,a.jsx)("td",{className:"mb-5 w-[70%] p-3 ml-0",children:i.adminname})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"mb-5 w-[30%] p-3 ml-0 text-gray-50",children:"담당자 전화번호 "}),(0,a.jsx)("td",{className:"mb-5 w-[70%] p-3 ml-0",children:i.mobilenumber})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"mb-5 w-[30%] p-3 ml-0 text-gray-50",children:"이메일 "}),(0,a.jsx)("td",{className:"mb-5 w-[70%] p-3 ml-0",children:i.email})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"mb-5 w-[30%] p-3 ml-0 text-gray-50",children:"주소 "}),(0,a.jsx)("td",{className:"mb-5 w-[70%] p-3 ml-0",children:i.address})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"mb-5 w-[30%] p-3 ml-0 text-gray-50",children:"가입학생 수 "}),(0,a.jsxs)("td",{className:"flex flex-row w-[70%] p-3",children:[(0,a.jsx)("div",{children:i.studentnumber}),(0,a.jsx)("a",{href:"\\studentadmin",className:"flex text-[15px] text-gray-30 ml-5 center items-center",children:" ▶︎ 학생 관리 바로가기 "})," "]})]})]})})]})]})]})]})}},6463:function(e,t,s){"use strict";var a=s(1169);s.o(a,"usePathname")&&s.d(t,{usePathname:function(){return a.usePathname}}),s.o(a,"useRouter")&&s.d(t,{useRouter:function(){return a.useRouter}}),s.o(a,"useSearchParams")&&s.d(t,{useSearchParams:function(){return a.useSearchParams}})}},function(e){e.O(0,[404,138,472,648,942,971,23,744],function(){return e(e.s=316)}),_N_E=e.O()}]);