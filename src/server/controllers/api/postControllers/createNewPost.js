import { createPostInstance } from './createPostInstance'

export const createNewPost = async (_, res) => {
  try {
      const postInstance = createPostInstance({
        content: 'test1',
      })

      res.status(200).send(await postInstance.save())
  } catch (err) {
    console.log('ERROR STATUS>>>>>>', err.message)
    res.status(500).send(err.message)
  }
}
