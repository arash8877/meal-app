import { CATEGORIES } from "../data/dummy-data";
import { View, FlatList } from "react-native";

const renderCategoryItem = (item) => {
  return;
};

const CategoriesScreen = () => {
  return (
    <FlatList
      data={CATEGORIES}
      keExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
    />
  );
};

export default CategoriesScreen;
