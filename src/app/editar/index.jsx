import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import { Link } from 'expo-router';
import CustomInput from '../../components/CustomInput';

export default function Home() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Edite o contato desejado</Text>
      </View>

      <View style={{ height: 220, justifyContent: 'space-evenly' }}>
        <CustomInput label="Nome" placeholder="Insira um nome" />
        <CustomInput label="Número" placeholder="Insira um número" />
      </View>

      <View>
        <Link href="/home" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={{ fontSize: 16, fontWeight: '700' }}>Alterar</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/home" asChild>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              backgroundColor: '#ff7893',
              padding: 10,
              minWidth: 220,
              borderRadius: 8,
              marginBottom: 8,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: '700' }}>Excluir</Text>
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
