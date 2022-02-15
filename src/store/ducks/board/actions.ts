import { createAction } from '@reduxjs/toolkit';

import { CreateColumnBody, UpdateColumnBody } from '../../../api/axios/type';

export const GetColumnsAction = createAction('BOARD/GET_COLUMNS');
export const AddColumnsAction = createAction<CreateColumnBody>('BOARD/ADD_COLUMN');
export const UpdateColumnAction = createAction<UpdateColumnBody>('BOARD/UPDATE_COLUMN');
