import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Typography from '../styles/Typography';
import Colors from '../styles/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {TimelineItem} from '../types/data';

type VerticalTimelineProps = {
  data: {
    currentTime: string;
    day: string;
    data: TimelineItem[];
  };
};
const VerticalTimeline = ({data}: VerticalTimelineProps) => {
  const calculateProgressHeight = (currentTime: string, itemTime: string) => {
    const [currentHours, currentMinutes] = currentTime.split(':').map(Number);
    const [itemHours, itemMinutes] = itemTime.split(':').map(Number);

    const totalCurrentMinutes = currentHours * 60 + currentMinutes;
    const totalItemMinutes = itemHours * 60 + itemMinutes;
    const totalDayMinutes = 24 * 60;

    let progress = 0;

    if (totalCurrentMinutes >= totalItemMinutes) {
      const remainingMinutes = totalDayMinutes - totalCurrentMinutes;
      const passedMinutes = totalCurrentMinutes - totalItemMinutes;

      progress = (passedMinutes / remainingMinutes) * 100;
      progress = progress >= 100 ? 100 : progress;
    }

    return progress;
  };

  return (
    <View style={styles.container}>
      {data.data?.map((item, idx) => {
        const progress = calculateProgressHeight(data?.currentTime, item.time);
        return (
          <View key={idx} style={styles.view}>
            <View style={styles.timelineContainer}>
              <Text style={styles.timelineTimezone}>{item.time}</Text>
              <View style={styles.timelineIconView}>
                <View
                  style={[
                    styles.timelineIconContainer,
                    item?.active && styles.timelineNonActiveIconContainer,
                  ]}>
                  {!item?.active && (
                    <Icon
                      name="location-sharp"
                      color={Colors.white}
                      size={12}
                    />
                  )}
                </View>
                <View
                  style={[
                    styles.timelineSharp,
                    data.data.length - 1 === idx && styles.timelineLastEl,
                    data.day === 'Tomorrow' && styles.timelineNonActiveEl,
                    item?.active && styles.timelineNonActiveEl,
                  ]}>
                  <View
                    style={{
                      height: `${progress}%`,
                      backgroundColor: Colors.primary,
                    }}
                  />
                </View>
              </View>
              <View style={styles.timelineTextContainer}>
                <Text style={styles.timelineText}>{item.text}</Text>
                <Text style={styles.timelineSubText}>{item.subText}</Text>
              </View>
            </View>
            <View style={styles.timelineDescription}>
              <Image
                source={item.Icon}
                style={styles.timelineDescriptionIcon}
              />
            </View>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 48,
    paddingHorizontal: 18,
  },
  view: {flexDirection: 'row', justifyContent: 'space-between'},
  timelineTimezone: {
    ...Typography.H4_Semibold_18px,
    color: Colors.black,
  },
  timelineTextContainer: {
    marginTop: -8,
  },
  timelineText: {
    ...Typography.Body1_Semibold_16,
    color: Colors.black,
  },
  timelineSubText: {color: Colors.accent, ...Typography.Body1_Regular_16},
  timelineIconView: {
    alignItems: 'center',
    marginHorizontal: 14,
  },
  timelineContainer: {
    flexDirection: 'row',
  },
  timelineIconContainer: {
    borderRadius: 20,
    width: 26,
    height: 26,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timelineSharp: {
    height: 66,
    width: 2,
    backgroundColor: Colors.accent,
  },
  timelineDescription: {
    width: 40,
    height: 40,
    backgroundColor: Colors.white,
    padding: 8,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timelineDescriptionIcon: {width: 32, height: 32},

  //Non-active styles
  timelineLastEl: {
    display: 'none',
  },
  timelineNonActiveEl: {
    height: 66,
    width: 2,
    backgroundColor: Colors.accent,
  },
  timelineNonActiveIconContainer: {
    borderRadius: 20,
    width: 26,
    height: 26,
    backgroundColor: Colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: Colors.accent,
  },
});

export default VerticalTimeline;
