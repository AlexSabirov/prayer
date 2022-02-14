import { createAction } from '@reduxjs/toolkit';

import { CreateColumnBody } from '../../../api/axios/type';

export const GetColumnsAction = createAction('BOARD/GET_COLUMNS');
export const AddColumnsAction = createAction<CreateColumnBody>('BOARD/ADD_COLUMN');
