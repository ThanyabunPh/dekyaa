import { ImageBackground, View, Text, SafeAreaView } from "react-native";
import onboarding from "@/assets/images/onboarding.webp";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import CustomButton from "@/components/CustomButton/CustomButton";
import { Href, useRouter } from "expo-router";
import AppGradient from "@/components/AppGradient/AppGradient";

const App = () => {
  const router = useRouter();

  return (
    <View className="flex-1">
      <StatusBar style="light" />
      <ImageBackground
        resizeMode="cover"
        className="flex-1"
        source={onboarding}
      >
        <AppGradient colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.7)"]}>
          <SafeAreaView className="flex-1 justify-between mt-12">
            <View>
              <Text className="text-center text-white font-bold text-4xl">
                Dek Yaa
              </Text>
              <Text className="mt-5 text-center text-white text-2xl">
                ให้เด็กยาดูแลการกินยาของคุณ
              </Text>
            </View>

            <CustomButton
              title="เริ่มต้น"
              onPress={() => {
                router.push("/medication-reminder" as Href); // must be adding as href to not warn || idk why warn :'(
              }}
            />
          </SafeAreaView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default App;
