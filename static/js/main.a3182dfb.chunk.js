(this.webpackJsonpmultiauthorshipustestingautofill=this.webpackJsonpmultiauthorshipustestingautofill||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var r=a(1),s=a.n(r),n=a(4),i=a.n(n),c=(a(13),a(14),a.p+"static/media/img.cc7c8f99.jpg"),o=a(3),l=a(5),d=a(6),h=a(8),u=a(7),m=a(0),j=100,p=1,b=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={count:0,creators:[{name:"cryptogod",ownership:100,max:100}]},e}return Object(d.a)(a,[{key:"addCreator",value:function(){p++;for(var e=this.state.creators,t=0;t<this.state.creators.length;t++)e[t].ownership=parseFloat(j/p).toFixed(1);e.push({name:"",ownership:parseFloat(j/p).toFixed(1),max:j-p+1}),this.setState({creators:e})}},{key:"deletCreator",value:function(e){var t=this.state.creators;t.splice(e,1),p--;for(var a=100,r=0;r<this.state.creators.length;r++)a-=this.state.creators[r].ownership,t[r].ownership=j/p,t[r].max=j-p+1;this.setState({creators:t,count:a})}},{key:"changeOwnership",value:function(e){console.log(e.target.value);var t=this.state.creators,a=parseInt(t[0].ownership)+parseInt(t[e.target.id].ownership);console.log(a),""===e.target.value?(t[e.target.id].ownership=0,t[0].ownership=a-e.target.value):(t[e.target.id].ownership=e.target.value,t[0].ownership=parseFloat(a-e.target.value).toFixed(1)),this.setState({creators:t}),this.state.creators[e.target.id].ownership>=this.state.creators[e.target.id].max&&(t[e.target.id].ownership=this.state.creators[e.target.id].max,this.setState({creators:t})),this.state.creators[0].ownership<0&&(t[0].ownership=0,t[e.target.id].ownership=a+1)}},{key:"changeName",value:function(e){var t=this.state.creators;t[e.target.id].name=e.target.value,this.setState({creators:t})}},{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{children:[this.state.creators.map((function(t,a){var r;return Object(m.jsxs)("div",{className:"form-row",style:{marginBottom:16},children:[Object(m.jsx)("div",{className:"col-md-5",children:0===a?Object(m.jsx)("input",{type:"name",className:"form-control",value:t.name,readOnly:!0}):Object(m.jsx)("input",{type:"name",className:"form-control",placeholder:"username",id:a,value:t.name,onChange:e.changeName.bind(e)})}),Object(m.jsx)("div",{className:"col-md-4",children:0===a?Object(m.jsx)("input",{type:"number",value:t.ownership,className:"form-control",id:"quantity",name:"quantity",min:"0",max:"100",readOnly:!0}):Object(m.jsx)("input",(r={type:"number",step:"0.1",value:t.ownership,id:a,className:"form-control",placeholder:"00",min:"0",max:"100"},Object(o.a)(r,"max",t.max),Object(o.a)(r,"onChange",e.changeOwnership.bind(e)),r))}),Object(m.jsx)("div",{className:"col-md-2",children:" % credit "}),0===a?Object(m.jsx)("div",{}):Object(m.jsx)("div",{className:"col-md-1",style:{cursor:"pointer"},onClick:function(){return e.deletCreator(a)},children:" X "})]},a)})),Object(m.jsx)("div",{style:{cursor:"pointer",color:"blue"},onClick:function(){return e.addCreator()},id:"add_people",children:"Add a collaborator +"}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{children:"submit"})]})}}]),a}(s.a.Component);var x=function(){return Object(m.jsxs)("div",{className:"container-sm",style:{maxWidth:450},children:[Object(m.jsx)("div",{style:{marginTop:100}}),Object(m.jsx)("h1",{children:"Create an NFT"}),Object(m.jsxs)("form",{children:[Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Name your piece"}),Object(m.jsx)("input",{value:"Trippy",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",readOnly:!0})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Image: "}),Object(m.jsx)("br",{}),Object(m.jsx)("img",{src:c,alt:"imag"})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Price"}),Object(m.jsx)("input",{value:"$100",className:"form-control",id:"exampleInputPassword1",readOnly:!0})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Creator(s)"}),Object(m.jsx)(b,{})]})]})]})},g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,r=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),r(e),s(e),n(e),i(e)}))};i.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(x,{})}),document.getElementById("root")),g()}},[[16,1,2]]]);
//# sourceMappingURL=main.a3182dfb.chunk.js.map