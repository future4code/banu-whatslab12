import React from 'react';
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle `
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
    }
`

const ContainerArea = styled.div `
    display: flex;
    margin: auto;
    flex-direction: column;
    justify-content: flex-end;
    height: 100vh;
    width: 45%;
    border: 1px solid black;
    background-color:#e5ddd5;
`

const InputArea = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
`

const InputField = styled.input `
    width: ${props => props.ativo === true ? '20%' : '80%'} ;
`

const InputButton = styled.button `

`
const MessageStory = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

`

const MessageContainer = styled.div `
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    margin-left: 20px;
    margin-bottom: 15px;
    word-wrap: break-word ;
    max-width: 450px;
    background-color: #dcf8c6;
    border-radius: 8px;
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
`

const MessageReceived = styled.span `
    max-width: 450px;
    word-wrap: break-word ;
    margin-left: 12px;
    margin-right: 20px;
    font-weight: bold;
`
const UserName = styled.span `
    max-width: 450px;
    word-wrap: break-word ;
    margin-left: 12px;
    margin-right: 20px;
`

export class MessageArea extends React.Component {
    state = {
        valorMensagem: '',
        valorUsuario: '',

        novaMensagem: [
            {valorUsuario: ''},
            {valorMensagem: ''},
        ]
    }

    onChangeUsuario = (event) => {
        this.setState({
            valorUsuario: event.target.value,
        })
    }

    onChangeMensagem = (event) => {
        this.setState({
            valorMensagem: event.target.value,
        })
    }

    onClickEnviar = () => {
        this.setState({
            valorMensagem: ''
        })
        const novoValorMensagem = [
            ...this.state.novaMensagem, 
            {
            valorMensagem: this.state.valorMensagem,
            valorUsuario: this.state.valorUsuario
            }       
        ];
        this.setState({
            novaMensagem: novoValorMensagem
        });
    }


    render() {
    return (
                
    <ContainerArea>
    <GlobalStyle />
        <MessageStory>
            {this.state.novaMensagem.map((mensagem, indice) => {
                return (
                    <MessageContainer key={indice}>
                        <MessageReceived>{mensagem.valorUsuario}</MessageReceived>
                        <UserName>{mensagem.valorMensagem}</UserName>
                    </MessageContainer>
                );
            })}
        </MessageStory>
        <InputArea>
            <InputField name={'usuario'} onChange={this.onChangeUsuario} value={this.state.valorUsuario} ativo={true} placeholder={'Mensagem'}></InputField>
            <InputField name={'mensagem'} onChange={this.onChangeMensagem} value={this.state.valorMensagem} ativo={false} placeholder={'Mensagem'}></InputField>
            <InputButton onClick={this.onClickEnviar}>Enviar</InputButton>
        </InputArea>
    </ContainerArea>
    );
}
}

export default MessageArea