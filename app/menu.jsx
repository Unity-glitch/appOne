import {
  StyleSheet,
  Appearance,
  Platform,
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";

import { Colors } from "@/constants/Colors";
import { MENU_ITEMS } from "@/constants/MenuItems";
import MENU_IMAGES from "@/constants/MenuImages";

export default function MenuScreen() {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  const styles = createStyles(theme, colorScheme);

  const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;
  const seperatorComp = <View style={styles.seperator} />;
  const headerComp = <Text>Top of List</Text>;
  const footerComp = (
    <Text style={{ color: theme.text, padding: 10 }}>End of Menu</Text>
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Container>
        <FlatList
          data={MENU_ITEMS}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
          ItemSeparatorComponent={seperatorComp}
          // ListHeaderComponent={headerComp}
          ListHeaderComponentStyle={styles.headerComp}
          ListFooterComponent={footerComp}
          ListFooterComponentStyle={styles.footerComp}
          ListEmptyComponent={<Text>No Items</Text>}
          renderItem={({ item }) => (
            <View style={styles.row}>
              <View style={styles.menuTextRow}>
                <Text style={[styles.menuItemText, styles.menueItemTitle]}>
                  {item.title}
                </Text>
                <Text style={styles.menuItemText}>{item.description}</Text>
              </View>
              <Image
                style={styles.menuImage}
                source={MENU_IMAGES[item.id - 1]}
              />
            </View>
          )}
        ></FlatList>
      </Container>
    </ScrollView>
  );
}

function createStyles(theme, colorScheme) {
  return StyleSheet.create({
    contentContainer: {
      padding: 10,
      paddingBottom: 20,
      paddingHorizontal: 12,
      backgroundColor: theme.background,
    },
    seperatorComp: {
      height: 1,
      backgroundColor: colorScheme === "dark" ? "papayawhip" : "#000",
      width: "50%",
      maxWidth: 300,
      marginHorizontal: "auto",
      marginBottom: 10,
    },
    headerComp: {
      marginHorizontal: "auto",
    },
    footerComp: {
      marginHorizontal: "auto",
    },
    row: {
      flexDirection: "row",
      width: "100%",
      maxWidth: 600,
      height: 100,
      marginBottom: 10,
      borderStyle: "solid",
      borderColor: colorScheme === "dark" ? "papayawhip" : "#000",
      borderWidth: 1,
      borderRadius: 8,
      overflow: "hidden",
      marginHorizontal: "auto",
    },
    menuTextRow: {
      width: "65%",
      paddingTop: 10,
      paddingLeft: 10,
      paddingRight: 5,
      flexGrow: 1,
    },
    menueItemTitle: {
      fontSize: 18,
    },
    menuItemText: {
      color: theme.text,
    },
    menuImage: {
      width: 100,
      height: 100,
    },
  });
}
