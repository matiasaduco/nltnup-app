import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    borderWidth: 5,
    width: "80%",
    height: 480,
    margin: 5,
    padding: 5,
    borderRadius: 20,
    overflow: "hidden",
  },
  title: {
    fontWeight: "bold",
    fontSize: 38,
    textAlign: "center",
    borderBottomWidth: 3,
    paddintTop: "2%",
    paddingBottom: "2%",
  },
  title2: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    borderBottomWidth: 3,
    paddintTop: "2%",
    paddingBottom: "2%",
  },
  title3: {
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
    borderBottomWidth: 3,
    paddintTop: "2%",
    paddingBottom: "2%",
  },
  description: {
    fontSize: 18,
    borderBottomWidth: 3,
    height: "65%",
    marginTop: "2%",
    marginLeft: "0%",
  },
  leyend: { fontSize: 18, fontStyle: "italic", margin: "4%" },
});

export default styles;
