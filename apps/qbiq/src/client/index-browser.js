
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.5.2
 * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
 */
Prisma.prismaVersion = {
  client: "5.5.2",
  engine: "aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.PersonScalarFieldEnum = {
  id: 'id',
  username: 'username',
  firstName: 'firstName',
  lastName: 'lastName',
  password: 'password',
  phoneCode: 'phoneCode',
  phoneNumber: 'phoneNumber',
  streetName: 'streetName',
  city: 'city',
  areaCode: 'areaCode',
  country: 'country',
  email: 'email',
  emailVerified: 'emailVerified',
  payerType: 'payerType',
  image: 'image',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AccountScalarFieldEnum = {
  userId: 'userId',
  type: 'type',
  provider: 'provider',
  providerAccountId: 'providerAccountId',
  refresh_token: 'refresh_token',
  access_token: 'access_token',
  expires_at: 'expires_at',
  token_type: 'token_type',
  scope: 'scope',
  id_token: 'id_token',
  session_state: 'session_state',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SessionScalarFieldEnum = {
  sessionToken: 'sessionToken',
  userId: 'userId',
  expiresAt: 'expiresAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.VerificationTokenScalarFieldEnum = {
  identifier: 'identifier',
  token: 'token',
  expires: 'expires'
};

exports.Prisma.AuthenticatorScalarFieldEnum = {
  credentialID: 'credentialID',
  userId: 'userId',
  providerAccountId: 'providerAccountId',
  credentialPublicKey: 'credentialPublicKey',
  counter: 'counter',
  credentialDeviceType: 'credentialDeviceType',
  credentialBackedUp: 'credentialBackedUp',
  transports: 'transports'
};

exports.Prisma.PaymentScalarFieldEnum = {
  id: 'id',
  patientName: 'patientName',
  phoneNumber: 'phoneNumber',
  paymentMethod: 'paymentMethod',
  totalPayableAmount: 'totalPayableAmount',
  discountApplied: 'discountApplied',
  paidAmount: 'paidAmount',
  reasonForVisit: 'reasonForVisit'
};

exports.Prisma.AppointmentScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  appointmentTypeId: 'appointmentTypeId',
  patientId: 'patientId',
  locationId: 'locationId',
  providerId: 'providerId',
  startDatetime: 'startDatetime',
  endDatetime: 'endDatetime',
  voided: 'voided',
  voidedBy: 'voidedBy',
  dateVoided: 'dateVoided',
  voidReason: 'voidReason',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate'
};

exports.Prisma.AppointmentTypeScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  name: 'name',
  description: 'description',
  duration: 'duration',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate'
};

exports.Prisma.LocationScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  name: 'name',
  description: 'description',
  address1: 'address1',
  address2: 'address2',
  city: 'city',
  stateProvince: 'stateProvince',
  country: 'country',
  postalCode: 'postalCode',
  latitude: 'latitude',
  longitude: 'longitude',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate'
};

exports.Prisma.PatientScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  givenName: 'givenName',
  middleName: 'middleName',
  familyName: 'familyName',
  gender: 'gender',
  birthdate: 'birthdate',
  dead: 'dead',
  deathDate: 'deathDate',
  causeOfDeath: 'causeOfDeath',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate'
};

exports.Prisma.ProviderScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  name: 'name',
  identifier: 'identifier',
  description: 'description',
  voided: 'voided',
  voidedBy: 'voidedBy',
  dateVoided: 'dateVoided',
  voidReason: 'voidReason',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate'
};

exports.Prisma.FormScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  name: 'name',
  description: 'description',
  version: 'version',
  retired: 'retired',
  retiredBy: 'retiredBy',
  dateRetired: 'dateRetired',
  retiredReason: 'retiredReason',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate',
  fieldId: 'fieldId'
};

exports.Prisma.FormEncounterScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  formId: 'formId',
  encounterId: 'encounterId',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate'
};

exports.Prisma.FormResourceScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  formId: 'formId',
  resourceId: 'resourceId',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate'
};

exports.Prisma.FormSubmissionScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  formId: 'formId',
  encounterId: 'encounterId',
  submissionDate: 'submissionDate',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate'
};

