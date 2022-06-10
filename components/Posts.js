import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'

function Posts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function loadPosts() {
            const response = await fetch('https://prefeitura.rio/wp-json/wp/v2/posts?per_page=6');
            if (!response.ok) {
                console.log("response error")
                return;
            }

            const posts = await response.json();
            setPosts(posts);
            console.log(posts)
        }

        loadPosts();
    }, [])
    return (
        <>
            <ul className={styles.wrapper_posts}>
                {posts.map((post, id) => (
                    
                    <li key={id}>
                        <h4>{post.title.rendered}</h4>
                        {<p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></p>}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Posts;