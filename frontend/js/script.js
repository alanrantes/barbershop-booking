const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
});

document.querySelectorAll('#menu a').forEach(link => {
  link.addEventListener('click', () => menu.classList.remove('active'));
});

// MODAL IMAGEM
function openImage(src) {
  document.getElementById('modalImage').src = src;
  document.getElementById('imageModal').style.display = 'flex';
}

function closeImage() {
  document.getElementById('imageModal').style.display = 'none';
}

// MODAL AGENDAMENTO
function openBooking() {
  document.getElementById('bookingModal').style.display = 'flex';
}

function closeBooking() {
  document.getElementById('bookingModal').style.display = 'none';
}

// ANIMAÇÃO SCROLL
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// HORÁRIOS
const horariosFixos = ["13:00","13:40","14:20","15:00","15:40","16:20","17:00"];

const horariosOcupados = [
  { data: '2025-01-10', hora: '14:20' },
  { data: '2025-01-10', hora: '16:20' }
];

const dataInput = document.getElementById('data');
const horaSelect = document.getElementById('hora');

dataInput.addEventListener('change', () => {
  horaSelect.innerHTML = '<option value="">Selecione o horário</option>';

  horariosFixos.forEach(hora => {
    const ocupado = horariosOcupados.some(h => h.data === dataInput.value && h.hora === hora);
    const option = document.createElement('option');
    option.value = hora;
    option.textContent = ocupado ? `${hora} (Indisponível)` : hora;
    option.disabled = ocupado;
    horaSelect.appendChild(option);
  });
});

// WHATSAPP
function confirmBooking() {
  const nome = document.getElementById('nome').value;
  const telefone = document.getElementById('telefone').value;
  const data = dataInput.value;
  const hora = horaSelect.value;
  const servico = document.getElementById('servico').value;

  if (!nome || !data || !hora || !servico) {
    alert('Preencha todos os campos');
    return;
  }

  const msg = `
📅 Novo Agendamento
👤 Nome: ${nome}
📞 Telefone: ${telefone}
🧔 Serviço: ${servico}
📆 Data: ${data}
⏰ Horário: ${hora}
`;

  const numero = "5599999999999"; // SEU WHATSAPP
  window.open(`https://wa.me/${numero}?text=${encodeURIComponent(msg)}`, '_blank');
  closeBooking();
}
