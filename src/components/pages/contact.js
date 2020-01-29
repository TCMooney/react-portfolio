import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import contactImage from '../../../static/assets/images/contact/macbook.jpg'

export default function () {
    return (
        <div className='content-page-wrapper'>
            <div
                className='left-column'
                style={{
                    background: `url(${contactImage}) no-repeat`,
                    backgroundSize: 'cover'
                }} />
            <div className='right-column'>
                <div className='contact-bullet-points'>
                    <div className='bullet-point-group'>
                        <div className='icon'>
                            <FontAwesomeIcon icon='phone' />
                        </div>
                        <div className='text'>
                            (631)997-8212
                        </div>
                    </div>
                    <div className='bullet-point-group'>
                        <div className='icon'>
                            <FontAwesomeIcon icon='envelope' />
                        </div>
                        <div className='text'>
                            tcmooney88@gmail.com
                        </div>
                    </div>
                    <div className='bullet-point-group'>
                        <div className='icon'>
                            <FontAwesomeIcon icon='map-marker-alt' />
                        </div>
                        <div className='text'>
                            Hanover, PA
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
{/* <FontAwesomeIcon icon='envelope' /> */ }