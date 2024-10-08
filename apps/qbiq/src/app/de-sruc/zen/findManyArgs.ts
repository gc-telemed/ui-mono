import type { Prisma } from "@prisma/client";
import type { NTTKey } from "./entities-type";

export interface FindManyArgs {
    Person: Prisma.PersonFindManyArgs;
    Account: Prisma.AccountFindManyArgs;
    Session: Prisma.SessionFindManyArgs;
    VerificationToken: Prisma.VerificationTokenFindManyArgs;
    Authenticator: Prisma.AuthenticatorFindManyArgs;
    Payment: Prisma.PaymentFindManyArgs;
    Appointment: Prisma.AppointmentFindManyArgs;
    AppointmentType: Prisma.AppointmentTypeFindManyArgs;
    Location: Prisma.LocationFindManyArgs;
    Patient: Prisma.PatientFindManyArgs;
    Provider: Prisma.ProviderFindManyArgs;
    Form: Prisma.FormFindManyArgs;
    FormEncounter: Prisma.FormEncounterFindManyArgs;
    FormResource: Prisma.FormResourceFindManyArgs;
    FormSubmission: Prisma.FormSubmissionFindManyArgs;
    Field: Prisma.FieldFindManyArgs;
    FieldAnswer: Prisma.FieldAnswerFindManyArgs;
    FieldOption: Prisma.FieldOptionFindManyArgs;
    Encounter: Prisma.EncounterFindManyArgs;
    EncounterType: Prisma.EncounterTypeFindManyArgs;
    Obs: Prisma.ObsFindManyArgs;
    Order: Prisma.OrderFindManyArgs;
    OrderFrequency: Prisma.OrderFrequencyFindManyArgs;
    OrderRoute: Prisma.OrderRouteFindManyArgs;
    OrderType: Prisma.OrderTypeFindManyArgs;
    OrderUnit: Prisma.OrderUnitFindManyArgs;
    Concept: Prisma.ConceptFindManyArgs;
    ConceptAnswer: Prisma.ConceptAnswerFindManyArgs;
    ConceptClass: Prisma.ConceptClassFindManyArgs;
    ConceptDatatype: Prisma.ConceptDatatypeFindManyArgs;
    ConceptMap: Prisma.ConceptMapFindManyArgs;
    ConceptName: Prisma.ConceptNameFindManyArgs;
    ConceptNumeric: Prisma.ConceptNumericFindManyArgs;
    ConceptProposal: Prisma.ConceptProposalFindManyArgs;
    ConceptSet: Prisma.ConceptSetFindManyArgs;
    ConceptSource: Prisma.ConceptSourceFindManyArgs;
    ConceptWord: Prisma.ConceptWordFindManyArgs;
    Resource: Prisma.ResourceFindManyArgs;
    BlogPost: Prisma.BlogPostFindManyArgs;
    BlogPostTag: Prisma.BlogPostTagFindManyArgs;
    BlogPostTagArrow: Prisma.BlogPostTagArrowFindManyArgs;
    BlogPostAuthor: Prisma.BlogPostAuthorFindManyArgs;
    SpaceTimeCoordinates: Prisma.SpaceTimeCoordinatesFindManyArgs;
    BudgetEntry: Prisma.BudgetEntryFindManyArgs;
    Service: Prisma.ServiceFindManyArgs;
    Budget: Prisma.BudgetFindManyArgs;
    Report: Prisma.ReportFindManyArgs;
    BudUser: Prisma.BudUserFindManyArgs;
    BudgetBudUser: Prisma.BudgetBudUserFindManyArgs;
    BudEvent: Prisma.BudEventFindManyArgs;
}

export type FindManyArgType<T extends NTTKey> = FindManyArgs[T];
