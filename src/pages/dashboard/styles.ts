import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    width:100%;
    flex-direction:column;

    .transferFlex{
        margin-top:10px;
        display:flex;
        flex-direction:row;
        justify-content:center;
        align-items:center;

        .space{
        flex:1;
     }
    }

`;

export const Content = styled.div`
    display:flex;
    flex:3;

    .conteudo{
        flex:3;
        background-color:yellow;
    }
`;

export const Bar = styled.nav`
    flex:2;
    display:flex;
    justify-content:flex-end;
    align-items:center;
    flex-direction:row;
    a{
        flex:2;
        margin:5px auto;
        font-size:20px;
        color:black;
    }
    a:hover{
        color:#1ABC9C;
    }

    a:active{
        color:#1ABC9C;
        font-weight:bold;
    }
`;
