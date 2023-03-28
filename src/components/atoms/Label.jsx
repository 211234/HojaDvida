import styled from 'styled-components';

const StyledLabel = styled.label`
    font-family: 'Mandali';
    font-size: 3rem;
`;

function Label({msn}) {
    return ( 
        <StyledLabel>{msn}</StyledLabel>
    );
}


export default Label;