import { createGlobalStyle } from 'styled-components'


export default createGlobalStyle`
*{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
    text-decoration:none;
    list-style:none;
}

body{
    -webkit-font-smoothing:antialiased;
}

body,input,button {
    font-size:16px;
    font-family: 'Poppins', sans-serif;
}
`;
