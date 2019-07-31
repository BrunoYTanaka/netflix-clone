import React from 'react'
import { Container } from './styles'
import Button from '../../Button'
import { Icon } from 'react-icons-kit'
import { cross } from 'react-icons-kit/icomoon/cross'
import { checkmark } from 'react-icons-kit/icomoon/checkmark'
const ContentThree = () => {
    return (
        <Container>
            <div className="tab-content">
                <div className="tab-content-top">
                    <span style={{ fontSize: '1.5rem' }}>Choose one plan and watch everything on Netflix.</span>
                    <Button className="btn">
                        Try it now.
                      </Button>
                </div>

                <div className="tab-bottom-content">
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Basic</th>
                                <th>Standard</th>
                                <th>Premium</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Monthly Price</td>
                                <td>$9.99</td>
                                <td>$13.99</td>
                                <td>$16.99</td>

                            </tr>
                            <tr>
                                <td>HD available</td>
                                <td> <Icon icon={cross} size={10}></Icon></td>
                                <td><Icon icon={checkmark} size={10}></Icon></td>
                                <td><Icon icon={checkmark} size={10}></Icon></td>

                            </tr>
                            <tr>
                                <td>Ultra HD available</td>
                                <td> <Icon icon={cross} size={10}></Icon></td>
                                <td><Icon icon={cross} size={10}></Icon></td>
                                <td><Icon icon={checkmark} size={10}></Icon></td>

                            </tr>

                            <tr>
                                <td>Screens you can watch on at the same time	</td>
                                <td>1</td>
                                <td>2</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>Watch on your laptop, TV, phone and tablet</td>
                                <td> <Icon icon={checkmark} size={10}></Icon></td>
                                <td> <Icon icon={checkmark} size={10}></Icon></td>
                                <td> <Icon icon={checkmark} size={10}></Icon></td>
                            </tr>
                            <tr>
                                <td>Unlimited movies and TV shows	</td>
                                <td> <Icon icon={checkmark} size={10}></Icon></td>
                                <td> <Icon icon={checkmark} size={10}></Icon></td>
                                <td> <Icon icon={checkmark} size={10}></Icon></td>
                            </tr>
                            <tr>
                                <td>Cancel anytime	</td>
                                <td> <Icon icon={checkmark} size={10}></Icon></td>
                                <td> <Icon icon={checkmark} size={10}></Icon></td>
                                <td> <Icon icon={checkmark} size={10}></Icon></td>
                            </tr>
                            <tr>
                                <td>First month free	</td>
                                <td> <Icon icon={checkmark} size={10}></Icon></td>
                                <td> <Icon icon={checkmark} size={10}></Icon></td>
                                <td> <Icon icon={checkmark} size={10}></Icon></td>
                            </tr>

                        </tbody>

                    </table>
                </div>
            </div>
        </Container>
    )
}

export default ContentThree
