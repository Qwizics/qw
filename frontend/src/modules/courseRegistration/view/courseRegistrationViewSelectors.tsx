import { createSelector } from 'reselect';

const selectRaw = (state) => state.courseRegistration.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const courseRegistrationViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default courseRegistrationViewSelectors;
