"use strict";(self.webpackChunktaskpro=self.webpackChunktaskpro||[]).push([[47],{5047:function(e,r,a){a.r(r),a.d(r,{default:function(){return w}});var s=a(5861),o=a(9439),n=a(4687),t=a.n(n),i=a(9434),m=a(5705),l=a(6727),u=a(3822),c={form__field:"RegisterForm_form__field__jpPyI",form__input:"RegisterForm_form__input__9aHOm",form__password:"RegisterForm_form__password__+UpFm",svg:"RegisterForm_svg__eGjZe",button:"RegisterForm_button__B3hFq",form__error:"RegisterForm_form__error__s02Vz"},_=a(6891),d=a(2791),p=a(7689),f=a(6746),h=a(184),g=(0,l.Ry)({name:(0,l.Z_)().trim().matches(/^[a-zA-Z0-9_\s~!@#$%\u2116^&*()_+-=[{}|`"'\u201d;:,./<>?\xa3]+$/,"Enter your name correct").min(2).max(16).required("Required"),email:(0,l.Z_)().trim().email("Enter your email correct").required("Required"),password:(0,l.Z_)().trim().matches(/^[a-zA-Z0-9!@#$%\u2116^&*)(_+-=[{}|`"'\u201d;:,./<>?\xa3]+$/,"Enter your password correct").min(8).max(64).required("Required")}),v={name:"",email:"",password:""},w=function(){var e=(0,d.useState)(!1),r=(0,o.Z)(e,2),a=r[0],n=r[1],l=(0,p.s0)(),w=(0,i.I0)(),x=(0,i.v9)(_.JB);(0,d.useEffect)((function(){x&&l("/home",{replace:!0})}),[x,l]);var j=function(){var e=(0,s.Z)(t().mark((function e(r,a){var s;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=a.resetForm,console.log(r),e.next=4,w((0,u.register)(r));case 4:s();case 5:case"end":return e.stop()}}),e)})));return function(r,a){return e.apply(this,arguments)}}(),N=function(){n((function(e){return!e}))};return(0,h.jsx)(m.J9,{initialValues:v,onSubmit:j,validationSchema:g,validateOnBlur:!0,children:function(e){var r=e.values,s=e.errors,o=e.touched,n=e.handleChange,t=e.handleBlur;e.handleSubmit,e.isValid,e.dirty;return(0,h.jsxs)(m.l0,{className:c.form,children:[(0,h.jsxs)("div",{className:c.form__field,children:[(0,h.jsx)(m.gN,{autoComplete:"name",placeholder:"Enter your name",type:"text",name:"name",onChange:n,onBlur:t,values:r.name,className:c.form__input}),o.name&&s.name&&(0,h.jsx)("p",{className:c.form__error,children:s.name})]}),(0,h.jsxs)("div",{className:c.form__field,children:[(0,h.jsx)(m.gN,{autoComplete:"email",placeholder:"Enter your email",type:"email",name:"email",onChange:n,onBlur:t,values:r.email,className:c.form__input}),o.email&&s.email&&(0,h.jsx)("p",{className:c.form__error,children:s.email})]}),(0,h.jsxs)("div",{className:c.form__password,children:[(0,h.jsx)(m.gN,{autoComplete:"password",placeholder:"Enter your password",type:a?"text":"password",name:"password",onChange:n,onBlur:t,values:r.password,className:c.form__input}),o.password&&s.password&&(0,h.jsx)("p",{className:c.form__error,children:s.password}),(0,h.jsx)("svg",{width:18,height:18,className:c.svg,onClick:N,children:(0,h.jsx)("use",{href:f.Z+"#icon-eye"})})]}),(0,h.jsx)("button",{type:"submit",className:c.button,children:"Register Now"})]})}})}}}]);
//# sourceMappingURL=47.5ec581be.chunk.js.map