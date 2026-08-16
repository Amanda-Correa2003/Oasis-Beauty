Oásis Beauty 🌸✨

> Um refúgio digital de estética, bem-estar e cuidado personalizado, desenvolvido com foco total em experiência de usuário (UX/UI), arquitetura limpa de componentes e alta performance no front-end.

Sobre o Projeto

O **Oásis Beauty** nasceu com a proposta de ir além de um site institucional comum: é uma plataforma web completa voltada para o mercado de estética de alto padrão. O sistema une um design editorial sofisticado a funcionalidades robustas de e-commerce e agendamento conversacional, permitindo que os clientes naveguem por tratamentos exclusivos, gerenciem um carrinho de serviços interativo e concluam seus pedidos ou reservas de forma fluida via WhatsApp.

Desenvolvido com uma stack moderna de mercado, o projeto prioriza componentização modular, tipagem estática rigorosa e responsividade adaptativa para proporcionar uma navegação impecável em qualquer dispositivo.


Tecnologias e Arquitetura

O projeto foi estruturado utilizando as melhores práticas do ecossistema React atual:

* Core: React + TypeScript (para robustez, escalabilidade e manutenibilidade do código).
* Build & Bundler: Vite (garantindo carregamento ultrarrápido e Hot Module Replacement eficiente).
* Estilização: Tailwind CSS (utilizado para criar um design system personalizado, paleta de cores acolhedora e layouts responsivos).
* Roteamento: React Router DOM (navegação estruturada entre as páginas de Home, Serviços, Agendamento e Carrinho).
* Gerenciamento de Estado & Persistência: React Context API combinada com `localStorage` para manter os dados do carrinho salvos mesmo após fechar o navegador.
* Inteligência Conversacional: React Chatbot Kit customizado com *ActionProvider* e *MessageParser* para simular um assistente virtual humanizado e eficiente.
* Ícones: Lucide React (iconografia minimalista e elegante).


Principais Funcionalidades e Diferenciais Técnicos

* Catálogo Interativo de Serviços: Exibição dinâmica de procedimentos de visagismo, estética avançada e cuidados pessoais, com cartões refinados e integração direta com o fluxo de compra.
* Carrinho Inteligente com Context API:
* Controle em tempo real de quantidade de serviços, cálculo automático de sub-totais e valor total.
* Persistência de dados no armazenamento local (`localStorage`), garantindo que o usuário não perca sua seleção ao atualizar ou fechar a página.
* Geração automatizada de mensagens formatadas para fechamento direto do pedido/orçamento via WhatsApp.


* Fluxo de Agendamento Personalizado: Página dedicada à captação de reservas com validação de campos, focada em transmitir a exclusividade de um atendimento sob medida.
* Assistente Virtual Integrado (Chatbot):
* Um widget flutuante inteligente configurado para responder dúvidas frequentes sobre horários de funcionamento, tabela de preços, formas de contato e links rápidos para agendamento.
* Estilização customizada alinhada à identidade visual do projeto e comportamento fluído.


* Design System & Layout Responsivo:
* Paleta de cores cuidadosamente selecionada (tons terrosos, rosados suaves e tipografia com fontes serifadas e limpas).
* Menu mobile adaptativo, cabeçalho fixo com efeito glassmorphism e rodapé completo com links institucionais e horários de atendimento.



Estrutura do Projeto

```text
src/
├── assets/          # Imagens e recursos visuais
├── chatbot/         # Configurações, parser e provedor do assistente virtual
├── components/      # Componentes reutilizáveis (Navbar, Footer, etc.)
├── context/         # Contextos globais (CartContext para gestão do carrinho)
├── pages/           # Páginas principais (Home, ServicesPage, CartPage, SchedulingPage)
├── types/           # Definições de tipos TypeScript (Interfaces globais)
├── App.tsx          # Configuração de rotas principais
└── main.tsx         # Ponto de entrada da aplicação

```

---

Como Executar o Projeto Localmente???

Certifique-se de ter o Node.js instalado em sua máquina. Siga os passos abaixo no seu terminal:

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/oasis-beauty.git

# 2. Entre na pasta do projeto
cd oasis-beauty

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
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






