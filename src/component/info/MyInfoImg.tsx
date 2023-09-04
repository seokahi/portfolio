

import styled from 'styled-components';
import MyInfoText from './MyInfoText';
MyInfoText

export default function MyInfoImg() {



    return (
        <>
            <SwiperContainer>
                <MyInfoText/>
            </SwiperContainer>
        </>
    );
}



const SwiperContainer = styled.div`
    position: relative;
    /* @media (max-width: 768px) {
        display: none;
    }
    position: relative;
    width: 370px; // splash width(250px) + logo width(150px) - overlap(30px)
    height: 520px; // splash height(500px) + logo height(150px) - overlap(130px)
    .splash-image-frame {
        position: absolute;
        left: 0;
        top: 0;
        width: 250px;
        height: 500px;
        z-index: 2;
    }
    .splash-image-template {
        position: absolute;
        left: 5px;
        top: 5px;
        width: calc(250px - 10px); // assume bezel-width: 10px
        height: calc(500px - 10px); // assume bezel-width: 10px
        border-radius: 30px;
        -webkit-border-radius: 30px;
        -moz-border-radius: 30px;
        -ms-border-radius: 30px;
        -o-border-radius: 30px;
        box-shadow: 0 5px 5px rgba(0, 0, 0, 0.25);
        background: white;
        overflow: hidden;
        .swiper,
        img {
            width: 100%;
            height: 100%;
        }
    }
    .logo-image-template {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 150px;
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        //background: white;
        border-radius: 50px;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        overflow: hidden;
        z-index: 3;
        .swiper,
        img {
            width: 100%;
            height: 100%;
        }
    }
    @media (max-height: 700px) {
       
        .splash-image-frame {
           
        }
        .splash-image-template {
          
        }
        .logo-image-template {
          
        }
    } */
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
