import type { Prisma } from "@prisma/client";
import type { NTTKey } from "./entities-type";

export interface FindFirstArgs {
    Person: Prisma.PersonFindFirstArgs;
    Account: Prisma.AccountFindFirstArgs;
    Session: Prisma.SessionFindFirstArgs;
    VerificationToken: Prisma.VerificationTokenFindFirstArgs;
    Authenticator: Prisma.AuthenticatorFindFirstArgs;
    Payment: Prisma.PaymentFindFirstArgs;
    Appointment: Prisma.AppointmentFindFirstArgs;
    AppointmentType: Prisma.AppointmentTypeFindFirstArgs;
    Location: Prisma.LocationFindFirstArgs;
    Patient: Prisma.PatientFindFirstArgs;
    Provider: Prisma.ProviderFindFirstArgs;
    Form: Prisma.FormFindFirstArgs;
    FormEncounter: Prisma.FormEncounterFindFirstArgs;
    FormResource: Prisma.FormResourceFindFirstArgs;
    FormSubmission: Prisma.FormSubmissionFindFirstArgs;
    Field: Prisma.FieldFindFirstArgs;
    FieldAnswer: Prisma.FieldAnswerFindFirstArgs;
    FieldOption: Prisma.FieldOptionFindFirstArgs;
    Encounter: Prisma.EncounterFindFirstArgs;
    EncounterType: Prisma.EncounterTypeFindFirstArgs;
    Obs: Prisma.ObsFindFirstArgs;
    Order: Prisma.OrderFindFirstArgs;
    OrderFrequency: Prisma.OrderFrequencyFindFirstArgs;
    OrderRoute: Prisma.OrderRouteFindFirstArgs;
    OrderType: Prisma.OrderTypeFindFirstArgs;
    OrderUnit: Prisma.OrderUnitFindFirstArgs;
    Concept: Prisma.ConceptFindFirstArgs;
    ConceptAnswer: Prisma.ConceptAnswerFindFirstArgs;
    ConceptClass: Prisma.ConceptClassFindFirstArgs;
    ConceptDatatype: Prisma.ConceptDatatypeFindFirstArgs;
    ConceptMap: Prisma.ConceptMapFindFirstArgs;
    ConceptName: Prisma.ConceptNameFindFirstArgs;
    ConceptNumeric: Prisma.ConceptNumericFindFirstArgs;
    ConceptProposal: Prisma.ConceptProposalFindFirstArgs;
    ConceptSet: Prisma.ConceptSetFindFirstArgs;
    ConceptSource: Prisma.ConceptSourceFindFirstArgs;
    ConceptWord: Prisma.ConceptWordFindFirstArgs;
    Resource: Prisma.ResourceFindFirstArgs;
    BlogPost: Prisma.BlogPostFindFirstArgs;
    BlogPostTag: Prisma.BlogPostTagFindFirstArgs;
    BlogPostTagArrow: Prisma.BlogPostTagArrowFindFirstArgs;
    BlogPostAuthor: Prisma.BlogPostAuthorFindFirstArgs;
    SpaceTimeCoordinates: Prisma.SpaceTimeCoordinatesFindFirstArgs;
    BudgetEntry: Prisma.BudgetEntryFindFirstArgs;
    Service: Prisma.ServiceFindFirstArgs;
    Budget: Prisma.BudgetFindFirstArgs;
    Report: Prisma.ReportFindFirstArgs;
    BudUser: Prisma.BudUserFindFirstArgs;
    BudgetBudUser: Prisma.BudgetBudUserFindFirstArgs;
    BudEvent: Prisma.BudEventFindFirstArgs;
}

export type FindFirstArgType<T extends NTTKey> = FindFirstArgs[T];
