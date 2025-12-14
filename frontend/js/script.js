// MENU
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// GALERIA
function openImage(src) {
  document.getElementById('modalImage').src = src;
  document.getElementById('imageModal').style.display = 'flex';
}

function closeImage() {
  document.getElementById('imageModal').style.display = 'none';
}

// AGENDAMENTO
const horariosOcupados = [
  { data: '2025-01-10', hora: '14:00' },
  { data: '2025-01-10', hora: '15:00' }
];

function openBooking() {
  document.getElementById('bookingModal').style.display = 'flex';
}

function closeBooking() {
  document.getElementById('bookingModal').style.display = 'none';
}

function confirmBooking() {
  const data = document.getElementById('data').value;
  const hora = document.getElementById('hora').value;

  const ocupado = horariosOcupados.some(h =>
    h.data === data && h.hora === hora
  );

  if (ocupado) {
    alert('Horário indisponível. Escolha outro.');
    return;
  }

  alert('Horário agendado com sucesso!');
  closeBooking();
}
