$("#form_contato").validate({
  rules: {
    nome: "required",
    email: {
      required: true,
      email: true,
    },
    mensagem: "required",
  },
  messages: {
    nome: "Por favor informe seu nome",
    email: {
      required: "Precisamos seu do seu email para retornar seu contato.",
      email: "Informe um email com formato: exemplo@exemplo.com",
    },
    mensagem: "Informe-nos o motivo de seu contato por favor",
  },
});

$(document).ready(function () {
  $("#contato_fone").mask("(00) 00000-0000");
});
