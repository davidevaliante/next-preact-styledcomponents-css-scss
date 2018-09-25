import { Component } from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

class GeneralComponent extends Component {
    state = {}

    render() {
        return <div>
            Sono un component Generale FUORI la cartella /pages
            <Title>Ciao</Title>
        </div>
    }
}

export default GeneralComponent