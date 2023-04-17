

import React, { useState } from "react";
import { StyleSheet, View, Button, Text, ScrollView, TextInput, TouchableOpacity, FlatList } from 'react-native';
import {Feather } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import  Ionicons  from '@expo/vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  const [ligar, setLigar] = useState(true);
  const [texto, setTexto] = useState('alergias');

  const clicarBotao = () => {
    setLigar(!ligar);
     
      if(ligar ==false){
        setTexto('alergias')
      } else if(ligar ==true){
        setTexto('voltar')
      }
  }
 
  const [ligar2, setLigar2] = useState(true);
  const [texto2, setTexto2] = useState('queimaduras');

  const clicarBotao2 = () => {
    setLigar2(!ligar2);
     
      if(ligar2 ==false){
        setTexto2('queimaduras')
      } else if(ligar ==true){
        setTexto2('voltar')
      }
  }
  

  const [ligar3, setLigar3] = useState(true);
  const [texto3, setTexto3] = useState('ataque cardíaco');

  const clicarBotao3 = () => {
    setLigar3(!ligar3);
     
      if(ligar3 ==false){
        setTexto3('ataque cardíaco')
      } else if(ligar3 ==true){
        setTexto3('voltar')
      }
  }
 const [nome, setNome] = useState('país');

const [pessoas, setpessoas] = useState([
  {nome: 'brasil: 192', key: 1 },
  {nome: 'estados unidos: 911', key: 2 },
  {nome: 'russia: 103', key: 3 },
  {nome: 'alemanha 112', key: 4 },

])
 
