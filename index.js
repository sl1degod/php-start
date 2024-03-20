// import axios from "axios";

// document.getElementById('submitBtn3').addEventListener('click', async () => {
//     const password = document.getElementById('inputPassword3').value;
//     axios.post('http://localhost:8000/handle_form.php', password)
//         .then(res => {
//             console.log(res.data);
//             return 123;
//         })
// });

// БИБЛИОТЕКИ ЭТО ХОРОШО НО В ТВОЁМ СЛУЧАЕ ЗЛО

// Получили форму
const form = document.getElementById('ajax-form');

// Повесили событие отправки формы
form.addEventListener('submit', async function(e) {
    // Блокировка обновления страницы
    e.preventDefault();

    // fetch стандартная функция для отправки запросов в JS
    let response = await fetch('handle_form.php', {
        method: 'POST',
        body: new FormData(form) // FormData преобразует сущность формы для работы с post запросами 
    });
    
    // Ответ от обработчика
    let result = await response.json();

    console.log(result);    
});






