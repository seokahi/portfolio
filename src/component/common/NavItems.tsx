import styled ,{ css }from 'styled-components';
import { navBarList } from '../../resource/string/navbar';
import { Link } from 'react-router-dom';
import { setCurrent  } from '../../reducer/homeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';


export default function NavItems() {
    const dispatch = useDispatch();
    const current = useSelector((state:any) => state.home.current);
    const [menuOpen, setMenuOpen] = useState(false);
    const handleChildClick = (e:React.MouseEvent, title:string) => {
        dispatch(setCurrent(title));
        console.log(e);
    };

    const handleToggleClick = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <Navbar menuOpen={menuOpen}>
            <ToggleButton onClick={handleToggleClick}>☰</ToggleButton>
            <Items menuOpen={menuOpen}>
                {navBarList.map((items, index) => (
                        <ItemsWrapper>
                            <ItemWrapper 
                                key={index} 
                                to={'/home'} 
                                state={{ title: items.title }} 
                                onClick={(e) =>
                                    handleChildClick(
                                        e,
                                        items.title
                                    )
                                }
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
const Navbar = styled.div<{ menuOpen: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    color: white;

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
    font-family: "DM Serif Display", serif;
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
        font-size:16px;
        font-weight: 800;
        ${props => props.isActive  && css`
            border-bottom: 2px solid white;
            padding-bottom: 4px;
        `}
    }
`;



