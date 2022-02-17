import { createAction } from '@reduxjs/toolkit';

import {
  CreateColumnBody,
  RemoveColumnBody,
  UpdateColumnBody,
} from '../../../api/axios/type';

export const GetColumnsAction = createAction('BOARD/GET_COLUMNS');
export const AddColumnsAction = createAction<CreateColumnBody>('BOARD/ADD_COLUMN');
export const UpdateColumnAction = createAction<UpdateColumnBody>('BOARD/UPDATE_COLUMN');
export const RemoveColumnAction = createAction<RemoveColumnBody>('BOARD/REMOVE_COLUMN');
export const GetPrayersAction = createAction('BOARD/COLUMN/GET_PRAYERS');
