import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import aboutImage from '../../../static/assets/images/about/about.jpg'

export default function () {
    return (
        <div className='content-page-wrapper'>
            <div
                className='left-column'
                style={{
                    background: `url(${aboutImage}) no-repeat`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            />
            <div className='right-column'>
                <p>
                    Hi, I'm Tom. I'm a full stack web developer based in Hanover, PA. I'm experienced in JavaScript, React, NodeJS and an assortment of other technologies.When I'm not writing code, you can find me at the skatepark working on some new tricks or playing guitar working on some new riffs.
                </p>
            </div>
        </div>
    )
}

