import { createSelector } from 'reselect';

const selectRaw = (state) => state.courseLecture.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const courseLectureDestroySelectors = {
  selectLoading,
};

export default courseLectureDestroySelectors;
