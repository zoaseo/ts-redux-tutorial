import React from 'react';

type GithubProfileInfoProps = {
    name: string;
    thumbnail: string;
    bio: string;
    blog: string;
}
const GithubProfileInfo = ({ name, thumbnail, bio, blog }: GithubProfileInfoProps) => {
    return (
        <div>
            <div>
                <img src={thumbnail} alt="img"/>
                <div>{name}</div>
            </div>
            <p>{bio}</p>
            <div>{blog !== '' && <a href={blog}>블로그</a>}</div>
        </div>
    );
};

export default GithubProfileInfo;