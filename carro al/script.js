// Função para redirecionar ao WhatsApp com mensagem personalizada
function contatoWhatsApp(pacote) {
    const mensagem = `Olá! Gostaria de saber mais sobre o ${pacote}.`;
    const numeroWhatsApp = "553196113709"; // Substitua pelo seu número no formato internacional
    const url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  }
  