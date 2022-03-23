import styled from "styled-components";

export const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20%;
`;

export const CountBox = styled.div`
    
`
export const Button = styled.button`
    color: #fbfbfb;
    background-color: #633ed5;
    border: none;
    margin: 4px;
    width: ${props => props.submit ? '80px' : '40px'};
    height: ${props => props.submit ? '30px' : '20px'};
    border-radius:3px;
`

export const ObsBox = styled.textarea`
    width: 50%;
`

export const Text = styled.h3`
  font-family: Arial, Helvetica, sans-serif;
    font-weight:200;
    padding: 20px 0 20px 0;
`;

export const SubmitBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 20px;
    background-color: #e9e9e9;
    height: 100px;
`