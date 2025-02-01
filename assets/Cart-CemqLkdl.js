import{u as l,j as e,d as c,b as r}from"./index-Zh3VXSeN.js";function i({item:t}){const a=l(),s=()=>{a(c({id:t.id,amount:1}))},n=()=>{a(c({id:t.id,amount:-1}))};return e.jsxs("div",{className:"bg-primary shadow-lg my-4 p-4 border rounded-lg w-5/6 md:w-2/3 lg:w-1/2 cart-item",children:[e.jsx("h3",{className:"mb-4 font-semibold text-2xl text-darkAccent",children:t.title}),e.jsxs("section",{className:"flex justify-between items-center mb-3 text-secondary",children:[e.jsx("p",{className:"font-medium",children:"Price:"}),e.jsxs("p",{className:"font-bold text-theme",children:["$ ",t.price]})]}),e.jsxs("section",{className:"flex justify-between items-center mb-3 text-secondary",children:[e.jsx("p",{className:"font-medium",children:"Quantity:"}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("button",{onClick:n,className:"bg-darkAccent px-3 py-1 rounded text-primary transition hover:scale-110",children:e.jsx("i",{className:"fa-minus fa-solid"})}),e.jsx("p",{className:"px-4 font-semibold text-lg",children:t.quantity?t.quantity:1}),e.jsx("button",{onClick:s,className:"bg-accent px-3 py-1 rounded text-primary transition hover:scale-110",children:e.jsx("i",{className:"fa-plus fa-solid"})})]})]}),e.jsxs("section",{className:"flex justify-between items-center text-secondary",children:[e.jsx("p",{className:"font-semibold text-lg",children:"Total:"}),e.jsxs("p",{className:"font-bold text-theme text-xl",children:["$",(t.price*(t.quantity?t.quantity:1)).toFixed(2)]})]})]})}function o(){const t=r(s=>s.cart.items),a=t.reduce((s,n)=>s+n.price*n.quantity,0);return t.length===0?e.jsx("h2",{className:"font-semibold text-2xl text-center",children:"Your Cart is Empty!"}):e.jsxs("div",{className:"flex flex-col justify-center items-center",children:[e.jsx("h2",{children:"Your Cart"}),t.map(s=>e.jsx(i,{item:s},s.id)),e.jsxs("div",{className:"border-gray-300 mt-6 p-4 border-t",children:[e.jsx("h3",{className:"font-bold text-darkAccent text-xl",children:"Cart Total:"}),e.jsxs("p",{className:"text-lg text-theme",children:["$",a.toFixed(2)]})]})]})}export{o as default};
