import styled from 'styled-components';
import { GoLocation } from 'react-icons/go';
import { FiMail } from 'react-icons/fi';


export const MenuPerson = styled.main`
        flex:1;
        //background-color:blue;
        width: 100%;
        max-height:1000px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:flex-start;
        box-shadow: 0px 0px 3px 0px  black;

        .profilePhoto{
            flex:1;
           // background-color:aqua;
            width:100%;
            height:220px;
            display:flex;
            justify-content:center;
            align-items:center;
            img{
                top:-25px;
                position:relative;
                width:80%;
                height:245px;
                object-fit: cover;
                border-radius:50%;
            }
        }
        .profileInfo{
            flex:2;
            //background-color:green;
            display:flex;
            flex-direction:column;
            align-items:flex-start;
            padding-left:10px;

            .name{
                color:#71838A;

            }
            div{
                display:flex;
                justify-content:center;
                padding:5px 5px 5px 0;
                line-height:1.5;
            }
            button{
                width:95%;
                padding:5px;
                cursor:pointer;
                border-radius:5px;
                margin-bottom:15px;

            }

        }
        .editContent{
                flex:4;
                display:flex;
                flex-direction:column;
                //margin-top:30px;
                width:100%;
                //background-color:black;

                form{
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                    //padding-left:10px;
                    width:100%;

                    input{
                        width:85%;
                        margin:5px 0 5px 0;
                        font-size:13px;
                        border:1px  solid grey;
                        padding:5px;
                        border-radius:5px;
                    }
                    div{
                        display:flex;
                        justify-content:center;
                        align-items:center;
                        button{
                            width:100px;
                            margin:5px;
                            font-size:15px;
                            border-radius:5px;
                        }
                        .save{
                            background-color:#1ABC9C;
                            color:white;
                        }
                    }

                }

            }

`;

export const LocationIcon = styled(GoLocation)`
    color:#71838A;
    margin-right:5px;
`;

export const MailIcon = styled(FiMail)`
    color:#71838A;
    margin-right:5px;
`;
