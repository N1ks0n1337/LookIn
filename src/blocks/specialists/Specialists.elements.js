import styled from "styled-components";
import FirstBg from '../../image/specialists/FirstBg.png'
import SecondBg from '../../image/specialists/SecondBg.png'
import ThirdBg from '../../image/specialists/ThBg.png'
import FourthBg from '../../image/specialists/FourthBg.png'
import FifthBg from '../../image/specialists/FifthBg.png'
import WomanBg from '../../image/specialists/WomanBg.png'

export const Container = styled.div`
    width: 100%;
    height: 82px;
    margin-top: 20px;
`
export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 1725px;
    height: 100%;
    margin: auto;
`
export const BlocksWrapper = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    margin-top: 60px;
    @media(max-width: 916px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
}
`
export const BlockWrapperOne = styled.div`
    position: absolute;
    background-image: ${SecondBg};
    top: 0;
    left: 10px;
`
export const BlockWrapperTwo = styled.div`
    position: absolute;
    top: 0;
    left: 20px;
`
export const BlockWrapperThree = styled.div`
    position: absolute;
    top: 0;
    left: 30px;
`
export const BlockWrapperFour = styled.div`
    position: absolute;
    top: 0;
    left: 40px;
`
export const Line = styled.hr`
    border-bottom: 1px solid #2e2e2e;
    width: 30px;
    margin: 17px 13px;
`
export const Title = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #2e2e2e;
    font-size: 50px;
    padding-top: 50px;
    padding-bottom: 81px;
    @media(max-width: 798px){
        font-size: 37px
    }
    @media(max-width: 611px){
        font-size: 30px
    }
    @media(max-width: 561px){
        font-size: 20px
    }
    
`
export const TitleBlue = styled.span`
    color: #3499ea;
`