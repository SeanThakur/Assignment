import React, {useMemo} from 'react';
import {View, StyleSheet} from 'react-native';
import Colors from '../styles/Colors';
import VerticalTimeline from '../components/VerticalTimeline';
import {TimelineItem} from '../types/data';
import useCurrentTime from '../hooks/useTimeDay';
import {timelineData} from '../utils/timelineData';

const Today = () => {
  const {currentTime, timeDescription} = useCurrentTime();

  const modifiedData = useMemo(() => {
    return {
      currentTime: currentTime,
      day: timeDescription,
      data: timelineData.map((item: TimelineItem) => {
        const [itemHours, itemMinutes] = item.time.split(':');
        const [currentHours, currentMinutes] = currentTime.split(':');
        const currentItemTime =
          parseInt(itemHours, 10) * 60 + parseInt(itemMinutes, 10);
        const currentMinutesTime =
          parseInt(currentHours, 10) * 60 + parseInt(currentMinutes, 10);

        const isPassedTime = currentMinutesTime > currentItemTime;
        const isActive = !isPassedTime && timeDescription === 'Today';

        return {
          ...item,
          active: isActive,
        };
      }),
    };
  }, [currentTime, timeDescription]);

  return (
    <View style={styles.view}>
      <VerticalTimeline data={modifiedData} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },
});

export default Today;
