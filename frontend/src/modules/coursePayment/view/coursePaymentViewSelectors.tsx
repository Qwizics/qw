import { createSelector } from 'reselect';

const selectRaw = (state) => state.coursePayment.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const coursePaymentViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default coursePaymentViewSelectors;
