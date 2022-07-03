var z=Object.defineProperty,I=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var b=(e,n,r)=>n in e?z(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,w=(e,n)=>{for(var r in n||(n={}))B.call(n,r)&&b(e,r,n[r]);if(v)for(var r of v(n))S.call(n,r)&&b(e,r,n[r]);return e},y=(e,n)=>I(e,A(n));import{s as o,L as p,u as m,r as d,j as i,a as t,b as u,c as T,I as j,d as N,e as R,P as U,R as W,f as P,g as Y,h as H,i as M,C as E}from"./index.5e4003e5.js";const $=o.button`
  height: 4rem;
  width: fit-content;
  padding: 0rem 0.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 0.2s linear;
  position: relative;
  &:hover,
  &:active {
    border: 1px solid var(--primary);
  }
  /* box-shadow: 0px 0px 10px -5px var(--danger); */
`,O=o.div`
  height: 100%;
  aspect-ratio: 1;
  padding: 0.5rem;
  border-radius: 50%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,_=o.span`
  font-size: 1.5rem;
  padding: 0rem 0.5rem;
`,D=()=>{const{user_details:e,logout:n}=m(),[r,s]=d.exports.useState(!1);return i($,{onClick:()=>s(!r),onBlur:()=>s(!1),children:[t(O,{children:t("img",{src:e!=null&&e.avatar_url?e==null?void 0:e.avatar_url:"https://source.unsplash.com/random",alt:""})}),t(_,{children:(e==null?void 0:e.name)||"User"}),t(G,{active:r})]})},F=o.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: fit-content;
  padding: 1rem 0.5rem;
  display: flex;
  gap: 1rem;
  flex-direction: column;

  background-color: var(--secondary-pink);
  border-radius: 5px;
  transition: all 0.2s linear;
  opacity: ${e=>e.active?1:0};
  transform: translateY(
    ${e=>e.active?"calc(100% + 0.25rem)":"85%"}
  );
  box-shadow: -2px 2px 10px -6px rgba(0, 0, 0, 0.75);
`,k=o(p)`
  font-size: 1.5rem;
  transition: all 0.15s linear;
  &:hover {
    color: var(--primary);
  }
`,q=o.button`
  font-size: 1.5rem;
  transition: all 0.15s linear;
  &:hover {
    color: var(--primary);
  }
`,G=({active:e})=>(m(),i(F,{active:e,children:[t(k,{to:"/profile",children:"Profile"}),t(k,{to:"/profile/orders",children:"Orders"}),t(q,{onClick:()=>window.open("http://localhost:8080/mistrium/logout"),children:"Logout"})]})),J=o.div`
  display: flex;
  gap: 2rem;
  align-self: center;
`,C=o.button`
  background-color: transparent;
  transform: translateY(0.5rem);
  position: relative;
  svg {
    width: 3rem;
    stroke-width: 1.5px;
  }
`,K=o.a`
  background-color: transparent;
  transform: translateY(0.5rem);
  position: relative;
  svg {
    width: 3rem;
    stroke-width: 1.5px;
  }
`,Q=o.div`
  position: absolute;
  width: 2rem;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: var(--danger);
  color: var(--white);
  display: grid;
  place-items: center;
  font-weight: 500;
  font-size: 1.25rem;

  top: 0;
  right: 0;
  transform: translate(40%, -40%);
`,V=()=>{const{toggleCart:e,cartSize:n}=u(),{user:r}=m(),{setModalState:s}=T();return i(J,{children:[t(K,{href:"http://localhost:3000/admin",target:"_self",children:(r==null?void 0:r.role)&&t(j,{size:30})}),i(C,{onClick:()=>{e()},children:[t(N,{size:30}),t(Q,{children:n})]}),r?t(D,{}):t(C,{onClick:()=>{s({isOpen:!0,componentName:"LOGIN"})},children:t(R,{size:30})})]})},X=o.div`
  height: 75vh;
  width: 35rem;
  background-color: var(--white);
  box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.75);
  padding: 2rem;
  position: absolute;
  right: -37rem;
  top: 0;

  display: flex;
  flex-direction: column;
  transition: all 0.2s linear;
`,Z=o.button`
  /* position: absolute;
  top: 1rem;
  right: 1rem; */
  background-color: transparent;
`,ee=o.span`
  font-size: 2.5rem;
  flex: 0 0 auto;
  text-transform: capitalize;
`,te=o.div`
  height: 2px;
  width: 100%;
  background-color: var(--gray-light);
  margin-bottom: 2rem;
  flex: 0 0 2px;
`,re=o.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex: 1 1 auto;
  overflow-y: scroll;
  & {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`,oe=o.div`
  flex: 0 0 2rem;
  display: flex;
  margin-top: 1rem;
  padding-top: 0.5rem;
  flex-direction: column;
  border-top: 2px solid var(--gray-light);
`,ne=o.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
`,ie=o(U)`
  padding: 1rem 2rem;
  &:hover {
    font-weight: 400;
  }
`,ae=o.div`
  font-size: 2rem;
  font-weight: 400;
  color: var(--black);
  flex: 0 0 auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`,se=o.span``,le=o.span`
  &::before {
    content: "$";
  }
`,ce=()=>{var g,f;const{toggleCart:e,isActive:n}=u(),[r,s]=W(P),L=Y(),l=d.exports.useRef(null);return d.exports.useEffect(()=>(l.current&&n&&(l.current.style.right="0",window.document.children[0].classList.add("stop_scroll")),!n&&l.current&&(l.current.style.right="-37rem",window.document.children[0].classList.remove("stop_scroll")),()=>{l.current.style.right="-37rem",window.document.children[0].classList.remove("stop_scroll")}),[n]),d.exports.useEffect(()=>{H.getCart().then(a=>s(y(w({},r),{id:a.id,cartItems:a.details})))},[]),i(X,{ref:l,children:[i(ne,{children:[t(ee,{children:"Your Cart"}),t(Z,{onClick:()=>{e()},children:t(M,{})})]}),t(te,{}),t(re,{children:(g=r==null?void 0:r.cartItems)==null?void 0:g.map(a=>t(E,{item:a},a.id))}),i(oe,{children:[i(ae,{children:[t(se,{children:"Total"}),t(le,{children:(f=r==null?void 0:r.cartItems)==null?void 0:f.reduce((a,c)=>{var x;return a+((x=c==null?void 0:c.product)==null?void 0:x.price)*(c==null?void 0:c.quantity)},0)})]}),t(ie,{onClick:()=>{e(),L("/checkout")},children:"Checkout"})]})]})},de=o.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-height);
  padding: 2rem var(--section-x-padding);
  z-index: 100;

  // weird bug with the header
  /* overflow: hidden; */

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  transition: all 0.2s linear;
`,pe=o.img`
  width: 12rem;
  height: auto;
`,he=o.ul`
  width: fit-content;
  display: flex;
  gap: 3rem;
`,h=o.li`
  color: var(--black);
  text-transform: lowercase;
  font-size: var(--fs-content);
  font-weight: 400;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: var(--black);
    transition: transform 0.25s linear;
    transform: scale(0);
  }
  &:hover::after {
    width: 100%;
    transform: scale(1);
  }
`,ge=()=>{const e=d.exports.useRef(null);return u(),d.exports.useEffect(()=>(e.current&&(window.onscroll=()=>{console.log("ok scroll"),window.scrollY>2&&(e.current.style.position="fixed",e.current.style.backgroundColor="var(--secondary)",e.current.style.boxShadow="0px 0px 10px -4px rgba(0, 0, 0, 0.75)"),window.scrollY<=2&&(e.current.style.position="absolute",e.current.style.backgroundColor="transparent",e.current.style.boxShadow="none")}),()=>{window.removeEventListener("scroll",()=>{console.log("removed")})}),[e]),i(de,{ref:e,children:[t(pe,{src:"/imgs/logo.png"}),i(he,{children:[t(h,{children:t(p,{to:"/",children:"home"})}),t(h,{children:t(p,{to:"/products",children:"products"})}),t(h,{children:t(p,{to:"/",children:"about us"})}),t(h,{children:t(p,{to:"/",children:"contact"})})]}),t(V,{}),t(ce,{})]})};export{ge as default};
