import React, { useContext } from 'react';

import { Background, ContainerUser, UserText, ContainerData, Logout, LogoutText } from './styles';

import { AuthContext } from '../../contexts/auth';

export default function Home() {

  const { user } = useContext(AuthContext);

 return (
   <Background>
       
       <ContainerUser>
       <UserText>Olá, { user && user.nome }.</UserText>

       <UserText>{ user && user.email }</UserText>
       
       </ContainerUser>
 

    <ContainerData>


    </ContainerData>

  </Background>


  );
}