import React from 'react';

const CreatePost = () => {
    return (
        <div className="card input-filled"
            style={{ margin: "30px auto", maxWidth: "500px", padding: "20px", textAlign: "center" }}>
            <input type="text" placeholder="title" />
            <input type="text" placeholder="body" />
            <div class="file-field input-field">
                <div class="btn #64b5f6 blue darken-1">
                    <span>Upload Image</span>
                    <input type="file"></input>
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path-varlidate" type="text" />
                </div>
            </div>
            <button className="btn waves-effect waves-light #64b5f6 blue darken-1 ">
                Submit Post
            </button>
        </div>
    )
}

export default CreatePost;