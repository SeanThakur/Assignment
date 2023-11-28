import React, {useMemo} from 'react';
import {View, StyleSheet} from 'react-native';
import Colors from '../styles/Colors';
import VerticalTimeline from '../components/VerticalTimeline';
import useCurrentTime from '../hooks/useTimeDay';
import {timelineData} from '../utils/timelineData';
import {TimelineItem} from '../types/data';

const Yesturday = () => {
  const {timeDescription} = useCurrentTime();

  const modifiedData = useMemo(() => {
    return {
      currentTime: '23:59',
      day: timeDescription,
      data: timelineData.map((item: TimelineItem) => {
        return {
          ...item,
          active: false,
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

export default Yesturday;
