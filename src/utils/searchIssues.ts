import { Issue } from '@appTypes/appTypes'

const selectIssues = (issues: Issue[], phrase: string): Issue[] => {
  const searchMatches = issues.filter(issue => {
    const reg = new RegExp(`^${phrase}`, 'i')
    if (reg.test(issue.title)) {
      return issue
    }
    return null
  })
  return searchMatches
}

export default selectIssues
