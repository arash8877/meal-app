import { useLayoutEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/mealDetail/Subtitle";
import List from "../components/mealDetail/List";

const MealDetailScreen = ({ navigation, route }) => {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  function headerButtonOnPressHandler() {
    console.log("pressed");
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Button title="tap me!" onPress={headerButtonOnPressHandler} />;
      },
    });
  }, [navigation, headerButtonOnPressHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.imag} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 24,
  },
  imag: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 4,
    marginHorizontal: 24,
    padding: 6,
    textAlign: "center",
    borderBottomWidth: 2,
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    maxWidth: "80%",
  },
});
