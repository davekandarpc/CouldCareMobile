/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: MIT-0
 */

import React from 'react';
import { View, Text, FlatList, Alert, Dimensions, TouchableOpacity, Platform } from 'react-native';
import styles from './Style';
import { NativeFunction, getSDKEventEmitter, MobileSDKEvent, MeetingError } from '../../utils/Bridge';
import { RNVideoRenderView } from './RNVideoRenderView';
import { MuteButton } from './MuteButton';
import { CameraButton } from './CameraButton';
import { HangOffButton } from './HangOffButton';
import { AudioSwitchButton } from './AudioSwitchButton';
import { AttendeeItem } from './AttendeeItem';
import LinearGradient from 'react-native-linear-gradient';
import RNSwitchAudioOutput from 'react-native-switch-audio-output';
import InCallManager from 'react-native-incall-manager';  

const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width

// Maps attendee Id to attendee Name
const attendeeNameMap = {};


export class Meeting extends React.Component {
  constructor() {
    super();
    this.state = {
      attendees: [],
      videoTiles: [],
      mutedAttendee: [],
      selfVideoEnabled: true,
      meetingTitle: '',
      screenShareTile: null,
      activeVideoWindow: 0,
      isMuted: false,
      speakerOn: false
    };
  }

  componentDidMount() {
    NativeFunction.setCameraOn(true)
    InCallManager.start();
    /**
     * Attendee Join and Leave handler
     */
    this.onAttendeesJoinSubscription = getSDKEventEmitter().addListener(MobileSDKEvent.OnAttendeesJoin, ({ attendeeId, externalUserId }) => {
      if (!(attendeeId in attendeeNameMap)) {
        // The externalUserId will be a format such as c19587e7#Alice
        attendeeNameMap[attendeeId] = externalUserId.split("#")[1];
      }
      this.setState((oldState) => ({
        ...oldState,
        attendees: oldState.attendees.concat([attendeeId])
      }));
    });

    this.onAttendeesLeaveSubscription = getSDKEventEmitter().addListener(MobileSDKEvent.OnAttendeesLeave, ({ attendeeId }) => {
      console.log("Leave 1")
      setTimeout(()=> {
        NativeFunction.stopMeeting();
        console.log("Leave 2")
        this.props.stopMeeting()
        this.setState((oldState) => ({
          ...oldState,
          attendees: oldState.attendees.filter((attendeeToCompare => attendeeId != attendeeToCompare))
        }));
      },1500)
    });

    /**
     * Attendee Mute & Unmute handler
     */
    this.onAttendeesMuteSubscription = getSDKEventEmitter().addListener(MobileSDKEvent.OnAttendeesMute, attendeeId => {
      console.log('muted')
      this.setState((oldState) => ({
        ...oldState,
        mutedAttendee: oldState.mutedAttendee.concat([attendeeId])
      }));
    });

    this.onAttendeesUnmuteSubscription = getSDKEventEmitter().addListener(MobileSDKEvent.OnAttendeesUnmute, attendeeId => {
      console.log('unmuted')
      this.setState((oldState) => ({
        ...oldState,
        mutedAttendee: oldState.mutedAttendee.filter((attendeeToCompare => attendeeId != attendeeToCompare))
      }));
    });

    /**
     * Video tile Add & Remove Handler
     */
    this.onAddVideoTileSubscription = getSDKEventEmitter().addListener(MobileSDKEvent.OnAddVideoTile, (tileState) => {
      if (tileState.isScreenShare) {
        this.setState(oldState => ({
          ...oldState,
          screenShareTile: tileState.tileId
        }));
      } else {
        this.setState(oldState => ({
          ...oldState,
          videoTiles: [...oldState.videoTiles, tileState],
          selfVideoEnabled: tileState.isLocal ? true : oldState.selfVideoEnabled
        }));
      }
    });

    this.onRemoveVideoTileSubscription = getSDKEventEmitter().addListener(MobileSDKEvent.OnRemoveVideoTile, (tileState) => {
      if (tileState.isScreenShare) {
        this.setState(oldState => ({
          ...oldState,
          screenShareTile: null
        }));
      } else {
        this.setState(oldState => ({
          ...oldState,
          videoTiles: oldState.videoTiles.filter(tileIdToCompare => tileIdToCompare.tileId != tileState.tileId),
          selfVideoEnabled: tileState.isLocal ? false : oldState.selfVideoEnabled
        }));
      }
    });

    /**
     * General Error handler
     */
    this.onErrorSubscription = getSDKEventEmitter().addListener(MobileSDKEvent.OnError, (errorType) => {
      switch (errorType) {
        case MeetingError.OnMaximumConcurrentVideoReached:
          Alert.alert("Failed to enable video", "maximum number of concurrent videos reached!");
          break;
        default:
          Alert.alert("Error", errorType);
          break;
      }
    });
  }

