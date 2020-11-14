import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai'

interface ModalProps {
    color:string,
}

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

    .haveAccess{
        margin:15px;
        color:#6F848C;
    }

    a{
        color:#1ABC9C;
        margin:5px;
        margin-top:15px;
    }

    @media (max-width: 925px){
        .title{
            h1{
                font-size:18px
            }
        }

        .conditions{
            font-size:12px;
        }

        button{
            font-size:13px;
        }

        .haveAccess{
            font-size:13px;
        }

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

        @media (max-width: 925px){
            label{
                font-size: 15px;
            }
            input{
                padding:6px;
                font-size:12px;
            }
        }

    }
`;

export const Modal = styled.div<ModalProps>`



    background-color:rgba(0,0,0,0.5);
    position: absolute;
    top:25%;
    right:25%;
    z-index:999;
    width:50%;
    height:60%;
    background-color:white;
    box-shadow:1px 1px 8px 2px black;
    display:flex;
    border-radius:5px;
    border:1px solid blue;

    h1{
        text-align:center;
        width:100%;
        display:block;
        font-size:25px;
        display:block;
        color:${props => props.color};
        margin-top:125px;

    }

`;

export const Exit = styled(AiOutlineClose)`
    position: absolute;
    display:block;
    margin:5px;
    color:black;
    cursor: pointer;
    right:5px;

`;

export const Error = styled.span`
    font-size:12px;
    color:red;
`;
