import octokit from './octokit'

const fetchIssues = async (owner: string, repo: string, page: number = 1) => {
  const endpoint = `/repos/${owner}/${repo}/issues`
  const resp = await octokit.request(`GET ${endpoint}`, {
    owner: owner,
    repo: repo,
    page,
    per_page: 20
  })
  return resp
}

export default fetchIssues
