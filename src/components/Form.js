/* export default function Form() {
    const [formulario, setFormulario] = useState({
        name:'',
        cpf:''})
    function ValidacaoFinal(event) {
        event.preventDefault();
    }
    return (
        <FormComprador onSubmit={ValidacaoFinal}>
            <label>Nome do Comprador:</label>
            <input
                required
                placeholder="Digite seu nome..."
                name="description"
                onChange={handleForm}
                value={formulario.nome}
            />
            <label>CPF do Comprador:</label>
            <input
                required
                placeholder="Digite seu CPF..."
                name="description"
                onChange={handleForm}
                value={formulario.cpf}
            />
        </FormComprador>
    )
}

const FormComprador = styled.form`
    display:flex;
    flex-direction:column;
    padding:20px;
    gap:10px;
    margin-top:20px;
    h2{
        width: 327px;
        height: 25px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;

        color: #293845;
    }
    input{
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;
        ::placeholder{
            color: #AFAFAF;
            font-style: italic;
        }
    }
` */