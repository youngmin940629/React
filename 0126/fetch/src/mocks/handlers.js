import {rest} from 'msw'

export const handlers = [
  rest.get('/login', async(req, res, ctx) => {
    ctx.json({
      id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
      firstName: 'John',
      lastName: 'Maverick',
    })
  }),
]