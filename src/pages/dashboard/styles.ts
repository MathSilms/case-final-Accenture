import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-flow: row wrap;
    font-size: 19px; 
    color: #71838A;      
    padding: 2% 0 0 0;
    
`;

export const BoxPerfil = styled.div`  

border-right:1px solid #71838A;
    width:30%;
    
    font-size: 19px; 
    color: #71838A; 
    
    
li{
    font-size: 15px;
    
}
.email{
    text-decoration: underline;
    
}
.AlterarPerfil li input{
    font-size: 10px;
    width:180px;
    color: #71838A;
    border-radius:2%;
}
.AlterarPerfil li img{
    width:20px;
        height:20px;
        border-radius:0%;
        vertical-align: middle;
}
.AlterarPerfil button{
    width:70px;
}
.AlterarPerfil .save{
    color:#ffffff;
    background:#1ABC9C;
    border-radius:2%;

}
button{
    font-size: 10px; 
    color: #71838A;
    background:#ffffff;
    border:1px solid #71838A;
    width:200px;
    margin:10px;
    border-radius:2%;
}
    .icon{
        width:30px;
        height:30px;
        border-radius:0%;
        vertical-align: middle;
        
    }
    img{
        width:200px;
        height:200px;
        border-radius:50%;
        margin-left:5%; 
               
    }
    span{
        margin:8%;
        font-size: 25px;
        margin-left:5%; 
    }
`;
export const BoxPaginas = styled.div` 
    width:70%;
    
    a{
        padding-left:3%;
        padding-right:3%;
        color: #71838A;
        text-align:center;
    }
    .ativo{
        color:#1ABC9C;
        border-bottom:5px solid;
    }
    .desativo{
        border:0px;
    }
    .content:target{        
        display:block;
    }
    a:hover{
        color:#1ABC9C;
        border-bottom:5px solid;
    }
    .content{
        padding:1%;
        display:none;
    }
    .tabs{
        border-bottom:1px solid #71838A;
    }
`;


