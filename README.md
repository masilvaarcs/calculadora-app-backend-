# Calculadora Básica - Backend

Bem-vindo ao repositório da parte backend da Calculadora Básica! Este é o código responsável por fornecer os endpoints para realizar operações de cálculo.

## Como Usar

Siga estas etapas para baixar, configurar e executar o backend localmente.

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

### Passo 1: Clonar o Repositório

Abra o terminal e execute o seguinte comando para clonar o repositório:

```bash
git clone https://github.com/masilvaarcs/calculadora-app-backend-.git
```

### Passo 2: Acessar o Diretório

Navegue até o diretório do projeto backend:

```bash
cd calculadora-app-backend-
```

### Passo 3: Instalar Dependências

Instale as dependências do projeto executando:

```bash
npm install
```

### Passo 4: Executar o Backend

Execute o backend com o seguinte comando:

```bash
npm start
```

Isso iniciará o servidor backend que fornece os endpoints para realizar cálculos.

### Endpoints

O servidor backend possui o seguinte endpoint para realizar cálculos:

- `POST /calculate`: Recebe um JSON contendo `num1` (primeiro número), `num2` (segundo número) e `operation` (operação a ser realizada). Retorna o resultado do cálculo.

Exemplo de requisição:
```json
{
  "num1": 5,
  "num2": 3,
  "operation": "add"
}
```

Exemplo de resposta:
```json
{
  "result": 8
}
```

## Contribuindo

Se você encontrar algum problema, tiver ideias para melhorias ou quiser contribuir com código, sinta-se à vontade para abrir uma [issue](https://github.com/masilvaarcs/calculadora-app-backend-/issues) ou enviar um [pull request](https://github.com/masilvaarcs/calculadora-app-backend-/pulls).

## Licença

Este projeto está licenciado sob a Licença MIT - consulte o arquivo [LICENSE](LICENSE) para obter mais detalhes.

---

Feito com :heart: por [Marcos Silva](https://www.linkedin.com/in/marcosprogramador/)
