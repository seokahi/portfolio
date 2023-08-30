import { Outlet } from "react-router-dom";
import HeaderContainer from "../container/HeaderContainer";

export default function MainPage() {
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
