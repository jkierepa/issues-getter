import React from 'react'
import { fontsizes } from '@theme/fontsizes'
import { Issue } from './appTypes'
import { Comment } from '@appTypes/appTypes'

export type HomeContainerLayoutProps = {
    onEndReached(): void;
    onRefresh():void;
    setSearchPhrase(value: string):void
    searchPhrase: string;
    selectedIssues: Issue[]
}

export type IssueListProps = {
    issues: Issue[]
    onEndReached(): void
    onRefresh(): void
}

export type IssueItemProps = { index?: number } & Issue

export type StatusProps = {
    state: string;
    fontsize?: keyof typeof fontsizes
}

export type DetailsContainerLayoutProps = {
    comments: Comment[];
    input: string;
    setInput(value: string): void;
    onAddCommentPressed(): void;
} & Issue

export type CommentProps = {index: number} & Comment

export type SafeAreaProps = {
    children?: React.ReactNode
}
