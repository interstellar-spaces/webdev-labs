//handles the button pressing events
const toggleFollow = event => {
    const element = event.currentTarget;
    //console.log(element.dataset);
    //console.log(element.dataset.userId, element);
    //console.log(element.innerHTML);
    if (element.innerHTML === "follow") {
        //make a post request
        createFollower(element.dataset.userId, element);
    } else {
        deleteFollower(element.dataset.followingId, element);
    }
};

const createFollower = (userId, element) => {
    const postData = {
        "user_id": userId
    };
    
    fetch("/api/following/", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData)
        })
        .then(response => response.json())
        .then(data => {
            element.innerHTML = "unfollow";
            element.classList.add("unfollow");
            element.classList.remove("follow");
            //if we need to unfollow the same user, save the user id
            element.setAttribute("data-following-id", data.id);
            element.setAttribute("aria-checked", "true");
        });
};

const deleteFollower = (followingId, element) => {
    const url = `/api/following/${followingId}`;
    fetch(url, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => response.json())
    .then(data => {
        element.innerHTML = "follow";
        element.classList.add("follow");
        element.classList.remove("unfollow");
        element.setAttribute("aria-checked", "false");
        element.removeAttribute("data-following-id");
    });

};

//takes a user and returns an HTML
const userToHTML = user => {
    return `
    <div class="suggestion">
        <img src=${user.thumb_url} alt="suggested-profile-picture">
        <div>
            <p class="username">${user.username}</p>
            <p class="suggested-user-text">Suggested for you</p>
        </div>
        <div>
            <button 
            class="follow" 
            aria-label="follow"
            aria-checked="false"
            data-user-id =${user.id} 
            onclick="toggleFollow(event);">follow</button>
        </div>
    </div>
`;
}

//return a list of suggested users
const getSuggestions = () => {
    const url = "/api/suggestions";
    fetch(url)
        .then(response => response.json())
        .then(users => {
            const html = users.map(userToHTML).join('\n');
            document.querySelector("#suggestions").innerHTML = html;
        });
}

getSuggestions();
