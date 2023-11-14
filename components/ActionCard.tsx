import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }
    return (
        <View>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>Karachi-a city few can handle</Text>
                </View>
                <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWfqOwHY0_c1zC5pAMJHXcOUZ1uoQ1yOWWDg&usqp=CAU' }} style={styles.cardImage} />
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={3}>
                        I have spent four years in Karachi as an under-graduate student of FAST NUCES.
                        I had the most amazing time of my life in this city.
                        From the amazing Arabian Sea to turtle beaches, this city is undescribable in words alone.
                        Karachi is home to the world's best spicy sea-food.
                        If any of you decide to travel to Karachi, do not forget to indulge in prawn biryani from Biryani of the Seas.
                        Even if you manage to have Sindhi Biryani from anywhere, it is equally delicious.
                        During my stay in Karachi, my family and friends took me to their favourite eating spot at Boat Basin where we indulged in desi-foods i.e Chicken Makhni(a popular dish known as Butter Chicken) and Prawn Masala. I bet when you have it you will not have enough of it.
                        The food might be spicy but that is what Asian cuisine is all about.
                        Another point of interest that i would like to draw your concentration on is the great National Stadium in Karachi where domestic and International cricket matches take place.
                        It was established in 1955 and is owned by the Pakistan Cricket Board.
                        It has the capacity for 34,000 and more spectators.
                    </Text>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity onPress={() => openWebsite('https://erasmusu.com/en/erasmus-iba-institute-of-business-administration/erasmus-blog/karachi-a-city-few-can-handle-526143')}>
                        <Text style={styles.socialLinks}>Read more</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => openWebsite('https://www.linkedin.com/in/azainn-adam/')}>
                        <Text style={styles.socialLinks}>Follow me</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    card: {
        width: 350,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16,
    },
    elevatedCard: {
        backgroundColor: '#E07C24',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: '#333',
        shadowOpacity: 0.4,
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        color: '#000000',
        fontSize: 16,
        fontWeight: '600',
    },
    cardImage: {
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
    },
    bodyContainer: {
        padding: 10,
    },
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    socialLinks: {
        fontSize: 16,
        color: '#000000',
        backgroundColor: '#FFF',
        borderRadius: 6,
        paddingHorizontal: 20,
        paddingVertical: 6,
    },
})