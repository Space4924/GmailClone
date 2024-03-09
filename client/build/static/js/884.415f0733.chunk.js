"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[884],{7884:(e,t,i)=>{i.r(t),i.d(t,{default:()=>re});var n=i(5043),a=i(3216),o=i(3697),r=i(5658),l=i(6446),c=i(5865),s=i(8587),d=i(8168),h=i(8387),p=i(8606),u=i(3650),m=i(6803),g=i(5242),v=i(5213),f=i(6236),A=i(7056),x=i(2400);function b(e){return(0,x.Ay)("PrivateSwitchBase",e)}(0,A.A)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var w=i(579);const y=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],S=(0,r.Ay)(f.A)((e=>{let{ownerState:t}=e;return(0,d.A)({padding:9,borderRadius:"50%"},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})})),k=(0,r.Ay)("input",{shouldForwardProp:r.ep})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),j=n.forwardRef((function(e,t){const{autoFocus:i,checked:n,checkedIcon:a,className:o,defaultChecked:r,disabled:l,disableFocusRipple:c=!1,edge:u=!1,icon:f,id:A,inputProps:x,inputRef:j,name:z,onBlur:C,onChange:R,onFocus:I,readOnly:E,required:B=!1,tabIndex:L,type:M,value:F}=e,D=(0,s.A)(e,y),[H,P]=(0,g.A)({controlled:n,default:Boolean(r),name:"SwitchBase",state:"checked"}),T=(0,v.A)();let N=l;T&&"undefined"===typeof N&&(N=T.disabled);const _="checkbox"===M||"radio"===M,O=(0,d.A)({},e,{checked:H,disabled:N,disableFocusRipple:c,edge:u}),V=(e=>{const{classes:t,checked:i,disabled:n,edge:a}=e,o={root:["root",i&&"checked",n&&"disabled",a&&"edge".concat((0,m.A)(a))],input:["input"]};return(0,p.A)(o,b,t)})(O);return(0,w.jsxs)(S,(0,d.A)({component:"span",className:(0,h.A)(V.root,o),centerRipple:!0,focusRipple:!c,disabled:N,tabIndex:null,role:void 0,onFocus:e=>{I&&I(e),T&&T.onFocus&&T.onFocus(e)},onBlur:e=>{C&&C(e),T&&T.onBlur&&T.onBlur(e)},ownerState:O,ref:t},D,{children:[(0,w.jsx)(k,(0,d.A)({autoFocus:i,checked:n,defaultChecked:r,className:V.input,disabled:N,id:_?A:void 0,name:z,onChange:e=>{if(e.nativeEvent.defaultPrevented)return;const t=e.target.checked;P(t),R&&R(e,t)},readOnly:E,ref:j,required:B,ownerState:O,tabIndex:L,type:M},"checkbox"===M&&void 0===F?{}:{value:F},x)),H?a:f]}))}));var z=i(9662);const C=(0,z.A)((0,w.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),R=(0,z.A)((0,w.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),I=(0,z.A)((0,w.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");var E=i(1070);function B(e){return(0,x.Ay)("MuiCheckbox",e)}const L=(0,A.A)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),M=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],F=(0,r.Ay)(j,{shouldForwardProp:e=>(0,r.ep)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.root,i.indeterminate&&t.indeterminate,t["size".concat((0,m.A)(i.size))],"default"!==i.color&&t["color".concat((0,m.A)(i.color))]]}})((e=>{let{theme:t,ownerState:i}=e;return(0,d.A)({color:(t.vars||t).palette.text.secondary},!i.disableRipple&&{"&:hover":{backgroundColor:t.vars?"rgba(".concat("default"===i.color?t.vars.palette.action.activeChannel:t.vars.palette[i.color].mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,u.X4)("default"===i.color?t.palette.action.active:t.palette[i.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==i.color&&{["&.".concat(L.checked,", &.").concat(L.indeterminate)]:{color:(t.vars||t).palette[i.color].main},["&.".concat(L.disabled)]:{color:(t.vars||t).palette.action.disabled}})})),D=(0,w.jsx)(R,{}),H=(0,w.jsx)(C,{}),P=(0,w.jsx)(I,{}),T=n.forwardRef((function(e,t){var i,a;const o=(0,E.A)({props:e,name:"MuiCheckbox"}),{checkedIcon:r=D,color:l="primary",icon:c=H,indeterminate:u=!1,indeterminateIcon:g=P,inputProps:v,size:f="medium",className:A}=o,x=(0,s.A)(o,M),b=u?g:c,y=u?g:r,S=(0,d.A)({},o,{color:l,indeterminate:u,size:f}),k=(e=>{const{classes:t,indeterminate:i,color:n,size:a}=e,o={root:["root",i&&"indeterminate","color".concat((0,m.A)(n)),"size".concat((0,m.A)(a))]},r=(0,p.A)(o,B,t);return(0,d.A)({},t,r)})(S);return(0,w.jsx)(F,(0,d.A)({type:"checkbox",inputProps:(0,d.A)({"data-indeterminate":u},v),icon:n.cloneElement(b,{fontSize:null!=(i=b.props.fontSize)?i:f}),checkedIcon:n.cloneElement(y,{fontSize:null!=(a=y.props.fontSize)?a:f}),ownerState:S,ref:t,className:(0,h.A)(k.root,A)},x,{classes:k}))}));var N=i(2994);const _=(0,z.A)((0,w.jsx)("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star");var O=i(9297),V=i(9469);const W=(0,r.Ay)(l.A)({padding:"0 0 0 10px",backgroundColor:"#f2f6fc",cursor:"pointer",display:"flex",alignItems:"center","& > div":{display:"flex",widht:"100%","& > p":{fontSize:14}}}),q=(0,r.Ay)(c.A)({fontSize:"12px !important",background:"#ddd",padding:"0 4px",borderRadius:"4px",marginRight:"6px"}),X=(0,r.Ay)(c.A)({marginLeft:"auto",marginRight:20,fontSize:12,color:"#5F6368"}),Y=e=>{let{emails:t,selectedEmails:i,setSelectedEmails:n,setReferesh:r}=e;const s=(0,a.Zp)(),d=(0,V.A)(o.y.toggleStarredEmail),h=async()=>{d.call({id:t._id,value:!t.starred}),r((e=>!e))};return(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)(W,{children:[(0,w.jsx)(T,{fontSize:"small",checked:null===i||void 0===i?void 0:i.includes(t._id),onClick:()=>{i.includes(t._id)?n((e=>e.filter((e=>e!=t._id)))):n((e=>[...e,t._id]))}}),t.starred?(0,w.jsx)(_,{fontSize:"small",style:{marginRight:10,opacity:.5,color:"green",background:"white"},onClick:()=>h()}):(0,w.jsx)(N.A,{fontSize:"small",style:{marginRight:10},onClick:()=>h()}),(0,w.jsxs)(l.A,{onClick:()=>s(O.J.view.path,{state:{emails:t}},console.log("touched")),children:[(0,w.jsx)(c.A,{style:{width:"200px",overflow:"hidden"},children:t.name}),(0,w.jsx)(q,{children:"Inbox"}),(0,w.jsxs)(c.A,{style:{width:"400px",height:"20px",overflow:"hidden"},children:[t.subject,t.body&&"-",t.body]})]}),(0,w.jsxs)(X,{children:[new window.Date(t.date).getDate(),new window.Date(t.date).toLocaleString("default",{month:"long"})]})]})})};var G=i(5721),J=i(7179),K=i(491);function Z(e){return(0,x.Ay)("MuiDivider",e)}(0,A.A)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);const Q=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],U=(0,r.Ay)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.root,i.absolute&&t.absolute,t[i.variant],i.light&&t.light,"vertical"===i.orientation&&t.vertical,i.flexItem&&t.flexItem,i.children&&t.withChildren,i.children&&"vertical"===i.orientation&&t.withChildrenVertical,"right"===i.textAlign&&"vertical"!==i.orientation&&t.textAlignRight,"left"===i.textAlign&&"vertical"!==i.orientation&&t.textAlignLeft]}})((e=>{let{theme:t,ownerState:i}=e;return(0,d.A)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},i.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},i.light&&{borderColor:t.vars?"rgba(".concat(t.vars.palette.dividerChannel," / 0.08)"):(0,u.X4)(t.palette.divider,.08)},"inset"===i.variant&&{marginLeft:72},"middle"===i.variant&&"horizontal"===i.orientation&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},"middle"===i.variant&&"vertical"===i.orientation&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},"vertical"===i.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},i.flexItem&&{alignSelf:"stretch",height:"auto"})}),(e=>{let{ownerState:t}=e;return(0,d.A)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}})}),(e=>{let{theme:t,ownerState:i}=e;return(0,d.A)({},i.children&&"vertical"!==i.orientation&&{"&::before, &::after":{width:"100%",borderTop:"thin solid ".concat((t.vars||t).palette.divider)}})}),(e=>{let{theme:t,ownerState:i}=e;return(0,d.A)({},i.children&&"vertical"===i.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:"thin solid ".concat((t.vars||t).palette.divider)}})}),(e=>{let{ownerState:t}=e;return(0,d.A)({},"right"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})})),$=(0,r.Ay)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.wrapper,"vertical"===i.orientation&&t.wrapperVertical]}})((e=>{let{theme:t,ownerState:i}=e;return(0,d.A)({display:"inline-block",paddingLeft:"calc(".concat(t.spacing(1)," * 1.2)"),paddingRight:"calc(".concat(t.spacing(1)," * 1.2)")},"vertical"===i.orientation&&{paddingTop:"calc(".concat(t.spacing(1)," * 1.2)"),paddingBottom:"calc(".concat(t.spacing(1)," * 1.2)")})})),ee=n.forwardRef((function(e,t){const i=(0,E.A)({props:e,name:"MuiDivider"}),{absolute:n=!1,children:a,className:o,component:r=(a?"div":"hr"),flexItem:l=!1,light:c=!1,orientation:u="horizontal",role:m=("hr"!==r?"separator":void 0),textAlign:g="center",variant:v="fullWidth"}=i,f=(0,s.A)(i,Q),A=(0,d.A)({},i,{absolute:n,component:r,flexItem:l,light:c,orientation:u,role:m,textAlign:g,variant:v}),x=(e=>{const{absolute:t,children:i,classes:n,flexItem:a,light:o,orientation:r,textAlign:l,variant:c}=e,s={root:["root",t&&"absolute",c,o&&"light","vertical"===r&&"vertical",a&&"flexItem",i&&"withChildren",i&&"vertical"===r&&"withChildrenVertical","right"===l&&"vertical"!==r&&"textAlignRight","left"===l&&"vertical"!==r&&"textAlignLeft"],wrapper:["wrapper","vertical"===r&&"wrapperVertical"]};return(0,p.A)(s,Z,n)})(A);return(0,w.jsx)(U,(0,d.A)({as:r,className:(0,h.A)(x.root,o),role:m,ref:t,ownerState:A},f,{children:a?(0,w.jsx)($,{className:x.wrapper,ownerState:A,children:a}):null}))}));ee.muiSkipListHighlight=!0;const te=ee,ie=(0,r.Ay)(l.A)({display:"flex",alignItems:"center",flexDirection:"column",marginTop:"120px",opacity:.8,width:"100%"}),ne=(0,r.Ay)(te)({width:"100%"}),ae=e=>{let{message:t}=e;const i=(0,a.g)();console.log(i),console.log(t.heading);const n=K.A.find((e=>e.name===i.type));return console.log(n),(0,w.jsxs)(ie,{children:[(0,w.jsx)(n.icon,{color:"action",style:{fontSize:50,marginBottom:20}}),(0,w.jsx)(c.A,{children:t.heading}),(0,w.jsx)(c.A,{children:t.subHeading}),(0,w.jsx)(ne,{})]})};var oe=i(9261);const re=()=>{var e,t;const[i,r]=(0,n.useState)([]),[c,s]=(0,n.useState)(!0),{type:d}=(0,a.g)(),{openDrawers:h}=(0,a.KC)(),p=(0,V.A)(o.y.getEmailFromType),u=(0,V.A)(o.y.moveEmailsToBin),m=(0,V.A)(o.y.deleteEmail);(0,n.useEffect)((()=>{p.call({},d),r([])}),[d,c]);return(0,w.jsxs)(l.A,{style:h?{marginLeft:250,width:"calc(100% - 250px)"}:{width:"100%"},children:[0===(null===p||void 0===p||null===(e=p.response)||void 0===e?void 0:e.length)?(0,w.jsx)(ae,{message:oe.Rb[d]}):(0,w.jsxs)(l.A,{style:{padding:"20px 10px 0 10px",display:"flex",alignItems:"center"},children:[(0,w.jsx)(T,{size:"small",onChange:e=>(e=>{if(e.target.checked){var t;const e=null===p||void 0===p||null===(t=p.response)||void 0===t?void 0:t.map((e=>e._id));r(e)}else r([])})(e)}),(0,w.jsx)(J.A,{color:"action",onClick:()=>("bin"===d?m.call(i):u.call(i),void s((e=>!e)))})]}),(0,w.jsx)(G.A,{children:null===p||void 0===p||null===(t=p.response)||void 0===t?void 0:t.map((e=>(0,w.jsx)(Y,{emails:e,selectedEmails:i,setSelectedEmails:r,setReferesh:s},e._id)))})]})}},491:(e,t,i)=>{i.d(t,{A:()=>s});var n=i(1418),a=i(2406),o=i(1084),r=i(5837),l=i(2263),c=i(859);const s=[{name:"inbox",title:"Inbox",icon:n.A},{name:"starred",title:"Starred",icon:a.A},{name:"sent",title:"Sent",icon:o.A},{name:"drafts",title:"Drafts",icon:r.A},{name:"bin",title:"Bin",icon:l.A},{name:"allmail",title:"All Mail",icon:c.A}]},9261:(e,t,i)=>{i.d(t,{Fk:()=>a,Rb:()=>o,_3:()=>n});const n="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png",a="https://ssl.gstatic.com/ui/v1/icons/mail/profile_mask2.png",o={inbox:{heading:"Your inbox is empty",subHeading:"Mails that don't appear in other tabs will be shown here."},drafts:{heading:"You don't have any saved drafts.",subHeading:"Saving a draft allows you to keep a message you aren't ready to send yet."},starred:{heading:"No starred messages",subHeading:"Stars let you give messages a special status to make them easier to find. To star a message, click on the star outline beside any message or conversation."},sent:{heading:"No sent messages!",subHeading:"Send one now!"},bin:{heading:"No conversations in Bin.",subHeading:""}}},9469:(e,t,i)=>{i.d(t,{A:()=>r});var n=i(5043),a=i(7154);const o=async(e,t,i)=>await(0,a.A)({method:e.method,url:"".concat("","/").concat(e.endpoint,"/").concat(i),data:t}),r=e=>{const[t,i]=(0,n.useState)(null),[a,r]=(0,n.useState)(""),[l,c]=(0,n.useState)(!1);return{call:async function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";i(null),r(null),c(!0);try{const a=await o(e,t,n);i(a.data)}catch(a){console.log("Error while hitting the endpoint",a.message),r(a.message)}finally{c(!1)}},response:t,error:a,isloading:l}}},3697:(e,t,i)=>{i.d(t,{y:()=>n});const n={saveSentEmail:{endpoint:"save",method:"POST"},getEmailFromType:{endpoint:"emails",method:"GET"},saveDraftEmails:{endpoint:"save-draft",method:"POST"},moveEmailsToBin:{endpoint:"bin",method:"POST"},toggleStarredEmail:{endpoint:"starred",method:"POST"},deleteEmail:{endpoint:"delete",method:"DELETE"}}},7179:(e,t,i)=>{var n=i(4994);t.A=void 0;var a=n(i(39)),o=i(579);t.A=(0,a.default)((0,o.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM8 9h8v10H8zm7.5-5-1-1h-5l-1 1H5v2h14V4z"}),"DeleteOutlineOutlined")},2994:(e,t,i)=>{var n=i(4994);t.A=void 0;var a=n(i(39)),o=i(579);t.A=(0,a.default)((0,o.jsx)("path",{d:"m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z"}),"StarBorder")}}]);
//# sourceMappingURL=884.415f0733.chunk.js.map