import { Image, View, Text, Pressable } from 'react-native'
import React from 'react'
import { MealCard } from './Cards';
import Ionicons from "@expo/vector-icons/Ionicons";

export default function RecipeCard({ meal }: { meal: MealCard }) {
    return (
        <View className="rounded-4xl bg-card p-4">
            {/* IMAGE + RANK BADGE */}
            <View className="relative overflow-hidden rounded-3xl">
                <Image
                    source={{ uri: meal.image }}
                    className="h-48 w-full"
                    resizeMode="cover"
                />

                <View className="absolute right-4 top-4 rounded-full bg-chip px-4 py-1">
                    <Text className="text-sm font-semibold text-chip-text">
                        {meal.rank}
                    </Text>
                </View>
            </View>

            {/* CHEF, TITLE, DURATION */}
            <View className="mt-5 flex-row items-center gap-3">
                <View className="h-12 w-12 items-center justify-center rounded-full bg-foreground/10">
                    <Ionicons name="fast-food" size={20} color="#111827" />
                </View>

                <View className="flex-1">
                    <Text className="text-sm font-medium text-foreground/70">
                        By {meal.chef}
                    </Text>

                    <Text className="text-xl font-semibold text-primary">
                        {meal.title}
                    </Text>
                </View>
            </View>

            {/* TAGLINE */}
            <Text className="mt-3 text-base text-foreground/70">
                {meal.tagLine}
            </Text>

            {/* DURATION */}
            <View className="mt-4 flex-row items-center gap-2">
                <View className="h-1 w-1 rounded-full bg-foreground/20" />
                <Text className="text-base text-foreground/70">
                    {meal.duration}
                </Text>
            </View>

            {/* CTA BUTTONS */}
            <View className="mt-6 flex-row items-center gap-3">
                <Pressable className="flex-1 rounded-full bg-cta py-4">
                    <Text className="text-xl font-semibold text-center text-cta-text">
                        Add to cart
                    </Text>
                </Pressable>

                <Pressable className="h-12 w-12 items-center justify-center rounded-full bg-foreground/10">
                    <Ionicons name="bookmark-outline" size={22} color="#234823" />
                </Pressable>
            </View>
        </View>
    )
}