form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const { isDataValid, statusMessage } = validateForm();

    if (!isDataValid) {
        document.getElementById('status').innerHTML = statusMessage;
        return;
    }

    fetch('mail.php', {
        method: 'POST',
        body: formData
    })
        .then((response) => {
            response.json();
        })
        .then((response) => {
            if (response.code) {
                // If mail was sent successfully, reset the form;
                const values = document.querySelectorAll('.form-control');
                values.forEach(value => {
                    value.textContent = '';
                });

                document.getElementById('status').innerHTML = `<p class="note note-success">${response.message}</p>`;
                setTimeout(() => {
                    document.getElementById('status').innerHTML = '';
                }, 2000)
            } else {
                document.getElementById('status').innerHTML = `<p class="note note-danger">${response.message}</p>`;
            }
        })
        .catch((err) => {
            document.getElementById('status').innerHTML = `<p class="note note-danger">An unexpected error occured. Please try again</p>`;
        });
});

// var firebaseConfig = {
//     apiKey: "AIzaSyDOepvAzEq6czvj6sd40aDNPSrKIETqiiY",
//     authDomain: "contact-paulo.firebaseapp.com",
//     databaseURL: "https://contact-paulo.firebaseio.com",
//     projectId: "contact-paulo",
//     storageBucket: "contact-paulo.appspot.com",
//     messagingSenderId: "550859416535",
//     appId: "1:550859416535:web:59a84954bea6b75056e192"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// var database = firebase.database();

// $("#input-message").on("click", function (event) {
//     event.preventDefault();
//     var name = $("#name-input").val();
//     var email = $("#email-input").val();
//     var message = $("#message").val();
//     console.log(name);
//     console.log(email);
//     console.log(message);

//     database.ref().push({
//         "name": name,
//         "email": email,
//         "message": message,
//     });
// });

// database.ref().on("child_added", function (childSnapshot) {
//     $("#i-name").text(childSnapshot.val().name);
//     $("#i-email").text(childSnapshot.val().email);
//     $("#message-description").text(childSnapshot.val().message);
// });

