import { View, Text, StyleSheet } from "react-native";
//import { useRoute } from "@react-navigation/native";
import { MEALS } from "../data/dummy-data";

const MealsOverviewScreen = ({navigation, route}) => {
    const catId = route.params.categoryId;
   // const route = useRoute(); alternatively can use useRoute hook for components
   // that are not registered as screen.
   // because route and navigation props can only be used for components that are 
   // registered as screen.


  return (
    <View style={styles.container}>
        <Text>Meals Overview Screen - {catId}</Text>
    </View>
  )
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
});