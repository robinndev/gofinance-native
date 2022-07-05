import React from "react";

import { 
  Container, 
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreenting,
  UserName,
  Icon,
  HighlightCards
} from './styles';
import { HighlightCard } from "../../components/HighlightCard";

export function Dashboard() {
  return(
      <Container>
        <Header>
          <UserWrapper>
            <UserInfo>
              <Photo 
              source={{uri: 'https://avatars.githubusercontent.com/u/78813283?v=4'}}
              />
              <User>
                <UserGreenting>Olá</UserGreenting>
                <UserName>Robson</UserName>
              </User>
            </UserInfo>
            <Icon name="power"/>
          </UserWrapper>
        </Header>

        <HighlightCards>
        <HighlightCard 
          type="up"
          title="Entradas" 
          amount="R$ 17.400.00" 
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HighlightCard 
          type="down"
          title="Saídas" 
          amount="R$ 1259,00" 
          lastTransaction="Última entrada dia 03 de abril"
        />
        <HighlightCard 
          type="total"
          title="Total" 
          amount="R$ 16.141.00" 
          lastTransaction="01 à 16 de abril"
        />
        </HighlightCards>

      </Container>
  )
}
