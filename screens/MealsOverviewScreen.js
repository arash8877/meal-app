import { useLayoutEffect } from "react";
//import { useRoute } from "@react-navigation/native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/mealsList/MealItem";
import MealsList from "../components/mealsList/MealsList";

const MealsOverviewScreen = ({ navigation, route }) => {
  const catId = route.params.categoryId;
  // const route = useRoute(); alternatively can use useRoute hook for components
  // that are not registered as screen.
  // because route and navigation props can only be used for components that are
  // registered as screen.

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealsList items={displayedMeals}/>

}

export default MealsOverviewScreen;


