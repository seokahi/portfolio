import styled ,{ css }from 'styled-components';
import { navBarList } from '../../resource/string/navbar';
import { Link } from 'react-router-dom';
import { setCurrent  } from '../../reducer/homeSlice';
import { useDispatch, useSelector } from 'react-redux';


export default function NavItems() {
    const dispatch = useDispatch();
    const current = useSelector((state:any) => state.home.current);
    const handleChildClick = (e:React.MouseEvent, title:string) => {
        dispatch(setCurrent(title));
        console.log(e);
    };
    return (
        <Items>
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
    );
}

const Items = styled.div`
    font-family: 'PartialSansKR-Regular';
    display: flex;
    align-items: center;
    gap: 0 16px;

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



