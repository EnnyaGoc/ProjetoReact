function Saudacao({nome}){

    function gerarSaudacao(algumNome){
        return `Olá, ${algumNome}`
    }

    return <>{nome && <p>(gerarSaudacao(nome))</p> }
    {/* se há algo em nome, ele imprime a saudaçao */}
    </>


}
export default Saudacao