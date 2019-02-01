import React from 'react'
import styled from 'styled-components/macro'

const Container = styled.div`
    background-color: #ececec;
    height: 100%;
`

const InputWrapper = styled.div`
    display: flex;
    padding: 0px;
`

const InputContainer = styled.div`
    width: 90%;
    padding: 0px;
`

const Input = styled.input`
    width: 100%;
    height: 40px;
    border: none;
    padding: 0px;
    text-align: center;
    font-size: 25px;
`

const AddBtnWrapper = styled.div`
    padding: 0px;
    height: 40px;
`

const Btn = styled.button`
    height: 40px;
`



class Todo extends React.Component {

    render() {

        return (
            <Container>
                <InputWrapper>
                    <InputContainer><Input /></InputContainer>
                    <AddBtnWrapper><Btn>Add</Btn></AddBtnWrapper>
                </InputWrapper>

            </Container>
        )
    }
}

export default Todo