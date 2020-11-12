import styled from 'styled-components';

export const Form = styled.form`
    background-color:rgba(0, 0, 0, 0.1);
    padding:35px;
    height:550px;
    margin:50px;
    display:flex;
    flex-direction:column;
    border-radius:5px;

    .title{
        text-align:center;
        margin-bottom:30px;
        h1{
            color:#3A558F;
            font-size:25px;
        }
    }

    button{
        font-size:18px;
        margin:15px;
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

    .conditions{
        margin:15px;
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
    width:100%;
    flex-wrap:wrap;

    div {
        display:flex;
        flex-direction:column;
        flex:1;
        margin-bottom:30px;
        margin: 0 10px 0 10px;

        label {
            font-family: Poppins, sans-serif;
            font-style: Bold;
            font-weight:700;
            font-size: 19px;
            color:#6F848C;
            margin:5px;
        }
        input {
            padding:10px;
            border-radius:5px;
            border:0.2px solid rgba(0, 0, 0, 0.3);
            margin:5px;
            font-size:16px;
        }
    }


`;
