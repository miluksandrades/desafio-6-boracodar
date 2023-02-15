import { Airplane } from "./airplane";
import { QRCode } from "./qrcode";
import { Container, TravelerContent, TravelerInfo, TravelLabel, TravelInfo, TravelValue, TravelAirport, TravelTime, BoardingInfo, BoardingTime, BoardingText } from "./style";

export function Ticket() {
    return (
        <Container>
            <TravelerContent dashed={false}>
                <TravelerInfo>
                    <TravelInfo>
                        <TravelLabel>Voo</TravelLabel>
                        <TravelValue>R$955</TravelValue>
                    </TravelInfo>
                    <TravelInfo orientation="flex-end">
                        <TravelLabel>Data</TravelLabel>
                        <TravelValue>23/02/2023</TravelValue>
                    </TravelInfo>
                </TravelerInfo>
                <TravelerInfo>
                    <TravelInfo>
                        <TravelLabel>São Paulo, Brazil</TravelLabel>
                        <TravelAirport>GRU</TravelAirport>
                        <TravelTime>17:00</TravelTime>
                    </TravelInfo>
                    <Airplane />
                    <TravelInfo orientation="flex-end">
                        <TravelLabel>São Francisco, EUA</TravelLabel>
                        <TravelAirport>SFO</TravelAirport>
                        <TravelTime>04:50¹</TravelTime>
                    </TravelInfo>
                </TravelerInfo>
            </TravelerContent>
            <TravelerContent dashed={true}>
                <TravelerInfo>
                    <TravelInfo>
                        <TravelLabel>Passageiro</TravelLabel>
                        <TravelValue>Rodrigo Terron</TravelValue>
                    </TravelInfo>
                    <TravelInfo orientation="flex-end">
                        <TravelLabel>Assento</TravelLabel>
                        <TravelValue>22A</TravelValue>
                    </TravelInfo>
                </TravelerInfo>
            </TravelerContent>
            <TravelerContent dashed={false}>
                <TravelerInfo>
                    <BoardingInfo>
                        <TravelInfo>
                            <TravelLabel>Embarque</TravelLabel>
                            <BoardingTime>16:15</BoardingTime>
                        </TravelInfo>
                        <TravelInfo>
                            <TravelLabel>Terminal</TravelLabel>
                            <TravelValue>2</TravelValue>
                        </TravelInfo>
                        <TravelInfo>
                            <TravelLabel>Portão</TravelLabel>
                            <TravelValue>15</TravelValue>
                        </TravelInfo>
                    </BoardingInfo>

                    <TravelInfo orientation="center">
                        <QRCode />
                        <TravelLabel>Grupo de embarque: 3</TravelLabel>
                    </TravelInfo>
                </TravelerInfo>
                <BoardingText><b>Atenção: </b>o portão fecha 16:45</BoardingText>
            </TravelerContent>

        </Container>
    )
}