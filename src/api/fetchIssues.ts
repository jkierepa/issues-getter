import octokit from './octokit'

const fetchIssues = async (owner: string, repo: string) => {
  const endpoint = `/repos/${owner}/${repo}/issues`
  const resp = await octokit.request(`GET ${endpoint}`, {
    owner: owner,
    repo: repo
  })
  return resp
}

export default fetchIssues
