import { useState } from "react";

// criando funçao
function App() {
  // crio uma variavel use state ( especial )
  // passo 2 parametros, a variavel inicial (que seu valor está definido no final)
  // e a funçao que vai ser executada, e mudara nossa tela quando clicada
  const [message, setMessage] = useState("ola mundo");
  return (
    <div>
      {/* mensagem */}
      <h1>{message}</h1>

      {/* botao que Aciona a funçao */}
      <button
        onClick={() => {
          setMessage("fui clicado");
        }}>
        clique aqui
      </button>
    </div>
  );
}

// expprtando ela
export default App;
