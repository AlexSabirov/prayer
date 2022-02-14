import { v4 } from 'uuid';

import { Board } from '../type/data';

const id = v4();
const id2 = v4();
const id3 = v4();

export const initialState: Board = {
  isAuthorized: false,
  token: '',
  columns: {
    [id]: {
      id: id,
      title: 'Column 1',
      prayers: {
        [id2]: {
          id: id2,
          title: 'Prayer 1',
          checked: false,
          comments: { [id3]: { id: id3, title: 'Comment 1' } },
        },
      },
    },
  },
};
