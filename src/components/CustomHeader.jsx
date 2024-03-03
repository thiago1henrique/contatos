import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function customHeader({ style }) {
  return (
    <View style={style}>
      <Text
        style={{
          fontSize: 24,
          paddingLeft: 16,
          fontWeight: '700',
          color: '#fff',
        }}
      >
        Lista de contatos
      </Text>

      <Link href={'/cadastro'} asChild>
        <Text
          style={{
            fontSize: 24,
            paddingLeft: 16,
            fontWeight: '700',
            color: '#fff',
          }}
        >
          +
        </Text>
      </Link>
    </View>
  );
}