exports.Prisma.FieldScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  name: 'name',
  description: 'description',
  fieldType: 'fieldType',
  conceptId: 'conceptId',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate'
};

exports.Prisma.FieldAnswerScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  formSubmissionId: 'formSubmissionId',
  fieldId: 'fieldId',
  value: 'value',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate'
};

exports.Prisma.FieldOptionScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  fieldId: 'fieldId',
  name: 'name',
  description: 'description',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate'
};

exports.Prisma.EncounterScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  encounterTypeId: 'encounterTypeId',
  patientId: 'patientId',
  locationId: 'locationId',
  formId: 'formId',
  providerId: 'providerId',
  startDatetime: 'startDatetime',
  endDatetime: 'endDatetime',
  voided: 'voided',
  voidedBy: 'voidedBy',
  dateVoided: 'dateVoided',
  voidReason: 'voidReason',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate'
};

exports.Prisma.EncounterTypeScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  name: 'name',
  description: 'description',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate'
};

exports.Prisma.ObsScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  conceptId: 'conceptId',
  encounterId: 'encounterId',
  obsDatetime: 'obsDatetime',
  valueDatetime: 'valueDatetime',
  valueNumeric: 'valueNumeric',
  valueText: 'valueText',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate'
};

exports.Prisma.OrderScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  conceptId: 'conceptId',
  encounterId: 'encounterId',
  orderDatetime: 'orderDatetime',
  instructions: 'instructions',
  dosage: 'dosage',
  route: 'route',
  frequency: 'frequency',
  asNeeded: 'asNeeded',
  prn: 'prn',
  quantity: 'quantity',
  units: 'units',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate',
  orderFrequencyId: 'orderFrequencyId',
  orderRouteId: 'orderRouteId',
  orderTypeId: 'orderTypeId',
  orderUnitId: 'orderUnitId'
};

exports.Prisma.OrderFrequencyScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  name: 'name',
  description: 'description',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate'
};

exports.Prisma.OrderRouteScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  name: 'name',
  description: 'description',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate'
};

exports.Prisma.OrderTypeScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  name: 'name',
  description: 'description',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate'
};

exports.Prisma.OrderUnitScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  name: 'name',
  description: 'description',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate'
};

exports.Prisma.ConceptScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  name: 'name',
  description: 'description',
  dataType: 'dataType',
  class: 'class',
  isRetired: 'isRetired',
  retiredBy: 'retiredBy',
  dateRetired: 'dateRetired',
  retiredReason: 'retiredReason',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate',
  conceptClassId: 'conceptClassId',
  conceptDatatypeId: 'conceptDatatypeId',
  conceptMapId: 'conceptMapId',
  conceptSetId: 'conceptSetId',
  conceptSourceId: 'conceptSourceId'
};

exports.Prisma.ConceptAnswerScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  conceptId: 'conceptId',
  answerConceptId: 'answerConceptId',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate'
};

exports.Prisma.ConceptClassScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  name: 'name',
  description: 'description',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate'
};

exports.Prisma.ConceptDatatypeScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  name: 'name',
  description: 'description',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate'
};

exports.Prisma.ConceptMapScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  name: 'name',
  description: 'description',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate'
};

exports.Prisma.ConceptNameScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  conceptId: 'conceptId',
  name: 'name',
  locale: 'locale',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate'
};

exports.Prisma.ConceptNumericScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  conceptId: 'conceptId',
  hiAbsolute: 'hiAbsolute',
  hiCritical: 'hiCritical',
  hiNormal: 'hiNormal',
  lowAbsolute: 'lowAbsolute',
  lowCritical: 'lowCritical',
  lowNormal: 'lowNormal',
  units: 'units',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate'
};

exports.Prisma.ConceptProposalScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  conceptId: 'conceptId',
  name: 'name',
  description: 'description',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate'
};

exports.Prisma.ConceptSetScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  name: 'name',
  description: 'description',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate'
};

exports.Prisma.ConceptSourceScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  name: 'name',
  description: 'description',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate'
};

