import styled from 'styled-components';
import { AiFillFacebook, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';

export const Bar = styled.footer`
    margin-top:100px;
    width:auto;
    //min-width:290px;
    background-color:#515B70;
    min-height:440px;
    display:flex;
    flex-direction:column;
    padding-top:15px;

    .teste2{
        width:auto;
        flex:1;
        display:flex;
        justify-content:flex-end;
        padding:15px;
        margin-left:20px;
    }
`;

export const Content = styled.div`
    flex:5;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    padding-left:30px;
`;

export const Box = styled.div`
    min-width:300px;
    max-width:274px;
    flex:1;
    display:flex;
    flex-direction:column;
    align-items:left;
    padding:15px;
    margin:20px;
    height:200px;

    h4{
        font-size:17px;
        margin-bottom:15px;
        color:white;
    }
    a{
        color:white;
        padding:2px;
        margin:3px;
    }
    a:hover{
        opacity:0.8;
    }
`;

export const FacebookIcon = styled(AiFillFacebook)`
    color:white;
    margin:5px;
`;

export const InstagranIcon = styled(AiFillInstagram)`
    color:white;
    margin:5px;
`;

export const LinkedinIcon = styled(AiFillLinkedin)`
    color:white;
    margin:5px;
`;
