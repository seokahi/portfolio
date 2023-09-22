import { Outlet, useLocation } from "react-router-dom";
import HeaderContainer from "../container/HeaderContainer";
import { useEffect } from "react";

export default function MainPage() {
    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname === '/home') {
            window.scrollTo(0, 0);
        }
    }, [pathname]);
    return (
        <>
            <div>
                <HeaderContainer />
            </div>
            <main>
                <Outlet />
            </main>
            <footer>
                
            </footer>
        </>
    );
}
