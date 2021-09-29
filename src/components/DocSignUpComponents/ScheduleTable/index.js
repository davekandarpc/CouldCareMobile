import React, { useState, useEffect } from 'react';
import { ScrollView, Text, TouchableOpacity, View, Alert } from 'react-native';
import { styles } from './styles.js'
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';
EvilIcons.loadFont()
export const ScheduleTable = ({ schedule, onLongPress }) => {
  return (
    <View style={styles.TableMainView}>
      <View style={[styles.RowView, { backgroundColor: '#dedfe1', padding: 5 }]}>
        <View style={[styles.headerCell, { flex: 0.3 }]}>
          <Text style={styles.headerText}>Day</Text>
        </View>
        <View style={styles.headerCell}>
          <Text style={styles.headerText}>Video & Chat</Text>
          <View style={styles.StartStopView}>
            <View style={styles.startTextView}>
              <Text style={styles.headerText}>Start</Text>
            </View>
            <View style={styles.startTextView}>
              <Text style={styles.headerText}>Stop</Text>
            </View>
          </View>
        </View>
        <View style={styles.headerCell}>
          <Text style={styles.headerText}>Physical</Text>
          <View style={styles.StartStopView}>
            <View style={styles.startTextView}>
              <Text style={styles.headerText}>Start</Text>
            </View>
            <View style={styles.startTextView}>
              <Text style={styles.headerText}>Stop</Text>
            </View>
          </View>
        </View>
        {/* <View style={[styles.headerCell, { flex: 0.5 }]}>
          <Text style={styles.headerText}>Total</Text>
        </View> */}
      </View>
      {
        days.map((day, index) => {
          return (
            <View style={[styles.row, { backgroundColor: index % 2 === 0 ? '#fff' : 'rgba(48,152,243,0.3)' }]}>
              <View style={[styles.tableCell, { flex: 0.3 }]}>
                <Text style={styles.tableCellText}>
                  {day.slice(0, 1)}
                </Text>
              </View>
              <View style={styles.tableCell}>
                {
                  schedule["Video & Chat"][day].length !== 0 &&
                  schedule["Video & Chat"][day].map((timeSlot, slot_index) => {
                    return (
                      <TimeSlotView timeSlot={timeSlot} onLongPress={()=> onLongPress("Video & Chat", day, slot_index)} />
                    )
                  })
                }
              </View>
              <View style={styles.tableCell}>
                {
                  schedule['Physical'][day].length !== 0 &&
                  schedule['Physical'][day].map((timeSlot, slot_index) => {
                    return (
                      <TimeSlotView timeSlot={timeSlot} onLongPress={()=> onLongPress("Physical", day, slot_index)} />
                    )
                  })
                }
              </View>
              {/* <View style={[styles.tableCell, { flex: 0.5 }]}>
                <Text style={styles.tableCellText}>-</Text>
              </View> */}
            </View>
          )
        })
      }
    </View>
  );
};

const TimeSlotView = ({ timeSlot, onLongPress }) => {

  const promptOnLongPress = () => {
    Alert.alert(
      "Are you sure you want to delete this time slot",
      "",
      [
          {
              text: "No",
              onPress: () => console.log("No Pressed"),
              style: "No"
          },
          {
              text: "Yes",
              onPress: () => onLongPress()
          }
      ]
  );
  }
  
  return (
    <TouchableOpacity style={styles.timeSlotRow} onLongPress={promptOnLongPress}>
      <View style={styles.timeSlotCell}>
        <Text style={styles.tableCellText}>
          {timeSlot.start.hour} : {timeSlot.start.min}
        </Text>
      </View>
      <View style={styles.timeSlotCell}>
        <Text style={styles.tableCellText}>
          {timeSlot.end.hour} : {timeSlot.end.min}
        </Text>
      </View>
      {/* <TouchableOpacity>
        <EvilIcons
          name={'close'}
          color={'#000'}
          size={20}
        />
      </TouchableOpacity> */}
    </TouchableOpacity>
  )
}
