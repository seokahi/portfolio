import styled from 'styled-components';
import github from "../../resource/img/github-logo.png"
export default function Footer() {
    return (
        <FooterWrapper>
            <SocialIcons>
                <a href="https://github.com/seokahi/">
                    <img
                        src={github}
                        alt='서가희 이메일'
                    />
                </a>
                <a href="https://github.com/seokahi/">
                    <img
                        src={github}
                        alt='서가희 이메일'
                    />
                </a>
            </SocialIcons>
            <Copyright>© 2024 서가희. All rights reserved.</Copyright>
        </FooterWrapper>
    );
}

const FooterWrapper = styled.div`
    margin: 100px auto;
    padding: 0 32px;
    min-width: 200px;
`;
const SocialIcons = styled.div`
    display: flex;
    margin: 0 auto 18px;
    justify-content: space-between;
    width: 90px;
    height: 24px;

    img {
        width: 24px;
    }
`;

const Copyright = styled.div`
    color: black;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
`;
