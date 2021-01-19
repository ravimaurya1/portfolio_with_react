import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-size: 10px;
}

body{
    background: #1b1b1b;
    font-family: 'Inter', sans-serif;
}

html{
    @media (max-width: 1500px){
        font-size:60%;
    }
    @media (max-width:970px){
        font-size:50%;
    }
    @media (max-width:600px){
        font-size:30%;
    }
}

button{
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    &:hover{
        background: #25d497;
        color:white;
    }
    
}

h2{
    font-weight: normal;
    font-size: 4rem;
    color:white;
}
h3{
    color: white;
}
h4{
    font-weight: bold;
    font-size:2rem;
    color:white;
}
span{
    font-weight: bold;
    color:#23d997;
    font-size: 4.1rem;
}
a{
    font-size: 1.1rem;
}
p{
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
}

`;

export default GlobalStyle;
