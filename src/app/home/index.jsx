import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import CustomHeader from '../../components/CustomHeader';

import { Link } from 'expo-router';
import ContatoBox from '../../components/ContatoBox';

export default function Home() {
  return (
    <View style={styles.container}>
      <CustomHeader style={styles.header} />
      <View style={styles.content}>
        <Link href="/editar" style={{ minWidth: 320 }}>
          <ContatoBox nome={'Thiago Henrique'} contato={'81 991855296'} />
        </Link>

        <Link href="/editar" style={{ minWidth: 320 }}>
          <ContatoBox nome={'Henrique Macedo'} contato={'81 984332199'} />
        </Link>

        <Link href="/editar" style={{ minWidth: 320 }}>
          <ContatoBox nome={'Paula Lopes'} contato={'81 993827588'} />
        </Link>

        <Link href="/editar" style={{ minWidth: 320 }}>
          <ContatoBox nome={'Aerith Campus'} contato={'81 988239455'} />
        </Link>

        <Link href="/editar" style={{ minWidth: 320 }}>
          <ContatoBox nome={'Lucas Pedro'} contato={'81 9834568900'} />
        </Link>
        <Link href="/" asChild>
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
            <Text style={{ fontSize: 16, fontWeight: '700' }}>Sair</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    marginTop: 32,
    height: 50,
    backgroundColor: '#1670f7',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  content: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    padding: 16,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
