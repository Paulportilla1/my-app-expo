import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Button({ label, theme, onPress }) {
  if (theme === "primary") {
    return (
      <View style={[styles.primaryButtonContainer]}>
        <Pressable
          style={[styles.primaryButton]}
          onPress={onPress}
        >
          <FontAwesome
            name="picture-o"
            size={18}
            color="#6495ed"
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonLabel, { color: "#6495ed" }]}>{label}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 11,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6495ed', // Cambia el color de fondo del botón
  },
  primaryButtonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    borderWidth: 4,
    borderColor: "blue",
    borderRadius: 18,
  },
  primaryButton: {
    borderRadius: 11,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff', // Cambia el color de fondo del botón primario
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});
