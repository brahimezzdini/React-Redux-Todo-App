(this["webpackJsonpredux-todo"]=this["webpackJsonpredux-todo"]||[]).push([[0],{32:function(e,t,o){},33:function(e,t,o){},41:function(e,t,o){"use strict";o.r(t);var n=o(1),c=o.n(n),i=o(15),r=o.n(i),a=(o(32),o(33),o(17)),d=o(13),s=o(14),l=o(18),u=Object(l.b)({name:"todos",initialState:[],reducers:{addTodos:function(e,t){return e.push(t.payload),e},removeTodos:function(e,t){return e.filter((function(e){return e.id!==t.payload}))},updateTodos:function(e,t){return e.map((function(e){return e.id===t.payload.id?Object(s.a)(Object(s.a)({},e),{},{item:t.payload.item}):e}))},completeTodos:function(e,t){return e.map((function(e){return e.id===t.payload?Object(s.a)(Object(s.a)({},e),{},{completed:!0}):e}))}}}),j=u.actions,p=j.addTodos,b=j.removeTodos,m=j.updateTodos,h=j.completeTodos,O=u.reducer,x=o(43),T=o(26),f=o(24),v=o(3),y=function(e){var t=e.item,o=e.updateTodo,c=e.removeTodo,i=e.completeTodo,r=Object(n.useRef)(!0);return Object(v.jsxs)(x.a.li,{initial:{x:"150vw",transition:{type:"spring",duration:2}},animate:{x:0,transition:{type:"spring",duration:2}},whileHover:{scale:.9,transition:{type:"spring",duration:.1}},exit:{x:"-60vw",scale:[1,0],transition:{duration:.5},backgroundColor:"rgba(255,0,0,1)"},className:"card",children:[Object(v.jsx)("textarea",{ref:r,disabled:r,defaultValue:t.item,onKeyPress:function(e){return function(e,t,n){13===n.which&&(o({id:e,item:t}),r.current.disabled=!0)}(t.id,r.current.value,e)}}),Object(v.jsxs)("div",{className:"btns",children:[Object(v.jsxs)(x.a.button,{whileHover:{scale:1.4},whileTap:{scale:.9},onClick:function(){return r.current.disabled=!1,void r.current.focus()},children:[" ",Object(v.jsx)(T.a,{})," "]}),!1===t.completed&&Object(v.jsx)(x.a.button,{whileHover:{scale:1.4},whileTap:{scale:.9},style:{color:"green"},onClick:function(){return i(t.id)},children:Object(v.jsx)(f.a,{})}),Object(v.jsxs)(x.a.button,{whileHover:{scale:1.4},whileTap:{scale:.9},style:{color:"red"},onClick:function(){return c(t.id)},children:[" ",Object(v.jsx)(f.b,{})]})," "]}),t.completed&&Object(v.jsx)("span",{className:"completed",children:"done"})]},t.id)},w=o(44),g=Object(d.b)((function(e){return{todos:e}}),(function(e){return{addTodo:function(t){return e(p(t))},removeTodo:function(t){return e(b(t))},updateTodo:function(t){return e(m(t))},completeTodo:function(t){return e(h(t))}}}))((function(e){var t=Object(n.useState)("active"),o=Object(a.a)(t,2),c=o[0],i=o[1];return Object(v.jsxs)("div",{className:"displaytodos",children:[Object(v.jsxs)("div",{className:"buttons",children:[Object(v.jsx)(x.a.button,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:function(){return i("active")},children:"Active"}),Object(v.jsx)(x.a.button,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:function(){return i("completed")},children:"Completed"}),Object(v.jsx)(x.a.button,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:function(){return i("all")},children:"All"})]}),Object(v.jsx)("ul",{children:Object(v.jsxs)(w.a,{children:[e.todos.length>0&&"active"===c?e.todos.map((function(t){return!1===t.completed&&Object(v.jsx)(y,{item:t,removeTodo:e.removeTodo,updateTodo:e.updateTodo,completeTodo:e.completeTodo},t.id)})):null,e.todos.length>0&&"completed"===c?e.todos.map((function(t){return!0===t.completed&&Object(v.jsx)(y,{item:t,removeTodo:e.removeTodo,updateTodo:e.updateTodo,completeTodo:e.completeTodo},t.id)})):null,e.todos.length>0&&"all"===c?e.todos.map((function(t){return Object(v.jsx)(y,{item:t,removeTodo:e.removeTodo,updateTodo:e.updateTodo,completeTodo:e.completeTodo},t.id)})):null]})})]})})),C=o(27),k=Object(d.b)((function(e){return{todos:e}}),(function(e){return{addTodo:function(t){return e(p(t))}}}))((function(e){var t=Object(n.useState)(""),o=Object(a.a)(t,2),c=o[0],i=o[1];return Object(v.jsxs)("div",{className:"addTodos",children:[Object(v.jsx)("input",{type:"text",onChange:function(e){return function(e){i(e.target.value)}(e)},className:"todo-input",value:c}),Object(v.jsx)(x.a.button,{whileHover:{scale:1.1},whileTap:{scale:.9},className:"add-btn",onClick:function(){""===c?alert("Input is Empty"):(e.addTodo({id:Math.floor(1e3*Math.random()),item:c,completed:!1}),i(""))},children:Object(v.jsx)(C.a,{})}),Object(v.jsx)("br",{})]})}));var H=function(){return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(x.a.h1,{initial:{y:-200},animate:{y:0},transition:{type:"spring",duration:.5},whileHover:{scale:1.1},children:"Todo App"}),Object(v.jsx)(x.a.h1,{style:{textAlign:"center",fontSize:"16px"},children:Object(v.jsx)("a",{href:"https://github.com/brahimezzdini/React-Redux-Todo-App.git",children:"SOURCE CODE ON GITHUB"})}),Object(v.jsx)("br",{}),Object(v.jsxs)(x.a.div,{initial:{y:1e3},animate:{y:0},transition:{type:"spring",duration:1},children:[Object(v.jsx)(k,{}),Object(v.jsx)(g,{})]})]})},N=Object(l.a)({reducer:O});r.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(d.a,{store:N,children:Object(v.jsx)(H,{})})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.7adcaee9.chunk.js.map