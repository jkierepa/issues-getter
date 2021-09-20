import 'dotenv/config'

export default {
  name: 'IssuesGetter',
  version: '0.0.1',
  extra: {
    enableComments: process.env.COOLAPP_COMMENTS === 'true'
  }
}
