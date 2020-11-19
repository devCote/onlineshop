import { createSelector } from 'reselect'

const dataSelect = (state) => state.collection

export const selectShopData = createSelector(
  [dataSelect],
  (collection) => collection.data
)
