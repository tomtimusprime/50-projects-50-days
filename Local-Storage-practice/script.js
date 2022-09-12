const submitFunction = (event) => {
    event.preventDefault();

    let firstName = document.getElementById('first-name').value;
    let lastName = document.getElementById('last-name').value;
    let email = document.getElementById('email').value;
    let gender = document.getElementById('gender').value;
    let birthdate = document.getElementById('birthdate').value;
    let additionalNotes = document.getElementById('additionalNotes').value;

    localStorage.setItem('ls_first_name', firstName);
    localStorage.setItem('ls_last_name', lastName);
    localStorage.setItem('ls_email', email);
    localStorage.setItem('ls_gender', gender);
    localStorage.setItem('ls_birthdate', birthdate);
    localStorage.setItem('ls_additionalNotes', additionalNotes);
}