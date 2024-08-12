# Kolmogorov Complexity & Min Description Length: A CURSED Story

In the context of machine learning and natural language processing, the minimum description length (MDL) principle is a criterion for model selection. It balances model complexity and data fit by favoring simpler models that adequately explain the data. The idea is to find a model that minimizes the sum of two components: the description length of the model (encoding its complexity) and the description length of the data given the model (encoding how well the model fits the data).
Mathematically, the MDL principle can be expressed as:

```
MDL(M,D)=L(M)+L(D∣M)
```

where:

- (M) represents the model (hypothesis).
- (D) represents the observed data.
- (L(M)) is the length of the description of the model (in bits).
- (L(D|M)) is the length of the description of the data given the model (in bits).

In practice, MDL can guide decisions such as selecting the optimal number of features, choosing between different algorithms, or determining the complexity of a neural network architecture. It’s a powerful concept that balances simplicity and accuracy. 

Let's shelf this concept and the underlying intution for a bit and jump to another seemingly related concept.

## Kolmogorov Complexity

In the realm of computer science and mathematics, Kolmogorov complexity measures the inherent complexity or “randomness” of an object. Specifically, it quantifies the amount of information contained in an individual string or sequence. But how do we define this complexity? I mean it half rhetorically, as nobody knows for sure. 

It connects to the idea of algorithmic entropy, capturing the “randomness” or unpredictability of a string. Imagine we have a binary string, like “11010101.” How much information does it carry?
Kolmogorov complexity provides an answer by considering the smallest possible description (in terms of program length) that generates the string.

In other words, we look for the shortest computer program that produces the given string as its output. One can use turing machines or lambda calculus or category theory to come up with a more formally rigourous definition of Kolmogorov Complexity. However, in the context of this story about Crud Enterprise apps, and the CRUD ones too, of interest is the intuition about what is the minimal description for most of the record keeping and analysis software we make, most of the time. Those used in CRMs, CMSs, IMSs, libraries, hotels, cruise ships and most national digital infra.


## About the code you should write before getting started

Say, you are getting started for a new project. You supervisor tells you that it is the same kind of thing you have always been doing and that it is just a slightly different business domain. And that it needs to cover more grounds in less time. So your response is, "Can I do something starting now, before we get the formal specs, so as to have a head start?" You are told to just start doing your usual things, requirements will take time. "Is this bizarro world?", you ask yourself.

But you still show up to work the next day and start "doing your usual things" as a web dev, as prescribed. What are those? We always seem to need some kind of authorization and authentication. You might want to get some Keycloak booting up in a pod or docker nearby if that's what you usually do. We always seem to need domain models and some forms or similar UI elements that alter the application state or database state or both. Maybe you almost always are okay with Postgres as you are great at utilizing how great Postgres is. You understand some joins are free and few are costly. You like free joins more, of course. But once in a while, you dabble in that alcoholic bad habit called NoSQL when you are not exactly in the mood for ACIDy or schemas or need to scale beyond the structural world itself. And perhaps you only know React being a millenial whose YouTube stars love React and react about how someone else loves to code in React. It's React reactions all the way down. So you just decide to create a scaffolding of your new monorepo with the one of the two react frameworks/. Looking up towards the sky or the Astro-nomical is for hobbies or worse, passe.

The first day is just those three things then. There is a repo with a server-side and client-side react, and maybe a database adapter somewhere on the server side is setup to be talking to your local dev postgres. You probably typed in your company'x automation CLI or some favorite setup guide's commands to get your OAuth going. Once you have finished taking the OAuth challenge, you feel that it is time to ask your manager for the next steps. Same answer. "Keep doing your usual things. It's basically just the dashboard for now."

## "Dashboard": Towards Domain Agnostic Data Architecture

That's one new information but how does it help? If your usual new projects need an admin-dashboard de-facto, you do have a muscle memory, or a personal CLI generator schematic or a tutorial to put up anew a new data dashboard with charts and CRUD. Many frameworks have had it and Django is unchanged. Retools are being re-done better, and the Laravel folks have a really good one too. One of them is the one you go for, more often than not. 

But you don't have the domain models yet. You don't know who the client is and what they want. 
What if you could build infrastructure layer of your 'usual software' and cleanly separate the business logic layer? If you do, you have written some modules you usually reach for when solving the same problems. Else you still might have reusable modules and libs lying around but most of them would be tightly coupled with the intricacies and specificity of those business verticals and domain specific concepts. 

