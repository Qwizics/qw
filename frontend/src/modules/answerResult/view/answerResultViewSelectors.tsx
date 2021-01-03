import { createSelector } from 'reselect';

const selectRaw = (state) => state.answerResult.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const answerResultViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default answerResultViewSelectors;
