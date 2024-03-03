import { StyleSheet, Text, TextInput } from 'react-native';
import { View } from 'react-native';

export default function CustomInput({ label, placeholder }) {
  return (
    <View>
      <Text style={style.textLabel}>{label}</Text>
      <TextInput style={style.inputBg} placeholder={placeholder} />
    </View>
  );
}

const style = StyleSheet.create({
  textLabel: {
    color: '#16161d',
    paddingBottom: 6,
    fontWeight: '700',
  },

  inputBg: {
    backgroundColor: '#c3c3c3',
    borderRadius: 8,
    height: 40,
    minWidth: 320,
    paddingLeft: 8,
  },
});
