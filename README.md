Oásis Beauty 

O Oásis Beauty é uma plataforma web desenvolvida para o mercado de estética de alto padrão, concebida para ir além de um site institucional convencional. O projeto integra um design editorial sofisticado a funcionalidades práticas de e-commerce e agendamento conversacional, permitindo que os usuários naveguem por tratamentos exclusivos, gerenciem um carrinho interativo de serviços e finalizem reservas de forma fluida via WhatsApp.

Tecnologias e Arquitetura

O sistema foi estruturado utilizando tecnologias modernas do ecossistema de desenvolvimento front-end:

* Core: React e TypeScript, garantindo robustez, tipagem estática e escalabilidade.
* Build: Vite, proporcionando um ambiente de desenvolvimento ágil e carregamento otimizado.
* Estilização: Tailwind CSS, utilizado na construção de um design system responsivo e personalizado.
* Roteamento: React Router DOM, responsável pela navegação estruturada entre as páginas principais.
* Gerenciamento de Estado: React Context API combinada com `localStorage` para a persistência dos dados do carrinho.
* Inteligência Conversacional: React Chatbot Kit, implementado para simular um assistente virtual voltado ao suporte de dúvidas frequentes.
* Auxílio de Desenvolvimento: Contei com o apoio pontual do Google Gemini para o refino de determinados trechos de código e ajustes visuais.

Principais Funcionalidades

* Catálogo de Serviços: Exibição dinâmica de procedimentos de visagismo e estética avançada por meio de componentes visuais refinados.
* Carrinho Inteligente: Cálculo automatizado de subtotais e totais, com persistência de dados e geração de mensagens formatadas para contato direto via WhatsApp.
* Fluxo de Agendamento: Interface dedicada à captação de reservas com validação de campos.
* Assistente Virtual: Widget flutuante integrado para atendimento automatizado de informações básicas.
* Design Responsivo: Layout adaptado para diferentes dispositivos, contando com navegação móvel fluida e efeitos visuais como *glassmorphism*.

Estrutura do Repositório

```text
src/
├── assets/         # Recursos visuais e mídias
├── chatbot/        # Configurações e lógica do assistente virtual
├── components/     # Componentes reutilizáveis (Navbar, Footer, etc.)
├── context/        # Gerenciamento de estado global (Carrinho)
├── pages/          # Páginas da aplicação (Home, Serviços, Carrinho, Agendamento)
├── types/          # Definições de interfaces e tipos do TypeScript
├── App.tsx         # Configuração de rotas
└── main.tsx        # Ponto de entrada da aplicação

```

---

Execução Local

Para executar o projeto em sua máquina local, certifique-se de possuir o Node.js instalado e execute os seguintes comandos no terminal:

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/oasis-beauty.git

# Acesse o diretório do projeto
cd oasis-beauty

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev

```

Imagens:
desktop e mobile

<img width="2560" height="5662" alt="localhost_5173_(Nest Hub Max) (23)" src="https://github.com/user-attachments/assets/cd55018b-2ee8-4a30-a2c6-1ecf9f52a20e" />

<img width="2560" height="5662" alt="localhost_5173_(Nest Hub Max) (24)" src="https://github.com/user-attachments/assets/1adddeaf-c363-4188-b070-b259ae5cefd1" />


<img width="2560" height="4806" alt="localhost_5173_servicos(Nest Hub Max)" src="https://github.com/user-attachments/assets/6f0cd320-c08f-47e0-a2f5-0091638d1466" />

<img width="2560" height="2564" alt="localhost_5173_agendamento(Nest Hub Max)" src="https://github.com/user-attachments/assets/07523c2c-1802-465b-a167-6675de26a8e3" />

<img width="2560" height="2462" alt="localhost_5173_carrinho(Nest Hub Max) (2)" src="https://github.com/user-attachments/assets/ec6b31a5-f689-4c1b-bade-831daff93108" />


<img width="750" height="8512" alt="localhost_5173_(iPhone SE) (5)" src="https://github.com/user-attachments/assets/816a59ea-4599-46e4-8264-221dba384708" />


<img width="750" height="11642" alt="localhost_5173_(iPhone SE) (6)" src="https://github.com/user-attachments/assets/b35410de-f594-4f6d-913e-c2946b8e1556" />


<img width="750" height="4852" alt="localhost_5173_(iPhone SE) (7)" src="https://github.com/user-attachments/assets/2f7eb16f-3651-4fd6-afdf-f6980b63ba6d" />


<img width="750" height="3410" alt="localhost_5173_(iPhone SE) (8)" src="https://github.com/user-attachments/assets/c4292628-84aa-4010-8c78-2acb9a4e5a28" />






