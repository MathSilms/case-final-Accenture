import styled from 'styled-components';
import { BsFillPersonFill }  from 'react-icons/bs'

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
        padding:10px;
        border-radius:5px;
        border:0.2px solid rgba(0, 0, 0, 0.3);
        margin:5px;
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

export const Section = styled.div`
    display:flex;
    margin:50px;

    .content1{
        flex:1.5;

        img{
            width:90%;
        }
    }
    .content2{
        flex:2;
        display:flex;
        align-items:center;
        flex-direction:column;
        padding-top:15px;

        h2{
            color:#1ABC9C;
            font-weight:bold;
            font-size:40px;
        }
        span{
            color:#6F848C
        }
    }
`;

export const PersonIcon = styled(BsFillPersonFill)`
        color:#1ABC9C;
        height:50px;
        min-height:50px;
        position:relative;
        right:30px;
    `;
