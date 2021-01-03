import { createSelector } from 'reselect';

const selectRaw = (state) => state.coursePayment.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const coursePaymentDestroySelectors = {
  selectLoading,
};

export default coursePaymentDestroySelectors;
