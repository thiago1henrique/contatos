import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import { Link } from 'expo-router';
import CustomInput from '../../components/CustomInput';

export default function Home() {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/3771/3771518.png',
          }}
        />
      </View>

      <View>
        <Text style={styles.text}>Bom te ver por aqui!</Text>
      </View>

      <View style={{ height: 260, justifyContent: 'space-evenly' }}>
        <CustomInput label="Nome" placeholder="Insira um nome..." />

        <CustomInput
          label="E-mail ou usuário"
          placeholder="E-mail ou nome de usuário"
        />
        <CustomInput label="Senha" placeholder="Insira sua senha..." />
      </View>

      <View>
        <Link href="/" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={{ fontSize: 16, fontWeight: '700' }}>Criar conta</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#59a1a5',
    padding: 10,
    minWidth: 220,
    borderRadius: 8,
    marginBottom: 8,
  },

  logo: {
    width: 120,
    height: 120,
  },

  text: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    paddingTop: 20,
  },
});
