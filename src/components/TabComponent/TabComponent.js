import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import TabDoor from '../Tabs-Nav/TabDoor'
import TabDevice from '../Tabs-Nav/TabDevice'
import TabPrice from '../Tabs-Nav/TabPrice'
import ContentOne from '../TabContent/ContentOne'
import ContentTwo from '../TabContent/ContentTwo'
import ContentThree from '../TabContent/ContentThree'
import { Container } from './styles'

const TabComponent = () => {
    const [state, setState] = useState({
        tabIndex: 0
    })

    const handleSelectTabNav = (tabIndex) => {
        console.log(tabIndex)
        setState({ tabIndex })
    }

    return (
        <Container>

            <Tabs className="tabs" selectedIndex={state.tabIndex} onSelect={(tabIndex) => handleSelectTabNav(tabIndex)}>
                <TabList className="tab-nav-container">
                    <Tab className={`${state.tabIndex === 0 ? 'tab-selected active' : null}`}>
                        <TabDoor />
                        <p style={{ marginBottom: '1.875rem' }}><strong>
                            No commitments
                        <br />
                            Cancel online at anytime
                        </strong></p>
                    </Tab>
                    <Tab className={`${state.tabIndex === 1 ? 'tab-selected active' : null}`}>
                        <TabDevice />
                        <p style={{ marginTop: '-5.3125rem' }}><strong>
                            Watch Anywhere
                        </strong></p>
                    </Tab>
                    <Tab className={`${state.tabIndex === 2 ? 'tab-selected active' : null}`}>
                        <TabPrice />
                        <p><strong>
                            Pick your price
                        </strong></p>
                    </Tab>
                </TabList>
                {/* Tab Content */}
                <TabPanel>
                    <ContentOne />
                </TabPanel>
                <TabPanel>
                    <ContentTwo />
                </TabPanel>
                <TabPanel>
                    <ContentThree />
                </TabPanel>
            </Tabs >
        </Container>
    )
}

export default TabComponent
