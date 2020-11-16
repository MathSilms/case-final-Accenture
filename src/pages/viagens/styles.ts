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
    height:100%;
`;

export const Section = styled.div`
    flex:3;
    display:flex;
    padding:10px;
    align-items:center;
    justify-content:center;
    box-shadow: 0px 0px 3px 0px  black;

    > div{
        width:100%;
        height:100%;
        display:flex;
        align-items:center;
        margin:100px 0 0 0;
        flex-direction:column;
    }
`;

export const Card = styled.div`
        width:80%;
        height:250px;
        background-color:#F4F5F7;
        box-shadow:0.5px 0.5px 3px 1px black;
        display:flex;
        justify-content:space-between;
        align-items:center;
        margin:5px;
        border-radius:5px;


        img{
            flex:1;
            width:350px;
            height:100%;
        }

        .cardContent{
            flex:2;
            //background-color:red;
            height:100%;
            display:flex;
            justify-content:center;
            align-items:center;

            > div{
                flex:1;
                margin:15px;
                //background-color:green;
                height:100%;
                display:flex;
                flex-direction:column;

                span{
                    flex:1;
                    color:#1ABC9C;
                    font-weight:bold;

                    span{
                        color:black;
                        font-weight:400;
                    }
                }

            }
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
        font-size:18px;
        color:black;
    }
    a:hover{
        color:#1ABC9C;
    }

    a.active{
        color:#1ABC9C;
        font-weight:bold;
    }
`;
