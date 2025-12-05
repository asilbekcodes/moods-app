import React from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function About() {
    const router = useRouter();
    const params = useLocalSearchParams<{
        title?: string;
        chef?: string;
        rating?: string;
        duration?: string;
        rank?: string;
        tagLine?: string;
        image?: string;
    }>();

    const {
        title = "Borjomi 0,5 litr",
        chef = "Natural mineral water",
        rating = "4.9",
        duration = "Best served chilled",
        rank = "Top pick",
        tagLine = "Crisp taste, lightly carbonated",
        image = "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
    } = params;

    return (
        <SafeAreaView className="flex-1 bg-background" edges={["top"]}>
            <ScrollView contentContainerClassName="pb-10">
                <View className="relative overflow-hidden">
                    <Image source={{ uri: image }} className="h-[420px] w-full" resizeMode="cover" />

                    <View className="absolute left-4 right-4 top-4 flex-row items-center justify-between">
                        <Pressable
                            onPress={() => router.back()}
                            className="h-12 w-12 items-center justify-center rounded-full bg-card-strong/90"
                        >
                            <Ionicons name="arrow-back" size={24} color="#111827" />
                        </Pressable>

                        <View className="flex-row items-center gap-3">
                            <Pressable className="h-12 w-12 items-center justify-center rounded-full bg-card-strong/90">
                                <Ionicons name="share-outline" size={24} color="#111827" />
                            </Pressable>
                            <Pressable className="h-12 w-12 items-center justify-center rounded-full bg-card-strong/90">
                                <Ionicons name="heart-outline" size={24} color="#111827" />
                            </Pressable>
                        </View>
                    </View>
                </View>

                <View className="mt-[-24] rounded-t-3xl bg-background px-4 pt-6 pb-24 h-full">
                    <View className="gap-3">
                        <Text className="text-2xl font-semibold text-primary">{title}</Text>
                        <Text className="text-base text-foreground/70">{tagLine}</Text>

                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            className="mt-3"
                            contentContainerClassName="flex-row items-center gap-4"
                        >
                            <InfoPill icon="person" label={chef} />
                            <InfoPill icon="star" label={`${rating} - ${rank}`} />
                            <InfoPill icon="time-outline" label={duration} />
                        </ScrollView>

                        <Text className="mt-4 text-base leading-6 text-foreground/80">
                            Crafted with fresh ingredients and balanced flavors. Enjoy this meal inspiration that keeps you
                            energized and satisfied without spending hours in the kitchen.
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

function InfoPill({
    icon,
    label,
}: {
    icon: keyof typeof Ionicons.glyphMap;
    label: string;
}) {
    return (
        <View className="flex-row items-center gap-2 rounded-full bg-card-strong px-3 py-2">
            <Ionicons name={icon} size={16} color="#111827" />
            <Text className="text-sm font-medium text-foreground/80">{label}</Text>
        </View>
    );
}
