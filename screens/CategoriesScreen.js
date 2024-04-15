import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
import { View, FlatList } from "react-native";

const renderCategoryItem = (itemData) => {
  return <CategoryGridTile title={itemData.item.title} color={itemData.item.color}/>;
};

const CategoriesScreen = () => {
  return (
    <FlatList
      data={CATEGORIES}
      keExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
