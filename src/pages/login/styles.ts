import styled from 'styled-components';


export const Form = styled.form`
    background-color:rgba(0, 0, 0, 0.1);
    padding:35px;
    height:448px;
    margin:50px;
    display:flex;
    flex-direction:column;
    border-radius:5px;

    label{
        font-family: Poppins, sans-serif;
        font-style: Bold;
        font-weight:700;
        font-size: 25px;
        color:#6F848C;
        margin:5px;
    }

    input{
        padding:5px;
        border-radius:5px;
        border-color:transparent;
        margin:5px;
    }

    button{
        margin:5px;
        margin-top:35px;
        padding:8px;
        background-color:#1ABC9C;
        color:white;
        border-radius:5px;
        border-color:transparent;
        cursor: pointer;
    }
    span{
        margin:5px;
        margin-top:15px;

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
