import styled from 'styled-components';
import { navBarList } from '../resource/navbar';


export default function NavItems() {

    return (
        <Items>
            {navBarList.map((items, index) => (
                <ItemWrapper key={index}>
                        <div>
                            {items.title}
                        </div>
                </ItemWrapper>
            ))}
        </Items>
    );
}

const Items = styled.div`
    display: flex;
    max-width: 500px;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
`;

const ItemWrapper = styled.div`
    font-weight: 700;
    font-size: 1rem;
    color: wheat;
    line-height: 2rem;
    cursor: pointer;
    &:hover {
    color:#6e6657; /* Increase the font weight on hover */
  }
`;



