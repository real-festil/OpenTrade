(this.webpackJsonpopentrade=this.webpackJsonpopentrade||[]).push([[0],{11:function(e,a,t){e.exports={Input:"input_Input__2Cny7"}},21:function(e,a,t){e.exports={ChangePassword:"changePassword_ChangePassword__19Q2o",Draggable:"changePassword_Draggable__3waay",DraggablePart:"changePassword_DraggablePart__2JANn",InputPart:"changePassword_InputPart__lOPye",Error:"changePassword_Error__Iyngo",Input:"changePassword_Input__2ozP0",ButtonPart:"changePassword_ButtonPart__JtbEE"}},28:function(e,a,t){e.exports={PlaceOrder:"placeOrder_PlaceOrder__3M5Uy",Draggable:"placeOrder_Draggable__3oNuX",Header:"placeOrder_Header__2sOe0",SelectPart:"placeOrder_SelectPart__3LItk",Error:"placeOrder_Error__1ii4_",Input:"placeOrder_Input__2gafB",ButtonPart:"placeOrder_ButtonPart__2ftAN",HeaderGroup:"placeOrder_HeaderGroup__25_or",Row:"placeOrder_Row__3O4Db",WrapTitle:"placeOrder_WrapTitle__ZivIM"}},29:function(e,a,t){e.exports={Login:"login_Login__3w3_t",YellowText:"login_YellowText__3i5z7"}},3:function(e,a,t){e.exports={SelectPart:"manual_SelectPart__3g6iI",Error:"manual_Error___qenC",Input:"manual_Input__28mE3",ButtonPart:"manual_ButtonPart__3cen8",HeaderGroup:"manual_HeaderGroup__2rcPy",Row:"manual_Row__l7-7w",WrapTitle:"manual_WrapTitle__2ZST2"}},31:function(e,a,t){e.exports=t.p+"static/media/cross.975c33cd.svg"},35:function(e,a,t){e.exports={Button:"button_Button__ZQLJg",ButtonDisabled:"button_ButtonDisabled__1FgY3"}},36:function(e,a,t){e.exports={Input:"input_Input__2z1qa",InputBox:"input_InputBox__JoeFr"}},46:function(e,a,t){},48:function(e,a,t){e.exports={Backdrop:"backdrop_Backdrop__8vPtZ"}},50:function(e,a,t){e.exports=t.p+"static/media/man.e792d17d.svg"},51:function(e,a,t){e.exports=t.p+"static/media/lock.62f94555.svg"},56:function(e,a,t){e.exports=t(77)},61:function(e,a,t){},71:function(e,a,t){},72:function(e,a,t){},77:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(19),i=t.n(r),c=(t(61),t(6)),o=t(7),s=t(8),m=t(9),u=t(10),d=t(24),p=t(54),h=t(29),E=t.n(h),b=function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,"Layout"),this.props.children)}}]),a}(n.Component),v=t(21),g=t.n(v),f=t(30),w=t.n(f),N=t(35),y=t.n(N),O=function(e){var a=e.btnSelector;return a="btnDisabled"===a?l.a.createElement("button",{className:y.a.ButtonDisabled,type:e.type,onClick:e.clicked,disabled:e.disabled},e.caption):l.a.createElement("button",{className:y.a.Button,onClick:e.clicked,disabled:e.disabled,onSubmit:e.submit},e.caption),l.a.createElement(l.a.Fragment,null,a)},S=t(48),_=t.n(S),x=function(e){return e.show?l.a.createElement("div",{className:_.a.Backdrop,onClick:e.clicked}):null},C=(t(46),t(31)),P=t.n(C),W=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={styles:{border:""},errorMessage:""},t.layout=[{i:"a",x:5,y:0,w:3,h:2.2,minW:2.8,maxW:1/0,minH:2.1,maxH:1/0}],t.onChangePassword=function(){t.setState({styles:{border:"1px solid red"},errorMessage:"Server unreachable"}),console.log(t.state)},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(x,{show:this.props.show}),l.a.createElement(w.a,{className:g.a.changePassword,layout:this.layout,style:{transform:this.props.show?"translateY(0)":"translateY(-150vh)",opacity:this.props.show?"1":"0"},width:1200,verticalCompact:!1,isResizable:!0},l.a.createElement("div",{key:"a",className:g.a.Draggable},l.a.createElement("div",{className:g.a.DraggablePart},l.a.createElement("p",null,"Change Password"),l.a.createElement("img",{src:P.a,alt:"",onClick:this.props.modalClosed})),l.a.createElement("p",{className:g.a.Error},this.state.errorMessage),l.a.createElement("div",{className:g.a.InputPart},l.a.createElement("input",{className:g.a.Input,style:this.state.styles,placeholder:"Change password"}),l.a.createElement("input",{className:g.a.Input,style:this.state.styles,placeholder:"New password"}),l.a.createElement("input",{className:g.a.Input,style:this.state.styles,placeholder:"New password confirmation"})),l.a.createElement("div",{className:g.a.ButtonPart},l.a.createElement(O,{caption:"Submit",clicked:this.onChangePassword}),l.a.createElement(O,{caption:"Cancel",btnSelector:"btnDisabled",clicked:this.props.modalClosed})))))}}]),a}(n.Component),T=t(2),j=t(55),k=(t(71),function e(a){var t=a.options,n={container:function(){return{width:a.containerWidth,marginRight:20}},control:function(e,t){var n=t.isFocused;t.isSelected,t.isHovered;return{width:a.width,height:"20px",border:n?"2px solid #20a8d8":a.invalid?"2px solid red":"2px solid #37373c",borderRadius:"5px",transition:"0.2s ease",backgroundColor:"#202028",color:"#22ADF6",fontSize:"12px",cursor:"pointer",padding:"5px",display:"flex",boxShadow:n?"0px 0px 15px #20a8d8":null}},singleValue:function(){return{color:"#22ADF6",marginBottom:5}},indicatorSeparator:function(){return{border:"none"}},menu:function(){return Object(T.a)({width:a.containerWidth,zIndex:"200",marginLeft:3,position:"absolute",color:"white",background:"rgb(34,173,246)"},"background","linear-gradient(90deg, rgba(34,173,246,1) 0%, rgba(93,193,246,1) 100%)")},option:function(){var e;return e={color:"white",height:"20px",background:"rgb(34,173,246)"},Object(T.a)(e,"background","linear-gradient(90deg, rgba(34,173,246,1) 0%, rgba(93,193,246,1) 100%)"),Object(T.a)(e,"textAlign","left"),Object(T.a)(e,"fontSize",12),Object(T.a)(e,"padding",5),Object(T.a)(e,"paddingLeft",14),Object(T.a)(e,"fontWeigt","regular "),e},placeholder:function(){return{color:"#555555",marginBottom:5}}};return l.a.createElement(j.a,Object.assign({options:t,name:a.name,styles:n,style:a.style,className:"react-select-container",classNamePrefix:"react-select",defaultValue:a.value,placeholder:a.inputValue,onChange:a.changed},e))}),I=t(28),L=t.n(I),F=t(11),V=t.n(F),H=(t(72),t(13)),M=t(3),A=t.n(M),R=t(5),B=t(12),D=t.n(B),q=t(15),Q=t.n(q),z=function(e){console.log(e)},Y=Q()({prefix:"",suffix:""}),G=Q()({prefix:"$",suffix:"",allowDecimal:!0,decimalLimit:5}),J=function(e){return e?void 0:"Required"};function U(e){var a=e.input,t=(a.name,a.options,a.onChange),n=(Object(H.a)(a,["name","options","onChange"]),e.meta),r=Object(H.a)(e,["input","meta"]);return l.a.createElement(k,Object.assign({},r,{className:A.a.Select,options:e.options,name:e.name,changed:t,inputValue:e.inputValue,width:e.width,invalid:n.error&&n.touched,containerWidth:e.containerWidth}))}var Z=[{value:"Server unreachable",label:"Server unreachable"}],$=[{value:"Limit",label:"Limit"},{value:"Market",label:"Market"},{value:"Shop",label:"Shop"},{value:"Stop Limit",label:"Stop Limit"},{value:"OTC",label:"OTC"}],K=[{value:"Day",label:"Day"},{value:"IOC",label:"IOC"},{value:"OPG",label:"OPG"},{value:"FOK",label:"FOK"}],X=function(e){return l.a.createElement(R.b,{onSubmit:z,render:function(a){var t=a.handleSubmit;a.form,a.submitting,a.pristine,a.values;return l.a.createElement("form",{onSubmit:t},l.a.createElement("div",{className:A.a.SelectPart},l.a.createElement("div",{className:A.a.Row},l.a.createElement(R.a,{name:"security",component:U,validate:J,options:Z,inputValue:"security",width:"100%",containerWidth:"30%"}),l.a.createElement(R.a,{name:"account",component:U,validate:J,options:Z,inputValue:"account",width:"100%",containerWidth:"30%"}),l.a.createElement(R.a,{name:"side",component:U,validate:J,options:Z,inputValue:"side",width:"100%",containerWidth:"20%"})),l.a.createElement("div",{className:A.a.Row},l.a.createElement("div",{className:A.a.WrapTitle},l.a.createElement("p",{className:A.a.Title},"Type:"),l.a.createElement(R.a,{name:"type",component:U,options:$,width:"340%",containerWidth:"25%"})),l.a.createElement("div",{className:A.a.WrapTitle},l.a.createElement("p",{className:A.a.Title},"TimeInForce:"),l.a.createElement(R.a,{name:"timeInForce",component:U,options:K,width:"340%",containerWidth:"25%"})),l.a.createElement("div",{className:A.a.WrapTitle},l.a.createElement("p",{className:A.a.Title},"Quantity:"),l.a.createElement(R.a,{name:"quantity"},(function(e){var a=e.input,t=e.meta;return l.a.createElement(l.a.Fragment,null,l.a.createElement(D.a,Object.assign({},a,{mask:Y,placeholder:"Quantity",name:"quantity",className:V.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))})))),l.a.createElement("div",{className:A.a.Row},l.a.createElement("div",{className:A.a.WrapTitle},l.a.createElement("p",{className:A.a.Title},"Price:"),l.a.createElement(R.a,{name:"Price",validate:J},(function(e){var a=e.input,t=e.meta;return l.a.createElement(l.a.Fragment,null,l.a.createElement(D.a,Object.assign({},a,{mask:G,placeholder:"Price",name:"price",className:V.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))}))),l.a.createElement("div",{className:A.a.WrapTitle},l.a.createElement("p",{className:A.a.Title},"Stop price:"),l.a.createElement(R.a,{name:"stopPrice"},(function(e){var a=e.input,t=e.meta;return l.a.createElement(l.a.Fragment,null,l.a.createElement(D.a,Object.assign({},a,{mask:G,placeholder:"Stop Price",name:"stopPrice",className:V.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))}))))),l.a.createElement("div",{className:A.a.ButtonPart},l.a.createElement(O,{caption:"Send",type:"submit"}),l.a.createElement(O,{caption:"Close",btnSelector:"btnDisabled",clicked:e.modalClosed})))}})},ee=function(e){console.log(e)},ae=Q()({prefix:"",suffix:""}),te=function(e){return e?void 0:"Required"},ne=[{value:"Server unreachable",label:"Server unreachable"}];function le(e){var a=e.input,t=(a.name,a.options,a.onChange),n=(Object(H.a)(a,["name","options","onChange"]),e.meta),r=Object(H.a)(e,["input","meta"]);return l.a.createElement(k,Object.assign({},r,{className:A.a.Select,options:e.options,name:e.name,changed:t,inputValue:e.inputValue,width:e.width,invalid:n.error&&n.touched,containerWidth:e.containerWidth}))}var re=function(e){return l.a.createElement(R.b,{onSubmit:ee,render:function(a){var t=a.handleSubmit;a.form,a.submitting,a.pristine,a.values;return l.a.createElement("form",{onSubmit:t},l.a.createElement("div",{className:A.a.SelectPart},l.a.createElement("div",{className:A.a.Row},l.a.createElement(R.a,{name:"security",component:le,validate:te,options:ne,inputValue:"security",width:"100%",containerWidth:"30%"}),l.a.createElement(R.a,{name:"account",component:le,validate:te,options:ne,inputValue:"account",width:"100%",containerWidth:"30%"}),l.a.createElement(R.a,{name:"side",component:le,validate:te,options:ne,inputValue:"side",width:"100%",containerWidth:"20%"})),l.a.createElement("div",{className:A.a.Row},l.a.createElement("div",{className:A.a.WrapTitle},l.a.createElement("p",{className:A.a.Title},"Quantity:"),l.a.createElement(R.a,{name:"quantity",validate:te},(function(e){var a=e.input,t=e.meta;return l.a.createElement(l.a.Fragment,null,l.a.createElement(D.a,Object.assign({},a,{mask:ae,placeholder:"Quantity",name:"quantity",className:V.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))}))))),l.a.createElement("div",{className:A.a.ButtonPart},l.a.createElement("p",null),l.a.createElement(O,{caption:"Send",type:"submit"}),l.a.createElement(O,{caption:"Close",btnSelector:"btnDisabled",clicked:e.modalClosed})))}})},ie=[{value:"Server unreachable",label:"Server unreachable"}],ce=[{value:"Yes",label:"Yes"},{value:"No",label:"No"}],oe=[{value:"Low",label:"Low"},{value:"Medium",label:"Medium"},{value:"High",label:"High"},{value:"Highest",label:"Highest"}],se=function(e){console.log(e)},me=Q()({prefix:"",suffix:""}),ue=Q()({prefix:"$",suffix:"",allowDecimal:!0,decimalLimit:5}),de=function(e){return e?void 0:"Required"};function pe(e){var a=e.input,t=(a.name,a.options,a.onChange),n=(Object(H.a)(a,["name","options","onChange"]),e.meta),r=Object(H.a)(e,["input","meta"]);return l.a.createElement(k,Object.assign({},r,{className:A.a.Select,options:e.options,name:e.name,changed:t,inputValue:e.inputValue,width:e.width,invalid:n.error&&n.touched,containerWidth:e.containerWidth}))}var he=function(e){return l.a.createElement(R.b,{onSubmit:se,render:function(a){var t=a.handleSubmit;a.form,a.submitting,a.pristine,a.values;return l.a.createElement("form",{onSubmit:t},l.a.createElement("div",{className:A.a.SelectPart},l.a.createElement("div",{className:A.a.Row},l.a.createElement(R.a,{name:"security",component:pe,validate:de,options:ie,inputValue:"security 1",width:"100%",containerWidth:"30%"}),l.a.createElement(R.a,{name:"account",component:pe,validate:de,options:ie,inputValue:"account",width:"100%",containerWidth:"30%"}),l.a.createElement(R.a,{name:"side",component:pe,validate:de,options:ie,inputValue:"side",width:"100%",containerWidth:"20%"})),l.a.createElement("div",{className:A.a.Row},l.a.createElement("div",{className:A.a.WrapTitle},l.a.createElement("p",{className:A.a.Title},"Quantity:"),l.a.createElement(R.a,{name:"quantity",validate:de},(function(e){var a=e.input,t=e.meta;return l.a.createElement(l.a.Fragment,null,l.a.createElement(D.a,Object.assign({},a,{mask:me,placeholder:"Quantity",name:"quantity",className:V.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))}))),l.a.createElement("div",{className:A.a.WrapTitle},l.a.createElement("p",{className:A.a.Title},"Price:"),l.a.createElement(R.a,{name:"Price"},(function(e){var a=e.input,t=e.meta;return l.a.createElement(l.a.Fragment,null,l.a.createElement(D.a,Object.assign({},a,{mask:ue,placeholder:"Price",name:"price",className:V.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))}))),l.a.createElement("div",{className:A.a.WrapTitle},l.a.createElement("p",{className:A.a.Title},"ValidSeconds:"),l.a.createElement(R.a,{name:"validSeconds"},(function(e){var a=e.input,t=e.meta;return l.a.createElement(l.a.Fragment,null,l.a.createElement(D.a,Object.assign({},a,{mask:me,name:"validSeconds",placeholder:"300",className:V.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))})))),l.a.createElement("div",{className:A.a.Row},l.a.createElement("div",{className:A.a.WrapTitle},l.a.createElement("p",{className:A.a.Title},"MinSize:"),l.a.createElement(R.a,{name:"minSize"},(function(e){var a=e.input,t=e.meta;return l.a.createElement(l.a.Fragment,null,l.a.createElement(D.a,Object.assign({},a,{mask:me,name:"minSize",placeholder:"0",className:V.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))}))),l.a.createElement("div",{className:A.a.WrapTitle},l.a.createElement("p",{className:A.a.Title},"MaxFloor:"),l.a.createElement(R.a,{name:"maxFloor"},(function(e){var a=e.input,t=e.meta;return l.a.createElement(l.a.Fragment,null,l.a.createElement(D.a,Object.assign({},a,{mask:me,name:"maxFloor",placeholder:"0",className:V.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))}))),l.a.createElement("div",{className:A.a.WrapTitle},l.a.createElement("p",{className:A.a.Title},"MaxPov:"),l.a.createElement(R.a,{name:"MaxPov"},(function(e){var a=e.input,t=e.meta;return l.a.createElement(l.a.Fragment,null,l.a.createElement(D.a,Object.assign({},a,{mask:me,name:"MaxPov",placeholder:"0",className:V.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))})))),l.a.createElement("div",{className:A.a.Row},l.a.createElement("div",{className:A.a.WrapTitle},l.a.createElement("p",{className:A.a.Title},"Agression:"),l.a.createElement(R.a,{name:"agression",component:pe,validate:de,options:oe,inputValue:"side",width:"340%",containerWidth:"25%"})),l.a.createElement("div",{className:A.a.WrapTitle},l.a.createElement("p",{className:A.a.Title},"InternalCross:"),l.a.createElement(R.a,{name:"internalCross",component:pe,options:ce,inputValue:"side",width:"340%",containerWidth:"25%"})))),l.a.createElement("div",{className:A.a.ButtonPart},l.a.createElement(O,{caption:"Send",type:"submit"}),l.a.createElement(O,{caption:"Close",btnSelector:"btnDisabled",clicked:e.modalClosed})))}})},Ee=[{value:"Server unreachable",label:"Server unreachable"}],be=[{value:"Yes",label:"Yes"},{value:"No",label:"No"}],ve=[{value:"Low",label:"Low"},{value:"Medium",label:"Medium"},{value:"High",label:"High"},{value:"Highest",label:"Highest"}],ge=function(e){console.log(e)},fe=Q()({prefix:"",suffix:""}),we=Q()({prefix:"$",suffix:"",allowDecimal:!0,decimalLimit:5}),Ne=function(e){return e?void 0:"Required"};function ye(e){var a=e.input,t=(a.name,a.options,a.onChange),n=(Object(H.a)(a,["name","options","onChange"]),e.meta),r=Object(H.a)(e,["input","meta"]);return l.a.createElement(k,Object.assign({},r,{className:A.a.Select,options:e.options,name:e.name,changed:t,inputValue:e.inputValue,width:e.width,invalid:n.error&&n.touched,containerWidth:e.containerWidth}))}var Oe=function(e){return l.a.createElement(R.b,{onSubmit:ge,render:function(a){var t=a.handleSubmit;a.form,a.submitting,a.pristine,a.values;return l.a.createElement("form",{onSubmit:t},l.a.createElement("div",{className:A.a.SelectPart},l.a.createElement("div",{className:A.a.Row},l.a.createElement(R.a,{name:"security",component:ye,validate:Ne,options:Ee,inputValue:"security 1",width:"100%",containerWidth:"30%"}),l.a.createElement(R.a,{name:"account",component:ye,validate:Ne,options:Ee,inputValue:"account",width:"100%",containerWidth:"30%"}),l.a.createElement(R.a,{name:"side",component:ye,validate:Ne,options:Ee,inputValue:"side",width:"100%",containerWidth:"20%"})),l.a.createElement("div",{className:A.a.Row},l.a.createElement("div",{className:A.a.WrapTitle},l.a.createElement("p",{className:A.a.Title},"Quantity:"),l.a.createElement(R.a,{name:"quantity",validate:Ne},(function(e){var a=e.input,t=e.meta;return l.a.createElement(l.a.Fragment,null,l.a.createElement(D.a,Object.assign({},a,{mask:fe,placeholder:"Quantity",name:"quantity",className:V.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))}))),l.a.createElement("div",{className:A.a.WrapTitle},l.a.createElement("p",{className:A.a.Title},"Price:"),l.a.createElement(R.a,{name:"Price"},(function(e){var a=e.input,t=e.meta;return l.a.createElement(l.a.Fragment,null,l.a.createElement(D.a,Object.assign({},a,{mask:we,placeholder:"Price",name:"price",className:V.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))}))),l.a.createElement("div",{className:A.a.WrapTitle},l.a.createElement("p",{className:A.a.Title},"ValidSeconds:"),l.a.createElement(R.a,{name:"validSeconds"},(function(e){var a=e.input,t=e.meta;return l.a.createElement(l.a.Fragment,null,l.a.createElement(D.a,Object.assign({},a,{mask:fe,name:"validSeconds",placeholder:"300",className:V.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))})))),l.a.createElement("div",{className:A.a.Row},l.a.createElement("div",{className:A.a.WrapTitle},l.a.createElement("p",{className:A.a.Title},"MinSize:"),l.a.createElement(R.a,{name:"minSize"},(function(e){var a=e.input,t=e.meta;return l.a.createElement(l.a.Fragment,null,l.a.createElement(D.a,Object.assign({},a,{mask:fe,name:"minSize",placeholder:"0",className:V.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))}))),l.a.createElement("div",{className:A.a.WrapTitle},l.a.createElement("p",{className:A.a.Title},"MaxPov:"),l.a.createElement(R.a,{name:"MaxPov"},(function(e){var a=e.input,t=e.meta;return l.a.createElement(l.a.Fragment,null,l.a.createElement(D.a,Object.assign({},a,{mask:fe,name:"MaxPov",placeholder:"0",className:V.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))}))),l.a.createElement("div",{className:A.a.WrapTitle},l.a.createElement("p",{className:A.a.Title},"Agression:"),l.a.createElement(R.a,{name:"agression",component:ye,validate:Ne,options:ve,inputValue:"side",width:"340%",containerWidth:"25%"}))),l.a.createElement("div",{className:A.a.Row},l.a.createElement("div",{className:A.a.WrapTitle},l.a.createElement("p",{className:A.a.Title},"InternalCross:"),l.a.createElement(R.a,{name:"internalCross",component:ye,options:be,inputValue:"side",width:"340%",containerWidth:"25%"})))),l.a.createElement("div",{className:A.a.ButtonPart},l.a.createElement(O,{caption:"Send",type:"submit"}),l.a.createElement(O,{caption:"Close",btnSelector:"btnDisabled",clicked:e.modalClosed})))}})},Se=[{value:"Server unreachable",label:"Server unreachable"}],_e=function(e){console.log(e)},xe=Q()({prefix:"",suffix:""}),Ce=Q()({prefix:"",suffix:"",allowDecimal:!0,decimalLimit:5}),Pe=function(e){return e?void 0:"Required"};function We(e){var a=e.input,t=(a.name,a.options,a.onChange),n=(Object(H.a)(a,["name","options","onChange"]),e.meta),r=Object(H.a)(e,["input","meta"]);return l.a.createElement(k,Object.assign({},r,{className:A.a.Select,options:e.options,name:e.name,changed:t,inputValue:e.inputValue,width:e.width,invalid:n.error&&n.touched,containerWidth:e.containerWidth}))}var Te=function(e){return l.a.createElement(R.b,{onSubmit:_e,render:function(a){var t=a.handleSubmit;a.form,a.submitting,a.pristine,a.values;return l.a.createElement("form",{onSubmit:t},l.a.createElement("div",{className:A.a.SelectPart},l.a.createElement("div",{className:A.a.Row},l.a.createElement(R.a,{name:"security",component:We,validate:Pe,options:Se,inputValue:"security 1",width:"100%",containerWidth:"30%"}),l.a.createElement(R.a,{name:"account",component:We,validate:Pe,options:Se,inputValue:"account",width:"100%",containerWidth:"30%"}),l.a.createElement(R.a,{name:"side",component:We,validate:Pe,options:Se,inputValue:"side",width:"100%",containerWidth:"20%"})),l.a.createElement("div",{className:A.a.Row},l.a.createElement("div",{className:A.a.WrapTitle},l.a.createElement("p",{className:A.a.Title},"Quantity 1:"),l.a.createElement(R.a,{name:"quantity1",validate:Pe},(function(e){var a=e.input,t=e.meta;return l.a.createElement(l.a.Fragment,null,l.a.createElement(D.a,Object.assign({},a,{mask:xe,placeholder:"Quantity",name:"quantity1",className:V.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))}))),l.a.createElement("div",{className:A.a.WrapTitle},l.a.createElement("p",{className:A.a.Title},"SYMBOL LEG 2:"),l.a.createElement(R.a,{name:"symbolLeg2",validate:Pe},(function(e){var a=e.input,t=e.meta;return l.a.createElement(l.a.Fragment,null,l.a.createElement(D.a,Object.assign({},a,{mask:!1,placeholder:"Symbol leg 2",name:"symbolLeg2",className:V.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))}))),l.a.createElement("div",{className:A.a.WrapTitle},l.a.createElement("p",{className:A.a.Title},"ACCOUNT 2:"),l.a.createElement(R.a,{name:"accountInput2",validate:Pe},(function(e){var a=e.input,t=e.meta;return l.a.createElement(l.a.Fragment,null,l.a.createElement(D.a,Object.assign({},a,{mask:!1,placeholder:"Account 2",name:"accountInput2",className:V.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))})))),l.a.createElement("div",{className:A.a.Row},l.a.createElement(R.a,{name:"security2",component:We,validate:Pe,options:Se,inputValue:"security 2",width:"100%",containerWidth:"30%"}),l.a.createElement(R.a,{name:"account2",component:We,validate:Pe,options:Se,inputValue:"account",width:"100%",containerWidth:"30%"}),l.a.createElement(R.a,{name:"side2",component:We,validate:Pe,options:Se,inputValue:"side",width:"100%",containerWidth:"20%"})),l.a.createElement("div",{className:A.a.Row},l.a.createElement("div",{className:A.a.WrapTitle},l.a.createElement("p",{className:A.a.Title},"Quantity 2:"),l.a.createElement(R.a,{name:"quantity2",validate:Pe},(function(e){var a=e.input,t=e.meta;return l.a.createElement(l.a.Fragment,null,l.a.createElement(D.a,Object.assign({},a,{mask:xe,placeholder:"Quantity 2",name:"quantity2",className:V.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))}))),l.a.createElement("div",{className:A.a.WrapTitle},l.a.createElement("p",{className:A.a.Title},"SYMBOL LEG 3:"),l.a.createElement(R.a,{name:"symbolLeg3",validate:Pe},(function(e){var a=e.input,t=e.meta;return l.a.createElement(l.a.Fragment,null,l.a.createElement(D.a,Object.assign({},a,{mask:!1,placeholder:"Symbol leg 3",name:"symbolLeg3",className:V.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))}))),l.a.createElement("div",{className:A.a.WrapTitle},l.a.createElement("p",{className:A.a.Title},"ACCOUNT 3:"),l.a.createElement(R.a,{name:"accountInput3",validate:Pe},(function(e){var a=e.input,t=e.meta;return l.a.createElement(l.a.Fragment,null,l.a.createElement(D.a,Object.assign({},a,{placeholder:"Account 3",mask:!1,name:"accountInput3",className:V.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))})))),l.a.createElement("div",{className:A.a.Row},l.a.createElement(R.a,{name:"security3",component:We,validate:Pe,options:Se,inputValue:"security 3",width:"100%",containerWidth:"30%"}),l.a.createElement(R.a,{name:"account3",component:We,validate:Pe,options:Se,inputValue:"account",width:"100%",containerWidth:"30%"}),l.a.createElement(R.a,{name:"side3",component:We,validate:Pe,options:Se,inputValue:"side",width:"100%",containerWidth:"20%"})),l.a.createElement("div",{className:A.a.Row},l.a.createElement("div",{className:A.a.WrapTitle},l.a.createElement("p",{className:A.a.Title},"Quantity 3:"),l.a.createElement(R.a,{name:"quantity3",validate:Pe},(function(e){var a=e.input,t=e.meta;return l.a.createElement(l.a.Fragment,null,l.a.createElement(D.a,Object.assign({},a,{mask:xe,placeholder:"Quantity 3",name:"quantity3",className:V.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))}))),l.a.createElement("div",{className:A.a.WrapTitle},l.a.createElement("p",{className:A.a.Title},"FastMA:"),l.a.createElement(R.a,{name:"FastMA"},(function(e){var a=e.input,t=e.meta;return l.a.createElement(l.a.Fragment,null,l.a.createElement(D.a,Object.assign({},a,{mask:Ce,placeholder:"FastMA",name:"price",defaultValue:"6",className:V.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))}))),l.a.createElement("div",{className:A.a.WrapTitle},l.a.createElement("p",{className:A.a.Title},"SlowMA:"),l.a.createElement(R.a,{name:"SlowMA"},(function(e){var a=e.input,t=e.meta;return l.a.createElement(l.a.Fragment,null,l.a.createElement(D.a,Object.assign({},a,{mask:Ce,placeholder:"SlwoMA",name:"price",defaultValue:"24",className:V.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))}))))),l.a.createElement("div",{className:A.a.ButtonPart},l.a.createElement(O,{caption:"Send",type:"submit"}),l.a.createElement(O,{caption:"Close",btnSelector:"btnDisabled",clicked:e.modalClosed})))}})},je=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={styles:{border:""},errorMessage:"",option:"Manual"},t.options=[{value:"Manual",label:"MANUAL"},{value:"MACrossing",label:"MACrossing"},{value:"TWAP",label:"TWAP"},{value:"AlphaExample",label:"AlphaExample"},{value:"TwapPy",label:"TwapPy"}],t.layout=[{i:"a",x:4,y:0,w:6,h:3,minW:3.3,maxW:1/0,minH:2.9,maxH:1/0}],t.onSelectedChange=function(e){t.setState({option:e.value})},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this,a=this.state.option;return"Manual"===a?a=l.a.createElement(X,{modalClosed:this.props.modalClosed}):"AlphaExample"===a?a=l.a.createElement(re,{modalClosed:this.props.modalClosed}):"TWAP"===a?a=l.a.createElement(he,{modalClosed:this.props.modalClosed}):"TwapPy"===a?a=l.a.createElement(Oe,{modalClosed:this.props.modalClosed}):"MACrossing"===a&&(a=l.a.createElement(Te,{modalClosed:this.props.modalClosed})),l.a.createElement(l.a.Fragment,null,l.a.createElement(x,{show:this.props.show}),l.a.createElement(w.a,{className:L.a.placeOrder,draggableHandle:".Handler",layout:this.layout,width:1200,verticalCompact:!1,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"},isResizable:!0},l.a.createElement("div",{key:"a",className:L.a.Draggable},l.a.createElement("div",{className:"Handler"},l.a.createElement("div",{className:L.a.Header},l.a.createElement("div",{className:L.a.HeaderGroup},l.a.createElement("p",null,"Algo: "),l.a.createElement(k,{options:this.options,value:this.options,changed:function(a){return e.onSelectedChange(a)},width:"145%",containerWidth:"30%"})),l.a.createElement("img",{src:P.a,alt:"",onClick:this.props.modalClosed}))),a)))}}]),a}(n.Component),ke=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={showPlaceOrder:!1,showChangePassword:!1},t.placeOrderHandler=function(){t.setState({showPlaceOrder:!0})},t.changePasswordHandler=function(){t.setState({showChangePassword:!0})},t.modalClosedHandler=function(){t.setState({showPlaceOrder:!1,showChangePassword:!1})},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"dashboard"),l.a.createElement(O,{caption:"Place order",clicked:this.placeOrderHandler}),"  ",l.a.createElement("br",null),l.a.createElement(O,{caption:"Change password",clicked:this.changePasswordHandler})," ",l.a.createElement("br",null),l.a.createElement(je,{show:this.state.showPlaceOrder,modalClosed:this.modalClosedHandler}),l.a.createElement(W,{show:this.state.showChangePassword,modalClosed:this.modalClosedHandler}))}}]),a}(n.Component),Ie=t(36),Le=t.n(Ie),Fe=function(e){return l.a.createElement("div",{className:Le.a.InputBox},l.a.createElement("img",{src:e.img,alt:""}),l.a.createElement("input",{onChange:e.changed,value:e.value,className:Le.a.Input,placeholder:e.placeholder,type:e.type}))},Ve=t(50),He=t.n(Ve),Me=t(51),Ae=t.n(Me),Re=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={username:"",password:"",valid:!1,errormessage:"Server unreachable"},t.userInputHandler=function(e){t.setState({username:e.target.value}),t.buttonClicked()},t.passwordInputHandler=function(e){t.setState({password:e.target.value}),t.buttonClicked()},t.buttonClicked=function(){setTimeout((function(){"test"===t.state.username&&"test"===t.state.password?t.setState({valid:!0}):t.setState({valid:!1})}),0)},t.errorHandler=function(){setTimeout((function(){t.setState({errormessage:"Unknown username or password"})}),0)},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=""===this.state.username||""===this.state.password,a=this.state.valid?l.a.createElement(O,{clicked:this.props.clicked,caption:"Login",disabled:e}):l.a.createElement(O,{clicked:this.errorHandler,caption:"Login",disabled:e});return l.a.createElement("div",{"data-theme":this.props.dataTheme,className:E.a.Login},l.a.createElement("h1",null,"Login"),l.a.createElement("p",null,"Sing in to your account"),l.a.createElement("p",null,"Username/password: ",l.a.createElement("span",{className:E.a.YellowText},"test/test")),l.a.createElement(Fe,{changed:this.userInputHandler,img:He.a,placeholder:"Username",type:"text",value:this.state.value}),l.a.createElement(Fe,{changed:this.passwordInputHandler,img:Ae.a,value:this.state.value,placeholder:"Password",type:"password"}),a,l.a.createElement("p",null,this.state.errormessage))}}]),a}(n.Component),Be=function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("p",null,"risk")}}]),a}(n.Component),De=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={isLogged:!1},t.onLoginPass=function(){new Promise((function(e){e(t.setState({isLogged:!0}))})).then((function(e){return localStorage.setItem("isLogged",t.state.isLogged)}))},t.onLogout=function(){new Promise((function(e){e(t.setState({isLogged:!1}))})).then((function(e){return localStorage.setItem("isLogged",t.state.isLogged)}))},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("isLogged"));console.log(e),this.setState({isLogged:e})}},{key:"render",value:function(){var e=l.a.createElement(Re,{clicked:this.onLoginPass}),a=this.state.isLogged?l.a.createElement(l.a.Fragment,null,l.a.createElement(d.b,{path:"/dashboard",component:ke}),l.a.createElement(d.b,{path:"/login"},l.a.createElement(d.a,{to:"/dashboard"})),l.a.createElement(d.b,{path:"/risk",component:Be}),l.a.createElement(d.b,{path:"/",exact:!0},l.a.createElement(d.a,{to:"/dashboard"})),l.a.createElement("button",{onClick:this.onLogout},"Log Out")):l.a.createElement(l.a.Fragment,null,l.a.createElement(d.b,{path:"/login"},e),l.a.createElement(d.b,{path:"/dashboard"},l.a.createElement(d.a,{to:"/login"})),l.a.createElement(d.b,{path:"/risk"},l.a.createElement(d.a,{to:"/login"})),l.a.createElement(d.b,{path:"/",exact:!0},l.a.createElement(d.a,{to:"/login"})));return l.a.createElement(b,null,l.a.createElement(p.a,null,l.a.createElement(d.d,null,a)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(De,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[56,1,2]]]);
//# sourceMappingURL=main.c1110c5d.chunk.js.map