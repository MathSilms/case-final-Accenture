import styled from 'styled-components';

export const Bar = styled.header`
    max-width:100vw;
    background-color:#253C6C;
    height: 91px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 0 30px 0 30px;
`;

export const Containt1 = styled.div`
    flex:1;
    background-color:red;


`;

export const Containt2 = styled.div`
    flex:3;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    width:100%;


    a{  width:130px;
        text-align:center;
        min-width:50px;
        padding:10px;
        margin:0 10px;
        min-width:50px;
        color:white;
        transition-delay: 0.17s;
        text-align:center;
    }
    a:hover{
        border: 1px solid white;
        border-radius:5px
    }

    button{
        border:1px solid white;
        border-radius:5px;
        background-color:transparent;
        padding:5px 20px 5px 20px;
        margin:5px;
        color:white;
        cursor: pointer;
        box-shadow: 1px 1px 2px 1px black;
    }
    button:active{
        box-shadow: 1px 1px 2px 1px black inset;
        border:0.5px solid grey;
        z-index:-999999;
    }
`;

