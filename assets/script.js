document.getElementById("userForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const age = document.getElementById("age").value;
    const married = document.getElementById("married").checked ? "Yes" : "No";

    if (firstName && lastName && age) {
        const table = document.getElementById("userTable").getElementsByTagName('tbody')[0];
        const tr = document.createElement('tr');
        const firstName = document.createElement('td');
        const lastName = document.createElement('td');
        const age = document.createElement('td')
        const married = document.createElement('td')
        firstName.innerHTML = firstName.value
        lastName.innerHTML = lastName.value
        age.innerHTML = age.value
        married.innerHTML = married.value
        tr.append(firstName, lastName, age, married);
        userForm.append(tr);

        // Clear the form
        document.getElementById("userForm").reset();
    } else {
        alert("Please fill out all fields.");
    }
});