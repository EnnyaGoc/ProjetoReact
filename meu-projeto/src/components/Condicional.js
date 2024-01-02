import { useState } from 'react'

function Condicional(){

    const [email, setEmail] = useState()
    const [useEmail, setUserEmail] = useState()

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
        console.log(useEmail)
    }

    function limparEmail(e){
        setUserEmail('')
    }

    return(
        <div>
            <h2>Cadastre seu email:</h2>
            <form>
                <input type="email" placeholder='Digite seu email...' onChange={(e) => setEmail(e.target.value)}/>
                <button type="submit" onClick={enviarEmail}>Enviar email</button>
                {useEmail && (
                    <div>
                        <p>o email do usuario é: {useEmail}</p>
                        <button onClick={limparEmail}>limpar email</button>
                    </div>
                )}
            </form>
        </div>

    )
}

export default Condicional