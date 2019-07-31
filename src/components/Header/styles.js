import styled from 'styled-components'

export const Container = styled.div`
   .signIn-btn{
       right:0;
       margin: 1.125rem 3% 0;
       padding: 0.4375rem 1.0625rem;
       font-weight: 400;
       line:-height: normal;
       border-radius: 0.1875rem;
       font-size: 1rem;
       background: var(--main-red);
       position:absolute;
       translate: transform(-50%, -50%);
       cursor: pointer;
       transition: backgrond 0.2s ease-in;
       &:hover{
           background: var(--main-red-hover)
       }
   }

   .header-top{
       position:relative;
       height:10rem;
       z-index:1;
   }

   .header-content {
       width: 65%;
       position: relative;
       margin: 4.5rem auto 0;
       display: flex;
       justify-content: center;
       align-content:center;
       text-align: center;
       flex-direction: column;
       z-index: 1;
   }

   h1{
       margin: 0 0 1.2rem;
       font-size: 5rem;
       font-weight: 700;
       line-height: 1.1em;
   }

   h2{
       margin: 0 0 1.875rem;
       font-size: 1.875rem;
       font-weight: 400;
       line-height: 1.25em;
       text-transform:uppercase;
   }

   img{
       width: 10rem;
       height: 3.5rem;
       position:absolute;
       top:25%;
       left:50%;
       transform: translate(-50%,-50%)
   }



   .Icon svg{
       vertical-align:bottom;
       margin-left: 1.5rem;
   }
`