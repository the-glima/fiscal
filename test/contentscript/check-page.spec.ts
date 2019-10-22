import {checkPage} from '../../app/contentscript/check-page'

describe('Content Script: Check Page URL', () => {
  test('should return true given an Azure\'s PR URL', async () => {
    expect(checkPage('https://dev.azure.com/payvision/B-Ops/_git/PayOn.API/pullRequest/12593')).toBeTruthy()
    expect(checkPage('https://dev.azure.com/payvision/B-Ops/_git/OpsFlow/pullrequest/12184?_a=files')).toBeTruthy()
    expect(checkPage('https://dev.azure.com/payvision/B-Ops/_git/PayOn.API/pullRequest/12593?_a=commits')).toBeTruthy()
    expect(checkPage('https://dev.azure.com/payvision/B-Ops/_git/PayOn.API/pullrequest/12593?_a=overview')).toBeTruthy()
  })

  test('should return true given a Github\'s PR URL', async () => {
    expect(checkPage('https://github.com/the-glima/fiscal/pull/5')).toBeTruthy()
    expect(checkPage('https://github.com/the-glima/fiscal/pull/5/commits')).toBeTruthy()
    expect(checkPage('https://github.com/the-glima/fiscal/pull/5/checks')).toBeTruthy()
    expect(checkPage('https://github.com/the-glima/fiscal/pull/5/files')).toBeTruthy()
  })

  test('should return false given a random URL', async () => {
    expect(checkPage('https://www.example.com')).toBeFalsy()
  })

  test('should return false given an Azure\'s non PR page', async () => {
    expect(checkPage('https://dev.azure.com/payvision/B-Ops/_backlogs/backlog/Resistance/Stories')).toBeFalsy()
  })

  test('should return false given a Github\'s non PR page', async () => {
    expect(checkPage('https://github.com/the-glima/fiscal')).toBeFalsy()
  })
})
