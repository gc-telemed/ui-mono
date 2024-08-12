import { Person, Account, Session, VerificationToken, Authenticator, Payment, Appointment, AppointmentType, Location, Patient, Provider, Form, FormEncounter, FormResource, FormSubmission, Field, FieldAnswer, FieldOption, Encounter, EncounterType, Obs, Order, OrderFrequency, OrderRoute, OrderType, OrderUnit, Concept, ConceptAnswer, ConceptClass, ConceptDatatype, ConceptMap, ConceptName, ConceptNumeric, ConceptProposal, ConceptSet, ConceptSource, ConceptWord, Resource, BlogPost, BlogPostTag, BlogPostTagArrow, BlogPostAuthor, SpaceTimeCoordinates, BudgetEntry, Service, Budget, Report, BudUser, BudgetBudUser, BudEvent } from "./entities";

const Entities = {Person, 
    Account, 
    Session, 
    VerificationToken, 
    Authenticator, 
    Payment, 
    Appointment, 
    AppointmentType, 
    Location, 
    Patient, 
    Provider, 
    Form, 
    FormEncounter, 
    FormResource, 
    FormSubmission, 
    Field, 
    FieldAnswer, 
    FieldOption, 
    Encounter, 
    EncounterType, 
    Obs, 
    Order, 
    OrderFrequency, 
    OrderRoute, 
    OrderType, 
    OrderUnit, 
    Concept, 
    ConceptAnswer, 
    ConceptClass, 
    ConceptDatatype, 
    ConceptMap, 
    ConceptName, 
    ConceptNumeric, 
    ConceptProposal, 
    ConceptSet, 
    ConceptSource, 
    ConceptWord, 
    Resource, 
    BlogPost, 
    BlogPostTag, 
    BlogPostTagArrow, 
    BlogPostAuthor, 
    SpaceTimeCoordinates, 
    BudgetEntry, 
    Service, 
    Budget, 
    Report, 
    BudUser, 
    BudgetBudUser, 
    BudEvent} as const;

export type EntitiesType = typeof Entities;
export type NTTKey = keyof EntitiesType;