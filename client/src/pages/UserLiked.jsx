import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Card from '../components/Card';
import Navbar from '../components/Navbar';
import { fetchMovies, getMoviesLiked } from '../store';
import { firebaseAuth } from '../utils/firebase-config';

const Container = styled.div`
    .content {
        margin: 2rem;
        margin-top: 8rem;
        gap: 3rem;
        h1 {
            margin-left: 3rem;
        }
        .grid {
            flex-wrap: wrap;
            gap: 1rem;
        }
    }
`;

const UserLiked = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [email, setEmail] = useState(undefined);

    const movies = useSelector(state => state.netflix.movies);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(firebaseAuth, (currentUser) => {
            if (currentUser) {
                setEmail(currentUser.email);
            } else {
                navigate("/login");
            }
        });
    });

    useEffect(() => {
        if (email) {
            dispatch(getMoviesLiked(email));
        }
    }, [email]);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false: true);
        return () => window.onscroll = null;
    };

    return (
        <Container>
            <Navbar isScrolled={isScrolled}/>
            <div className="content flex column">
                <h1>My list</h1>
                <div className="grid flex">
                    {
                        movies.map((movie, index) => (
                            <Card key={movie.id} movieData={movie} index={index} isLiked={true}/>
                        ))
                    }
                </div>
            </div>
        </Container>
    )
};

export default UserLiked;