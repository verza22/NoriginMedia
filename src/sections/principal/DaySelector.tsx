import React, { useState, useEffect, useRef } from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';

function DaySelector() {
    const itemWidth = 60;
    const [dates, setDates] = useState<{ day: string, date: string, fullDate: string }[]>([]);
    const [selectedDate, setSelectedDate] = useState<string>(moment().format('YYYY-MM-DD'));
    const flatListRef = useRef<FlatList>(null);

    useEffect(() => {
        const today = moment();
        const daysArray = [];

        for (let i = -3; i <= 3; i++) {
            const day = today.clone().add(i, 'days');
            daysArray.push({
                day: day.format('ddd'),
                date: day.format('DD.MM.'),
                fullDate: day.format('YYYY-MM-DD')
            });
        }

        setDates(daysArray);

        setTimeout(() => {
            if (flatListRef.current) {
                flatListRef.current.scrollToIndex({
                    index: 3,
                    animated: false,
                    viewPosition: 0.5
                });
            }
        }, 100);
    }, []);

    const renderItem = ({ item }: any) => {
        const isSelected = item.fullDate === selectedDate;
        return (
            <TouchableOpacity onPress={() => setSelectedDate(item.fullDate)}>
                <View style={[styles.containerDay, {width: itemWidth}]}>
                    <Text style={[styles.textDay, { color: isSelected ? 'white' : 'gray' }]}>
                        {item.day}
                    </Text>
                    <Text style={[styles.textDate, { color: isSelected ? 'white' : 'gray' }]}>
                        {item.date}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.star}>
                <Icon style={styles.starIcon} name="star" size={34}/>
            </View>
            <FlatList
                ref={flatListRef}
                data={dates}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                getItemLayout={(data, index) => ({
                    length: itemWidth,
                    offset: itemWidth * index,
                    index
                })}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "black"
    },
    star: {
        width: 80,
        justifyContent: "center",
        alignItems: "center"
    },
    starIcon: {
        color: "gray"
    },
    containerDay: {
        backgroundColor: "black",
        paddingVertical: 14,
        alignItems: 'center'
    },
    textDay: {
        textAlign: "center",
        fontSize: 14
    },
    textDate: {
        textAlign: "center",
        fontSize: 11
    }
});

export default DaySelector;