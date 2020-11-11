import styled from 'styled-components';

export const Form = styled.form`
    background-color:rgba(0, 0, 0, 0.1);
    padding:35px;
    height:550px;
    margin:50px;
    display:flex;
    flex-direction:column;
    border-radius:5px;

    span{
        text-align:center;
        h1{
            color:#3A558F;
            font-size:25px;
        }
    }
    label{
        font-family: Poppins, sans-serif;
        font-style: Bold;
        font-weight:700;
        font-size: 19px;
        color:#6F848C;
        margin:5px;
    }

    input{
        padding:8px;
        border-radius:5px;
        border:0.2px solid rgba(0, 0, 0, 0.3);
        margin:5px;
        font-size:13px;
    }


    button{
        font-size:18px;
        margin:5px;
        margin-top:35px;
        padding:8px;
        background-color:#1ABC9C;
        color:white;
        border-radius:5px;
        border:none;
        cursor: pointer;
        box-shadow : 1px 1px 2px black;
    }
    button:hover{
        opacity: .8;
    }
    button:active{
        box-shadow : 2px 2px 2px black inset;
    }
    span{
        margin:5px;
        margin-top:15px;
        color:#6F848C;
        a{
            color:#1ABC9C;
        }

    }

    a{
        color:#1ABC9C;
        margin:5px;
        margin-top:15px;
    }

`;

export const Box = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`;
