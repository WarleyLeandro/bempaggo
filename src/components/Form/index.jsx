import React, { useState } from 'react'
import { Button, FormBox, CountBox, ObsBox, SubmitBox, Text } from './styled'



const Form = () => {

    const [count, setCount] = useState(0)
    const [react, setReact] = useState(false)
    const [vue, setVue] = useState(false)
    const [angular, setAngular] = useState(false)
    const [text, setText] = useState('')

    const isHandleCount = type => {
        if (type === 'sub' && count >= 1) {
            setCount(count - 1)
            return;
        }
        return alert('Não é possivel selecionar um valor negativo!')
    }

    const onChange = ev => {
        const { name, value } = ev.target;

        if (name === 'react') setReact(!react)
        if (name === 'vue') setVue(!vue)
        if (name === 'angular') setAngular(!angular)

        if (name === 'observation') {
            setText('')
            setText(value)
        }
        return;
    }

    const handleValues = () => {
        return alert(
            `
            Quantidade de adesivos: ${count}.
            Do tipo ${react ? 'React, ' : ''} ${vue ? 'Vue, ' : ''} ${angular ? 'Angular' : ''}.
            Observação: ${text || 'Não há'}
            `
        )
    }

    return (
        <>
            <FormBox>
                <Text>Quais adesivos:</Text>
                <div>
                    <input onChange={onChange} name='react' value={'react'} type={'checkbox'} ></input>
                    <label>React</label>
                </div>
                <div>
                    <input onChange={onChange} name='vue' value={'vue'} type={'checkbox'} ></input>
                    <label>Vue</label>
                </div>
                <div>
                    <input onChange={onChange} name='angular' value={'angular'} type={'checkbox'} ></input>
                    <label>Angular</label>
                </div>


                <Text>Quantos adesivos de cada?</Text>
                <CountBox>
                    <Button onClick={() => { isHandleCount('sub') }}>-</Button>
                    {count}
                    <Button onClick={() => { setCount(count + 1) }}>+</Button>
                </CountBox>

                <Text>Observações:</Text>

                <ObsBox onChange={onChange} name='observation' rows={4} />
            </FormBox>
            <SubmitBox>
                <Button submit type='submit' onClick={() => { handleValues() }}>ENVIAR</Button>
            </SubmitBox>
        </>
    )
}

export default Form