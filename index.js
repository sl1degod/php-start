import axios from "axios";

document.getElementById('submitBtn3').addEventListener('click', async () => {
    const password = document.getElementById('inputPassword3').value;
    axios.post('http://localhost:8000/handle_form.php', password)
        .then(res => {
            console.log(res.data);
            return 123;
        })
});






