(this.webpackJsonpopentrade=this.webpackJsonpopentrade||[]).push([[0],{11:function(e,a,t){e.exports={Input:"input_Input__2Cny7"}},21:function(e,a,t){e.exports={ChangePassword:"changePassword_ChangePassword__19Q2o",Draggable:"changePassword_Draggable__3waay",DraggablePart:"changePassword_DraggablePart__2JANn",InputPart:"changePassword_InputPart__lOPye",Error:"changePassword_Error__Iyngo",Input:"changePassword_Input__2ozP0",ButtonPart:"changePassword_ButtonPart__JtbEE"}},28:function(e,a,t){e.exports={PlaceOrder:"placeOrder_PlaceOrder__3M5Uy",Draggable:"placeOrder_Draggable__3oNuX",Header:"placeOrder_Header__2sOe0",SelectPart:"placeOrder_SelectPart__3LItk",Error:"placeOrder_Error__1ii4_",Input:"placeOrder_Input__2gafB",ButtonPart:"placeOrder_ButtonPart__2ftAN",HeaderGroup:"placeOrder_HeaderGroup__25_or",Row:"placeOrder_Row__3O4Db",WrapTitle:"placeOrder_WrapTitle__ZivIM"}},29:function(e,a,t){e.exports={Login:"login_Login__3w3_t",YellowText:"login_YellowText__3i5z7"}},3:function(e,a,t){e.exports={SelectPart:"manual_SelectPart__3g6iI",Error:"manual_Error___qenC",Input:"manual_Input__28mE3",ButtonPart:"manual_ButtonPart__3cen8",HeaderGroup:"manual_HeaderGroup__2rcPy",Row:"manual_Row__l7-7w",WrapTitle:"manual_WrapTitle__2ZST2"}},31:function(e,a,t){e.exports=t.p+"static/media/cross.975c33cd.svg"},35:function(e,a,t){e.exports={Button:"button_Button__ZQLJg",ButtonDisabled:"button_ButtonDisabled__1FgY3"}},36:function(e,a,t){e.exports={Input:"input_Input__2z1qa",InputBox:"input_InputBox__JoeFr"}},46:function(e,a,t){},49:function(e,a,t){e.exports=t.p+"static/media/man.e792d17d.svg"},50:function(e,a,t){e.exports=t.p+"static/media/lock.62f94555.svg"},55:function(e,a,t){e.exports=t(75)},60:function(e,a,t){},70:function(e,a,t){},75:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(19),i=t.n(l),c=(t(60),t(6)),o=t(7),s=t(8),m=t(9),u=t(10),d=t(24),p=t(53),h=t(29),E=t.n(h),b=function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Layout"),this.props.children)}}]),a}(n.Component),v=t(21),g=t.n(v),f=t(30),N=t.n(f),y=t(35),w=t.n(y),O=function(e){var a=e.btnSelector;return a="btnDisabled"===a?r.a.createElement("button",{className:w.a.ButtonDisabled,type:e.type,onClick:e.clicked,disabled:e.disabled},e.caption):r.a.createElement("button",{className:w.a.Button,onClick:e.clicked,disabled:e.disabled,onSubmit:e.submit},e.caption),r.a.createElement(r.a.Fragment,null,a)},S=(t(46),t(31)),x=t.n(S),_=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={styles:{border:""},errorMessage:""},t.layout=[{i:"a",x:5,y:0,w:3,h:2.2,minW:2.8,maxW:1/0,minH:2.1,maxH:1/0}],t.onChangePassword=function(){t.setState({styles:{border:"1px solid red"},errorMessage:"Server unreachable"}),console.log(t.state)},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(N.a,{className:g.a.changePassword,layout:this.layout,width:1200,isResizable:!0},r.a.createElement("div",{key:"a",className:g.a.Draggable},r.a.createElement("div",{className:g.a.DraggablePart},r.a.createElement("p",null,"Change Password"),r.a.createElement("img",{src:x.a,alt:""})),r.a.createElement("p",{className:g.a.Error},this.state.errorMessage),r.a.createElement("div",{className:g.a.InputPart},r.a.createElement("input",{className:g.a.Input,style:this.state.styles,placeholder:"Change password"}),r.a.createElement("input",{className:g.a.Input,style:this.state.styles,placeholder:"New password"}),r.a.createElement("input",{className:g.a.Input,style:this.state.styles,placeholder:"New password confirmation"})),r.a.createElement("div",{className:g.a.ButtonPart},r.a.createElement(O,{caption:"Submit",clicked:this.onChangePassword}),r.a.createElement(O,{caption:"Cancel",btnSelector:"btnDisabled"}))))}}]),a}(n.Component),W=t(2),T=t(54),j=(t(70),function e(a){var t=a.options,n={container:function(){return{width:a.containerWidth,marginRight:20}},control:function(e,t){var n=t.isFocused;t.isSelected,t.isHovered;return{width:a.width,height:"20px",border:n?"2px solid #20a8d8":a.invalid?"2px solid red":"2px solid #37373c",borderRadius:"5px",transition:"0.2s ease",backgroundColor:"#202028",color:"#22ADF6",fontSize:"12px",cursor:"pointer",padding:"5px",display:"flex",boxShadow:n?"0px 0px 15px #20a8d8":null}},singleValue:function(){return{color:"#22ADF6",marginBottom:5}},indicatorSeparator:function(){return{border:"none"}},menu:function(){return Object(W.a)({width:a.containerWidth,zIndex:"200",marginLeft:3,position:"absolute",color:"white",background:"rgb(34,173,246)"},"background","linear-gradient(90deg, rgba(34,173,246,1) 0%, rgba(93,193,246,1) 100%)")},option:function(){var e;return e={color:"white",height:"20px",background:"rgb(34,173,246)"},Object(W.a)(e,"background","linear-gradient(90deg, rgba(34,173,246,1) 0%, rgba(93,193,246,1) 100%)"),Object(W.a)(e,"textAlign","left"),Object(W.a)(e,"fontSize",12),Object(W.a)(e,"padding",5),Object(W.a)(e,"paddingLeft",14),Object(W.a)(e,"fontWeigt","regular "),e},placeholder:function(){return{color:"#555555",marginBottom:5}}};return r.a.createElement(T.a,Object.assign({options:t,name:a.name,styles:n,style:a.style,className:"react-select-container",classNamePrefix:"react-select",defaultValue:a.value,placeholder:a.inputValue,onChange:a.changed},e))}),P=t(28),I=t.n(P),k=t(11),C=t.n(k),L=t(13),F=t(3),V=t.n(F),M=t(5),A=t(12),R=t.n(A),H=t(15),D=t.n(H),B=function(e){console.log(e)},q=D()({prefix:"",suffix:""}),Q=D()({prefix:"$",suffix:"",allowDecimal:!0,decimalLimit:5}),z=function(e){return e?void 0:"Required"};function Y(e){var a=e.input,t=(a.name,a.options,a.onChange),n=(Object(L.a)(a,["name","options","onChange"]),e.meta),l=Object(L.a)(e,["input","meta"]);return r.a.createElement(j,Object.assign({},l,{className:V.a.Select,options:e.options,name:e.name,changed:t,inputValue:e.inputValue,width:e.width,invalid:n.error&&n.touched,containerWidth:e.containerWidth}))}var G=[{value:"Server unreachable",label:"Server unreachable"}],J=[{value:"Limit",label:"Limit"},{value:"Market",label:"Market"},{value:"Shop",label:"Shop"},{value:"Stop Limit",label:"Stop Limit"},{value:"OTC",label:"OTC"}],U=[{value:"Day",label:"Day"},{value:"IOC",label:"IOC"},{value:"OPG",label:"OPG"},{value:"FOK",label:"FOK"}],$=function(){return r.a.createElement(M.b,{onSubmit:B,render:function(e){var a=e.handleSubmit;e.form,e.submitting,e.pristine,e.values;return r.a.createElement("form",{onSubmit:a},r.a.createElement("div",{className:V.a.SelectPart},r.a.createElement("div",{className:V.a.Row},r.a.createElement(M.a,{name:"security",component:Y,validate:z,options:G,inputValue:"security",width:"100%",containerWidth:"30%"}),r.a.createElement(M.a,{name:"account",component:Y,validate:z,options:G,inputValue:"account",width:"100%",containerWidth:"30%"}),r.a.createElement(M.a,{name:"side",component:Y,validate:z,options:G,inputValue:"side",width:"100%",containerWidth:"20%"})),r.a.createElement("div",{className:V.a.Row},r.a.createElement("div",{className:V.a.WrapTitle},r.a.createElement("p",{className:V.a.Title},"Type:"),r.a.createElement(M.a,{name:"type",component:Y,options:J,width:"340%",containerWidth:"25%"})),r.a.createElement("div",{className:V.a.WrapTitle},r.a.createElement("p",{className:V.a.Title},"TimeInForce:"),r.a.createElement(M.a,{name:"timeInForce",component:Y,options:U,width:"340%",containerWidth:"25%"})),r.a.createElement("div",{className:V.a.WrapTitle},r.a.createElement("p",{className:V.a.Title},"Quantity:"),r.a.createElement(M.a,{name:"quantity"},(function(e){var a=e.input,t=e.meta;return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,Object.assign({},a,{mask:q,placeholder:"Quantity",name:"quantity",className:C.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))})))),r.a.createElement("div",{className:V.a.Row},r.a.createElement("div",{className:V.a.WrapTitle},r.a.createElement("p",{className:V.a.Title},"Price:"),r.a.createElement(M.a,{name:"Price",validate:z},(function(e){var a=e.input,t=e.meta;return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,Object.assign({},a,{mask:Q,placeholder:"Price",name:"price",className:C.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))}))),r.a.createElement("div",{className:V.a.WrapTitle},r.a.createElement("p",{className:V.a.Title},"Stop price:"),r.a.createElement(M.a,{name:"stopPrice"},(function(e){var a=e.input,t=e.meta;return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,Object.assign({},a,{mask:Q,placeholder:"Stop Price",name:"stopPrice",className:C.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))}))))),r.a.createElement("div",{className:V.a.ButtonPart},r.a.createElement(O,{caption:"Send",type:"submit"}),r.a.createElement(O,{caption:"Close",btnSelector:"btnDisabled"})))}})},Z=function(e){console.log(e)},K=D()({prefix:"",suffix:""}),X=function(e){return e?void 0:"Required"},ee=[{value:"Server unreachable",label:"Server unreachable"}];function ae(e){var a=e.input,t=(a.name,a.options,a.onChange),n=(Object(L.a)(a,["name","options","onChange"]),e.meta),l=Object(L.a)(e,["input","meta"]);return r.a.createElement(j,Object.assign({},l,{className:V.a.Select,options:e.options,name:e.name,changed:t,inputValue:e.inputValue,width:e.width,invalid:n.error&&n.touched,containerWidth:e.containerWidth}))}var te=function(){return r.a.createElement(M.b,{onSubmit:Z,render:function(e){var a=e.handleSubmit;e.form,e.submitting,e.pristine,e.values;return r.a.createElement("form",{onSubmit:a},r.a.createElement("div",{className:V.a.SelectPart},r.a.createElement("div",{className:V.a.Row},r.a.createElement(M.a,{name:"security",component:ae,validate:X,options:ee,inputValue:"security",width:"100%",containerWidth:"30%"}),r.a.createElement(M.a,{name:"account",component:ae,validate:X,options:ee,inputValue:"account",width:"100%",containerWidth:"30%"}),r.a.createElement(M.a,{name:"side",component:ae,validate:X,options:ee,inputValue:"side",width:"100%",containerWidth:"20%"})),r.a.createElement("div",{className:V.a.Row},r.a.createElement("div",{className:V.a.WrapTitle},r.a.createElement("p",{className:V.a.Title},"Quantity:"),r.a.createElement(M.a,{name:"quantity",validate:X},(function(e){var a=e.input,t=e.meta;return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,Object.assign({},a,{mask:K,placeholder:"Quantity",name:"quantity",className:C.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))}))))),r.a.createElement("div",{className:V.a.ButtonPart},r.a.createElement("p",null),r.a.createElement(O,{caption:"Send",type:"submit"}),r.a.createElement(O,{caption:"Close",btnSelector:"btnDisabled"})))}})},ne=[{value:"Server unreachable",label:"Server unreachable"}],re=[{value:"Yes",label:"Yes"},{value:"No",label:"No"}],le=[{value:"Low",label:"Low"},{value:"Medium",label:"Medium"},{value:"High",label:"High"},{value:"Highest",label:"Highest"}],ie=function(e){console.log(e)},ce=D()({prefix:"",suffix:""}),oe=D()({prefix:"$",suffix:"",allowDecimal:!0,decimalLimit:5}),se=function(e){return e?void 0:"Required"};function me(e){var a=e.input,t=(a.name,a.options,a.onChange),n=(Object(L.a)(a,["name","options","onChange"]),e.meta),l=Object(L.a)(e,["input","meta"]);return r.a.createElement(j,Object.assign({},l,{className:V.a.Select,options:e.options,name:e.name,changed:t,inputValue:e.inputValue,width:e.width,invalid:n.error&&n.touched,containerWidth:e.containerWidth}))}var ue=function(){return r.a.createElement(M.b,{onSubmit:ie,render:function(e){var a=e.handleSubmit;e.form,e.submitting,e.pristine,e.values;return r.a.createElement("form",{onSubmit:a},r.a.createElement("div",{className:V.a.SelectPart},r.a.createElement("div",{className:V.a.Row},r.a.createElement(M.a,{name:"security",component:me,validate:se,options:ne,inputValue:"security 1",width:"100%",containerWidth:"30%"}),r.a.createElement(M.a,{name:"account",component:me,validate:se,options:ne,inputValue:"account",width:"100%",containerWidth:"30%"}),r.a.createElement(M.a,{name:"side",component:me,validate:se,options:ne,inputValue:"side",width:"100%",containerWidth:"20%"})),r.a.createElement("div",{className:V.a.Row},r.a.createElement("div",{className:V.a.WrapTitle},r.a.createElement("p",{className:V.a.Title},"Quantity:"),r.a.createElement(M.a,{name:"quantity",validate:se},(function(e){var a=e.input,t=e.meta;return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,Object.assign({},a,{mask:ce,placeholder:"Quantity",name:"quantity",className:C.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))}))),r.a.createElement("div",{className:V.a.WrapTitle},r.a.createElement("p",{className:V.a.Title},"Price:"),r.a.createElement(M.a,{name:"Price"},(function(e){var a=e.input,t=e.meta;return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,Object.assign({},a,{mask:oe,placeholder:"Price",name:"price",className:C.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))}))),r.a.createElement("div",{className:V.a.WrapTitle},r.a.createElement("p",{className:V.a.Title},"ValidSeconds:"),r.a.createElement(M.a,{name:"validSeconds"},(function(e){var a=e.input,t=e.meta;return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,Object.assign({},a,{mask:ce,name:"validSeconds",placeholder:"300",className:C.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))})))),r.a.createElement("div",{className:V.a.Row},r.a.createElement("div",{className:V.a.WrapTitle},r.a.createElement("p",{className:V.a.Title},"MinSize:"),r.a.createElement(M.a,{name:"minSize"},(function(e){var a=e.input,t=e.meta;return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,Object.assign({},a,{mask:ce,name:"minSize",placeholder:"0",className:C.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))}))),r.a.createElement("div",{className:V.a.WrapTitle},r.a.createElement("p",{className:V.a.Title},"MaxFloor:"),r.a.createElement(M.a,{name:"maxFloor"},(function(e){var a=e.input,t=e.meta;return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,Object.assign({},a,{mask:ce,name:"maxFloor",placeholder:"0",className:C.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))}))),r.a.createElement("div",{className:V.a.WrapTitle},r.a.createElement("p",{className:V.a.Title},"MaxPov:"),r.a.createElement(M.a,{name:"MaxPov"},(function(e){var a=e.input,t=e.meta;return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,Object.assign({},a,{mask:ce,name:"MaxPov",placeholder:"0",className:C.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))})))),r.a.createElement("div",{className:V.a.Row},r.a.createElement("div",{className:V.a.WrapTitle},r.a.createElement("p",{className:V.a.Title},"Agression:"),r.a.createElement(M.a,{name:"agression",component:me,validate:se,options:le,inputValue:"side",width:"340%",containerWidth:"25%"})),r.a.createElement("div",{className:V.a.WrapTitle},r.a.createElement("p",{className:V.a.Title},"InternalCross:"),r.a.createElement(M.a,{name:"internalCross",component:me,options:re,inputValue:"side",width:"340%",containerWidth:"25%"})))),r.a.createElement("div",{className:V.a.ButtonPart},r.a.createElement(O,{caption:"Send",type:"submit"}),r.a.createElement(O,{caption:"Close",btnSelector:"btnDisabled"})))}})},de=[{value:"Server unreachable",label:"Server unreachable"}],pe=[{value:"Yes",label:"Yes"},{value:"No",label:"No"}],he=[{value:"Low",label:"Low"},{value:"Medium",label:"Medium"},{value:"High",label:"High"},{value:"Highest",label:"Highest"}],Ee=function(e){console.log(e)},be=D()({prefix:"",suffix:""}),ve=D()({prefix:"$",suffix:"",allowDecimal:!0,decimalLimit:5}),ge=function(e){return e?void 0:"Required"};function fe(e){var a=e.input,t=(a.name,a.options,a.onChange),n=(Object(L.a)(a,["name","options","onChange"]),e.meta),l=Object(L.a)(e,["input","meta"]);return r.a.createElement(j,Object.assign({},l,{className:V.a.Select,options:e.options,name:e.name,changed:t,inputValue:e.inputValue,width:e.width,invalid:n.error&&n.touched,containerWidth:e.containerWidth}))}var Ne=function(){return r.a.createElement(M.b,{onSubmit:Ee,render:function(e){var a=e.handleSubmit;e.form,e.submitting,e.pristine,e.values;return r.a.createElement("form",{onSubmit:a},r.a.createElement("div",{className:V.a.SelectPart},r.a.createElement("div",{className:V.a.Row},r.a.createElement(M.a,{name:"security",component:fe,validate:ge,options:de,inputValue:"security 1",width:"100%",containerWidth:"30%"}),r.a.createElement(M.a,{name:"account",component:fe,validate:ge,options:de,inputValue:"account",width:"100%",containerWidth:"30%"}),r.a.createElement(M.a,{name:"side",component:fe,validate:ge,options:de,inputValue:"side",width:"100%",containerWidth:"20%"})),r.a.createElement("div",{className:V.a.Row},r.a.createElement("div",{className:V.a.WrapTitle},r.a.createElement("p",{className:V.a.Title},"Quantity:"),r.a.createElement(M.a,{name:"quantity",validate:ge},(function(e){var a=e.input,t=e.meta;return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,Object.assign({},a,{mask:be,placeholder:"Quantity",name:"quantity",className:C.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))}))),r.a.createElement("div",{className:V.a.WrapTitle},r.a.createElement("p",{className:V.a.Title},"Price:"),r.a.createElement(M.a,{name:"Price"},(function(e){var a=e.input,t=e.meta;return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,Object.assign({},a,{mask:ve,placeholder:"Price",name:"price",className:C.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))}))),r.a.createElement("div",{className:V.a.WrapTitle},r.a.createElement("p",{className:V.a.Title},"ValidSeconds:"),r.a.createElement(M.a,{name:"validSeconds"},(function(e){var a=e.input,t=e.meta;return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,Object.assign({},a,{mask:be,name:"validSeconds",placeholder:"300",className:C.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))})))),r.a.createElement("div",{className:V.a.Row},r.a.createElement("div",{className:V.a.WrapTitle},r.a.createElement("p",{className:V.a.Title},"MinSize:"),r.a.createElement(M.a,{name:"minSize"},(function(e){var a=e.input,t=e.meta;return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,Object.assign({},a,{mask:be,name:"minSize",placeholder:"0",className:C.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))}))),r.a.createElement("div",{className:V.a.WrapTitle},r.a.createElement("p",{className:V.a.Title},"MaxPov:"),r.a.createElement(M.a,{name:"MaxPov"},(function(e){var a=e.input,t=e.meta;return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,Object.assign({},a,{mask:be,name:"MaxPov",placeholder:"0",className:C.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))}))),r.a.createElement("div",{className:V.a.WrapTitle},r.a.createElement("p",{className:V.a.Title},"Agression:"),r.a.createElement(M.a,{name:"agression",component:fe,validate:ge,options:he,inputValue:"side",width:"340%",containerWidth:"25%"}))),r.a.createElement("div",{className:V.a.Row},r.a.createElement("div",{className:V.a.WrapTitle},r.a.createElement("p",{className:V.a.Title},"InternalCross:"),r.a.createElement(M.a,{name:"internalCross",component:fe,options:pe,inputValue:"side",width:"340%",containerWidth:"25%"})))),r.a.createElement("div",{className:V.a.ButtonPart},r.a.createElement(O,{caption:"Send",type:"submit"}),r.a.createElement(O,{caption:"Close",btnSelector:"btnDisabled"})))}})},ye=[{value:"Server unreachable",label:"Server unreachable"}],we=function(e){console.log(e)},Oe=D()({prefix:"",suffix:""}),Se=D()({prefix:"",suffix:"",allowDecimal:!0,decimalLimit:5}),xe=function(e){return e?void 0:"Required"};function _e(e){var a=e.input,t=(a.name,a.options,a.onChange),n=(Object(L.a)(a,["name","options","onChange"]),e.meta),l=Object(L.a)(e,["input","meta"]);return r.a.createElement(j,Object.assign({},l,{className:V.a.Select,options:e.options,name:e.name,changed:t,inputValue:e.inputValue,width:e.width,invalid:n.error&&n.touched,containerWidth:e.containerWidth}))}var We=function(){return r.a.createElement(M.b,{onSubmit:we,render:function(e){var a=e.handleSubmit;e.form,e.submitting,e.pristine,e.values;return r.a.createElement("form",{onSubmit:a},r.a.createElement("div",{className:V.a.SelectPart},r.a.createElement("div",{className:V.a.Row},r.a.createElement(M.a,{name:"security",component:_e,validate:xe,options:ye,inputValue:"security 1",width:"100%",containerWidth:"30%"}),r.a.createElement(M.a,{name:"account",component:_e,validate:xe,options:ye,inputValue:"account",width:"100%",containerWidth:"30%"}),r.a.createElement(M.a,{name:"side",component:_e,validate:xe,options:ye,inputValue:"side",width:"100%",containerWidth:"20%"})),r.a.createElement("div",{className:V.a.Row},r.a.createElement("div",{className:V.a.WrapTitle},r.a.createElement("p",{className:V.a.Title},"Quantity 1:"),r.a.createElement(M.a,{name:"quantity1",validate:xe},(function(e){var a=e.input,t=e.meta;return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,Object.assign({},a,{mask:Oe,placeholder:"Quantity",name:"quantity1",className:C.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))}))),r.a.createElement("div",{className:V.a.WrapTitle},r.a.createElement("p",{className:V.a.Title},"SYMBOL LEG 2:"),r.a.createElement(M.a,{name:"symbolLeg2",validate:xe},(function(e){var a=e.input,t=e.meta;return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,Object.assign({},a,{mask:!1,placeholder:"Symbol leg 2",name:"symbolLeg2",className:C.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))}))),r.a.createElement("div",{className:V.a.WrapTitle},r.a.createElement("p",{className:V.a.Title},"ACCOUNT 2:"),r.a.createElement(M.a,{name:"accountInput2",validate:xe},(function(e){var a=e.input,t=e.meta;return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,Object.assign({},a,{mask:!1,placeholder:"Account 2",name:"accountInput2",className:C.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))})))),r.a.createElement("div",{className:V.a.Row},r.a.createElement(M.a,{name:"security2",component:_e,validate:xe,options:ye,inputValue:"security 2",width:"100%",containerWidth:"30%"}),r.a.createElement(M.a,{name:"account2",component:_e,validate:xe,options:ye,inputValue:"account",width:"100%",containerWidth:"30%"}),r.a.createElement(M.a,{name:"side2",component:_e,validate:xe,options:ye,inputValue:"side",width:"100%",containerWidth:"20%"})),r.a.createElement("div",{className:V.a.Row},r.a.createElement("div",{className:V.a.WrapTitle},r.a.createElement("p",{className:V.a.Title},"Quantity 2:"),r.a.createElement(M.a,{name:"quantity2",validate:xe},(function(e){var a=e.input,t=e.meta;return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,Object.assign({},a,{mask:Oe,placeholder:"Quantity 2",name:"quantity2",className:C.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))}))),r.a.createElement("div",{className:V.a.WrapTitle},r.a.createElement("p",{className:V.a.Title},"SYMBOL LEG 3:"),r.a.createElement(M.a,{name:"symbolLeg3",validate:xe},(function(e){var a=e.input,t=e.meta;return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,Object.assign({},a,{mask:!1,placeholder:"Symbol leg 3",name:"symbolLeg3",className:C.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))}))),r.a.createElement("div",{className:V.a.WrapTitle},r.a.createElement("p",{className:V.a.Title},"ACCOUNT 3:"),r.a.createElement(M.a,{name:"accountInput3",validate:xe},(function(e){var a=e.input,t=e.meta;return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,Object.assign({},a,{placeholder:"Account 3",mask:!1,name:"accountInput3",className:C.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))})))),r.a.createElement("div",{className:V.a.Row},r.a.createElement(M.a,{name:"security3",component:_e,validate:xe,options:ye,inputValue:"security 3",width:"100%",containerWidth:"30%"}),r.a.createElement(M.a,{name:"account3",component:_e,validate:xe,options:ye,inputValue:"account",width:"100%",containerWidth:"30%"}),r.a.createElement(M.a,{name:"side3",component:_e,validate:xe,options:ye,inputValue:"side",width:"100%",containerWidth:"20%"})),r.a.createElement("div",{className:V.a.Row},r.a.createElement("div",{className:V.a.WrapTitle},r.a.createElement("p",{className:V.a.Title},"Quantity 3:"),r.a.createElement(M.a,{name:"quantity3",validate:xe},(function(e){var a=e.input,t=e.meta;return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,Object.assign({},a,{mask:Oe,placeholder:"Quantity 3",name:"quantity3",className:C.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))}))),r.a.createElement("div",{className:V.a.WrapTitle},r.a.createElement("p",{className:V.a.Title},"FastMA:"),r.a.createElement(M.a,{name:"FastMA"},(function(e){var a=e.input,t=e.meta;return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,Object.assign({},a,{mask:Se,placeholder:"FastMA",name:"price",defaultValue:"6",className:C.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))}))),r.a.createElement("div",{className:V.a.WrapTitle},r.a.createElement("p",{className:V.a.Title},"SlowMA:"),r.a.createElement(M.a,{name:"SlowMA"},(function(e){var a=e.input,t=e.meta;return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,Object.assign({},a,{mask:Se,placeholder:"SlwoMA",name:"price",defaultValue:"24",className:C.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))}))))),r.a.createElement("div",{className:V.a.ButtonPart},r.a.createElement(O,{caption:"Send",type:"submit"}),r.a.createElement(O,{caption:"Close",btnSelector:"btnDisabled"})))}})},Te=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={styles:{border:""},errorMessage:"",option:"Manual"},t.options=[{value:"Manual",label:"MANUAL"},{value:"MACrossing",label:"MACrossing"},{value:"TWAP",label:"TWAP"},{value:"AlphaExample",label:"AlphaExample"},{value:"TwapPy",label:"TwapPy"}],t.layout=[{i:"a",x:1,y:0,w:6,h:3,minW:3.3,maxW:1/0,minH:2.9,maxH:1/0}],t.onSelectedChange=function(e){t.setState({option:e.value})},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this,a=this.state.option;return"Manual"===a?a=r.a.createElement($,null):"AlphaExample"===a?a=r.a.createElement(te,null):"TWAP"===a?a=r.a.createElement(ue,null):"TwapPy"===a?a=r.a.createElement(Ne,null):"MACrossing"===a&&(a=r.a.createElement(We,null)),r.a.createElement(N.a,{className:I.a.placeOrder,draggableHandle:".Handler",layout:this.layout,width:1200,isResizable:!0},r.a.createElement("div",{key:"a",className:I.a.Draggable},r.a.createElement("div",{className:"Handler"},r.a.createElement("div",{className:I.a.Header},r.a.createElement("div",{className:I.a.HeaderGroup},r.a.createElement("p",null,"Algo: "),r.a.createElement(j,{options:this.options,value:this.options,changed:function(a){return e.onSelectedChange(a)},width:"145%",containerWidth:"30%"})),r.a.createElement("img",{src:x.a,alt:""}))),a))}}]),a}(n.Component),je=function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"dashboard"),r.a.createElement(Te,null),r.a.createElement(_,null))}}]),a}(n.Component),Pe=t(36),Ie=t.n(Pe),ke=function(e){return r.a.createElement("div",{className:Ie.a.InputBox},r.a.createElement("img",{src:e.img,alt:""}),r.a.createElement("input",{onChange:e.changed,value:e.value,className:Ie.a.Input,placeholder:e.placeholder,type:e.type}))},Ce=t(49),Le=t.n(Ce),Fe=t(50),Ve=t.n(Fe),Me=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={username:"",password:"",valid:!1,errormessage:"Server unreachable"},t.userInputHandler=function(e){t.setState({username:e.target.value}),t.buttonClicked()},t.passwordInputHandler=function(e){t.setState({password:e.target.value}),t.buttonClicked()},t.buttonClicked=function(){setTimeout((function(){"test"===t.state.username&&"test"===t.state.password?t.setState({valid:!0}):t.setState({valid:!1})}),0)},t.errorHandler=function(){setTimeout((function(){t.setState({errormessage:"Unknown username or password"})}),0)},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=""===this.state.username||""===this.state.password,a=this.state.valid?r.a.createElement(O,{clicked:this.props.clicked,caption:"Login",disabled:e}):r.a.createElement(O,{clicked:this.errorHandler,caption:"Login",disabled:e});return r.a.createElement("div",{"data-theme":this.props.dataTheme,className:E.a.Login},r.a.createElement("h1",null,"Login"),r.a.createElement("p",null,"Sing in to your account"),r.a.createElement("p",null,"Username/password: ",r.a.createElement("span",{className:E.a.YellowText},"test/test")),r.a.createElement(ke,{changed:this.userInputHandler,img:Le.a,placeholder:"Username",type:"text",value:this.state.value}),r.a.createElement(ke,{changed:this.passwordInputHandler,img:Ve.a,value:this.state.value,placeholder:"Password",type:"password"}),a,r.a.createElement("p",null,this.state.errormessage))}}]),a}(n.Component),Ae=function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("p",null,"risk")}}]),a}(n.Component),Re=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={isLogged:!1},t.onLoginPass=function(){new Promise((function(e){e(t.setState({isLogged:!0}))})).then((function(e){return localStorage.setItem("isLogged",t.state.isLogged)}))},t.onLogout=function(){new Promise((function(e){e(t.setState({isLogged:!1}))})).then((function(e){return localStorage.setItem("isLogged",t.state.isLogged)}))},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("isLogged"));console.log(e),this.setState({isLogged:e})}},{key:"render",value:function(){var e=r.a.createElement(Me,{clicked:this.onLoginPass}),a=this.state.isLogged?r.a.createElement(r.a.Fragment,null,r.a.createElement(d.b,{path:"/dashboard",component:je}),r.a.createElement(d.b,{path:"/login"},r.a.createElement(d.a,{to:"/dashboard"})),r.a.createElement(d.b,{path:"/risk",component:Ae}),r.a.createElement(d.b,{path:"/",exact:!0},r.a.createElement(d.a,{to:"/dashboard"})),r.a.createElement("button",{onClick:this.onLogout},"Log Out")):r.a.createElement(r.a.Fragment,null,r.a.createElement(d.b,{path:"/login"},e),r.a.createElement(d.b,{path:"/dashboard"},r.a.createElement(d.a,{to:"/login"})),r.a.createElement(d.b,{path:"/risk"},r.a.createElement(d.a,{to:"/login"})),r.a.createElement(d.b,{path:"/",exact:!0},r.a.createElement(d.a,{to:"/login"})));return r.a.createElement(b,null,r.a.createElement(p.a,null,r.a.createElement(d.d,null,a)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Re,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[55,1,2]]]);
//# sourceMappingURL=main.a1316177.chunk.js.map