import styled from 'styled-components';


export const MenuPerson = styled.main`
        flex:1;
        background-color:blue;
        width: 100%;
        height:100%;
        min-height:500px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:flex-start;
        padding-left:15px;

        .profilePhoto{
            flex:1;
            background-color:aqua;
            height:210px;
            img{
                top:-25px;
                position:relative;
                width:95%;
                height:100%;
                object-fit: cover;
                border-radius:50%;
            }
        }
        .profileInfo{
            flex:2;
            background-color:green;

            .name{
                color:#71838A;

            }
        }

`;

