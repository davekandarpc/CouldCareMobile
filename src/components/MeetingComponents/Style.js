/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: MIT-0
 */

import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../styles'

const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: Colors.WHITE
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: '15%',
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    fontWeight: '700'
  },
  subtitle: {
    marginBottom: 12,
    marginTop: 12,
    color: Colors.GRAY_DARK
  },
  // videoContainer: {
  //   justifyContent: 'space-around',
  //   width: '100%',
  // },
  selfVideo: {
    width: 140,
    height: 180,
    position: "absolute",
    top: 70, right: 5,
    zIndex: 1,
  },
  video: {
    width: "100%",
    aspectRatio: 8 / 16,
    zIndex: -1,
    position: "absolute",
    left: 0, top: 0, bottom: 0, right: 0,
    height: HEIGHT
  },
  videoTile: {
    width: '100%',
    height: '100%'
  },
  screenShare: {
    width: '90%',
    margin: '1%',
    aspectRatio: 16 / 9,
  },
  attendeeList: {
    flex: 1,
    width: '80%'
  },
  attendeeContainer: {
    fontSize: 20,
    margin: 5,
    padding: 5,
    height: 30,
    backgroundColor: '#eee',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  attendeeMuteImage: {
    resizeMode: 'contain',
    width: 20,
    height: 20
  },
  inputBox: {
    height: 40,
    borderColor: Colors.FONT_COLOR,
    borderWidth: 1,
    margin: 5,
    width: '50%',
    padding: 10,
    color: Colors.FONT_COLOR
  },
  meetingButton: {
    resizeMode: 'contain',
    width: 50,
    height: 50
  },
  videoContainer: {
    width: '100%',
    overflow: 'visible',
    position: "absolute",
    top: 0, left: 0, right: 0, bottom: 0,
  },
  smallVideo:{
    width: 140,
    height: 140,
    position: "absolute",
    top: 20, right: 20,
    zIndex: 1,
  },
  fullVideo:{
    width: "100%",
    aspectRatio: 8/16,
    zIndex: -1,
    position: "absolute",
    left: 0, top: 0 ,  bottom: 0, right: 0,
},
overlayTopView:{
  position: "absolute", top: 0, left: 0, width: "100%", height: "100%", justifyContent: "space-evenly"
}
});

export default styles;
