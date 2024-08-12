import type { Prisma } from "@prisma/client";
import type { NTTKey } from "./entities-type";

export interface FindUniqueArgs {
    Person: Prisma.PersonFindUniqueArgs;
    Account: Prisma.AccountFindUniqueArgs;
    Session: Prisma.SessionFindUniqueArgs;
    VerificationToken: Prisma.VerificationTokenFindUniqueArgs;
    Authenticator: Prisma.AuthenticatorFindUniqueArgs;
    Payment: Prisma.PaymentFindUniqueArgs;
    Appointment: Prisma.AppointmentFindUniqueArgs;
    AppointmentType: Prisma.AppointmentTypeFindUniqueArgs;
    Location: Prisma.LocationFindUniqueArgs;
    Patient: Prisma.PatientFindUniqueArgs;
    Provider: Prisma.ProviderFindUniqueArgs;
    Form: Prisma.FormFindUniqueArgs;
    FormEncounter: Prisma.FormEncounterFindUniqueArgs;
    FormResource: Prisma.FormResourceFindUniqueArgs;
    FormSubmission: Prisma.FormSubmissionFindUniqueArgs;
    Field: Prisma.FieldFindUniqueArgs;
    FieldAnswer: Prisma.FieldAnswerFindUniqueArgs;
    FieldOption: Prisma.FieldOptionFindUniqueArgs;
    Encounter: Prisma.EncounterFindUniqueArgs;
    EncounterType: Prisma.EncounterTypeFindUniqueArgs;
    Obs: Prisma.ObsFindUniqueArgs;
    Order: Prisma.OrderFindUniqueArgs;
    OrderFrequency: Prisma.OrderFrequencyFindUniqueArgs;
    OrderRoute: Prisma.OrderRouteFindUniqueArgs;
    OrderType: Prisma.OrderTypeFindUniqueArgs;
    OrderUnit: Prisma.OrderUnitFindUniqueArgs;
    Concept: Prisma.ConceptFindUniqueArgs;
    ConceptAnswer: Prisma.ConceptAnswerFindUniqueArgs;
    ConceptClass: Prisma.ConceptClassFindUniqueArgs;
    ConceptDatatype: Prisma.ConceptDatatypeFindUniqueArgs;
    ConceptMap: Prisma.ConceptMapFindUniqueArgs;
    ConceptName: Prisma.ConceptNameFindUniqueArgs;
    ConceptNumeric: Prisma.ConceptNumericFindUniqueArgs;
    ConceptProposal: Prisma.ConceptProposalFindUniqueArgs;
    ConceptSet: Prisma.ConceptSetFindUniqueArgs;
    ConceptSource: Prisma.ConceptSourceFindUniqueArgs;
    ConceptWord: Prisma.ConceptWordFindUniqueArgs;
    Resource: Prisma.ResourceFindUniqueArgs;
    BlogPost: Prisma.BlogPostFindUniqueArgs;
    BlogPostTag: Prisma.BlogPostTagFindUniqueArgs;
    BlogPostTagArrow: Prisma.BlogPostTagArrowFindUniqueArgs;
    BlogPostAuthor: Prisma.BlogPostAuthorFindUniqueArgs;
    SpaceTimeCoordinates: Prisma.SpaceTimeCoordinatesFindUniqueArgs;
    BudgetEntry: Prisma.BudgetEntryFindUniqueArgs;
    Service: Prisma.ServiceFindUniqueArgs;
    Budget: Prisma.BudgetFindUniqueArgs;
    Report: Prisma.ReportFindUniqueArgs;
    BudUser: Prisma.BudUserFindUniqueArgs;
    BudgetBudUser: Prisma.BudgetBudUserFindUniqueArgs;
    BudEvent: Prisma.BudEventFindUniqueArgs;
}

export type FindUniqueArgType<T extends NTTKey> = FindUniqueArgs[T];