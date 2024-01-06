"use strict";(self.webpackChunkchuck_fresco_app=self.webpackChunkchuck_fresco_app||[]).push([[29],{1029:(n,e,t)=>{t.r(e),t.d(e,{default:()=>d});t(7313);var a=t(2433),o=t(7009),r=t(722),s=t(5790),i=t(2301),l=t(6417);const c=[{name:"backgroundImage",type:"string",default:"",description:"The parallax background image"},{name:"children",type:"node",default:"",description:"The content"},{name:"className",type:"string",default:"",description:"External classes"}],d=n=>{let{...e}=n;return(0,l.jsxs)("div",{...e,children:[(0,l.jsx)(r.mn,{title:"Description",gutterBottom:!0,children:(0,l.jsx)(r.s0,{title:"Parallax",path:"src/components/organisms/Parallax/Parallax.js",description:"Component to display the Parallax backgrounds"})}),(0,l.jsx)(r.mn,{title:"Import",gutterBottom:!0,children:(0,l.jsx)(r.nz,{code:"\nimport { Parallax } from 'components/organisms';\n// or\nimport Parallax from 'components/organisms/Parallax';\n"})}),(0,l.jsx)(r.mn,{title:"Props & Methods",gutterBottom:!0,children:(0,l.jsx)(r.kx,{dataProperties:c})}),(0,l.jsx)(r.mn,{title:"Basic Example",gutterBottom:!0,children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.Z,{marginBottom:2,padding:2,border:"1px solid #ccc",borderRadius:"4px",position:"relative",children:(0,l.jsx)(s.VS,{backgroundImage:"https://assets.maccarianagency.com/the-front/photos/blog/cover2.jpg",children:(0,l.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#007b3d3d"},children:(0,l.jsx)(s.xr,{withShadow:!0,style:{width:500,height:"auto",background:"transparent"},children:(0,l.jsx)(i.M$,{title:(0,l.jsxs)("span",{style:{color:"white"},children:["Use flexible components.",(0,l.jsx)("br",{}),(0,l.jsx)(o.Z,{component:"span",variant:"inherit",color:"primary",children:"to build an app quickly."})]}),subtitle:(0,l.jsx)("span",{style:{color:"white"},children:"TheFront styles and extends Material UI components, but also included brand new landing page focused components."})})})})})}),(0,l.jsx)(r.nz,{code:"\nimport React from 'react';\nimport { Box, Typography } from '@material-ui/core';\nimport { Parallax } from 'components/organisms';\nimport { SectionHeader } from 'components/molecules';\nimport { CardBase } from 'components/organisms';\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} padding={2} border=\"1px solid #ccc\" borderRadius=\"4px\">\n      <Parallax backgroundImage=\"https://assets.maccarianagency.com/the-front/photos/blog/cover2.jpg\">\n        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#007b3d3d' }}>\n          <CardBase withShadow style={{ width: 500, height: 'auto', background: 'transparent' }}>\n            <SectionHeader\n              title={\n                <span style={{ color: 'white' }}>\n                  Use flexible components.<br />\n                  <Typography component=\"span\" variant=\"inherit\" color=\"primary\">\n                  to build an app quickly.\n                  </Typography>\n                </span>\n              }\n              subtitle={<span style={{ color: 'white' }}>\n                TheFront styles and extends Material UI components, but also included brand new landing page focused components.\n              </span>}\n            />\n          </CardBase>\n        </div>\n      </Parallax>\n    </Box>\n  );\n}\n"})]})})]})}}}]);