exports.Prisma.ConceptWordScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  conceptId: 'conceptId',
  word: 'word',
  locale: 'locale',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate'
};

exports.Prisma.ResourceScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  name: 'name',
  description: 'description',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate'
};

exports.Prisma.BlogPostScalarFieldEnum = {
  id: 'id',
  title: 'title',
  content: 'content',
  context: 'context',
  authorId: 'authorId',
  spaceTimeCoordinatesId: 'spaceTimeCoordinatesId'
};

exports.Prisma.BlogPostTagScalarFieldEnum = {
  id: 'id',
  name: 'name',
  descriptor: 'descriptor'
};

exports.Prisma.BlogPostTagArrowScalarFieldEnum = {
  id: 'id',
  postId: 'postId',
  tagId: 'tagId'
};

exports.Prisma.BlogPostAuthorScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.SpaceTimeCoordinatesScalarFieldEnum = {
  id: 'id',
  latitude: 'latitude',
  longitude: 'longitude',
  startTime: 'startTime',
  pauseTime: 'pauseTime',
  stopTime: 'stopTime',
  timezone: 'timezone',
  blogPostId: 'blogPostId'
};

exports.Prisma.BudgetEntryScalarFieldEnum = {
  id: 'id',
  serviceId: 'serviceId',
  cost: 'cost',
  discount: 'discount',
  promotion: 'promotion',
  subtotal: 'subtotal',
  percentChange: 'percentChange',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  budgetId: 'budgetId'
};

exports.Prisma.ServiceScalarFieldEnum = {
  id: 'id',
  description: 'description',
  category: 'category',
  metadata: 'metadata',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.BudgetScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  fiscalYear: 'fiscalYear',
  reportId: 'reportId'
};

exports.Prisma.ReportScalarFieldEnum = {
  id: 'id',
  budgetId: 'budgetId',
  totalCost: 'totalCost',
  totalDiscount: 'totalDiscount',
  totalPromotion: 'totalPromotion',
  totalSubtotal: 'totalSubtotal',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.BudUserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  password: 'password',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.BudgetBudUserScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  budgetId: 'budgetId',
  role: 'role',
  ability: 'ability',
  category: 'category'
};