const apertarBotao = (key) => {
setpessoas(
  (pessoasAnteriores) => {
    return pessoasAnteriores.filter(pessoas => pessoas.key != key);
  }
);



}



  return (
    <ScrollView>
      


      <View style={styles.view3}>  
      
    
      <Text styles={styles.texto1}>primeiros socorros em uma emergência</Text> 
      
      
     </View>     
   



      <View style={styles.container}>


          
      
     
       
    
         <Button
           title={ texto }
           onPress={clicarBotao}
         />
         
         {
          ligar ?
        
          <Text>  </Text>
          :
         <View style={styles.view2}>
        <Text style={styles.texto2}> Identifique a fonte do alérgeno e tente removê-la se possível. Se a pessoa estiver tendo dificuldade para respirar ou sentir uma sensação de aperto no peito, ligue para o serviço de emergência imediatamente.
          Se a pessoa estiver consciente e capaz de tomar medicamentos, forneça um anti-histamínico de venda livre, como loratadina ou cetirizina, se disponível.
           Se houver inchaço, vermelhidão ou coceira na pele, aplique uma compressa fria ou um pano úmido na área afetada para aliviar os sintomas.
            Se a pessoa tiver uma epinefrina autoinjetável (como um EpiPen) prescrita pelo médico, administre conforme instruído.
             Se a pessoa tiver uma reação alérgica grave, como anafilaxia, ela pode precisar de tratamento de emergência, como injeções de epinefrina, oxigênio, esteroides e/ou medicamentos para manter as vias respiratórias abertas.
              Portanto, é importante chamar o serviço de emergência imediatamente.
               Lembre-se de que cada pessoa pode ter uma reação alérgica diferente, e alguns podem ter reações mais graves do que outros.
               Se você não tiver certeza de como lidar com uma reação alérgica específica, procure ajuda médica imediatamente.  </Text>
        <Ionicons  name="send" size={30} color="black" />
      </View>
    
         }
    
    
    <Button
           title={ texto2 }
           onPress={clicarBotao2}
         />
    
    
    
     {
          ligar2 ?
        
          <Text>  </Text>
          :
         <View style={styles.view2}>
        <Text style={styles.texto2}> Pare o contato com o agente causador da queimadura, como fogo ou substâncias químicas.
    
    Coloque a área queimada sob água corrente fria por cerca de 10 a 15 minutos. Isso ajuda a resfriar a área afetada e reduzir a dor.
    
    Remova joias, roupas e outros objetos da área queimada, a menos que estejam grudados na pele.
    
    Cubra a área queimada com um curativo limpo e seco. Se a queimadura for pequena, você pode usar uma gaze estéril para cobrir a área. Se a queimadura for maior, use um curativo estéril que cubra completamente a área afetada.
    
    Tome analgésicos de venda livre, como paracetamol ou ibuprofeno, para aliviar a dor.
    
    Se a queimadura for grave, envolvendo uma grande área do corpo ou uma queimadura de terceiro grau (pele carbonizada ou branca), ligue para o serviço de emergência ou leve a vítima para o hospital imediatamente.
    
    Lembre-se, nunca aplique manteiga, óleo ou gelo na área queimada, pois isso pode piorar a queimadura. Também evite romper as bolhas que se formam, pois isso aumenta o risco de infecção. Espero que isso ajude!  </Text>
        <Ionicons  name="send" size={30} color="black" />
      </View>
    
         }
    


    <Button
           title={ texto3 }
           onPress={clicarBotao3}
         />

{
          ligar3 ?
        
          <Text>  </Text>
          :
         <View style={styles.view2}>
        <Text style={styles.texto2}> Chame imediatamente o serviço de emergência (SAMU 192) ou leve a pessoa ao hospital mais próximo.

Faça a pessoa ficar em repouso, deitada e confortável.

Afrouxe as roupas da pessoa, especialmente em volta do pescoço e peito.

Dê à pessoa uma aspirina para mastigar. A aspirina ajuda a reduzir a formação de coágulos sanguíneos e pode ajudar a melhorar o fluxo sanguíneo para o coração.

Se a pessoa estiver inconsciente ou parar de respirar, comece a RCP (ressuscitação cardiopulmonar) imediatamente. É uma técnica que consiste em compressões torácicas e respiração boca a boca, e pode salvar vidas em caso de parada cardíaca.

É importante lembrar que o ataque cardíaco é uma emergência médica grave e que as ações de primeiros socorros devem ser realizadas apenas por pessoas treinadas e qualificadas. Se você não tiver certeza do que fazer, ligue para o serviço de emergência imediatamente. </Text>
        <Ionicons  name="send" size={30} color="black" />
      </View>
    
         }
           

             <Text style={styles.linha}> ------------------------------------------------------------------------------------------------------------ </Text>
          <View>
              
              <Text style={styles.text5}> digite o seu país: </Text>
              <TextInput
                multiline
                style={styles.input}
                placeholder="Ex: Brasil"
                onChangeText={setNome}
                />
                <Text>Seu país é: {nome} seu numero de emergência é: </Text>
                
              





              <TextInput/>

           <FlatList 
           numColumns={1}
           keyExtractor={(item) => item.key}
           data={pessoas}
           renderItem={({ item }) => (
             <TouchableOpacity
             onPress={() => apertarBotao(item.key)}
             >

            <Text style={styles.item}> {item.nome}</Text>
            </TouchableOpacity>
            )}
           />


          </View>




       </View> 

     

    </ScrollView>
    
   

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

 

 
  
  view2:{
    backgroundColor:'#eee',
    width:'93%',
    height:500,
    borderRadius:25,
    marginTop:35,
    alignItems:'center',
    flexDirection:'row',
  },
  texto2:{
    width: '77%',
    fontSize:13,
    marginLeft:'3%',
    color:'black',
    
  },

 

  view3:{
    marginBottom:400,
    backgroundColor:'#eee',
    
    height:100,
    
  },

  texto3:{
   marginTop:"60%",
    fontSize:40,
    
  },

input:{

borderWidth: 1,
borderColor: '#777',
padding: 8,
margin: 10,
width: 200,


},

item: {
marginTop: 60,
padding: 30,
backgroundColor: 'gray',
fontSize: 20,



},
 
text5:{
marginTop:100,


},

linha:{
marginTop: 50,
width: 500,
alignItems:'center',





},

});