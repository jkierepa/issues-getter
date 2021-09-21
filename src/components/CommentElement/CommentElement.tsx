import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { fontsizes } from '@theme/fontsizes'
import { colors } from '@theme/colors'
import getTimestampString from '@utils/getTimestampString'
import { CommentProps } from '@appTypes/propTypes'

const CommentElement = ({ comment, timestamp, index }: CommentProps): React.ReactElement => {
  const timestampString = getTimestampString(timestamp)
  const isReversed = Boolean(index && index % 2)

  return (
    <View style={[styles.container, isReversed && styles.reverseBorders]}>
        <View style={styles.timestamp}>
          <Text style={styles.text}>{timestampString}</Text>
        </View>
        <Text style={styles.text}>{comment}</Text>
    </View>
  )
}

export default CommentElement

const styles = StyleSheet.create({
  container: {
    width: '100%',

    backgroundColor: colors.primary.dark,

    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,

    marginVertical: 2,
    padding: 10
  },
  reverseBorders: {
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,

    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  timestamp: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  text: {
    fontSize: fontsizes.s,
    color: colors.foreground.reverse
  }
})
