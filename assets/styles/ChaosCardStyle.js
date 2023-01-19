import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    borderWidth: 5,
    height: "80%",
    margin: 5,
    padding: 5,
    borderRadius: 20,
    overflow: "hidden",
  },
  title: {
    fontWeight: "bold",
    fontSize: 35,
    textAlign: "center",
    borderBottomWidth: 3,
    paddintTop: "2%",
    paddingBottom: "2%",
  },
  description: {
    fontSize: 17,
    height: "50%",
    marginTop: "2%",
    marginLeft: "0%",
  },
  leyend: {
    fontSize: 16,
    textAlign: "center",
    fontStyle: "italic",
    margin: "4%",
    paddingBottom: "15%",
  },
});

export default styles;
