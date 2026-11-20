function likePost(button) {

    let post = button.closest(".post");
    let likes = post.querySelector(".likes");

    let count = parseInt(likes.innerText);

    if (button.innerText === "Like") {
        count++;
        button.innerText = "Unlike";
    } else {
        count--;
        button.innerText = "Like";
    }

    likes.innerText = count + " likes";
}


function focusComment(button) {

    let post = button.closest(".post");

    let input = post.querySelector(".comment-box input");

    input.focus();
}


function createPost() {

    let input = document.getElementById("postInput");

    if (input.value.trim() === "") {
        return;
    }

    let newPost = document.createElement("section");

    newPost.className = "post";

    newPost.innerHTML = `
        <div class="post-user">
            <div class="small-picture">PS</div>

            <div>
                <b>Pooja Shree</b>
                <p>@poojashree</p>
            </div>
        </div>

        <p class="post-text">
            ${input.value}
        </p>

        <div class="actions">
            <button onclick="likePost(this)">Like</button>
            <button onclick="focusComment(this)">Comment</button>
            <button>Share</button>
        </div>

        <p class="likes">0 likes</p>

        <div class="comment-box">
            <input type="text" placeholder="Write a comment...">
            <button>Send</button>
        </div>
    `;

    document.querySelector("main").appendChild(newPost);

    input.value = "";
}