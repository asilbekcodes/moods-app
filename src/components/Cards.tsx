import React from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeSelectorComponent } from "./theme-selector";
import RecipeCard from "./RecipeCard";


export type MealCard = {
    id: string;
    title: string;
    chef: string;
    rating: string;
    duration: string;
    rank: string;
    tagLine: string;
    image: string;
}

const MEAL_CARDS: MealCard[] = [
    {
        id: "1",
        title: "Grilled Chicken Bowl",
        chef: "Chef Oliver Grant",
        rating: "4.8",
        duration: "25 min",
        rank: "Top 1",
        tagLine: "Healthy protein-packed meal",
        image:
            "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg"
    },
    {
        id: "2",
        title: "Fresh Green Salad",
        chef: "Chef Amelia Rose",
        rating: "4.6",
        duration: "15 min",
        rank: "Top 2",
        tagLine: "Crispy greens with avocado",
        image:
            "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
    },
    {
        id: "3",
        title: "Pasta Alfredo",
        chef: "Chef Marco Bellini",
        rating: "4.9",
        duration: "30 min",
        rank: "Top 3",
        tagLine: "Creamy Italian-style pasta",
        image:
            "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg"
    },
    {
        id: "4",
        title: "Beef Steak Plate",
        chef: "Chef Jonathan Reyes",
        rating: "4.7",
        duration: "40 min",
        rank: "Top 4",
        tagLine: "Juicy grilled beef steak",
        image:
            "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg"
    },
    {
        id: "5",
        title: "Sushi Combo Box",
        chef: "Chef Aiko Tanaka",
        rating: "4.9",
        duration: "20 min",
        rank: "Top 5",
        tagLine: "Fresh Japanese sushi platter",
        image:
            "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg"
    }
];


const Cards = () => {
    return (
        <SafeAreaView className="flex-1 bg-background" edges={["top"]}>
            <FlatList
                data={MEAL_CARDS}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ padding: 16 }}
                renderItem={({ item }) => <RecipeCard meal={item} />}
                contentContainerClassName="px-4 pt-4 pb-8"
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <View className="h-6" />}
                ListHeaderComponent={() => (
                    <View className="mb-8 gap-6">
                        {/* Theme Selector */}
                        <ThemeSelectorComponent />

                        <View className="gap-1">
                            <Text className="text-3xl font-bold text-primary">
                                Meal inspiration
                            </Text>

                            <Text className="text-base text-foreground/70">
                                Curated picks ready in under 35 minutes.
                            </Text>
                        </View>
                    </View>
                )}
            />
        </SafeAreaView>
    );
};

export default Cards;
