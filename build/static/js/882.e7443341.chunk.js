"use strict";(self.webpackChunkchuck_fresco_app=self.webpackChunkchuck_fresco_app||[]).push([[882],{7882:(e,n,t)=>{t.r(n),t.d(n,{default:()=>m});t(7313);var i=t(2433),o=t(1144),r=t(7009),a=t(6215),s=t(337),l=t(722),c=t(5790),d=t(6527),p=t(6417);const u=[{name:"cta",type:"node",default:"",description:"CTA button of the pricing card"},{name:"priceComponent",type:"node",default:"",description:"The pricing component of the pricing card"},{name:"title",type:"string",default:"",description:"Title of the pricing card"},{name:"disclaimer",type:"string",default:"",description:"Diclaimer of the pricing card"},{name:"disclaimerProps",type:"object",default:"",description:"Additional props to pass to the disclaimer Typography component"},{name:"featureCheckComponent",type:"node",default:"",description:"The features check component of the pricing card"},{name:"featureTitleProps",type:"object",default:"",description:"Additional props to pass to the feature title Typography component"},{name:"features",type:"array",default:"",description:"Features array of the pricing card"},{name:"subtitle",type:"string",default:"",description:"Subtitle of the pricing card"},{name:"subtitleProps",type:"object",default:"",description:"Additional props to pass to the subtitle Typography component"},{name:"titleProps",type:"object",default:"",description:"Additional props to pass to the title Typography component"},{name:"className",type:"string",default:"",description:"External classes"}],m=e=>{let{...n}=e;return(0,p.jsxs)("div",{...n,children:[(0,p.jsx)(l.mn,{title:"Description",gutterBottom:!0,children:(0,p.jsx)(l.s0,{title:"CardPricingStandard",path:"src/components/organisms/CardPricingStandard/CardPricingStandard.js",description:"Component to display the pricing card"})}),(0,p.jsx)(l.mn,{title:"Import",gutterBottom:!0,children:(0,p.jsx)(l.nz,{code:"\nimport { CardPricingStandard } from 'components/organisms';\n// or\nimport CardPricingStandard from 'components/organisms/CardPricingStandard';\n"})}),(0,p.jsx)(l.mn,{title:"Props & Methods",gutterBottom:!0,children:(0,p.jsx)(l.kx,{dataProperties:u})}),(0,p.jsx)(l.mn,{title:"Basic Example",gutterBottom:!0,children:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i.Z,{marginBottom:2,padding:2,border:"1px solid #ccc",borderRadius:"4px",overflow:"auto",children:(0,p.jsx)(i.Z,{display:"flex",justifyContent:"space-around",alignItems:"center",minWidth:"900px",children:(0,p.jsxs)(o.Z,{container:!0,spacing:2,children:[(0,p.jsx)(o.Z,{item:!0,xs:4,children:(0,p.jsx)(c.x1,{title:"Extended License",subtitle:"A pay-once license, just for you",priceComponent:(0,p.jsxs)("div",{children:[(0,p.jsx)(r.Z,{variant:"h3",component:"span",style:{fontWeight:900},children:"$79"}),(0,p.jsx)(r.Z,{component:"span",variant:"subtitle1",children:"/ MO"})]}),features:["Rich, responsive landing pages","100+ styled components","Flexible, simple license","Speedy build tooling","6 months free support included"],featureCheckComponent:(0,p.jsx)(d.JO,{fontIconClass:"far fa-check-circle",fontIconColor:a.Z[500]}),cta:(0,p.jsx)(s.Z,{color:"primary",variant:"outlined",fullWidth:!0,size:"large",children:"Subscribe now"}),disclaimer:"Fully featured 30-day free trial"})}),(0,p.jsx)(o.Z,{item:!0,xs:4,children:(0,p.jsx)(c.x1,{title:"Extended License",subtitle:"A pay-once license, just for you",priceComponent:(0,p.jsxs)("div",{children:[(0,p.jsx)(r.Z,{variant:"h3",component:"span",style:{fontWeight:900},children:"$79"}),(0,p.jsx)(r.Z,{component:"span",variant:"subtitle1",children:"/ MO"})]}),features:["Rich, responsive landing pages","100+ styled components","Flexible, simple license","Speedy build tooling","6 months free support included"],featureCheckComponent:(0,p.jsx)(d.JO,{fontIconClass:"far fa-check-circle",fontIconColor:a.Z[500]}),cta:(0,p.jsx)(s.Z,{color:"primary",variant:"contained",fullWidth:!0,size:"large",children:"Subscribe now"}),disclaimer:"Fully featured 30-day free trial"})}),(0,p.jsx)(o.Z,{item:!0,xs:4,children:(0,p.jsx)(c.x1,{title:"Extended License",subtitle:"A pay-once license, just for you",priceComponent:(0,p.jsxs)("div",{children:[(0,p.jsx)(r.Z,{variant:"h3",component:"span",style:{fontWeight:900},children:"$79"}),(0,p.jsx)(r.Z,{component:"span",variant:"subtitle1",children:"/ MO"})]}),features:["Rich, responsive landing pages","100+ styled components","Flexible, simple license","Speedy build tooling","6 months free support included"],featureCheckComponent:(0,p.jsx)(d.JO,{fontIconClass:"far fa-check-circle",fontIconColor:a.Z[500]}),cta:(0,p.jsx)(s.Z,{color:"primary",variant:"outlined",fullWidth:!0,size:"large",children:"Subscribe now"}),disclaimer:"Fully featured 30-day free trial"})})]})})}),(0,p.jsx)(l.nz,{code:'\nimport React from \'react\';\nimport { Box, colors, Grid, Button, Typography } from \'@material-ui/core\';\nimport { CardPricingStandard } from \'components/organisms\';\nimport { Icon } from \'components/atoms\';\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">\n      <Grid container spacing={2}>\n        <Grid item xs={4}>\n          <CardPricingStandard\n            title="Extended License"\n            subtitle="A pay-once license, just for you"\n            priceComponent={(\n                <div>\n                    <Typography variant="h3" component="span" style={{ fontWeight: 900 }}>$79</Typography>\n                    <Typography component="span" variant="subtitle1">/ MO</Typography>\n                </div>\n            )}\n            features={[\'Rich, responsive landing pages\', \'100+ styled components\', \'Flexible, simple license\', \'Speedy build tooling\', \'6 months free support included\']}\n            featureCheckComponent={<Icon fontIconClass="far fa-check-circle" fontIconColor={colors.indigo[500]} />}\n            cta={(<Button color="primary" variant="outlined" fullWidth size="large">Subscribe now</Button>)}\n            disclaimer="Fully featured 30-day free trial"\n          />\n        </Grid>\n        <Grid item xs={4}>\n          <CardPricingStandard\n            title="Extended License"\n            subtitle="A pay-once license, just for you"\n            priceComponent={(\n                <div>\n                    <Typography variant="h3" component="span" style={{ fontWeight: 900 }}>$79</Typography>\n                    <Typography component="span" variant="subtitle1">/ MO</Typography>\n                </div>\n            )}\n            features={[\'Rich, responsive landing pages\', \'100+ styled components\', \'Flexible, simple license\', \'Speedy build tooling\', \'6 months free support included\']}\n            featureCheckComponent={<Icon fontIconClass="far fa-check-circle" fontIconColor={colors.indigo[500]} />}\n            cta={(<Button color="primary" variant="contained" fullWidth size="large">Subscribe now</Button>)}\n            disclaimer="Fully featured 30-day free trial"\n          />\n        </Grid>\n        <Grid item xs={4}>\n          <CardPricingStandard\n            title="Extended License"\n            subtitle="A pay-once license, just for you"\n            priceComponent={(\n                <div>\n                    <Typography variant="h3" component="span" style={{ fontWeight: 900 }}>$79</Typography>\n                    <Typography component="span" variant="subtitle1">/ MO</Typography>\n                </div>\n            )}\n            features={[\'Rich, responsive landing pages\', \'100+ styled components\', \'Flexible, simple license\', \'Speedy build tooling\', \'6 months free support included\']}\n            featureCheckComponent={<Icon fontIconClass="far fa-check-circle" fontIconColor={colors.indigo[500]} />}\n            cta={(<Button color="primary" variant="outlined" fullWidth size="large">Subscribe now</Button>)}\n            disclaimer="Fully featured 30-day free trial"\n          />\n        </Grid>\n      </Grid>\n    </Box>\n  );\n}\n'})]})}),(0,p.jsx)(l.mn,{title:"Outlined",gutterBottom:!0,children:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i.Z,{marginBottom:2,padding:2,border:"1px solid #ccc",borderRadius:"4px",overflow:"auto",children:(0,p.jsx)(i.Z,{display:"flex",justifyContent:"space-around",alignItems:"center",minWidth:"900px",children:(0,p.jsxs)(o.Z,{container:!0,spacing:2,children:[(0,p.jsx)(o.Z,{item:!0,xs:4,children:(0,p.jsx)(c.x1,{title:"Extended License",subtitle:"A pay-once license, just for you",priceComponent:(0,p.jsxs)("div",{children:[(0,p.jsx)(r.Z,{variant:"h3",component:"span",style:{fontWeight:900},children:"$79"}),(0,p.jsx)(r.Z,{component:"span",variant:"subtitle1",children:"/ MO"})]}),features:["Rich, responsive landing pages","100+ styled components","Flexible, simple license","Speedy build tooling","6 months free support included"],featureCheckComponent:(0,p.jsx)(d.JO,{fontIconClass:"far fa-check-circle",fontIconColor:a.Z[500]}),cta:(0,p.jsx)(s.Z,{color:"primary",variant:"outlined",fullWidth:!0,size:"large",children:"Subscribe now"}),disclaimer:"Fully featured 30-day free trial",variant:"outlined"})}),(0,p.jsx)(o.Z,{item:!0,xs:4,children:(0,p.jsx)(c.x1,{title:"Extended License",subtitle:"A pay-once license, just for you",priceComponent:(0,p.jsxs)("div",{children:[(0,p.jsx)(r.Z,{variant:"h3",component:"span",style:{fontWeight:900},children:"$79"}),(0,p.jsx)(r.Z,{component:"span",variant:"subtitle1",children:"/ MO"})]}),features:["Rich, responsive landing pages","100+ styled components","Flexible, simple license","Speedy build tooling","6 months free support included"],featureCheckComponent:(0,p.jsx)(d.JO,{fontIconClass:"far fa-check-circle",fontIconColor:a.Z[500]}),cta:(0,p.jsx)(s.Z,{color:"primary",variant:"contained",fullWidth:!0,size:"large",children:"Subscribe now"}),disclaimer:"Fully featured 30-day free trial",variant:"outlined"})}),(0,p.jsx)(o.Z,{item:!0,xs:4,children:(0,p.jsx)(c.x1,{title:"Extended License",subtitle:"A pay-once license, just for you",priceComponent:(0,p.jsxs)("div",{children:[(0,p.jsx)(r.Z,{variant:"h3",component:"span",style:{fontWeight:900},children:"$79"}),(0,p.jsx)(r.Z,{component:"span",variant:"subtitle1",children:"/ MO"})]}),features:["Rich, responsive landing pages","100+ styled components","Flexible, simple license","Speedy build tooling","6 months free support included"],featureCheckComponent:(0,p.jsx)(d.JO,{fontIconClass:"far fa-check-circle",fontIconColor:a.Z[500]}),cta:(0,p.jsx)(s.Z,{color:"primary",variant:"outlined",fullWidth:!0,size:"large",children:"Subscribe now"}),disclaimer:"Fully featured 30-day free trial",variant:"outlined"})})]})})}),(0,p.jsx)(l.nz,{code:'\nimport React from \'react\';\nimport { Box, colors, Grid, Button, Typography } from \'@material-ui/core\';\nimport { CardPricingStandard } from \'components/organisms\';\nimport { Icon } from \'components/atoms\';\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">\n      <Grid container spacing={2}>\n        <Grid item xs={4}>\n          <CardPricingStandard\n            title="Extended License"\n            subtitle="A pay-once license, just for you"\n            priceComponent={(\n                <div>\n                    <Typography variant="h3" component="span" style={{ fontWeight: 900 }}>$79</Typography>\n                    <Typography component="span" variant="subtitle1">/ MO</Typography>\n                </div>\n            )}\n            features={[\'Rich, responsive landing pages\', \'100+ styled components\', \'Flexible, simple license\', \'Speedy build tooling\', \'6 months free support included\']}\n            featureCheckComponent={<Icon fontIconClass="far fa-check-circle" fontIconColor={colors.indigo[500]} />}\n            cta={(<Button color="primary" variant="outlined" fullWidth size="large">Subscribe now</Button>)}\n            disclaimer="Fully featured 30-day free trial"\n            variant="outlined"\n          />\n        </Grid>\n        <Grid item xs={4}>\n          <CardPricingStandard\n            title="Extended License"\n            subtitle="A pay-once license, just for you"\n            priceComponent={(\n                <div>\n                    <Typography variant="h3" component="span" style={{ fontWeight: 900 }}>$79</Typography>\n                    <Typography component="span" variant="subtitle1">/ MO</Typography>\n                </div>\n            )}\n            features={[\'Rich, responsive landing pages\', \'100+ styled components\', \'Flexible, simple license\', \'Speedy build tooling\', \'6 months free support included\']}\n            featureCheckComponent={<Icon fontIconClass="far fa-check-circle" fontIconColor={colors.indigo[500]} />}\n            cta={(<Button color="primary" variant="contained" fullWidth size="large">Subscribe now</Button>)}\n            disclaimer="Fully featured 30-day free trial"\n            variant="outlined"\n          />\n        </Grid>\n        <Grid item xs={4}>\n          <CardPricingStandard\n            title="Extended License"\n            subtitle="A pay-once license, just for you"\n            priceComponent={(\n                <div>\n                    <Typography variant="h3" component="span" style={{ fontWeight: 900 }}>$79</Typography>\n                    <Typography component="span" variant="subtitle1">/ MO</Typography>\n                </div>\n            )}\n            features={[\'Rich, responsive landing pages\', \'100+ styled components\', \'Flexible, simple license\', \'Speedy build tooling\', \'6 months free support included\']}\n            featureCheckComponent={<Icon fontIconClass="far fa-check-circle" fontIconColor={colors.indigo[500]} />}\n            cta={(<Button color="primary" variant="outlined" fullWidth size="large">Subscribe now</Button>)}\n            disclaimer="Fully featured 30-day free trial"\n            variant="outlined"\n          />\n        </Grid>\n      </Grid>\n    </Box>\n  );\n}\n'})]})}),(0,p.jsx)(l.mn,{title:"Custom Shadow and LiftUp Effect",gutterBottom:!0,children:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i.Z,{marginBottom:2,padding:2,border:"1px solid #ccc",borderRadius:"4px",overflow:"auto",children:(0,p.jsx)(i.Z,{display:"flex",justifyContent:"space-around",alignItems:"center",minWidth:"900px",children:(0,p.jsxs)(o.Z,{container:!0,spacing:2,children:[(0,p.jsx)(o.Z,{item:!0,xs:4,children:(0,p.jsx)(c.x1,{title:"Extended License",subtitle:"A pay-once license, just for you",priceComponent:(0,p.jsxs)("div",{children:[(0,p.jsx)(r.Z,{variant:"h3",component:"span",style:{fontWeight:900},children:"$79"}),(0,p.jsx)(r.Z,{component:"span",variant:"subtitle1",children:"/ MO"})]}),features:["Rich, responsive landing pages","100+ styled components","Flexible, simple license","Speedy build tooling","6 months free support included"],featureCheckComponent:(0,p.jsx)(d.JO,{fontIconClass:"far fa-check-circle",fontIconColor:a.Z[500]}),cta:(0,p.jsx)(s.Z,{color:"primary",variant:"outlined",fullWidth:!0,size:"large",children:"Subscribe now"}),disclaimer:"Fully featured 30-day free trial",withShadow:!0,liftUp:!0})}),(0,p.jsx)(o.Z,{item:!0,xs:4,children:(0,p.jsx)(c.x1,{title:"Extended License",subtitle:"A pay-once license, just for you",priceComponent:(0,p.jsxs)("div",{children:[(0,p.jsx)(r.Z,{variant:"h3",component:"span",style:{fontWeight:900},children:"$79"}),(0,p.jsx)(r.Z,{component:"span",variant:"subtitle1",children:"/ MO"})]}),features:["Rich, responsive landing pages","100+ styled components","Flexible, simple license","Speedy build tooling","6 months free support included"],featureCheckComponent:(0,p.jsx)(d.JO,{fontIconClass:"far fa-check-circle",fontIconColor:a.Z[500]}),cta:(0,p.jsx)(s.Z,{color:"primary",variant:"contained",fullWidth:!0,size:"large",children:"Subscribe now"}),disclaimer:"Fully featured 30-day free trial",withShadow:!0,liftUp:!0})}),(0,p.jsx)(o.Z,{item:!0,xs:4,children:(0,p.jsx)(c.x1,{title:"Extended License",subtitle:"A pay-once license, just for you",priceComponent:(0,p.jsxs)("div",{children:[(0,p.jsx)(r.Z,{variant:"h3",component:"span",style:{fontWeight:900},children:"$79"}),(0,p.jsx)(r.Z,{component:"span",variant:"subtitle1",children:"/ MO"})]}),features:["Rich, responsive landing pages","100+ styled components","Flexible, simple license","Speedy build tooling","6 months free support included"],featureCheckComponent:(0,p.jsx)(d.JO,{fontIconClass:"far fa-check-circle",fontIconColor:a.Z[500]}),cta:(0,p.jsx)(s.Z,{color:"primary",variant:"outlined",fullWidth:!0,size:"large",children:"Subscribe now"}),disclaimer:"Fully featured 30-day free trial",withShadow:!0,liftUp:!0})})]})})}),(0,p.jsx)(l.nz,{code:'\nimport React from \'react\';\nimport { Box, colors, Grid, Button, Typography } from \'@material-ui/core\';\nimport { CardPricingStandard } from \'components/organisms\';\nimport { Icon } from \'components/atoms\';\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">\n      <Grid container spacing={2}>\n        <Grid item xs={4}>\n          <CardPricingStandard\n            title="Extended License"\n            subtitle="A pay-once license, just for you"\n            priceComponent={(\n                <div>\n                    <Typography variant="h3" component="span" style={{ fontWeight: 900 }}>$79</Typography>\n                    <Typography component="span" variant="subtitle1">/ MO</Typography>\n                </div>\n            )}\n            features={[\'Rich, responsive landing pages\', \'100+ styled components\', \'Flexible, simple license\', \'Speedy build tooling\', \'6 months free support included\']}\n            featureCheckComponent={<Icon fontIconClass="far fa-check-circle" fontIconColor={colors.indigo[500]} />}\n            cta={(<Button color="primary" variant="outlined" fullWidth size="large">Subscribe now</Button>)}\n            disclaimer="Fully featured 30-day free trial"\n            withShadow\n            liftUp\n          />\n        </Grid>\n        <Grid item xs={4}>\n          <CardPricingStandard\n            title="Extended License"\n            subtitle="A pay-once license, just for you"\n            priceComponent={(\n                <div>\n                    <Typography variant="h3" component="span" style={{ fontWeight: 900 }}>$79</Typography>\n                    <Typography component="span" variant="subtitle1">/ MO</Typography>\n                </div>\n            )}\n            features={[\'Rich, responsive landing pages\', \'100+ styled components\', \'Flexible, simple license\', \'Speedy build tooling\', \'6 months free support included\']}\n            featureCheckComponent={<Icon fontIconClass="far fa-check-circle" fontIconColor={colors.indigo[500]} />}\n            cta={(<Button color="primary" variant="contained" fullWidth size="large">Subscribe now</Button>)}\n            disclaimer="Fully featured 30-day free trial"\n            withShadow\n            liftUp\n          />\n        </Grid>\n        <Grid item xs={4}>\n          <CardPricingStandard\n            title="Extended License"\n            subtitle="A pay-once license, just for you"\n            priceComponent={(\n                <div>\n                    <Typography variant="h3" component="span" style={{ fontWeight: 900 }}>$79</Typography>\n                    <Typography component="span" variant="subtitle1">/ MO</Typography>\n                </div>\n            )}\n            features={[\'Rich, responsive landing pages\', \'100+ styled components\', \'Flexible, simple license\', \'Speedy build tooling\', \'6 months free support included\']}\n            featureCheckComponent={<Icon fontIconClass="far fa-check-circle" fontIconColor={colors.indigo[500]} />}\n            cta={(<Button color="primary" variant="outlined" fullWidth size="large">Subscribe now</Button>)}\n            disclaimer="Fully featured 30-day free trial"\n            withShadow\n            liftUp\n          />\n        </Grid>\n      </Grid>\n    </Box>\n  );\n}\n'})]})})]})}}}]);