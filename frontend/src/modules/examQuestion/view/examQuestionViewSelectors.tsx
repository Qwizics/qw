import { createSelector } from 'reselect';

const selectRaw = (state) => state.examQuestion.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const examQuestionViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default examQuestionViewSelectors;
