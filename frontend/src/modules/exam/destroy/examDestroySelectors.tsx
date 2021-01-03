import { createSelector } from 'reselect';

const selectRaw = (state) => state.exam.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const examDestroySelectors = {
  selectLoading,
};

export default examDestroySelectors;
