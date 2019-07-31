import React from 'react'
import Img from '../../../assets/images/tab-1-pic.png'
import { Container } from './styles'
import Button from '../../Button'
const ContentOne = () => {
    return (
        <Container>

            <div>
                <div className="container">
                    <div className="tab-content">
                        <div>

                            <span style={{ marginBottom: '2rem' }}>
                                If you decide Netflix isn't for you - no problem. No commitment. Cancel online anytime.
                        </span>
                            <br />
                            <Button style={{ marginTop: '2rem' }}>
                                try it now
                        </Button>
                        </div>
                        <img src={Img}></img>
                    </div>

                </div>
            </div>
        </Container>
    )
}

export default ContentOne
