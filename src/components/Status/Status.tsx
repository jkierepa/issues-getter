import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import { StatusProps } from '@appTypes/propTypes'
import { fontsizes } from '@theme/fontsizes'
import { colors } from '@theme/colors'

const Status = ({ state, fontsize = 'm' }: StatusProps): React.ReactElement => {
  return <View style={styles.container}><Text style={[{ fontSize: fontsizes[fontsize] }, styles.state, state === 'closed' && styles.closed]}>{state}</Text></View>
}

export default Status

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  state: {
    backgroundColor: colors.special.good,

    color: colors.foreground.reverse,

    borderRadius: 50,

    paddingHorizontal: 5,
    paddingVertical: 2
  },
  closed: {
    backgroundColor: colors.special.bad
  }
})
