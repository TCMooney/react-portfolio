import React from 'react';

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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere impedit quasi ipsam consectetur quos molestiae quaerat quis debitis nobis aliquid, accusamus reprehenderit? Repudiandae earum accusamus commodi, laboriosam sint minus saepe.</p>
                <p>Est voluptatum omnis fuga asperiores rerum accusamus ullam consectetur amet molestiae vitae illo fugit, corrupti ex distinctio id explicabo facere, minus excepturi culpa error tempore mollitia laborum! Hic, sunt modi.</p>
                <p>Inventore voluptatem veniam ea repudiandae excepturi accusantium nesciunt ipsam vero sint, pariatur iure architecto placeat numquam, iste aspernatur magnam alias natus, tempore dolores enim eum! Voluptates laborum aliquid id veritatis?</p>
            </div>
        </div>
    )
}

