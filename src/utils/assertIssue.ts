import { Issue } from '@appTypes/appTypes'

const assertIssue = (response: any): Issue[] | undefined => {
  if (!response.data) return undefined
  const issues: Issue[] = []
  response.data.forEach((element: any) => {
    if (element.title && element.id && element.state && element.created_at) {
      const issue: Issue = { body: element.body, title: element.title, state: element.state, id: element.id, createdAt: element.created_at }
      issues.push(issue)
    }
  })
  return issues
}

export default assertIssue
