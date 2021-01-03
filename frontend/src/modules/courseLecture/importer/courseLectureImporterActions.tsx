import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/courseLecture/importer/courseLectureImporterSelectors';
import CourseLectureService from 'src/modules/courseLecture/courseLectureService';
import fields from 'src/modules/courseLecture/importer/courseLectureImporterFields';
import { i18n } from 'src/i18n';

const courseLectureImporterActions = importerActions(
  'COURSELECTURE_IMPORTER',
  selectors,
  CourseLectureService.import,
  fields,
  i18n('entities.courseLecture.importer.fileName'),
);

export default courseLectureImporterActions;