document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('clickBtn');

  if (button) {
    button.addEventListener('click', () => {
      alert('Код успешно исправлен и работает!');
    });
  }
});
