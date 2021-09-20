export type Comment = {
    timestamp: number;
    comment: string;
}

export type CommentedIssue = {
    issueId: number;
    comments: Comment[]
}

export type Issue = {
    id: number;
    title: string;
    body: string;
    state: string;
}