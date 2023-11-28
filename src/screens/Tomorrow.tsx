import React, {useMemo} from 'react';
import {View, StyleSheet} from 'react-native';
import Colors from '../styles/Colors';
import VerticalTimeline from '../components/VerticalTimeline';
import useCurrentTime from '../hooks/useTimeDay';
import {TimelineItem} from '../types/data';
import {timelineData} from '../utils/timelineData';

const Tomorrow = () => {
  const {timeDescription} = useCurrentTime();

  const modifiedData = useMemo(() => {
    return {
      currentTime: '00:00',
      day: timeDescription,
      data: timelineData.map((item: TimelineItem, index: number) => {
        let isActive = true;
        if (index === 0) {
          isActive = false;
        } else {
          isActive = true;
        }
        return {
          ...item,
          active: isActive,
        };
      }),
    };
  }, [timeDescription]);

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

export default Tomorrow;
