import styled from 'styled-components';
import picture from '../../images/picture.svg';
// console.log(picture);



export const Card = styled.div`
    position: relative;

    height: 460px;
    width: 380px;
    margin-top: 80px;

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
    height: 80px;
    width: 80px;
    position: absolute;
    top: 177px;
    /* z-index: 99; */
    border: 8px solid #EBD8FF;
    /* border: 8px solid; */
    border-radius: 50%;
    /* border-color: #EBD8FF; */
    
    /* box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), 
        0px -2.19582px 4.39163px #AE7BE3, 
        0px 4.39163px 3.29372px #FBF8FF; */

    /* background: #EBD8FF; */
    /* box-shadow: 1px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
        0px -1.71846px 13.43693px #ae7be3, 
        0px 3.43693px 2.5777px #fbf8ff; */

    /* background: #5736a3; */
    /* background: linear-gradient(
            114.99deg, 
            #471CA9 -0.99%, 
            #5736A3 54.28%, 
            #4B2A99 78.99%
            ); */

    ::before {
    content: '';
    position: absolute;
        top: 1px;
        left: 1px;
    height: 62px;
    width: 62px;
    border-radius: 50%;
    background: #EBD8FF;
    background: linear-gradient(
            114.99deg, 
            #471CA9 -0.99%, 
            #5736A3 54.28%, 
            #4B2A99 78.99%
            );
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
        1px -1.71846px 5px #ae7be3, 
        1px 3.28154px 5px #ae7be3,
        0px 1.28154px 5px #ae7be3,
        1px -3.28154px 5px #ae7be3,
        -1px -0.28154px 5px #ae7be3,
        0px 3.43693px 2.5777px #fbf8ff;
    }
`;


export const Avatar = styled.img`
    position: absolute;
        top: 2px;
        left: 1px;
    z-index: 77;
    border-radius: 50%;
    /* background: linear-gradient(
            114.99deg, 
            #471CA9 -0.99%, 
            #5736A3 54.28%, 
            #4B2A99 78.99%
            ); */
`;


//! Not used
export const UserName = styled.p`
    position: absolute;
        top: 259px;
        color: #ba8bf8;
`;

export const Tweets = styled.p`
    margin-top: 284px;
`;


export const Followers = styled.p`
    margin-top: 16px;
`;


