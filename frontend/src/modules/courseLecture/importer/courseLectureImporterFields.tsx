import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'lectureTitle',
    label: i18n('entities.courseLecture.fields.lectureTitle'),
    schema: schemas.string(
      i18n('entities.courseLecture.fields.lectureTitle'),
      {},
    ),
  },
  {
    name: 'lectureType',
    label: i18n('entities.courseLecture.fields.lectureType'),
    schema: schemas.string(
      i18n('entities.courseLecture.fields.lectureType'),
      {},
    ),
  },
  {
    name: 'lectureUrl',
    label: i18n('entities.courseLecture.fields.lectureUrl'),
    schema: schemas.string(
      i18n('entities.courseLecture.fields.lectureUrl'),
      {},
    ),
  },
];