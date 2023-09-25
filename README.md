# JavaScript Action to Create a Github Issue

![CI](https://github.com/shimul-org/create-issue-action/actions/workflows/ci.yml/badge.svg?event=push&branch=main)

This action opens a new issue in Github with a provided title, body and list of assignees.

## Inputs

### `token`
**Required** A github token with issue:write scope.

### `title`
**Required** The title of the issue

### `body`
**Required** The body of the issue

### `assignees`
The list of assignees to assign the issue to

## Outputs

### `issue`
The created issue in json format

## Example Usage

```yaml
- name: Creat Issue
  id: create-issue
  uses: shimul-org/create-issue-action@v1
  with:
    token: ${{ secrets.GITHUB_TOKEN }}
    title: Test Title
    body: Test Body
    assignees: |
      abcdef
      ghijk
```