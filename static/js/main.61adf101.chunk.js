(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{112:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(30),r=a.n(s),o=(a(89),a(168)),i=a(12),l=a(15),j=a(1);const d=Object(n.createContext)(null);var b=e=>{let{children:t}=e;const[a,c]=Object(n.useState)({name:"",username:""});return Object(j.jsx)(d.Provider,{value:{account:a,setAccount:c},children:t})},h=a(4),x=a(165),p=a(167);const u=Object(h.a)(x.a)`
    background: #FFFFFF;
    color: black;
`,O=Object(h.a)(p.a)`
    justify-content: center;
    & > a {
        padding: 20px;
        color: #000;
        text-decoration: none;
    }
`;var m=()=>{Object(i.h)();return Object(j.jsx)(u,{children:Object(j.jsxs)(O,{children:[Object(j.jsx)(l.b,{to:"/",children:"HOME"}),Object(j.jsx)(l.b,{to:"/about",children:"ABOUT"}),Object(j.jsx)(l.b,{to:"/contact",children:"CONTACT"}),Object(j.jsx)(l.b,{to:"/account",children:"LOGOUT"})]})})},g=a(164),f=a(169);const w=Object(h.a)(o.a)`
    width: 100%;
    background: url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg) center/55% repeat-x #000;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`,y=Object(h.a)(f.a)`
    font-size: 70px;
    color: #FFFFFF;
    line-height: 1
`,v=Object(h.a)(f.a)`
    font-size: 20px;
    background: #FFFFFF;
`;var S=()=>Object(j.jsxs)(w,{children:[Object(j.jsx)(y,{children:"BLOG"}),Object(j.jsx)(v,{children:"Code for Interview"})]}),F=a(170),E=a(161),k=a(171),T=a(172),C=a(173),P=a(174);const A=[{id:1,type:"Music"},{id:2,type:"Movies"},{id:3,type:"Sports"},{id:4,type:"Tech"},{id:5,type:"Fashion"}],M=Object(h.a)(F.a)`
    border: 1px solid rgba(224, 224, 224, 1);
`,D=Object(h.a)(E.a)`
    margin: 20px;
    width: 85%;
    background: #6495ED;
    color: #fff;
    text-decoration: none;
`,I=Object(h.a)(l.b)`
    text-decoration: none;
    color: inherit;
`;var z=()=>{const[e]=Object(l.c)(),t=e.get("category");return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(l.b,{to:`/create?category=${t||""}`,style:{textDecoration:"none"},children:Object(j.jsx)(D,{variant:"contained",children:"Create Blog"})}),Object(j.jsxs)(M,{children:[Object(j.jsx)(k.a,{children:Object(j.jsx)(T.a,{children:Object(j.jsx)(C.a,{children:Object(j.jsx)(I,{to:"/",children:"All Categories"})})})}),Object(j.jsx)(P.a,{children:A.map((e=>Object(j.jsx)(T.a,{children:Object(j.jsx)(C.a,{children:Object(j.jsx)(I,{to:`/?category=${e.type}`,children:e.type})})},e.id)))})]})]})},B=a(71);const R={loading:{title:"Loading...",message:"Data is being loaded. Please wait"},success:{title:"Success",message:"Data successfully loaded"},requestFailure:{title:"Error!",message:"An error occur while parsing request data"},responseFailure:{title:"Error!",message:"An error occur while fetching response from server. Please try again"},networkError:{title:"Error!",message:"Unable to connect to the server. Please check internet connectivity and try again."}},q={userLogin:{url:"/login",method:"POST"},userSignup:{url:"/signup",method:"POST"},getAllPosts:{url:"/posts",method:"GET",params:!0},getRefreshToken:{url:"/token",method:"POST"},uploadFile:{url:"file/upload",method:"POST"},createPost:{url:"create",method:"POST"},deletePost:{url:"delete",method:"DELETE",query:!0},getPostById:{url:"post",method:"GET",query:!0},newComment:{url:"/comment/new",method:"POST"},getAllComments:{url:"comments",method:"GET",query:!0},deleteComment:{url:"comment/delete",method:"DELETE",query:!0},updatePost:{url:"update",method:"PUT",query:!0}},L=(e,t)=>e.params?{params:t}:e.query?"object"===typeof t?{query:t._id}:{query:t}:{},G=a.n(B).a.create({baseURL:"http://localhost:8000",timeout:1e4,headers:{"content-type":"application/json"}});G.interceptors.request.use((function(e){return e.TYPE.params?e.params=e.TYPE.params:e.TYPE.query&&(e.url=e.url+"/"+e.TYPE.query),e}),(function(e){return Promise.reject(e)})),G.interceptors.response.use((function(e){return H(e)}),(function(e){return Promise.reject(N(e))}));const H=e=>200===(null===e||void 0===e?void 0:e.status)?{isSuccess:!0,data:e.data}:{isFailure:!0,status:null===e||void 0===e?void 0:e.status,msg:null===e||void 0===e?void 0:e.msg,code:null===e||void 0===e?void 0:e.code},N=async e=>{return e.response?403!==(null===(t=e.response)||void 0===t?void 0:t.status)?(console.log("ERROR IN RESPONSE: ",e.toJSON()),{isError:!0,msg:R.responseFailure,code:e.response.status}):void sessionStorage.clear():e.request?(console.log("ERROR IN RESPONSE: ",e.toJSON()),{isError:!0,msg:R.requestFailure,code:""}):(console.log("ERROR IN RESPONSE: ",e.toJSON()),{isError:!0,msg:R.networkError,code:""});var t},_={};for(const[it,lt]of Object.entries(q))_[it]=(e,t,a)=>G({method:lt.method,url:lt.url,data:"DELETE"===lt.method?"":e,responseType:lt.responseType,headers:{authorization:sessionStorage.getItem("accessToken")},TYPE:L(lt,e),onUploadProgress:function(e){if(t){let a=Math.round(100*e.loaded/e.total);t(a)}},onDownloadProgress:function(e){if(a){let t=Math.round(100*e.loaded/e.total);a(t)}}});const U=Object(h.a)(o.a)`
    border: 1px solid #d3cede;
    border-radius: 10px;
    margin: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 350px;
    & > img, & > p {
        padding: 0 5px 5px 5px;
    }
`,Y=Object(h.a)("img")({width:"100%",objectFit:"cover",borderRadius:"10px 10px 0 0",height:150}),J=Object(h.a)(f.a)`
    color: #878787
    font-size: 12px;
`,W=Object(h.a)(f.a)`
    font-size: 18px;
    font-weight: 600
`,$=Object(h.a)(f.a)`
    font-size: 14px;
    word-break: break-word;
`;var Z=e=>{let{post:t}=e;const a=t.picture?t.picture:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80",n=(e,t)=>e.length>t?e.substring(0,t)+"...":e;return Object(j.jsxs)(U,{children:[Object(j.jsx)(Y,{src:a,alt:"post"}),Object(j.jsx)(J,{children:t.categories}),Object(j.jsx)(W,{children:n(t.title,20)}),Object(j.jsxs)(J,{children:["Author: ",t.username]}),Object(j.jsx)($,{children:n(t.description,100)})]})};var V=()=>{const[e,t]=Object(n.useState)([]),[a]=Object(l.c)(),c=a.get("category");return Object(n.useEffect)((()=>{(async()=>{let e=await _.getAllPosts({category:c||""});e.isSuccess&&t(e.data)})()}),[c]),Object(j.jsx)(j.Fragment,{children:(null===e||void 0===e?void 0:e.length)?e.map((e=>Object(j.jsx)(g.a,{item:!0,lg:3,sm:4,xs:12,children:Object(j.jsx)(l.b,{style:{textDecoration:"none",color:"inherit"},to:`details/${e._id}`,children:Object(j.jsx)(Z,{post:e})})}))):Object(j.jsx)(o.a,{style:{color:"878787",margin:"30px 80px",fontSize:18},children:"No data is available for selected category"})})};var X=()=>Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(S,{}),Object(j.jsxs)(g.a,{container:!0,children:[Object(j.jsx)(g.a,{item:!0,lg:2,xs:12,sm:2,children:Object(j.jsx)(z,{})}),Object(j.jsx)(g.a,{container:!0,item:!0,xs:12,sm:10,lg:10,children:Object(j.jsx)(V,{})})]})]}),K=a(162),Q=a(18),ee=a(153),te=a(154);const ae=Object(h.a)(o.a)((e=>{let{theme:t}=e;return{margin:"50px 100px",[t.breakpoints.down("md")]:{margin:0}}})),ne=Object(h.a)("img")({width:"100%",height:"50vh",objectFit:"cover"}),ce=Object(h.a)(K.a)`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
`,se=Object(h.a)(Q.c)`
    flex: 1;
    margin: 0 30px;
    font-size: 25px;
`,re=Object(h.a)(ee.a)`
    width: 100%;
    border: none;
    margin-top: 50px;
    font-size: 18px;
    &:focus-visible {
        outline: none;
    }
`,oe={title:"",description:"",picture:"",username:"",categories:"",createdDate:new Date};var ie=()=>{const e=Object(i.h)(),t=Object(i.g)(),[a,c]=Object(n.useState)(oe),[s,r]=Object(n.useState)(""),{account:o}=Object(n.useContext)(d),l=a.picture?a.picture:"https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";Object(n.useEffect)((()=>{var e;(async()=>{if(s){const e=new FormData;e.append("name",s.name),e.append("file",s);const t=await _.uploadFile(e);a.picture=t.data}})(),a.categories=(null===(e=t.search)||void 0===e?void 0:e.split("=")[1])||"All",a.username=o.username}),[s]);const b=e=>{c({...a,[e.target.name]:e.target.value})};return Object(j.jsxs)(ae,{children:[Object(j.jsx)(ne,{src:l,alt:"post"}),Object(j.jsxs)(ce,{children:[Object(j.jsx)("label",{htmlFor:"fileInput",children:Object(j.jsx)(te.a,{fontSize:"large",color:"action"})}),Object(j.jsx)("input",{type:"file",id:"fileInput",style:{display:"none"},onChange:e=>r(e.target.files[0])}),Object(j.jsx)(se,{onChange:e=>b(e),name:"title",placeholder:"Title"}),Object(j.jsx)(E.a,{onClick:()=>(async()=>{await _.createPost(a),e("/")})(),variant:"contained",color:"primary",children:"Publish"})]}),Object(j.jsx)(re,{rowsMin:5,placeholder:"Tell your story...",name:"description",onChange:e=>b(e)})]})},le=a(156),je=a(155);const de=Object(h.a)(o.a)`
    margin-top: 30px;
    background: #F5F5F5;
    padding: 10px;
`,be=Object(h.a)(o.a)`
    display: flex;
    margin-bottom: 5px;
`,he=Object(h.a)(f.a)`
    font-weight: 600,
    font-size: 18px;
    margin-right: 20px;
`,xe=Object(h.a)(f.a)`
    font-size: 14px;
    color: #878787;
`,pe=Object(h.a)(je.a)`
    margin-left: auto;
`;var ue=e=>{let{comment:t,setToggle:a}=e;const{account:c}=Object(n.useContext)(d);return Object(j.jsxs)(de,{children:[Object(j.jsxs)(be,{children:[Object(j.jsx)(he,{children:t.name}),Object(j.jsx)(xe,{children:new Date(t.date).toDateString()}),t.name===c.username&&Object(j.jsx)(pe,{onClick:()=>(async()=>{await _.deleteComment(t._id),a((e=>!e))})()})]}),Object(j.jsx)(f.a,{children:t.comments})]})};const Oe=Object(h.a)(o.a)`
    margin-top: 100px;
    display: flex;
`,me=Object(h.a)("img")({width:50,height:50,borderRadius:"50%"}),ge=Object(h.a)(ee.a)`
    height: 100px !important;
    width: 100%; 
    margin: 0 20px;
`,fe={name:"",postId:"",date:new Date,comments:""};var we=e=>{let{post:t}=e;const[a,c]=Object(n.useState)(fe),[s,r]=Object(n.useState)([]),[i,l]=Object(n.useState)(!1),{account:b}=Object(n.useContext)(d);Object(n.useEffect)((()=>{(async()=>{const e=await _.getAllComments(t._id);e.isSuccess&&r(e.data)})()}),[i,t]);return Object(j.jsxs)(o.a,{children:[Object(j.jsxs)(Oe,{children:[Object(j.jsx)(me,{src:"https://static.thenounproject.com/png/12017-200.png",alt:"dp"}),Object(j.jsx)(ge,{rowsMin:5,placeholder:"what's on your mind?",onChange:e=>(e=>{c({...a,name:b.username,postId:t._id,comments:e.target.value})})(e),value:a.comments}),Object(j.jsx)(E.a,{variant:"contained",color:"primary",size:"medium",style:{height:40},onClick:e=>(async()=>{await _.newComment(a),c(fe),l((e=>!e))})(),children:"Post"})]}),Object(j.jsx)(o.a,{children:s&&s.length>0&&s.map((e=>Object(j.jsx)(ue,{comment:e,setToggle:l})))})]})};const ye=Object(h.a)(o.a)((e=>{let{theme:t}=e;return{margin:"50px 100px",[t.breakpoints.down("md")]:{margin:0}}})),ve=Object(h.a)("img")({width:"100%",height:"50vh",objectFit:"cover"}),Se=Object(h.a)(le.a)`
    margin: 5px;
    padding: 5px;
    border: 1px solid #878787;
    border-radius: 10px;
`,Fe=Object(h.a)(je.a)`
    margin: 5px;
    padding: 5px;
    border: 1px solid #878787;
    border-radius: 10px;
`,Ee=Object(h.a)(f.a)`
    font-size: 38px;
    font-weight: 600;
    text-align: center;
    margin: 50px 0 10px 0;
`,ke=Object(h.a)(o.a)((e=>{let{theme:t}=e;return{color:"#878787",display:"flex",margin:"20px 0",[t.breakpoints.down("sm")]:{display:"block"}}}));var Te=()=>{const[e,t]=Object(n.useState)({}),{account:a}=Object(n.useContext)(d),c=Object(i.h)(),{id:s}=Object(i.i)();Object(n.useEffect)((()=>{(async()=>{let e=await _.getPostById(s);e.isSuccess&&t(e.data)})()}),[]);return Object(j.jsxs)(ye,{children:[Object(j.jsx)(ve,{src:e.picture||"https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",alt:"post"}),Object(j.jsx)(o.a,{style:{float:"right"},children:a.username===e.username&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(l.b,{to:`/update/${e._id}`,children:Object(j.jsx)(Se,{color:"primary"})}),Object(j.jsx)(Fe,{onClick:()=>(async()=>{await _.deletePost(e._id),c("/")})(),color:"error"})]})}),Object(j.jsx)(Ee,{children:e.title}),Object(j.jsxs)(ke,{children:[Object(j.jsx)(l.b,{to:`/?username=${e.username}`,style:{textDecoration:"none",color:"inherit"},children:Object(j.jsxs)(f.a,{children:["Author: ",Object(j.jsx)("span",{style:{fontWeight:600},children:e.username})]})}),Object(j.jsx)(f.a,{style:{marginLeft:"auto"},children:new Date(e.createdDate).toDateString()})]}),Object(j.jsx)(f.a,{children:e.description}),Object(j.jsx)(we,{post:e})]})};const Ce=Object(h.a)(o.a)((e=>{let{theme:t}=e;return{margin:"50px 100px",[t.breakpoints.down("md")]:{margin:0}}})),Pe=Object(h.a)("img")({width:"100%",height:"50vh",objectFit:"cover"}),Ae=Object(h.a)(K.a)`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
`,Me=Object(h.a)(Q.c)`
    flex: 1;
    margin: 0 30px;
    font-size: 25px;
`,De=Object(h.a)(ee.a)`
    width: 100%;
    border: none;
    margin-top: 50px;
    font-size: 18px;
    &:focus-visible {
        outline: none;
    }
`,Ie={title:"",description:"",picture:"",username:"codeforinterview",categories:"Tech",createdDate:new Date};var ze=()=>{const e=Object(i.h)(),[t,a]=Object(n.useState)(Ie),[c,s]=Object(n.useState)(""),[r,o]=Object(n.useState)(""),{id:l}=Object(i.i)();Object(n.useEffect)((()=>{(async()=>{let e=await _.getPostById(l);e.isSuccess&&a(e.data)})()}),[]),Object(n.useEffect)((()=>{(async()=>{if(c){const e=new FormData;e.append("name",c.name),e.append("file",c);const a=await _.uploadFile(e);a.isSuccess&&(t.picture=a.data,o(a.data))}})()}),[c]);const d=e=>{a({...t,[e.target.name]:e.target.value})};return Object(j.jsxs)(Ce,{children:[Object(j.jsx)(Pe,{src:t.picture||"https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",alt:"post"}),Object(j.jsxs)(Ae,{children:[Object(j.jsx)("label",{htmlFor:"fileInput",children:Object(j.jsx)(te.a,{fontSize:"large",color:"action"})}),Object(j.jsx)("input",{type:"file",id:"fileInput",style:{display:"none"},onChange:e=>s(e.target.files[0])}),Object(j.jsx)(Me,{onChange:e=>d(e),value:t.title,name:"title",placeholder:"Title"}),Object(j.jsx)(E.a,{onClick:()=>(async()=>{await _.updatePost(t),e(`/details/${l}`)})(),variant:"contained",color:"primary",children:"Update"})]}),Object(j.jsx)(De,{rowsMin:5,placeholder:"Tell your story...",name:"description",onChange:e=>d(e),value:t.description})]})},Be=a(175),Re=a(157),qe=a(158),Le=a(159);const Ge=Object(h.a)(o.a)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`,He=Object(h.a)(o.a)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`,Ne=Object(h.a)(f.a)`
    color: #878787;
`;var _e=()=>Object(j.jsxs)(o.a,{children:[Object(j.jsx)(Ge,{}),Object(j.jsxs)(He,{children:[Object(j.jsx)(f.a,{variant:"h3",children:"Code for Interview"}),Object(j.jsxs)(Ne,{variant:"h5",children:["I'm a Software Engineer based in India. I've built websites, desktop applications and corporate software.",Object(j.jsx)("br",{}),"If you are interested, you can view some of my favorite projects here",Object(j.jsx)(o.a,{component:"span",style:{marginLeft:5},children:Object(j.jsx)(Be.a,{href:"https://github.com/kunaltyagi9",color:"inherit",target:"_blank",children:Object(j.jsx)(Re.a,{})})})]}),Object(j.jsxs)(Ne,{variant:"h5",children:["Need something built or simply want to have chat? Reach out to me on",Object(j.jsx)(o.a,{component:"span",style:{marginLeft:5},children:Object(j.jsx)(Be.a,{href:"https://www.instagram.com/codeforinterview/",color:"inherit",target:"_blank",children:Object(j.jsx)(qe.a,{})})}),"or send me an Email",Object(j.jsx)(Be.a,{href:"mailto:codeforinterview@gmail.com?Subject=This is a subject",target:"_blank",color:"inherit",children:Object(j.jsx)(Le.a,{})}),"."]})]})]});const Ue=Object(h.a)(o.a)`
    background-image: url(http://mrtaba.ir/image/bg2.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px top -100px;
    background-size: cover;
`,Ye=Object(h.a)(o.a)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`,Je=Object(h.a)(f.a)`
    color: #878787;
`;var We=()=>Object(j.jsxs)(o.a,{children:[Object(j.jsx)(Ue,{}),Object(j.jsxs)(Ye,{children:[Object(j.jsx)(f.a,{variant:"h3",children:"Getting in touch is easy!"}),Object(j.jsxs)(Je,{variant:"h5",children:["Reach out to me on",Object(j.jsx)(Be.a,{href:"https://www.instagram.com/codeforinterview/",color:"inherit",target:"_blank",children:Object(j.jsx)(qe.a,{})}),"or send me an Email",Object(j.jsx)(Be.a,{href:"mailto:codeforinterview@gmail.com?Subject=This is a subject",target:"_blank",color:"inherit",children:Object(j.jsx)(Le.a,{})}),"."]})]})]}),$e=a(160);const Ze=Object(h.a)(o.a)`
    width: 400px;
    margin: auto;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`,Ve=Object(h.a)("img")({width:100,display:"flex",margin:"auto",padding:"50px 0 0"}),Xe=Object(h.a)(o.a)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`,Ke=Object(h.a)(E.a)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`,Qe=Object(h.a)(E.a)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`,et=Object(h.a)(f.a)`
    color: #878787;
    font-size: 12px;
`,tt=Object(h.a)(f.a)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`,at={username:"",password:""},nt={name:"",username:"",password:""};var ct=e=>{let{isUserAuthenticated:t}=e;const[a,c]=Object(n.useState)(at),[s,r]=Object(n.useState)(nt),[l,b]=Object(n.useState)(""),[h,x]=Object(n.useState)("login"),p=Object(i.h)(),{setAccount:u}=Object(n.useContext)(d);Object(n.useEffect)((()=>{b(!1)}),[a]);const O=e=>{c({...a,[e.target.name]:e.target.value})},m=e=>{r({...s,[e.target.name]:e.target.value})},g=()=>{x("signup"===h?"login":"signup")};return Object(j.jsx)(Ze,{children:Object(j.jsxs)(o.a,{children:[Object(j.jsx)(Ve,{src:"https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png",alt:"blog"}),"login"===h?Object(j.jsxs)(Xe,{children:[Object(j.jsx)($e.a,{variant:"standard",value:a.username,onChange:e=>O(e),name:"username",label:"Enter Username"}),Object(j.jsx)($e.a,{variant:"standard",value:a.password,onChange:e=>O(e),name:"password",label:"Enter Password"}),l&&Object(j.jsx)(tt,{children:l}),Object(j.jsx)(Ke,{variant:"contained",onClick:()=>(async()=>{let e=await _.userLogin(a);e.isSuccess?(b(""),sessionStorage.setItem("accessToken",`Bearer ${e.data.accessToken}`),sessionStorage.setItem("refreshToken",`Bearer ${e.data.refreshToken}`),u({name:e.data.name,username:e.data.username}),t(!0),c(at),p("/")):b("Something went wrong! please try again later")})(),children:"Login"}),Object(j.jsx)(et,{style:{textAlign:"center"},children:"OR"}),Object(j.jsx)(Qe,{onClick:()=>g(),style:{marginBottom:50},children:"Create an account"})]}):Object(j.jsxs)(Xe,{children:[Object(j.jsx)($e.a,{variant:"standard",onChange:e=>m(e),name:"name",label:"Enter Name"}),Object(j.jsx)($e.a,{variant:"standard",onChange:e=>m(e),name:"username",label:"Enter Username"}),Object(j.jsx)($e.a,{variant:"standard",onChange:e=>m(e),name:"password",label:"Enter Password"}),Object(j.jsx)(Qe,{onClick:()=>(async()=>{(await _.userSignup(s)).isSuccess?(b(""),r(nt),x("login")):b("Something went wrong! please try again later")})(),children:"Signup"}),Object(j.jsx)(et,{style:{textAlign:"center"},children:"OR"}),Object(j.jsx)(Ke,{variant:"contained",onClick:()=>g(),children:"Already have an account"})]})]})})};const st=e=>{let{isAuthenticated:t,...a}=e;const n=sessionStorage.getItem("accessToken");return t&&n?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(m,{}),Object(j.jsx)(i.b,{})]}):Object(j.jsx)(i.a,{replace:!0,to:"/account"})};var rt=function(){const[e,t]=Object(n.useState)(!1);return Object(j.jsx)(b,{children:Object(j.jsx)(l.a,{basename:"/blogging",children:Object(j.jsx)(o.a,{style:{marginTop:64},children:Object(j.jsxs)(i.e,{children:[Object(j.jsx)(i.c,{path:"/account",element:Object(j.jsx)(ct,{isUserAuthenticated:t})}),Object(j.jsx)(i.c,{path:"/",element:Object(j.jsx)(st,{isAuthenticated:e}),children:Object(j.jsx)(i.c,{path:"/",element:Object(j.jsx)(X,{})})}),Object(j.jsx)(i.c,{path:"/create",element:Object(j.jsx)(st,{isAuthenticated:e}),children:Object(j.jsx)(i.c,{path:"/create",element:Object(j.jsx)(ie,{})})}),Object(j.jsx)(i.c,{path:"/details/:id",element:Object(j.jsx)(st,{isAuthenticated:e}),children:Object(j.jsx)(i.c,{path:"/details/:id",element:Object(j.jsx)(Te,{})})}),Object(j.jsx)(i.c,{path:"/update/:id",element:Object(j.jsx)(st,{isAuthenticated:e}),children:Object(j.jsx)(i.c,{path:"/update/:id",element:Object(j.jsx)(ze,{})})}),Object(j.jsx)(i.c,{path:"/about",element:Object(j.jsx)(st,{isAuthenticated:e}),children:Object(j.jsx)(i.c,{path:"/about",element:Object(j.jsx)(_e,{})})}),Object(j.jsx)(i.c,{path:"/contact",element:Object(j.jsx)(st,{isAuthenticated:e}),children:Object(j.jsx)(i.c,{path:"/contact",element:Object(j.jsx)(We,{})})})]})})})})};var ot=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,176)).then((t=>{let{getCLS:a,getFID:n,getFCP:c,getLCP:s,getTTFB:r}=t;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(rt,{})}),document.getElementById("root")),ot()},89:function(e,t,a){}},[[112,1,2]]]);
//# sourceMappingURL=main.61adf101.chunk.js.map