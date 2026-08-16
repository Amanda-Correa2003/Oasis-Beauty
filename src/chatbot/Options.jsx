const Options = (props) => {
  const options = [
    { text: 'Nossos Serviços', handler: props.actionProvider.handleServicosList, id: 1 },
    { text: 'Agendamento', handler: props.actionProvider.handleAgendamentoList, id: 2 },
    { text: 'Preços e Valores', handler: props.actionProvider.handlePrecosInfo, id: 3 },
    { text: 'Horário de Funcionamento', handler: props.actionProvider.handleHorarioInfo, id: 4 },
    { text: 'Contato', handler: props.actionProvider.handleContatoInfo, id: 5 },
  ];

  return (
    <div className="flex flex-col gap-2 my-2 ml-2">
      <p className="text-xs text-gray-500 font-light mb-1">Escolha uma opção abaixo:</p>
      {options.map((option) => (
        <button
          key={option.id}
          onClick={option.handler}
          className="bg-[#FCE7F3] hover:bg-[#F9D5E5] text-[#8B3A62] border border-[#E8A0BF] text-xs font-medium py-2 px-3 rounded-xl text-left transition-all shadow-sm hover:translate-x-1 cursor-pointer"
        >
          {option.text}
        </button>
      ))}
    </div>
  );
};

export default Options;