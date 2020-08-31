import React, { useEffect, useState } from 'react';

const Account = () => {
    const [instaUser, setInstaUser] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const url = 'https://www.instagram.com/adam_andrys/?__a=1';
            const response = await fetch(url);
            const data = await response.json();
            console.log(data.graphql);
            setInstaUser(data.graphql.user);
        };
        fetchData();
    }, []);

    if(instaUser === null) {
        return (
            <div className='account-container' style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h1>Loading...</h1>
            </div>
        );
    } else {
        return (
            <div className='account-container'>
                <h1>Welcome to your account</h1>
                <button onClick={() => { console.log(instaUser) }}>Click!</button>
                <h2>Insta:</h2>
                <p>Username: {instaUser.username}</p>
                <p>Likes: {instaUser.edge_owner_to_timeline_media.edges[0].node.edge_liked_by.count}</p>
                <img src={instaUser.edge_owner_to_timeline_media.edges[0].node.display_url} alt="Insta"/>
                <p>Title: {instaUser.edge_owner_to_timeline_media.edges[0].node.edge_media_to_caption.edges[0].node.text}</p>
            </div>
        );
    }
}

export default Account;