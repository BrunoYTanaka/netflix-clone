import styled from 'styled-components'

export const Container = styled.div`

    .tabs{
        padding-top:1rem;
    }
    .tab-nav-container{
        display: grid;
        justify-content:center;
        align-content:center;
        text-align: center;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem;
        list-style: none;
        color:var(--main-grey);
        margin: 0 12%;
    }

    // Tabs Nav Hover Effect

    ul li:hover{
        color:#fff;
        cursor:pointer;
    }

    ul li:hover svg path{
        fill: #fff;
    }
    // The Active Tab

    .active {
        border-bottom: 4px solid var(--main-red);
    }
 
    .tab-selected{
        color: #fff;
    }

    .tab-selected svg{
        fill:#fff;
    }
`