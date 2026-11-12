const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

// Читаем шаблон
const template = fs.readFileSync('templates/index.ejs', 'utf8');

// Передайте сюда данные, которые использует шаблон
// Если в index.ejs нет переменных <%= %>, оставьте пустой объект
const data = {
  // добавьте другие переменные, если они есть в шаблоне
};

// Рендерим HTML
const html = ejs.render(template, data);

// Создаём папку dist и сохраняем index.html
fs.mkdirSync('dist', { recursive: true });
fs.writeFileSync('dist/index.html', html);

// Копируем папку public (css + img) в dist
fs.cpSync('public', 'dist/public', { recursive: true });

console.log('Сборка завершена!');