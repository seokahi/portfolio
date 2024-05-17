// import { setCurrent } from '../../reducer/homeSlice';
// import { useDispatch } from 'react-redux';

// import { MoveButton } from '../common/Scroll';
// import { useState, useEffect } from 'react';


// export default function IntroduceText() {
//     const dispatch = useDispatch();
//     const [showButton, setShowButton] = useState(false);
//     const [buttonClicked, setButtonClicked] = useState(false);

//     const handleChildClick = () => {
//         dispatch(setCurrent("ABOUT"));
//         setButtonClicked(true);
//     };

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setShowButton(true);
//         }, 5000);

//         return () => clearTimeout(timer);
//     }, [buttonClicked]);

//     useEffect(() => {
//         if (!showButton && !buttonClicked) {
//             const showTimer = setTimeout(() => {
//                 setShowButton(true);
//             }, 10000); // 5초 후에 다시 true로 설정

//             return () => clearTimeout(showTimer);
//         }
//     }, [showButton, buttonClicked]);

//     return (
//         <>
//             {showButton && <MoveButton onClick={handleChildClick}></MoveButton>}
//         </>
//     );
// }

