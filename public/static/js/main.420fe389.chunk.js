(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,a){e.exports=a(76)},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(32),i=a.n(r),c=(a(41),a(2)),s=a(3),o=a(5),m=a(4),u=a(6),d=a(15),h=a(13),E=a(16),p=a(8),v=a(1),f=new(function(){function e(){Object(c.a)(this,e),this.isAuthenticated=!1}return Object(s.a)(e,[{key:"login",value:function(e){var t=JSON.parse(sessionStorage.getItem("data"));""!==t.username||null!==t.username?this.isAuthenticated=!0:this.isAuthenticated=!1,e()}},{key:"getAuth",value:function(){return this.isAuthenticated}}]),e}()),b=(a(42),function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"card",id:"panel"},l.a.createElement("div",{className:"card-body",id:"panel"},this.props.children))}}]),t}(n.Component)),g=(a(43),function(e){return l.a.createElement("div",{className:"form-group shadow"},l.a.createElement("input",{className:"form-control",id:e.name,name:e.name,type:e.type,onChange:e.onChange,value:e.value,placeholder:e.placeholder,required:!0}))}),C=(a(44),function(e){return l.a.createElement("button",{className:"btn btn-rounded",onClick:e.onClick},e.children)}),O=(a(45),function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"links"},this.props.children)}}]),t}(n.Component)),N=(a(46),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={user:{username:"",password:""},redirect:!1},a.handleChange=a.handleChange.bind(Object(p.a)(a)),a.handleClick=a.handleClick.bind(Object(p.a)(a)),a.handleClearForm=a.handleClearForm.bind(Object(p.a)(a)),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){var t=this,a=e.target.value,n=e.target.name;this.setState(function(e){return{user:Object(E.a)({},e.user,Object(h.a)({},n,a))}},function(){return console.log(t.state.user)})}},{key:"handleClick",value:function(e){var t=this;e.preventDefault();var a=this.state.user;console.log("userData",a);fetch("http://138.197.175.92/frontend/login",{method:"POST",mode:"cors",body:JSON.stringify({username:a.username,password:a.password}),headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(e){200===e.status?e.json().then(function(e){console.log("Successful"+JSON.stringify(e));var n=new Date;n.setTime(n.getTime()+36e5),document.cookie="CrewCentreSession=Valid; "+n.toGMTString()+"; path=/";var l={username:a.username,clam_balance:e.clam_balance,admin:0===e.level,ref_code:e.ref_code};sessionStorage.setItem("data",JSON.stringify(l)),console.log("NAVIGATING"),f.login(function(){t.props.history.push("/dashboard")})}):console.log("Failed: "+e.status)}).catch(function(e){console.log("error: "+e)})}},{key:"handleClearForm",value:function(e){console.log("clear form"),e.preventDefault(),this.setState({user:{username:"",password:""}})}},{key:"render",value:function(){return l.a.createElement("div",{className:"container-fluid",id:"login-panel"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12",id:"panel"},l.a.createElement(b,null,l.a.createElement("form",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement(g,{type:"text",title:"Username",name:"username",placeholder:"Username",value:this.state.user.username,onChange:this.handleChange}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement(g,{type:"password",title:"Password",name:"password",placeholder:"Password",value:this.state.user.password,onChange:this.handleChange}))),l.a.createElement("div",{className:"row",id:"button"},l.a.createElement("div",{className:"col-4 mx-auto"},l.a.createElement(C,{onClick:this.handleClick},"Login")))),l.a.createElement("div",{className:"row",id:"registration-links"},l.a.createElement("div",{className:"col-6",id:"sign-up"},l.a.createElement(v.b,{to:"/signup"},l.a.createElement(O,null,"Sign Up"))),l.a.createElement("div",{className:"col-6",id:"forgot"},l.a.createElement(v.b,{to:"/forgot"},l.a.createElement(O,null,"Forgot"))))))))}}]),t}(n.Component)),j=Object(d.f)(N),w=(a(55),a(56),function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"col-sm-3 col-xl-2 sidebar",id:"sidebar"},l.a.createElement("ul",{className:"nav nav-sidebar"},l.a.createElement("li",{className:"Dashboard"===this.props.highlight?"active":""},l.a.createElement(v.b,{to:"/"},"Dashboard ",l.a.createElement("span",{className:"sr-only"},"(current)")))),l.a.createElement("ul",{className:"nav nav-sidebar"},l.a.createElement("li",{className:"Affiliates"===this.props.highlight?"active":""},l.a.createElement(v.b,{to:"/"},"Affiliates")),l.a.createElement("li",{className:"Dashboard"===this.props.highlight?"active":""},l.a.createElement(v.b,{to:"/"},"Stats")),l.a.createElement("li",{className:"Dashboard"===this.props.highlight?"active":""},l.a.createElement(v.b,{to:"/"},"Exchange"))),l.a.createElement("ul",{className:"nav nav-sidebar"},l.a.createElement("li",{className:"Dashboard"===this.props.highlight?"active":""},l.a.createElement(v.b,{to:"/"},"CLAM")),l.a.createElement("li",{className:"Dashboard"===this.props.highlight?"active":""},l.a.createElement(v.b,{to:"/"},"BTC")),l.a.createElement("li",{className:"Dashboard"===this.props.highlight?"active":""},l.a.createElement(v.b,{to:"/"},"CAD")),l.a.createElement("li",{className:"Dashboard"===this.props.highlight?"active":""},l.a.createElement(v.b,{to:"/"},"USD")),l.a.createElement("li",{className:"Dashboard"===this.props.highlight?"active":""},l.a.createElement(v.b,{to:"/"},"GOLD"))),l.a.createElement("ul",{className:"nav nav-sidebar"},l.a.createElement("li",{className:"Dashboard"===this.props.highlight?"active":""},l.a.createElement(v.b,{to:"/"},"Contact")),l.a.createElement("li",{className:"Dashboard"===this.props.highlight?"active":""},l.a.createElement(v.b,{to:"/"},"Logout")),l.a.createElement("li",{className:"Dashboard"===this.props.highlight?"active":""},l.a.createElement(v.b,{to:"/"},"Refferal Code:"))))}}]),t}(n.Component)),y=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"mainContainer"},l.a.createElement("div",{className:"container-fluid min-vh-100",id:"main"},l.a.createElement("div",{className:"row"},l.a.createElement(w,{highlight:this.props.sidebar}),this.props.children)))}}]),t}(n.Component),k=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return l.a.createElement("div",{className:"card shadow p-3 mb-5 bg-white rounded",id:"investment-panel"},l.a.createElement("div",{className:"card-body",id:"investment-panel"},l.a.createElement("div",{className:"table-responsive overview-table"},l.a.createElement("table",{className:"table table-striped"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"investment"),l.a.createElement("td",null,"ivestment"),l.a.createElement("td",null,"ivestment")),l.a.createElement("tr",null,l.a.createElement("td",null,"investment"),l.a.createElement("td",null,"ivestment"),l.a.createElement("td",null,"ivestment")),l.a.createElement("tr",null,l.a.createElement("td",null,"investment"),l.a.createElement("td",null,"ivestment"),l.a.createElement("td",null,"ivestment")),l.a.createElement("tr",null,l.a.createElement("td",null,"investment"),l.a.createElement("td",null,"ivestment"),l.a.createElement("td",null,"ivestment")),l.a.createElement("tr",null,l.a.createElement("td",null,"Total"),l.a.createElement("td",null),l.a.createElement("td",null,"ivestment")))))))}}]),t}(n.Component),S=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(y,{sidebar:"Dashboard"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement(k,null))))}}]),t}(n.Component),D=a(17),U=a.n(D),x=(a(74),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={newUser:{username:"",password:"",email:"",refCode:""}},a.handleChange=a.handleChange.bind(Object(p.a)(a)),a.handleClick=a.handleClick.bind(Object(p.a)(a)),a.handleClearForm=a.handleClearForm.bind(Object(p.a)(a)),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){var t=this,a=e.target.value,n=e.target.name;this.setState(function(e){return{newUser:Object(E.a)({},e.newUser,Object(h.a)({},n,a))}},function(){return console.log("changed"+JSON.stringify(t.state.newUser))})}},{key:"handleClick",value:function(e){var t=this;e.preventDefault();var a=this.state.newUser;if(this.stringValidator(a.username)||this.stringValidator(a.email)||this.stringValidator(a.password)||this.stringValidator(a.refCode))alert("Please fill in the form!");else if(this.validateEmail(this.state.newUser.email)){var n="http://138.197.175.92";U()(n+"/frontend/all_users",{method:"GET",mode:"cors",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(e){console.log("Successful"+JSON.stringify(e));var l=!1;e.data.users.forEach(function(e){return e.username===t.state.newUser.username?(l=!0,void alert("Username Taken")):e.email===t.state.newUser.email?(l=!0,void alert("Email Taken")):void 0}),l||fetch(n+"/frontend/signup",{method:"POST",mode:"cors",body:JSON.stringify({username:a.username,email:a.email,password:a.password,code:a.refCode}),headers:{"Content-Type":"application/json"}}).then(function(e){200===e.status&&(e.json().then(function(e){console.log("Successful"+JSON.stringify(e))}),alert("Verification e-mail sent. Check your inbox to confirm your account, (might go to your junk folder)"))}).catch(function(e){console.log(e)})}).catch(function(e){console.log("Unable to sign up "+e)})}else alert("Enter a valid email")}},{key:"handleClearForm",value:function(e){console.log("clear form"),e.preventDefault(),this.setState({newUser:{username:"",password:"",email:"",refCode:""}})}},{key:"validateEmail",value:function(e){return/[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)}},{key:"stringValidator",value:function(e){return""===e.trim()||null==e||"username"===e||"pass"===e||"code"===e}},{key:"render",value:function(){return l.a.createElement("div",{className:"container-fluid",id:"signup-panel"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12",id:"panel"},l.a.createElement(b,null,l.a.createElement("form",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement(g,{type:"text",title:"Username",name:"username",placeholder:"Username",value:this.state.newUser.username,onChange:this.handleChange}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement(g,{type:"password",title:"Password",name:"password",placeholder:"Password",value:this.state.newUser.password,onChange:this.handleChange}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement(g,{type:"email",title:"Email",name:"email",placeholder:"Email",value:this.state.newUser.email,onChange:this.handleChange}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement(g,{type:"text",title:"Refferal Code",name:"refCode",placeholder:"Refferal Code",value:this.state.newUser.refCode,onChange:this.handleChange}))),l.a.createElement("div",{className:"row",id:"button"},l.a.createElement("div",{className:"col-4 mx-auto"},l.a.createElement(C,{onClick:this.handleClick},"Sign Up")))),l.a.createElement("div",{className:"row",id:"registration-links"},l.a.createElement("div",{className:"col-6",id:"login"},l.a.createElement(v.b,{to:"/"},l.a.createElement(O,null,"Login"))),l.a.createElement("div",{className:"col-6",id:"forgot"},l.a.createElement(v.b,{to:"/forgot"},l.a.createElement(O,null,"Forgot"))))))))}}]),t}(n.Component)),z=(a(75),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={user:{email:""}},a.handleChange=a.handleChange.bind(Object(p.a)(a)),a.handleClick=a.handleClick.bind(Object(p.a)(a)),a.handleClearForm=a.handleClearForm.bind(Object(p.a)(a)),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){var t=this,a=e.target.value,n=e.target.name;this.setState(function(e){return{user:Object(E.a)({},e.user,Object(h.a)({},n,a))}},function(){return console.log(t.state.user)})}},{key:"validateEmail",value:function(e){return/[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)}},{key:"handleClick",value:function(e){e.preventDefault();this.validateEmail(this.state.user.email)?U()("http://138.197.175.92/frontend/reset_password",{method:"POST",mode:"cors",body:JSON.stringify({email:this.state.user.email}),headers:{"Content-Type":"application/json"}}).then(function(e){200!==e.status?(console.log("Email does not exist"),alert("Email does not exist")):(console.log("success: "+JSON.stringify(e)),alert("Verification e-mail sent. Check your inbox to confirm your account, (might go to your junk folder)"))}).catch(function(e){console.log(e),alert("Cannot reest password")}):alert("Email in incorrect format!")}},{key:"handleClearForm",value:function(e){console.log("clear form"),e.preventDefault(),this.setState({user:{email:""}})}},{key:"render",value:function(){return l.a.createElement("div",{className:"container-fluid",id:"forgot-panel"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12",id:"panel"},l.a.createElement(b,null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement(g,{type:"email",title:"Email",name:"email",placeholder:"Email",value:this.state.user.email,onChange:this.handleChange}))),l.a.createElement("div",{className:"row",id:"button"},l.a.createElement("div",{className:"col-6 mx-auto"},l.a.createElement(C,{onClick:this.handleClick},"Reset Pasword"))),l.a.createElement("div",{className:"row",id:"registration-links"},l.a.createElement("div",{className:"col-6",id:"login"},l.a.createElement(v.b,{to:"/"},l.a.createElement(O,null,"Login"))),l.a.createElement("div",{className:"col-6",id:"sign-up"},l.a.createElement(v.b,{to:"/signup"},l.a.createElement(O,null,"Sign Up"))))))))}}]),t}(n.Component)),T=a(35),A=function(e){var t=e.component,a=Object(T.a)(e,["component"]);return l.a.createElement(d.b,Object.assign({},a,{render:function(e){return!0===f.isAuthenticated?l.a.createElement(t,e):l.a.createElement(d.a,{to:"/login"})}}))},F=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(d.d,null,l.a.createElement(d.b,{exact:!0,path:"/",render:function(){return l.a.createElement(j,null)}}),l.a.createElement(d.b,{exact:!0,path:"/signup",render:function(){return l.a.createElement(x,null)}}),l.a.createElement(d.b,{exact:!0,path:"/forgot",render:function(){return l.a.createElement(z,null)}}),l.a.createElement(A,{exact:!0,path:"/dashboard",component:S}),l.a.createElement(d.b,{render:function(){return l.a.createElement("h1",null,"Not Found")}}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(v.a,null,l.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[36,1,2]]]);
//# sourceMappingURL=main.420fe389.chunk.js.map