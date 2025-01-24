import { Colors } from '@/constants/Colors';
import MENU_IMAGES from '@/constants/menuImages';
import { MENU_ITEMS } from '@/constants/menuItems';
import React from 'react';
import {
    Appearance,
    FlatList,
    Image,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

const Menu = () => {
    const colorScheme = Appearance.getColorScheme();
    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
    const styles = createStyles(theme, colorScheme);

    const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView;

    const separatorComponent = <View style={styles.separator} />;
    const headerComponent = (
        <Text style={styles.headerText}>☕ Coffee Shop Menu</Text>
    );
    const footerComponent = (
        <Text style={styles.footerText}>🍩 Enjoy Your Coffee!</Text>
    );

    return (
        <Container>
            <FlatList
                data={MENU_ITEMS}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.contentContainer}
                ItemSeparatorComponent={separatorComponent}
                ListHeaderComponent={headerComponent}
                ListFooterComponent={footerComponent}
                ListFooterComponentStyle={styles.footerComp}
                ListEmptyComponent={<Text>No Items</Text>}
                renderItem={({ item }) => (
                    <View style={styles.row}>
                        <View style={styles.menuTextRow}>
                            <Text style={styles.menuItemTitle}>{item.title}</Text>
                            <Text style={styles.menuItemDescription}>{item.description}</Text>
                        </View>
                        <Image source={MENU_IMAGES[item.id - 1]} style={styles.menuImage} />
                    </View>
                )}
            />
        </Container>
    );
};

export default Menu;

function createStyles(theme, colorScheme) {
    return StyleSheet.create({
        contentContainer: {
            flexGrow: 1,
            paddingTop: 20,
            paddingBottom: 40,
            paddingHorizontal: 20,
            backgroundColor: theme.background,
        },
        separator: {
            height: 1,
            backgroundColor: colorScheme === 'dark' ? '#555' : '#ddd',
            width: '80%',
            alignSelf: 'center',
            marginVertical: 15,
        },
        footerComp: {
            marginTop: 20,
            alignSelf: 'center',
        },
        headerText: {
            fontSize: 24,
            fontWeight: 'bold',
            textAlign: 'center',
            color: theme.tint,
            marginBottom: 20,
        },
        footerText: {
            fontSize: 18,
            fontWeight: '600',
            textAlign: 'center',
            color: theme.tint,
            marginTop: 20,
        },
        row: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 10,
        },
        menuTextRow: {
            flex: 1,
            marginRight: 15,
        },
        menuItemTitle: {
            fontSize: 18,
            fontWeight: '600',
            color: theme.text,
            marginBottom: 5,
        },
        menuItemDescription: {
            fontSize: 14,
            color: theme.icon,
        },
        menuImage: {
            width: 80,
            height: 80,
            borderRadius: 10,
        },
    });
}