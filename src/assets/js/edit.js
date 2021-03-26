const editDiv = document.querySelector(".edit");
const urlParams = new URLSearchParams(window.location.search);
document.querySelector('.edit__date').value = urlParams.get('date');