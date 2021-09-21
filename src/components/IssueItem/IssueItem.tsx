import { Issue } from '@appTypes/appTypes'
import { HomeScreenNavProps } from '@appTypes/navTypes'
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'

import { View, Text, Pressable } from 'react-native'

export type IssueItemProps = {
    onIssuePressed(): void;
} & Issue

const IssueItem = ({ id, title, state, body, createdAt, onIssuePressed }: IssueItemProps) => {
  const { push } = useNavigation<HomeScreenNavProps>()
  const [isPressed, setIsPressed] = useState<boolean>(false)

  const handleIssuePressed = () => {
    setIsPressed(true)
    push('Details')
  }

  return (
    <Pressable style={[{ width: '100%', borderColor: 'blue', borderWidth: 2 }, isPressed && { opacity: 0.4 }]} onPress={() => handleIssuePressed()} onPressOut={() => setIsPressed(false)}>
        <View>
            <Text>{id}</Text>
            <Text>{title}</Text>
            <Text>{state}</Text>
        </View>
    </Pressable>)
}

export default IssueItem
