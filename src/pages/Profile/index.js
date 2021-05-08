import React, { useContext } from 'react';
import { Container, ContainerNome, Nome, Logout, LogoutText } from './styles';

import { AuthContext } from '../../contexts/auth';

export default function Profile() {

    const { user,signOut } = useContext(AuthContext);
 return (
     <Container>

         <ContainerNome>Detalhes da Conta</ContainerNome>
         
         <Nome>Nome: {user && user.nome}</Nome>
         <Nome>CPF: {user && user.cpf}</Nome>

         <Logout>
             <LogoutText onPress={() => signOut()} >Sair da Conta</LogoutText>
         </Logout>

     </Container>

  );
}