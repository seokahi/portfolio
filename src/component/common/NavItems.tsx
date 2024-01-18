import styled from 'styled-components';
import { navBarList } from '../../resource/string/navbar';
import { Link } from 'react-router-dom';
import { setCurrent  } from '../../reducer/homeSlice';
import { useDispatch } from 'react-redux';


export default function NavItems() {
    const dispatch = useDispatch();
    const handleChildClick = (e:React.MouseEvent, title:string) => {
        dispatch(setCurrent (title));
        console.log(e);
    };
    return (
        <Items>
            {navBarList.map((items, index) => (
                items.title === 'Home' ? null : (
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
                        >
                            <div>
                                {items.title}
                            </div>
                        </ItemWrapper>
                    </ItemsWrapper>
                )
            ))}
        </Items>
    );
}

const Items = styled.div`
    font-family: 'PartialSansKR-Regular';
    /* width: 72%;
    list-style: none;
    display: flex;
    gap:20px;
    margin:0; */
    display: flex;
    max-width: 500px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-flex: 1;
    flex-grow: 1;

`;

const ItemsWrapper = styled.div`

`;

const ItemWrapper = styled(Link)`
            font-family: 'PartialSansKR-Regular';
    font-weight: 700;
    font-size: 15px;
    color: white;
    font-size: 1.25rem;
    font-weight: 600;
    cursor: pointer;
    &:hover {
    color:#6e6657;
  }
`;



