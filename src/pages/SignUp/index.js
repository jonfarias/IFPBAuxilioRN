import React, { useState,useContext } from 'react';
import { View, Text } from 'react-native';

import { AuthContext } from '../../contexts/auth';

import { Background, Container, Containerifpb, AreaText, 
  Area1ifpb, AreaInput, Input, SubmitButton, 
  SubmitText, TextSign} from '../SignIn/styles';



export default function SignIn() {
  const [nome, setNome] = useState ('');
  const [matricula, setMatricula] = useState ('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signUp } = useContext(AuthContext);

  function handleSignUp(){  
    signUp(email, password, nome, matricula);
  }


 return (

   <Background>

     <Container>
       <AreaText>
          <TextSign>Nome</TextSign>
       </AreaText>

          <AreaInput>
            <Input 
            autoCorrect={false}
            autoCapitalize="none"
            value={nome}
            onChangeText={(text)=> setNome(text)}
            />
          </AreaInput>

          <AreaText>
          <TextSign>Matricula</TextSign>
       </AreaText>

          <AreaInput>
            <Input 
            autoCorrect={false}
            autoCapitalize="none"
            value={matricula}
            onChangeText={(text)=> setMatricula(text)}
            />
          </AreaInput>

          <AreaText>
          <TextSign>Email</TextSign>
       </AreaText>

          <AreaInput>
            <Input 
            autoCorrect={false}
            autoCapitalize="none"
            value={email}
            onChangeText={(text)=> setEmail(text)}
            />
          </AreaInput>

          <AreaText>
            <TextSign>Senha</TextSign>
          </AreaText>

          <AreaInput>
            <Input 
            autoCorrect={false}
            autoCapitalize="none"
            value={password}
            onChangeText={(text)=> setPassword(text)}
            />
          </AreaInput>

        <SubmitButton onPress={handleSignUp}>
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>

   

     </Container>
    </Background>



  );
}