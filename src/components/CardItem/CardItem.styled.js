import styled from 'styled-components';
import picture from '../../images/picture.svg';




export const Card = styled.li`
    position: relative;

    height: 460px;
    width: 380px;
    margin-top: 40px;

    display: flex;
    flex-direction: column;
    align-items: center;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-transform: uppercase;

    color: #EBD8FF;

    box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
    border-radius: 20px;

    /* background-image: url("../../images/picture.svg"); */ //! Не работает!!!
    /* background-image: url(p.url)  */ //! Не работает!!! <Card url={"../../images/picture.jpg"}>
    /* background-image: url(${picture})  */ //* Так работает!!!

    /* background-image: url("../../images/picture.svg"), */ //! Не работает!!!
    background-image: url(${picture}),
        linear-gradient(
            114.99deg, 
            #471CA9 -0.99%, 
            #5736A3 54.28%, 
            #4B2A99 78.99%
            );
            background-repeat: no-repeat;
            background-size: 308px 168px, cover;
            background-position-x: center;
            background-position-y: 28px, center;

    ::before {
        content: '';
        position: absolute;
            top: 214px;
            left: 0;
        width: 100%;
        /* width: 380px; */
        height: 8px;
        background: #EBD8FF;
        box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
            inset 0px -1.71846px 3.43693px #ae7be3, 
            inset 0px 3.43693px 2.5777px #fbf8ff;
    }
`;


export const Logo = styled.img`
    position: absolute;
        top: 20px;
        left: 20px;
`;


//! Not used
export const BackgroundPicture = styled.img`
    height: 168px;
    width: 308px;
    position: absolute;
    top: 28px;
`;


//! Not used
export const Rectangle = styled.img`
    position: absolute;
        top: 214px;
`;


//! Not used
export const HorizontalLine = styled.div`
    width: 380px;
    height: 8px;
    position: absolute;
        top: 214px;
    background: #EBD8FF;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
        inset 0px -1.71846px 3.43693px #ae7be3, 
        inset 0px 3.43693px 2.5777px #fbf8ff;
`;


export const RoundFrameAvatar = styled.div`
    position: absolute;
    top: 178px;
    z-index: 99;
`;


export const Avatar = styled.img`
    position: absolute;
    top: 187px;
    z-index: 77;
    border-radius: 50%;
    background: linear-gradient(
            114.99deg, 
            #471CA9 -0.99%, 
            #5736A3 54.28%, 
            #4B2A99 78.99%
            );
`;

//! Not used
//! chat GPT
export const RoundFrameUserName = styled.div`
position: relative;
    width: 200px;
    height: 200px;
    margin: 0 auto;
    
    /* top: 155px; */
    /* z-index: 99; */
    /* border-radius: 50%; */
    /* writing-mode: vertical-lr; */

    /* text-align: center; */
    /* text-anchor: middle; */
    /* text-path: path("M 50, 50 m -50, 0 a 50,50 0 1,0 100,0 a 50,50 0 1,0 -100,0"); */

    ::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid black;
    /* z-index: -1; */
    }

    h1 {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
    font-size: 8px;
    text-align: center;
    }
`;


export const UserName = styled.p`
    font-weight: 600;
    font-size: 16px;
    position: absolute;
        top: 259px;
        /* top: 10px; */
        color: #ba8bf8;

    //! chat GPT
    /* text-orientation: upright; */

    /* position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%) ;
    transform: translateX(-50%) rotate(90deg);
    margin: 0;
    font-size: 16px;
    text-align: center; */
`;


export const Tweets = styled.p`
    margin-top: 284px;
`;


export const Followers = styled.p`
    margin-top: 16px;
`;


