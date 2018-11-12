import { createPostInstance } from './createPostInstance'

export const createNewPost = async (_, res) => {
  try {
      const postInstance = createPostInstance({
        content: 'is fish meat?',
      })

      return res.send(await postInstance.save())
  } catch (err) {
    console.log('ERROR STATUS>>>>>>', err.message)
    return res.status(500).send(err.message)
  }
}
