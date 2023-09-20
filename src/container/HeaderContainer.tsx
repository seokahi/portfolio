import { useLocation } from "react-router-dom";
import Navbar from "../component/common/Navbar";
import Info from "./IntroduceContainer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setCurrentHome } from "../modules/homeSlice";


export default function HeaderContainer() {
    const dispatch = useDispatch();
    const location = useLocation();
    console.log(location, "???");

    useEffect(() => {
        dispatch(setCurrentHome(location.state?.title || 'Home'));
    }, [dispatch, location.state?.title]);
    return (
        <div>
            <Info/>
            <Navbar />
        </div>
    );
}