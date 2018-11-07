import { createPostInstance } from './createPostInstance'

export const createNewPost = async (_, res) => {
  try {
      const postInstance = createPostInstance({
        content: 'Are you living in a Truman Show?',
      })

      return res.send(await postInstance.save())
  } catch (err) {
    console.log('ERROR STATUS>>>>>>', err.message)
    return res.status(500).send(err.message)
  }
}