  componentWillUnmount() {
    if (this.onAttendeesJoinSubscription) {
      this.onAttendeesJoinSubscription.remove();
    }
    if (this.onAttendeesLeaveSubscription) {
      this.onAttendeesLeaveSubscription.remove();
    }
    if (this.onAttendeesMuteSubscription) {
      this.onAttendeesMuteSubscription.remove();
    }
    if (this.onAttendeesUnmuteSubscription) {
      this.onAttendeesUnmuteSubscription.remove();
    }
    if (this.onAddVideoTileSubscription) {
      this.onAddVideoTileSubscription.remove();
    }
    if (this.onRemoveVideoTileSubscription) {
      this.onRemoveVideoTileSubscription.remove();
    }
    if (this.onErrorSubscription) {
      this.onErrorSubscription.remove();
    }
  }

  onSwitchAudio = () => {
    try{
      if (!this.state.speakerOn) {
        if(Platform.OS === 'android') {
          InCallManager.stop();
        }
        setTimeout(() => {
          RNSwitchAudioOutput.selectAudioOutput(RNSwitchAudioOutput.AUDIO_SPEAKER)
        }, 1000)
        this.setState({ speakerOn: true })
      } else {
        RNSwitchAudioOutput.selectAudioOutput(RNSwitchAudioOutput.AUDIO_HEADPHONE)
        if(Platform.OS === 'android') {
          setTimeout(() => {
            InCallManager.start();
          }, 1000)
        }
        this.setState({ speakerOn: false })
      }
    } catch(err) {
      alert(JSON.stringify(err))
    }
  }

  render() {
    // const currentMuted = this.state.mutedAttendee.includes(this.props.selfAttendeeId);
    return (
      <View style={[styles.container, { justifyContent: 'flex-start' }]}>
        <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, margin: 'auto', zIndex: +9 }}>
          <LinearGradient colors={['transparent', '#504e5099', '#21200fe0', '#000',]} style={{ paddingTop: 30, paddingBottom: 20, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.title}>{this.props.meetingTitle}</Text>
            <View style={styles.buttonContainer}>
              <MuteButton muted={this.state.isMuted} onPress={() => {
                NativeFunction.setMute(!this.state.isMuted)
                this.setState({ isMuted: !this.state.isMuted })
              }} />
              <HangOffButton onPress={() => {
                NativeFunction.stopMeeting();
                this.props.stopMeeting()
              }} />
              <CameraButton disabled={this.state.selfVideoEnabled} onPress={() => NativeFunction.setCameraOn(!this.state.selfVideoEnabled)} />
              <AudioSwitchButton speakerOn={this.state.speakerOn} onPress={this.onSwitchAudio} />
            </View>
          </LinearGradient>
        </View>
        <View style={styles.overlayTopView}>
          <View style={styles.videoContainer}>
            {
              this.state.videoTiles.length > 0 ? this.state.videoTiles.map((item) =>
                <RNVideoRenderView
                  style={item.isLocal ? styles.smallVideo : styles.fullVideo}
                  key={item.tileId} tileId={item.tileId}
                  isOnTop={item.isLocal}
                />
              ) : null
            }
          </View>
        </View>
        {
          !!this.state.screenShareTile &&
          <React.Fragment>
            <Text style={styles.title}>Screen Share</Text>
            <View style={styles.videoContainer}>
              <RNVideoRenderView style={styles.screenShare} key={this.state.screenShareTile} tileId={this.state.screenShareTile} />
            </View>
          </React.Fragment>
        }
        {/* <Text style={styles.title}>Attendee</Text>
        <FlatList
          style={styles.attendeeList}
          data={this.state.attendees}
          renderItem={({ item }) => <AttendeeItem attendeeName={attendeeNameMap[item] ? attendeeNameMap[item] : item} muted={this.state.mutedAttendee.includes(item)} />}
          keyExtractor={(item) => item}
        /> */}
      </View>
    );
  }
}
