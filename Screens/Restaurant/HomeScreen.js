import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import React, {useState} from "react";
import { Ionicons } from "@expo/vector-icons";
import SPACING from "../../config/SPACING";
import colors from "../../config/Restaurant/colors";
import DATA from "../../config/Restaurant/DATA";
import { Colors } from "react-native/Libraries/NewAppScreen";
const { width } = Dimensions.get("window");

const ITEM_WIDTH = width / 2 - SPACING * 3;

const HomeScreen = ({ navigation }) => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <ScrollView>
      <SafeAreaView>
        <View style={{ padding: SPACING * 2, marginTop: 40}}>
          <View style={{ flexDirection: "row", justifyContent: "space-between"}}>
            <View style={{ flexDirection: "row", alignItems: "center"}}>
              <Image 
                source={require("../../assets/restaurant/avatar.jpg")} 
                style={{
                  width: SPACING * 4.5,
                  height: SPACING * 4.5,
                  borderRadius: SPACING * 3,
                  marginRight: SPACING
                }}
                />
              <Text 
                style={{
                  fontSize: SPACING * 1.7,
                  fontWeight: "800",
                  color: colors.dark
              }}>Erik Ten Hag</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center"}}>
              <TouchableOpacity style={{ marginRight: SPACING}}>
                <Ionicons 
                  name="notifications-outline" 
                  size={SPACING * 3} 
                  color={colors.dark} 
                  />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons 
                  name="menu" 
                  size={SPACING * 3} 
                  color={colors.dark} 
                  />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ width: "60%", marginTop: SPACING * 2}}>
            <Text style={{ fontSize: SPACING * 3, fontWeight: "700"}}>
              What would you like to order?
            </Text>
          </View>
          <View style={{ 
            flexDirection: "row",
            backgroundColor: colors.light,
            marginVertical: SPACING * 3,
            padding: SPACING * 1.5,
            borderRadius: SPACING
          }}>
            <Ionicons name="search" color={colors.gray} size={SPACING * 2.7} />
            <TextInput 
              placeholder="Want to ...."
              placeholderTextColor={colors.gray}
              style={{ 
                color: colors.gray, fontSize: SPACING * 2,
                marginLeft: SPACING,
              }}
            />
          </View>
          <ScrollView horizontal>
            {DATA.map((category, index) =>( 
              <TouchableOpacity 
                style={{ marginRight: SPACING * 3}}
                key={index}
                // the index here is the the index of the array element so it adds that style below to whichever one is clicked
                onPress={() => setActiveCategory(index)}
              >
                <Text 
                  style={[
                    {
                      fontSize: SPACING * 1.7,
                      fontWeight: "600",
                      color: colors.gray
                    },
                    // this is actually clever how to style the active tab
                    activeCategory === index && 
                    { 
                      color: colors.black, 
                      fontWeight: "700",
                      fontSize: SPACING * 1.9
                    }
                  ]}
                >
                  {category.title}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <View 
            style={{ 
              flexDirection: "row", flexWrap: "wrap",
              justifyContent: "space-between",
              marginVertical: SPACING * 2
            }}>
            {/* so based on the active category we're fetching the data and looping through it */}
            {DATA[activeCategory].recipes.map(item =>
              <TouchableOpacity style={{ width: ITEM_WIDTH}} key={item.id} onPress={
                navigation.navigate('RecipeDetails')}>
                <Image 
                  style={{ 
                    width: "100%", height: ITEM_WIDTH + SPACING * 3,
                    borderRadius: SPACING * 2,
                  }} 
                  source={item.image} 
                />
                <Text style={{ fontSize: SPACING * 2, fontWeight: "700", marginTop: SPACING}}>{item.name}</Text>

                <Text
                  style={{
                    fontSize: SPACING * 1.5,
                    color: colors.gray,
                    marginVertical: SPACING /2,
                  }}
                >Today's Discount {item.discount}</Text>

                <Text style={{ fontSize: SPACING * 2, fontWeight: "700", marginBottom: SPACING * 2}}>$ {item.price}</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
