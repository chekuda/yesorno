import { createUserInstance } from './createUserInstance'

export const createNewUser = async (_, res) => {
  try {
      const userInstance = createUserInstance({
        password: 'test1',
      })

      res.status(200).send(await userInstance.save())
  } catch (err) {
    console.log('ERROR STATUS>>>>>>', err.message)
    res.status(500).send(err.message)
  }
}
