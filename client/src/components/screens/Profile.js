import React from 'react';

const Profile = () => {
    return (
        <div style={{maxWidth:"550px",margin:"0px auto"}}> 
            <div style={{
                display: "flex",
                justifyContent: "space-around",
                margin: "18px 0px",
                borderBottom: "1px solid grey"
            }}>
                <img style={{ width: "160px", height: "160ox", borderRadius: "50%" }}
                    src="https://images.unsplash.com/photo-1492596277896-fe714329e1e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1014&q=80"
                    alt="profile" />

                <div>
                    <h4>Lily Aldrin</h4>
                    <div style={{ display: "flex", justifyContent: "space-between", width: "108%" }}>
                        <h6>40 posts</h6>
                        <h6>40 followers</h6>
                        <h6>40 following</h6>
                    </div>
                </div>
            </div>
            <div className="gallery">
                <img className="item" src="https://images.unsplash.com/photo-1604317760880-f172bd259320?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" alt="new post"/>
                <img className="item" src="https://images.unsplash.com/photo-1604317760880-f172bd259320?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" alt="new post"/>
                <img className="item" src="https://images.unsplash.com/photo-1604317760880-f172bd259320?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" alt="new post"/>
                <img className="item" src="https://images.unsplash.com/photo-1604317760880-f172bd259320?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" alt="new post"/>
                <img className="item" src="https://images.unsplash.com/photo-1604317760880-f172bd259320?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" alt="new post"/>
                <img className="item" src="https://images.unsplash.com/photo-1604317760880-f172bd259320?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" alt="new post"/>
                <img className="item" src="https://images.unsplash.com/photo-1604317760880-f172bd259320?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" alt="new post"/>
                <img className="item" src="https://images.unsplash.com/photo-1604317760880-f172bd259320?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" alt="new post"/>
            </div>
        </div >

    );
}

export default Profile;