exports.Prisma.BudEventScalarFieldEnum = {
  id: 'id',
  type: 'type',
  description: 'description',
  categoryList: 'categoryList',
  metadata: 'metadata',
  budUserId: 'budUserId',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.Country = exports.$Enums.Country = {
  Nepal: 'Nepal',
  Afghanistan: 'Afghanistan',
  Albania: 'Albania',
  Algeria: 'Algeria',
  Andorra: 'Andorra',
  Angola: 'Angola',
  Antigua: 'Antigua',
  Argentina: 'Argentina',
  Armenia: 'Armenia',
  Australia: 'Australia',
  Austria: 'Austria',
  Azerbaijan: 'Azerbaijan',
  Bahamas: 'Bahamas',
  Bahrain: 'Bahrain',
  Bangladesh: 'Bangladesh',
  Barbados: 'Barbados',
  Belarus: 'Belarus',
  Belgium: 'Belgium',
  Belize: 'Belize',
  Benin: 'Benin',
  Bhutan: 'Bhutan',
  Bolivia: 'Bolivia',
  Bosnia: 'Bosnia',
  Botswana: 'Botswana',
  Brazil: 'Brazil',
  Brunei: 'Brunei',
  Bulgaria: 'Bulgaria',
  Burkina: 'Burkina',
  Burundi: 'Burundi',
  Cote: 'Cote',
  Cabo: 'Cabo',
  Cambodia: 'Cambodia',
  Cameroon: 'Cameroon',
  Canada: 'Canada',
  Central: 'Central',
  Chad: 'Chad',
  Chile: 'Chile',
  China: 'China',
  Colombia: 'Colombia',
  Comoros: 'Comoros',
  Congo: 'Congo',
  Costa: 'Costa',
  Croatia: 'Croatia',
  Cuba: 'Cuba',
  Cyprus: 'Cyprus',
  Czechia: 'Czechia',
  Democratic: 'Democratic',
  Denmark: 'Denmark',
  Djibouti: 'Djibouti',
  Dominica: 'Dominica',
  Dominican: 'Dominican',
  Ecuador: 'Ecuador',
  Egypt: 'Egypt',
  El: 'El',
  Equatorial: 'Equatorial',
  Eritrea: 'Eritrea',
  Estonia: 'Estonia',
  Eswatini: 'Eswatini',
  Ethiopia: 'Ethiopia',
  Fiji: 'Fiji',
  Finland: 'Finland',
  France: 'France',
  Gabon: 'Gabon',
  Gambia: 'Gambia',
  Georgia: 'Georgia',
  Germany: 'Germany',
  Ghana: 'Ghana',
  Greece: 'Greece',
  Grenada: 'Grenada',
  Guatemala: 'Guatemala',
  Guinea: 'Guinea',
  Guyana: 'Guyana',
  Haiti: 'Haiti',
  Holy: 'Holy',
  Honduras: 'Honduras',
  Hungary: 'Hungary',
  Iceland: 'Iceland',
  India: 'India',
  Indonesia: 'Indonesia',
  Iran: 'Iran',
  Iraq: 'Iraq',
  Ireland: 'Ireland',
  Israel: 'Israel',
  Italy: 'Italy',
  Jamaica: 'Jamaica',
  Japan: 'Japan',
  Jordan: 'Jordan',
  Kazakhstan: 'Kazakhstan',
  Kenya: 'Kenya',
  Kiribati: 'Kiribati',
  Kuwait: 'Kuwait',
  Kyrgyzstan: 'Kyrgyzstan',
  Laos: 'Laos',
  Latvia: 'Latvia',
  Lebanon: 'Lebanon',
  Lesotho: 'Lesotho',
  Liberia: 'Liberia',
  Libya: 'Libya',
  Liechtenstein: 'Liechtenstein',
  Luxembourg: 'Luxembourg',
  Lithuania: 'Lithuania',
  Madagascar: 'Madagascar',
  Malawi: 'Malawi',
  Malaysia: 'Malaysia',
  Maldives: 'Maldives',
  Mali: 'Mali',
  Malta: 'Malta',
  MarshallIslands: 'MarshallIslands',
  Mauritania: 'Mauritania',
  Mauritius: 'Mauritius',
  Mexico: 'Mexico',
  Micronesia: 'Micronesia',
  Moldova: 'Moldova',
  Monaco: 'Monaco',
  Mongolia: 'Mongolia',
  Montenegro: 'Montenegro',
  Morocco: 'Morocco',
  Mozambique: 'Mozambique',
  Myanmar: 'Myanmar',
  Namibia: 'Namibia',
  Nauru: 'Nauru',
  Netherlands: 'Netherlands',
  New_Zealand: 'New_Zealand',
  Nicaragua: 'Nicaragua',
  Niger: 'Niger',
  Nigeria: 'Nigeria',
  North_Korea: 'North_Korea',
  North_Macedonia: 'North_Macedonia',
  Norway: 'Norway',
  Oman: 'Oman',
  Pakistan: 'Pakistan',
  Palau: 'Palau',
  Palestine_State: 'Palestine_State',
  Panama: 'Panama',
  Papua_New_Guinea: 'Papua_New_Guinea',
  Paraguay: 'Paraguay',
  Peru: 'Peru',
  Philippines: 'Philippines',
  Poland: 'Poland',
  Portugal: 'Portugal',
  Qatar: 'Qatar',
  Romania: 'Romania',
  Russia: 'Russia',
  Rwanda: 'Rwanda',
  Saint_Kitts_and_Nevis: 'Saint_Kitts_and_Nevis',
  Saint_Lucia: 'Saint_Lucia',
  Saint_Vincent_and_the_Grenadines: 'Saint_Vincent_and_the_Grenadines',
  Samoa: 'Samoa',
  San_Marino: 'San_Marino',
  Sao_Tome_and_Principe: 'Sao_Tome_and_Principe',
  Saudi_Arabia: 'Saudi_Arabia',
  Senegal: 'Senegal',
  Serbia: 'Serbia',
  Seychelles: 'Seychelles',
  Sierra_Leone: 'Sierra_Leone',
  Singapore: 'Singapore',
  Slovakia: 'Slovakia',
  Slovenia: 'Slovenia',
  Solomon_Islands: 'Solomon_Islands',
  Somalia: 'Somalia',
  South_Africa: 'South_Africa',
  South_Korea: 'South_Korea',
  South_Sudan: 'South_Sudan',
  Spain: 'Spain',
  Sri_Lanka: 'Sri_Lanka',
  Sudan: 'Sudan',
  Suriname: 'Suriname',
  Sweden: 'Sweden',
  Switzerland: 'Switzerland',
  Syria: 'Syria',
  Tajikistan: 'Tajikistan',
  Tanzania: 'Tanzania',
  Thailand: 'Thailand',
  Timor_Leste: 'Timor_Leste',
  Togo: 'Togo',
  Tonga: 'Tonga',
  Trinidad_and_Tobago: 'Trinidad_and_Tobago',
  Tunisia: 'Tunisia',
  Turkey: 'Turkey',
  Turkmenistan: 'Turkmenistan',
  Tuvalu: 'Tuvalu',
  Uganda: 'Uganda',
  Ukraine: 'Ukraine',
  United_Arab_Emirates: 'United_Arab_Emirates',
  United_Kingdom: 'United_Kingdom',
  United_States_of_America: 'United_States_of_America',
  Uruguay: 'Uruguay',
  Uzbekistan: 'Uzbekistan',
  Vanuatu: 'Vanuatu',
  Venezuela: 'Venezuela',
  Vietnam: 'Vietnam',
  Yemen: 'Yemen',
  Zambia: 'Zambia',
  Zimbabwe: 'Zimbabwe'
};

exports.DiscountType = exports.$Enums.DiscountType = {
  FirstTimer: 'FirstTimer',
  RegularMember: 'RegularMember',
  PremiumMember: 'PremiumMember'
};

exports.PaymentMethod = exports.$Enums.PaymentMethod = {
  CashAtCounter: 'CashAtCounter',
  QRCodeEsewa: 'QRCodeEsewa',
  QRCodeBank: 'QRCodeBank',
  CashPartial: 'CashPartial'
};

exports.Prisma.ModelName = {
  Person: 'Person',
  Account: 'Account',
  Session: 'Session',
  VerificationToken: 'VerificationToken',
  Authenticator: 'Authenticator',
  Payment: 'Payment',
  Appointment: 'Appointment',
  AppointmentType: 'AppointmentType',
  Location: 'Location',
  Patient: 'Patient',
  Provider: 'Provider',
  Form: 'Form',
  FormEncounter: 'FormEncounter',
  FormResource: 'FormResource',
  FormSubmission: 'FormSubmission',
  Field: 'Field',
  FieldAnswer: 'FieldAnswer',
  FieldOption: 'FieldOption',
  Encounter: 'Encounter',
  EncounterType: 'EncounterType',
  Obs: 'Obs',
  Order: 'Order',
  OrderFrequency: 'OrderFrequency',
  OrderRoute: 'OrderRoute',
  OrderType: 'OrderType',
  OrderUnit: 'OrderUnit',
  Concept: 'Concept',
  ConceptAnswer: 'ConceptAnswer',
  ConceptClass: 'ConceptClass',
  ConceptDatatype: 'ConceptDatatype',
  ConceptMap: 'ConceptMap',
  ConceptName: 'ConceptName',
  ConceptNumeric: 'ConceptNumeric',
  ConceptProposal: 'ConceptProposal',
  ConceptSet: 'ConceptSet',
  ConceptSource: 'ConceptSource',
  ConceptWord: 'ConceptWord',
  Resource: 'Resource',
  BlogPost: 'BlogPost',
  BlogPostTag: 'BlogPostTag',
  BlogPostTagArrow: 'BlogPostTagArrow',
  BlogPostAuthor: 'BlogPostAuthor',
  SpaceTimeCoordinates: 'SpaceTimeCoordinates',
  BudgetEntry: 'BudgetEntry',
  Service: 'Service',
  Budget: 'Budget',
  Report: 'Report',
  BudUser: 'BudUser',
  BudgetBudUser: 'BudgetBudUser',
  BudEvent: 'BudEvent'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://github.com/prisma/prisma/issues`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
