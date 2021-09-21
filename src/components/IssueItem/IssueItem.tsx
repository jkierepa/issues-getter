import React, { useState } from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Status from '@components/Status/Status'

import { HomeScreenNavProps } from '@appTypes/navTypes'
import { IssueItemProps } from '@appTypes/propTypes'
import { colors } from '@theme/colors'
import { fontsizes } from '@theme/fontsizes'
import getTimestampString from '@utils/getTimestampString'

const IssueItem = ({ id, title, state, body, createdAt, index }: IssueItemProps):React.ReactElement => {
  const { push } = useNavigation<HomeScreenNavProps>()
  const [isPressed, setIsPressed] = useState<boolean>(false)
  const isReversed = Boolean(index && index % 2)
  const timestampString = getTimestampString(createdAt)

  const handleIssuePressed = () => {
    setIsPressed(true)
    push('Details', { id, body, title, state, createdAt })
  }

  return (
    <Pressable style={[styles.issue, isPressed && styles.pressed, isReversed && styles.reverseBorders]} onPress={() => handleIssuePressed()} onPressOut={() => setIsPressed(false)}>
        <View>
          <View style={styles.rowContainer}>
            <Text style={styles.id}>{id}</Text>
            <Text style={styles.id}>{timestampString}</Text>
            <Status state={state} fontsize="s"/>
          </View>
            <Text style={styles.title}>{title}</Text>
        </View>
    </Pressable>)
}

export default IssueItem

const styles = StyleSheet.create({
  issue: {
    width: '100%',

    backgroundColor: colors.secondary.main,

    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,

    padding: 10
  },
  reverseBorders: {
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,

    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  pressed: {
    opacity: 0.4
  },
  id: {
    paddingVertical: 2
  },
  title: {
    fontSize: fontsizes.m
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginBottom: 10
  }
})