At this point it is clear that most of the code is just waiting to emerge from an excercise in understanding the customer needs and their domain of interst. 


```JSON
{
  "id": {
    "modelName": "Payment",
    "name": "id",
    "typeName": "String",
    "isList": false,
    "isEnum": false
  },
  "personId": {
    "modelName": "Payment",
    "name": "personId",
    "typeName": "String",
    "isList": false,
    "isEnum": false
  },
  "paymentMethod": {
    "modelName": "Payment",
    "name": "paymentMethod",
    "typeName": "PaymentMethod",
    "isList": false,
    "isEnum": true
  },
  "totalAmount": {
    "modelName": "Payment",
    "name": "totalAmount",
    "typeName": "Decimal",
    "isList": false,
    "isEnum": false
  },
  "discountApplied": {
    "modelName": "Payment",
    "name": "discountApplied",
    "typeName": "Decimal",
    "isList": false,
    "isEnum": false
  },
  "paidAmount": {
    "modelName": "Payment",
    "name": "paidAmount",
    "typeName": "Decimal",
    "isList": false,
    "isEnum": false
  },
  "reasonForVisit": {
    "modelName": "Payment",
    "name": "reasonForVisit",
    "typeName": "String",
    "isList": false,
    "isEnum": false
  },
  "receiverId": {
    "modelName": "Payment",
    "name": "receiverId",
    "typeName": "String",
    "isList": false,
    "isEnum": false
  },
  "createdAt": {
    "modelName": "Payment",
    "name": "createdAt",
    "typeName": "DateTime",
    "isList": false,
    "isEnum": false
  },
  "updatedAt": {
    "modelName": "Payment",
    "name": "updatedAt",
    "typeName": "DateTime",
    "isList": false,
    "isEnum": false
  }
}
```


```JSON
{
  "id": {
    "modelName": "Person",
    "name": "id",
    "typeName": "String",
    "isList": false,
    "isEnum": false
  },
  "firstName": {
    "modelName": "Person",
    "name": "firstName",
    "typeName": "String",
    "isList": false,
    "isEnum": false
  },
  "lastName": {
    "modelName": "Person",
    "name": "lastName",
    "typeName": "String",
    "isList": false,
    "isEnum": false
  },
  "membership": {
    "modelName": "Person",
    "name": "membership",
    "typeName": "Membership",
    "isList": false,
    "isEnum": true
  },
  "role": {
    "modelName": "Person",
    "name": "role",
    "typeName": "Role",
    "isList": false,
    "isEnum": true
  },
  "password": {
    "modelName": "Person",
    "name": "password",
    "typeName": "String",
    "isList": false,
    "isEnum": false
  },
  "phoneCode": {
    "modelName": "Person",
    "name": "phoneCode",
    "typeName": "Int",
    "isList": false,
    "isEnum": false
  },
  "phoneNumber": {
    "modelName": "Person",
    "name": "phoneNumber",
    "typeName": "Int",
    "isList": false,
    "isEnum": false
  },
  "streetName": {
    "modelName": "Person",
    "name": "streetName",
    "typeName": "String",
    "isList": false,
    "isEnum": false
  },
  "city": {
    "modelName": "Person",
    "name": "city",
    "typeName": "String",
    "isList": false,
    "isEnum": false
  },
  "areaCode": {
    "modelName": "Person",
    "name": "areaCode",
    "typeName": "String",
    "isList": false,
    "isEnum": false
  },
  "country": {
    "modelName": "Person",
    "name": "country",
    "typeName": "Country",
    "isList": false,
    "isEnum": true
  },
  "email": {
    "modelName": "Person",
    "name": "email",
    "typeName": "String",
    "isList": false,
    "isEnum": false
  },
  "emailVerified": {
    "modelName": "Person",
    "name": "emailVerified",
    "typeName": "DateTime",
    "isList": false,
    "isEnum": false
  },
  "image": {
    "modelName": "Person",
    "name": "image",
    "typeName": "String",
    "isList": false,
    "isEnum": false
  },
  "createdAt": {
    "modelName": "Person",
    "name": "createdAt",
    "typeName": "DateTime",
    "isList": false,
    "isEnum": false
  },
  "updatedAt": {
    "modelName": "Person",
    "name": "updatedAt",
    "typeName": "DateTime",
    "isList": false,
    "isEnum": false
  }
}
```
