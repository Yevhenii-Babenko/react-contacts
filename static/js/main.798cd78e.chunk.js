(this["webpackJsonpreact-contacts"]=this["webpackJsonpreact-contacts"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(4),r=n.n(s),o=(n(22),n(23),n(10)),i=n(11),l=n(16),j=n(15),h=n(14),d=n.n(h),m=n(12),b=n.n(m),u=(n(6),n(1));var p=function(e){var t=e.name,n=e.surname,a=e.phone,s=e.gender;return Object(u.jsx)(c.a.Fragment,{children:Object(u.jsxs)("div",{className:"contacts__blocks",children:[Object(u.jsx)("p",{children:Object(u.jsxs)("strong",{children:[" ",t," "]})}),Object(u.jsx)("p",{children:Object(u.jsxs)("strong",{children:[" ",n," "]})}),Object(u.jsxs)("p",{children:[" ",a," "]}),void 0===s?Object(u.jsx)("p",{children:Object(u.jsx)("i",{className:"contacts__item",children:"gender is not defind"})}):Object(u.jsxs)("p",{children:[" ","male"===s?Object(u.jsx)(b.a,{}):Object(u.jsx)(d.a,{})]})]})})},O=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleSearchChange=function(e){a.setState({search:e.target.value})},a.state={contacts:[{firstName:"\u0411\u0430\u0440\u043d\u0435\u0439",lastName:"\u0421\u0442\u0438\u043d\u0441\u043e\u0432\u0441\u044c\u043a\u0438\u0439",phone:"+380956319521",gender:"male"},{firstName:"\u0420\u043e\u0431\u0456\u043d",lastName:"\u0429\u0435\u0440\u0431\u0430\u0442\u0441\u044c\u043a\u0430",phone:"+380931460123",gender:"female"},{firstName:"\u0410\u043d\u043e\u043d\u0456\u043c\u043d\u0438\u0439",lastName:"\u0410\u043d\u043e\u043d\u0456\u043c\u0443\u0441",phone:"+380666666666"},{firstName:"\u041b\u0456\u043b\u0456\u044f",lastName:"\u041e\u043b\u0434\u0440\u043e\u0432\u043d\u0430",phone:"+380504691254",gender:"female"},{firstName:"\u041c\u0430\u0440\u0448\u0435\u043d",lastName:"\u0415\u0440\u0456\u043a\u0441\u043e\u043d\u044f\u043d",phone:"+380739432123",gender:"male"},{firstName:"\u0422\u0435\u043e\u0434\u043e\u0440",lastName:"\u041c\u043e\u0442\u0441\u0431\u0435\u0441",phone:"+380956319521",gender:"male"}],search:""},a}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state.contacts,t=this.state.search,n=e.filter((function(e){return""===t?e:e.firstName.toLocaleLowerCase().includes(t.toLocaleLowerCase())||e.lastName.toLocaleLowerCase().includes(t.toLocaleLowerCase())||e.phone.toLocaleLowerCase().includes(t.toLocaleLowerCase())}));return""!==t&&(e=n),Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:" Hello from Contacts "}),Object(u.jsx)("input",{type:"text",onChange:this.handleSearchChange}),0===e.length?Object(u.jsx)("div",{className:"",children:Object(u.jsx)("p",{children:"No element for rendering"})}):Object(u.jsx)("div",{className:"contacts",children:n.map((function(e,t){return Object(u.jsx)(p,{name:e.firstName,surname:e.lastName,phone:e.phone,gender:e.gender},t)}))})]})}}]),n}(a.Component);var f=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(O,{})})};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root"))},6:function(e,t,n){}},[[31,1,2]]]);
//# sourceMappingURL=main.798cd78e.chunk.js.map