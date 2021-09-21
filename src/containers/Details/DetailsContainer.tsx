import React, { useState, useEffect } from 'react'
import { useRoute } from '@react-navigation/native'

import { useAppDispatch, useAppSelector } from '@store/store'
import { addComment } from '@store/comments/slice'

import { DetailsRouteParamsProps } from '@appTypes/navTypes'
import { Comment } from '@appTypes/appTypes'

import DetailsContainerLayout from './DetailsContainerLayout'

const DetailsContainer = (): React.ReactElement => {
  const { body, createdAt, state, title, id } = useRoute<DetailsRouteParamsProps>().params
  const commentedIssues = useAppSelector((state) => state.comments.commentedIssues)
  const dispatch = useAppDispatch()

  const [comments, setComments] = useState<Comment[]>([])
  const [text, setText] = useState<string>('')

  useEffect(() => {
    const target = commentedIssues.find((issue) => issue.issueId === id)
    if (target) {
      setComments([...target.comments])
    }
  }, [commentedIssues])

  const handleAddCommentPressed = () => {
    dispatch(addComment({ issueId: id, timestamp: new Date().getTime(), comment: text }))
  }

  return (
    <DetailsContainerLayout setInput={value => setText(value)} input={text} body={body} id={id} comments={comments} state={state} createdAt={createdAt} title={title} onAddCommentPressed={() => handleAddCommentPressed()}/>
  )
}

export default DetailsContainer
