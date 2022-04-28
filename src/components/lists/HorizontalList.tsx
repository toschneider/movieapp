import React from 'react';
import styled from 'styled-components';
interface HorizontalListProps {
    children: React.ReactNode
}

const Container = styled.div`
display: flex;
flex-direction: row;
width: 100%;
overflow-x: scroll;
`;

export const HorizontalList = ({children}:HorizontalListProps) => {
    return (<Container>
        {children}
    </Container>);
}