import { TouchableOpacity, Text } from "react-native";

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  textStyle?: string;
  containerStyle?: string;
}

const CustomButton = ({
  title,
  onPress,
  textStyle = "",
  containerStyle = "",
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={`bg-white rounded-xl min-h-[62px] justify-center items-center ${containerStyle}`}
      onPress={onPress}
    >
      <Text className={`font-semibold text-lg ${textStyle}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
