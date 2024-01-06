"use strict";(self.webpackChunkchuck_fresco_app=self.webpackChunkchuck_fresco_app||[]).push([[168],{4486:(e,t,o)=>{o.r(t),o.d(t,{default:()=>l});o(7313);var n=o(2433),r=o(337),i=o(722),s=o(5790),a=o(6527),c=o(2301),d=o(6417);const p=[{name:"leftSide",type:"node",default:"",description:"Children to placed inside the section left side"},{name:"rightSide",type:"node",default:"",description:"Children to placed inside the section right side"},{name:"className",type:"string",default:"",description:"External classes"}],l=e=>{let{...t}=e;return(0,d.jsxs)("div",{...t,children:[(0,d.jsx)(i.mn,{title:"Description",gutterBottom:!0,children:(0,d.jsx)(i.s0,{title:"HeroShaped",path:"src/components/organisms/HeroShaped/HeroShaped.js",description:"Component to display the background hero"})}),(0,d.jsx)(i.mn,{title:"Import",gutterBottom:!0,children:(0,d.jsx)(i.nz,{code:"\nimport { HeroShaped } from 'components/organisms';\n// or\nimport HeroShaped from 'components/organisms/HeroShaped';\n"})}),(0,d.jsx)(i.mn,{title:"Props & Methods",gutterBottom:!0,children:(0,d.jsx)(i.kx,{dataProperties:p})}),(0,d.jsx)(i.mn,{title:"Basic Example",gutterBottom:!0,children:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.Z,{marginBottom:2,padding:2,border:"1px solid #ccc",borderRadius:"4px",children:(0,d.jsx)(s.j4,{leftSide:(0,d.jsx)(c.M$,{title:"Coworking made easy",subtitle:"For entrepreneurs, startups and freelancers. Discover coworking spaces designed to inspire and to connect you to a community of motivated people.",ctaGroup:[(0,d.jsx)(r.Z,{variant:"contained",color:"primary",children:"Book"}),(0,d.jsx)(r.Z,{variant:"outlined",color:"primary",children:"Browse"})],align:"left"}),rightSide:(0,d.jsx)(a.Ee,{src:"https://assets.maccarianagency.com/the-front/photos/coworking/place1.jpg",alt:"...",style:{objectFit:"cover"},lazy:!1})})}),(0,d.jsx)(i.nz,{code:'\nimport React from \'react\';\nimport { Box, Button } from \'@material-ui/core\';\nimport { HeroShaped } from \'components/organisms\';\nimport { Image } from \'components/atoms\';\nimport { SectionHeader } from \'components/molecules\';\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">\n      <HeroShaped\n        leftSide={(\n          <SectionHeader\n            title="Coworking made easy"\n            subtitle="For entrepreneurs, startups and freelancers. Discover coworking spaces designed to inspire and to connect you to a community of motivated people."\n            ctaGroup={[\n              <Button variant="contained" color="primary">Book</Button>,\n              <Button variant="outlined" color="primary">Browse</Button>\n            ]}\n            align="left"\n          />\n        )}\n        rightSide={(\n          <Image src="https://assets.maccarianagency.com/the-front/photos/coworking/place1.jpg" alt="..." style={{ objectFit: \'cover\' }} lazy={false} />\n        )}\n      />\n    </Box>\n  );\n}\n'})]})})]})}}}]);