// api/salao-da-maria.js

export default function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método não permitido' });
    }

    // Coleta os dados que vêm do formulário específico da Maria
    const { nome, servico, data, hora } = req.body;

    // Número fixo e escondido da Maria
    const numeroWhatsapp = "5581999999999"; 

    // --- MENSAGEM EXCLUSIVA DO SALÃO DA MARIA ---
// 1. Monte a mensagem usando as quebras normais dentro das crases:
const mensagem = `✨ *Novo Agendamento - Salão da Maria* ✨

👤 *Cliente:* ${nome}
✂️ *Serviço:* ${servico}
📅 *Data:* ${data}
⏰ *Horário:* ${hora}

_Por favor, confirme a disponibilidade respondendo esta mensagem._`;

// 2. NA HORA DE CRIAR O LINK, faça exatamente assim:
const linkWhatsapp = `https://api.whatsapp.com/send?phone=${numeroWhatsapp}&text=${encodeURIComponent(mensagem)}`;

// 3. E no seu res.status().json() envie esse link:
return res.status(200).json({ url: linkWhatsapp });
}