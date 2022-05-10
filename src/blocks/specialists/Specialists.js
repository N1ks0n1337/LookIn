import React from 'react';

import {
    Container,
    Wrapper,
    Line,
    Title,
    TitleBlue,
    BlocksWrapper,
    BlockWrapperOne,
    BlockWrapperTwo,
    BlockWrapperThree,
    BlockWrapperFour
} from './Specialists.elements';

const Specialists = props => {
    return (
        <Container>
            <Wrapper>
            <Title><Line/>Вы можете выбрать&nbsp;<TitleBlue>специалиста</TitleBlue><Line/></Title>
            <BlocksWrapper>
                <BlockWrapperOne>
                    
                </BlockWrapperOne>
                <BlockWrapperTwo>
                    f
                </BlockWrapperTwo>
                <BlockWrapperThree>
                    g
                </BlockWrapperThree>
                <BlockWrapperFour>
                    h
                </BlockWrapperFour>
            </BlocksWrapper>
            </Wrapper>
        </Container>
    );
};

export default Specialists;