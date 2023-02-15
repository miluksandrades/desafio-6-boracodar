import styled from "styled-components";
import { travelLabelColor, travelValueColor } from "../../../global";

interface Props {
    dashed?: boolean;
    orientation?: string;
}

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

`;

export const Dashed = styled.hr`
    border: 1px dashed rgba(0, 0, 0, 0.32);
    width: 60%;
`;

export const TravelerContent = styled.div<Props>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    border-radius: 24px;
    background: #fff;
    padding: 24px 32px;
    width: 100%;
    border-top: ${props => props.dashed ? '1px dashed rgba(0, 0, 0, 0.32);' : 'none'};
    border-bottom: ${props => props.dashed ? '1px dashed rgba(0, 0, 0, 0.32);' : 'none'};
`;

export const TravelerInfo = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;

`;

export const TravelInfo = styled.div<Props>`
    display: flex;
    flex-direction: column;
    align-items: ${props => props.orientation != '' ? props.orientation : 'flex-start'}
`;

export const TravelLabel = styled.label`
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.02em;
    color: ${travelLabelColor};
`;

export const TravelValue = styled.p`
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.02em;
    color: ${travelValueColor};
`;

export const TravelAirport = styled.p`
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 47px;
    letter-spacing: -0.02em;
    color: ${travelValueColor};
`;

export const TravelTime = styled.span`
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.02em;
    color: rgba(0, 0, 0, 0.8);
`;

export const BoardingInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const BoardingTime = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 8px;
    background: #633BBC;
    border-radius: 8px;
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.02em;
    color: #FFFFFF;
`;

export const BoardingText = styled.p`
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    letter-spacing: -0.02em;
    color: rgba(0, 0, 0, 0.8);
`;