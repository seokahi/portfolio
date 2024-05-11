// import styled ,{ css }from 'styled-components';
// import { navBarList } from '../../resource/string/navbar';
// import { Link } from 'react-router-dom';
// import { setCurrent  } from '../../reducer/homeSlice';
// import { useDispatch, useSelector } from 'react-redux';


// export default function NavItems() {
//     const dispatch = useDispatch();
//     const current = useSelector((state:any) => state.home.current);
//     const handleChildClick = (e:React.MouseEvent, title:string) => {
//         dispatch(setCurrent(title));
//         console.log(e);
//     };
//     return (
//         <Items>
//             {navBarList.map((items, index) => (
//                     <ItemsWrapper>
//                         <ItemWrapper 
//                             key={index} 
//                             to={'/home'} 
//                             state={{ title: items.title }} 
//                             onClick={(e) =>
//                                 handleChildClick(
//                                     e,
//                                     items.title
//                                 )
//                             }
//                             isActive={current === items.title}
//                         >
//                             <div>
//                                 {items.title}
//                             </div>
//                         </ItemWrapper>
//                     </ItemsWrapper>
                
//             ))}
//         </Items>
//     );
// }

// const Items = styled.div`
//     font-family: "DM Serif Display", serif;
//     display: flex;
//     align-items: center;
//     gap: 0 16px;

// `;

// const ItemsWrapper = styled.div`
//     padding: 6px 10px;


// `;

// const ItemWrapper = styled(Link)<{ isActive: boolean }>`
//     color: white;
//     box-sizing: border-box;
//     div {
//         font-size:16px;
//         font-weight: 800;
//         ${props => props.isActive  && css`
//             border-bottom: 2px solid white;
//             padding-bottom: 4px;
//         `}
//     }
// `;



import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { navBarList } from '../../resource/string/navbar';
import { Link } from 'react-router-dom';
import { setCurrent } from '../../reducer/homeSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function NavItems() {
    const dispatch = useDispatch();
    const current = useSelector((state: any) => state.home.current);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleChildClick = (e: React.MouseEvent, title: string) => {
        dispatch(setCurrent(title));
        console.log(e);
    };

    const handleToggleClick = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <Navbar>
            <Brand>Brand</Brand>
            <ToggleButton onClick={handleToggleClick}>☰</ToggleButton>
            <Items menuOpen={menuOpen}>
                {navBarList.map((items, index) => (
                    <ItemsWrapper key={index}>
                        <ItemWrapper
                            to={'/home'}
                            state={{ title: items.title }}
                            onClick={(e) => handleChildClick(e, items.title)}
                            isActive={current === items.title}
                        >
                            <div>
                                {items.title}
                            </div>
                        </ItemWrapper>
                    </ItemsWrapper>
                ))}
            </Items>
        </Navbar>
    );
}

const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    padding: 1rem;
    color: white;
`;

const Brand = styled.div`
    font-size: 1.5rem;
`;

const ToggleButton = styled.button`
    display: none;
    background-color: #333;
    border: none;
    color: white;
    font-size: 1.5rem;

    @media (max-width: 768px) {
        display: block;
    }
`;

const Items = styled.div<{ menuOpen: boolean }>`
    display: flex;
    align-items: center;
    gap: 0 16px;

    @media (max-width: 768px) {
        display: ${props => (props.menuOpen ? 'flex' : 'none')};
        flex-direction: column;
        width: 100%;
    }
`;

const ItemsWrapper = styled.div`
    padding: 6px 10px;
`;

const ItemWrapper = styled(Link)<{ isActive: boolean }>`
    color: white;
    box-sizing: border-box;

    div {
        font-size: 16px;
        font-weight: 800;

        ${props =>
            props.isActive &&
            css`
                border-bottom: 2px solid white;
                padding-bottom: 4px;
            `}
    }
`;
