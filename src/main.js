const core = require('@actions/core')
const github = require('@actions/github')

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
async function run() {
  try {
    const token = core.getInput('token', { required: true })
    const title = core.getInput('title', { required: true })
    const body = core.getInput('body', { required: true })
    const assignees = core.getInput('assignees')

    // Debug logs are only output if the `ACTIONS_STEP_DEBUG` secret is true
    core.debug(`Sending POST request to github ...`)

    const ocotokit = github.getOctokit(token)
    const response = await ocotokit.rest.issues.create({
      ...github.context.repo,
      title,
      body,
      assignees: assignees && assignees.split('\n') || undefined
    })
    core.setOutput('issue', response.data)
  } catch (error) {
    core.setFailed(error.message)
  }
}

module.exports = {
  run
}
