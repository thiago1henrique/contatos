import { StyleSheet, View, Image, Text } from 'react-native';

export default function ContatoBox({ nome, contato }) {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: 'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png',
          }}
        />
      </View>

      <View style={{ paddingLeft: 32 }}>
        <Text style={{ fontSize: 24, fontWeight: '700' }}>{nome}</Text>
        <Text style={{ fontSize: 18, fontWeight: '400', paddingTop: 8 }}>
          {contato}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
  },

  container: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#000',
    paddingBottom: 16,
    minWidth: 320,
  },
});
