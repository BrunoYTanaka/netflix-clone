import React from 'react'

import { Container } from './styles'
import Button from '../../Button'
import imgTv from '../../../assets/images/tab-tv.png'
import imgTablet from '../../../assets/images/tab-tablet.png'
import imgMacBook from '../../../assets/images/tab-macbook.png'

const ContentTwo = () => {
    return (
        <Container>
            <div className="tab-content">
                <div className="tab-top-content">
                    <span style={{ fontSize: '1.5rem' }}>
                        Watch TV shows and movies anytime, anywhere - personalized for you.
                    </span>
                    <Button className="btn">
                        try it know
                    </Button>
                </div>

                {/* Tab Bottom Content */}
                <div className="tab-bottom-content">
                    <div>
                        <img src={imgTv} alt="" style={{ width: '18.75rem' }} />
                        <h3>Watch on your TV</h3>
                        <p>Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray,Players and more.</p>
                    </div>
                    <div>
                        <img src={imgTablet} alt="" style={{ width: '18.75rem', paddingTop: '0.625rem' }} />
                        <h3>Watch instantly or download for later</h3>
                        <p>Available on phone and tablet, wherever you go.</p>
                    </div>
                    <div>
                        <img src={imgMacBook} alt="" style={{ width: '18.75rem', paddingTop: '0.625rem', paddingBottom: '0.625rem' }} />
                        <h3>Use any computer</h3>
                        <p>Watch right on Netflix.com.</p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default ContentTwo
