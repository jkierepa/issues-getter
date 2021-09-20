import { Octokit } from '@octokit/core'
import { paginateRest } from '@octokit/plugin-paginate-rest'
import { GITHUB_AUTH_TOKEN } from 'react-native-dotenv'

const OctokitWithPlugins = Octokit.plugin(paginateRest)
const octokit = new OctokitWithPlugins({ auth: GITHUB_AUTH_TOKEN })

export default octokit
