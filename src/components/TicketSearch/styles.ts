import styled from 'styled-components';

export const Container = styled.div`

margin-top: 10px;
    max-width: 100%;
    padding: 15px 30px;
    border-radius: 5px;
    background: #304c89;
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .input-row {
        width: 100%;
        display: flex;
        justify-content: space-between;
        &:first-child {
            margin-bottom: 10px;
        }

        .input-container {
            display: flex;
            background: #fff;
            width: 20%;
            border-radius: 5px;
            padding: 5px 10px;

            > input {
                margin-left: 5px;
                border: 0;
                width: 60%;
            }

        .icon-container {
            background: #6F848C;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;

                > img {
                    width: 20px;
                    height: 20px;
                }
            }
        }

        > button {
            background: #1ABC9C;
            border: 0;
            width: 15%;
            border-radius: 5px;
            color: white;
            font-weight: 600;
            cursor: pointer;
            box-shadow : 1px 1px 2px black;

            &:hover {
                background: #1ABC9Caa;
            }

            &:active {
                box-shadow : 2px 2px 2px black inset;
            }
        }


        select {
            background: #6F848C;
            color: white;
            padding: 5px;
            border: 0;
            border-radius: 5px;

            option {
                background: white;
                color: black;
                padding: 50px;
            }
        }
    }

    .advanced-options {
        > select {
            margin-right: 5px;
        }

        justify-content: left;
    }
`;
