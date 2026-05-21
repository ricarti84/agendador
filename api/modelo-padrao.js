// api/modelo-padrao.js

export default function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método não permitido' });
    }

    // Recebe todos os campos incrementados vindos do formulário
    const { nome, telefone, servico, data, hora, lembrete } = req.body;

    // Coloque o SEU número aqui para testar o recebimento dos dados na demonstração
    const numeroWhatsapp = "5581999999999"; 

    // --- MENSAGEM CONFIGURADA PARA MODELO DE PORTFÓLIO ---
    const mensagem = `⚡ *Novo Agendamento Solicitado* ⚡

👤 *Cliente:* ${nome}
📱 *WhatsApp do Cliente:* ${telefone}
🎯 *Serviço:* ${servico}
📅 *Data:* ${data}
⏰ *Horário:* ${hora}
🔔 *Enviar Lembrete:* ${lembrete}

_Gerado automaticamente pelo Sistema de Agendamento Inteligente._`;

    // Criação segura do link usando a formatação correta
    const linkWhatsapp = `https://api.whatsapp.com/send?phone=${numeroWhatsapp}&text=${encodeURIComponent(mensagem)}`;

    return res.status(200).json({ url: linkWhatsapp });
}