// Init GitHub
const github = new GitHub;
// Init UI
const ui = new UI;

// Search input
const searchUser = document.getElementById("searchUser");
// Input event
searchUser.addEventListener("keyup", (e) => {
    // Input text
    const userText = e.target.value;

    // Input empty or fill
    if(userText !== "") {
        github.getUser(userText)
            .then(data => {
                if(data.profile.message === "Not Found") {
                    // Show alert (3)
                    ui.showAlert("user not found!", "alert alert-danger");
                } else {
                    // Show profile (1)
                    ui.showProfile(data.profile);
                    // Show repos (2)
                    ui.showRepose(data.repos);
                }
            });
    } else {
        // Clear profile (4)
        ui.clearProfile();
    }
    
});