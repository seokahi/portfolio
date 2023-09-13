import styled from 'styled-components';
import InfoText from '../component/info/MyInfoText'

export default function MyInfoImg() {



    return (
        <>
            <InfoContainer>
                <InfoText/>
            </InfoContainer>
        </>
    );
}



const InfoContainer = styled.div`
    position: relative;
    &::before {
        content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: linear-gradient(180deg,rgba(66, 65, 64, 0.8) 0,rgba(75, 74, 74, 0.8) 90%),url(https://cdn.pixabay.com/photo/2016/11/18/18/37/programming-1836330_960_720.png) 50% no-repeat;
    background: -o-linear-gradient(top,rgba(241, 238, 235, 0.8) 0,rgba(255, 255, 255, 0.8) 90%),url(https://cdn.pixabay.com/photo/2016/11/18/18/37/programming-1836330_960_720.png) 50% no-repeat;
    background-size: cover;
    z-index: -1;
}
    
`;
