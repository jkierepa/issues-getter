import React, { useState } from 'react'
import { View, Text, ScrollView, TextInput, Pressable, StyleSheet } from 'react-native'

import CommentElement from '@components/CommentElement/CommentElement'
import SafeArea from '@components/SafeArea/SafeArea'
import Status from '@components/Status/Status'

import { DetailsContainerLayoutProps } from '@appTypes/propTypes'
import { colors } from '@theme/colors'
import { fontsizes } from '@theme/fontsizes'
import getTimestampString from '@utils/getTimestampString'

const DetailsContainerLayout = ({ comments, title, id, state, createdAt, body, setInput, input, onAddCommentPressed }: DetailsContainerLayoutProps): React.ReactElement => {
  const [isPressed, setIsPressed] = useState<boolean>()
  const timestampString = getTimestampString(createdAt)

  const handleAddCommentPressed = () => {
    setIsPressed(true)
    onAddCommentPressed()
  }

  return (
    <SafeArea>
        <View style={styles.outerContainer}>
            <View style={styles.container}>
                <ScrollView style={[styles.bodyScrollView, styles.border]}>
                <View>
                    <View style={styles.rowContainer}>
                        <Text style={styles.id}>{id}</Text>
                        <Text style={styles.id}>{timestampString}</Text>
                        <Status state={state} fontsize="s"/>
                    </View>
                    <Text style={styles.title}>{title}</Text>
                </View>
                    <Text style={styles.bodyText}>{body}</Text>
                </ScrollView>
                <ScrollView style={styles.commentsScrollView}>
                {comments.map((c, index) => (
                    <CommentElement key={c.timestamp} timestamp={c.timestamp} comment={c.comment} index={index}/>
                ))}
                </ScrollView>
                <TextInput value={input} onChange={(e) => setInput(e.nativeEvent.text)} placeholder={'Your comment...'} multiline={true} placeholderTextColor={colors.foreground.reverse} style={styles.input}/>
                <Pressable onPress={() => handleAddCommentPressed()} style={[styles.button, isPressed && styles.pressed]} onPressOut={() => setIsPressed(false)}>
                    <Text style={styles.text}>{'Add your comment'}</Text>
                </Pressable>
            </View>
        </View>
    </SafeArea>
  )
}

/*

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
            <Text style={styles.id}>{id}</Text>
            <Status state={state} fontsize="s"/>
          </View>
            <Text style={styles.title}>{title}</Text>
        </View>
*/

export default DetailsContainerLayout

const styles = StyleSheet.create({
  border: {
    borderTopLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  bodyScrollView: {
    backgroundColor: colors.secondary.main,

    padding: 10
  },
  container: {
    flex: 1,
    width: '90%'
  },
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  commentsScrollView: {
    maxHeight: '20%',
    marginBottom: 5
  },
  input: {
    backgroundColor: colors.primary.dark,
    color: colors.foreground.reverse,

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,

    fontSize: fontsizes.s,
    textAlignVertical: 'top',

    marginBottom: 3,
    padding: 10
  },
  button: {
    backgroundColor: colors.secondary.main,

    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,

    padding: 10
  },
  text: {
    textAlign: 'center',
    fontSize: fontsizes.l
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
  },
  bodyText: {
    padding: 10
  }
})
