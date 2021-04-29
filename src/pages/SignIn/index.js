import React, { useState, useContext } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';

import { Background, Container, Containerifpb, AreaText, 
  Area1ifpb, Area2ifpb, AreaInput, Input, SubmitButton, 
  SubmitText, Link, LinkText, TextSign, AreaLink} from './styles';



export default function SignIn() {
  const navigation = useNavigation();


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const { signIn } = useContext(AuthContext);

  function handlerLogin(){
    signIn(email, password);
  }


 return (

   <Background>
     <Containerifpb>
        <Area1ifpb>
          Bem-Vindos
        </Area1ifpb>

        <Area2ifpb>
        IFPB Auxilio
        </Area2ifpb>
     </Containerifpb>

     <Container>
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

        <SubmitButton onPress={handlerLogin}>
          <SubmitText>Entrar</SubmitText>
        </SubmitButton>

        <Link onPress={ () => navigation.navigate('SignUp')}>
          <LinkText>Criar uma conta</LinkText>
        </Link>

      <AreaLink>
        <LinkText>Esqueceu sua senha?</LinkText>
      </AreaLink>

     </Container>
    </Background>



  );
}