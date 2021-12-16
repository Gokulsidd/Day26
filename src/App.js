import './App.css';
import Box from './Box.js'


function App() {
  let planInfo=[
    { 
      plan:"FREE",
      price:0 ,
      features:[
        {
          name:"Single User",
          enable:true,
          Strong:false,

        } , 
        {
          name:"5GB Storage",
          enable:true,

        },
        {
          name:"Unlimited Public Projects",
          enable:true,

        },
        { 
          name:"Dedicated Phone Support",
          enable:true,

        },
        {
          name:"Unlimited Private Projects",
          enable:false,

        },
        {
          name:"Dedicated Phone Support",
          enable:false,

        },
        {
          name:"Free Subdomain",
          enable:false,
          Fstrong:false

        },
        {
          name:"Monthly Status Reports",
          enable:false,

        }

      ]

    },
    {
      
        plan:"PLUS",
        price:20 ,
        features:[
          {
            name:"5 Users",
            enable:true,
            Strong:true,

          } , 
          {
            name:"5GB Storage",
            enable:true,

          },
          {
            name:"Unlimited Public Projects",
            enable:true,

          },
          { 
            name:"Dedicated Phone Support",
            enable:true,

          },
          {
            name:"Unlimited Private Projects",
            enable:true,

          },
          {
            name:"Dedicated Phone Support",
            enable:true,
            
          },
          {
            name:"Free Subdomain",
            enable:true,
            Fstrong:false
            
          },
          {
            name:"Monthly Status Reports",
            enable:false,


          }
  
        ]
    },
    {
        plan:"PRO" ,
        price: 50,
        features:[
          {
            name:"Unlimited Users",
            enable:true,
            Strong:true,
          } , 
          {
            name:"5GB Storage",
            enable:true,
          },
          {
            name:"Unlimited Public Projects",
            enable:true,
          },
          { 
            name:"Dedicated Phone Support",
            enable:true,
          },
          {
            name:"Unlimited Private Projects",
            enable:true,
          },
          {
            name:"Dedicated Phone Support",
            enable:true,
          },
          { 
            
            name:"Free Subdomain",
            enable:true,
            Fstrong:true
            
          },
          {
            name:"Monthly Status Reports",
            enable:true,
            
          }
  
        ]
    }
  
  ]
return  <section class="pricing py-5">
<div class="container">
<div class="row">
{
  planInfo.map((obj)=>{
  return <Box Data={obj}></Box>})
}
  
  
  </div>
  </div>
</section>
   
  
}

export default  App;
