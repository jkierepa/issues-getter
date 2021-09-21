import React from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { SafeAreaProps } from '@appTypes/propTypes'
import { colors } from '@theme/colors'

const SafeArea = ({ children }: SafeAreaProps): React.ReactElement => <SafeAreaView style={styles.container}>{children}</SafeAreaView>

export default SafeArea

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: colors.primary.light
  }
})
