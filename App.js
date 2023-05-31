import { StatusBar } from 'expo-status-bar';
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import capa from './assets/capa.png';
import casal from './assets/casal.png';
import filhos from './assets/filhos.png';
import irmaes from './assets/irmaes.png';
import vovo from './assets/vovo.png';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Família Simpsons</Text>
      <View style={styles.total}>
        <Image source={casal} style={styles.imagem}></Image>
        <Text style={styles.tituloSegundo}>O Casal</Text>
        <Text style={styles.textoTerceiro}>Homer Jay Simpsons é o pai e patriarca da família Simpsons</Text>
        <Text style={styles.textoCasal}>Marjore Jacqueline "Marge" Bouvier Simpsons é a esposa de Homer
        Simpsons e mãe de Lisa, Bart e Maggie Simpsons na série animada Os Simspsons.</Text>
      </View>
      <View style={styles.total}>
        <Image source={filhos} style={styles.imagem}></Image>
        <Text style={styles.tituloSegundo}>Os Filhos</Text>
        <Text style={styles.tituloTerceiro}>Bartholomew JoJo ou apenas Bart é o filho mais velho e mais travesso,
        Lisa Marie é a filha do meio e a mais inteligente.
        Margatet Evelyn Lenny ou apenas Maggie é o bebê da casa.</Text>
      </View>
      <View style={styles.total}>
        <Image source={vovo} style={styles.imagem}></Image>
        <Text style={styles.tituloSegundo}>O Vovô</Text>
        <Text style={styles.tituloTerceiro}>Abraham Jebediah "Abe" Simpsons II, mais conhecido cono 
        Vovô é o pai de Hommer Simpsons.</Text>
      </View>
      <View style={styles.total}>
        <Image source={irmaes} style={styles.imagem}></Image>
        <Text style={styles.tituloSegundo}>As Cunhadas</Text>
        <Text style={styles.tituloTerceiro}>Patty e Selma são as irmãs de Margie e vivem de forma 'largada'</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "orange",
  },
  total:{
    margin: 5,
    borderWidth: 1,
    backgroundColor: "white",
  },
  imagem:{
    width: 300,
    height: 200,
    margin: 10,
  },
  titulo:{
    fontSize: 30,
    margin: 10,
    paddingStart: 5,
    textAlign: "center",
    fontWeight: "bold",
  },
  tituloSegundo:{
    margin: 5,
    fontSize: 20,
    fontWeight: "bold",
  },
  tituloTerceiro:{
    margin: 5,
    fontSize: 15,
  }
});
