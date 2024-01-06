import { useLocation } from "react-router-dom";
import Navbar from "../component/common/Navbar";
import Info from "./IntroduceContainer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setCurrent } from "../reducer/homeSlice";
import styled from 'styled-components';


export default function HeaderContainer() {
    const dispatch = useDispatch();
    const location = useLocation();
    useEffect(() => {
        dispatch(setCurrent(''));
    }, [dispatch]);
    console.log(location);


    return (
    <>
        {location.pathname == '/home' ? (
                    <Info />
                ) : (
                    <Spacer />
                )}
                
         <Navbar />       
    </>
        // <div>
        //     <Info/>
        //     <Navbar />
        // </div>
    );
}

const Spacer = styled.div`
    height: 8.25rem;
    @media (max-width: 576px) {
        height: 9rem;
    }
`;