import { Alert, Container, Title } from "./style";
import { Ticket } from "./Ticket";

export function Home() {
    return (
        <Container>
            <Title>Cartão de embarque</Title>
            <Ticket />
            <Alert>Qualquer problema procure o balcão de atendimento da sua companhia aérea</Alert>
        </Container>
    )
}