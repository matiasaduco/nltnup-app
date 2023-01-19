import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderWidth: 5,
    margin: 5,
    borderRadius: 20,
    overflow: "hidden",
  },
  title: {
    fontWeight: "bold",
    fontSize: 38,
    textAlign: "center",
    borderBottomWidth: 3,
  },
  expansions: {
    textAlign: "center",
    borderBottomWidth: 3,
    width: "90%",
    height: "65%",
  },
  textInput: {
    marginTop: "2%",
    height: 40,
    borderColor: "#505050",
    borderBottomWidth: 1,
  },
  addButton: {
    width: 100,
    alignSelf: "center",
    marginTop: "2%",
  },
  playButton: {
    width: "50%",
    alignSelf: "center",
    marginTop: "1%",
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
