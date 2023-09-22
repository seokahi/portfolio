import styled from 'styled-components';
import { navBarList } from '../../resource/navbar';
import { Link } from 'react-router-dom';
import { setCurrent  } from '../../modules/homeSlice';
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
                )
            ))}
        </Items>
    );
}

const Items = styled.div`
    /* display: flex;
    max-width: 500px;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1; */
    display: flex;
    max-width: 500px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-flex: 1;
    flex-grow: 1;
`;

const ItemWrapper = styled(Link)`

    font-weight: 700;
    font-size: 1rem;
    color: wheat;
    line-height: 2rem;
    cursor: pointer;
    &:hover {
    color:#6e6657;
  }
`;



