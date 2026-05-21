// api/clinica.js

export default function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método não permitido' });
    }

    // Coleta as informações estruturadas da clínica
    const { nome, telefone, especialidade, data, hora, lembrete } = req.body;

    // Número fixo da recepção ou triagem da clínica
    const numeroWhatsapp = "5581999999999"; 

    // --- MENSAGEM PROFISSIONAL PARA AMBIENTE DE SAÚDE ---
    const mensagem = `⚕️ *Solicitação de Consulta - Clínica Viva Bem* ⚕️

👤 *Paciente:* ${nome}
📱 *WhatsApp do Paciente:* ${telefone}
🩺 *Especialidade:* ${especialidade}
📅 *Data Solicitada:* ${data}
⏰ *Período/Turno:* ${hora}
🔔 *Deseja Lembrete:* ${lembrete}

_Por favor, verifique a agenda do médico e retorne confirmando o horário exato._`;

    // Criação segura e codificada do link
    const linkWhatsapp = `https://api.whatsapp.com/send?phone=${numeroWhatsapp}&text=${encodeURIComponent(mensagem)}`;

    return res.status(200).json({ url: linkWhatsapp });
}