
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model JobApplication
 * 
 */
export type JobApplication = $Result.DefaultSelection<Prisma.$JobApplicationPayload>
/**
 * Model Resume
 * 
 */
export type Resume = $Result.DefaultSelection<Prisma.$ResumePayload>
/**
 * Model AISuggestion
 * 
 */
export type AISuggestion = $Result.DefaultSelection<Prisma.$AISuggestionPayload>
/**
 * Model AcceptedSuggestion
 * 
 */
export type AcceptedSuggestion = $Result.DefaultSelection<Prisma.$AcceptedSuggestionPayload>
/**
 * Model InterviewPrep
 * 
 */
export type InterviewPrep = $Result.DefaultSelection<Prisma.$InterviewPrepPayload>
/**
 * Model InterviewQuestion
 * 
 */
export type InterviewQuestion = $Result.DefaultSelection<Prisma.$InterviewQuestionPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobApplication`: Exposes CRUD operations for the **JobApplication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobApplications
    * const jobApplications = await prisma.jobApplication.findMany()
    * ```
    */
  get jobApplication(): Prisma.JobApplicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resume`: Exposes CRUD operations for the **Resume** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Resumes
    * const resumes = await prisma.resume.findMany()
    * ```
    */
  get resume(): Prisma.ResumeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aISuggestion`: Exposes CRUD operations for the **AISuggestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AISuggestions
    * const aISuggestions = await prisma.aISuggestion.findMany()
    * ```
    */
  get aISuggestion(): Prisma.AISuggestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.acceptedSuggestion`: Exposes CRUD operations for the **AcceptedSuggestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AcceptedSuggestions
    * const acceptedSuggestions = await prisma.acceptedSuggestion.findMany()
    * ```
    */
  get acceptedSuggestion(): Prisma.AcceptedSuggestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.interviewPrep`: Exposes CRUD operations for the **InterviewPrep** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InterviewPreps
    * const interviewPreps = await prisma.interviewPrep.findMany()
    * ```
    */
  get interviewPrep(): Prisma.InterviewPrepDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.interviewQuestion`: Exposes CRUD operations for the **InterviewQuestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InterviewQuestions
    * const interviewQuestions = await prisma.interviewQuestion.findMany()
    * ```
    */
  get interviewQuestion(): Prisma.InterviewQuestionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    JobApplication: 'JobApplication',
    Resume: 'Resume',
    AISuggestion: 'AISuggestion',
    AcceptedSuggestion: 'AcceptedSuggestion',
    InterviewPrep: 'InterviewPrep',
    InterviewQuestion: 'InterviewQuestion'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "jobApplication" | "resume" | "aISuggestion" | "acceptedSuggestion" | "interviewPrep" | "interviewQuestion"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      JobApplication: {
        payload: Prisma.$JobApplicationPayload<ExtArgs>
        fields: Prisma.JobApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>
          }
          findFirst: {
            args: Prisma.JobApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>
          }
          findMany: {
            args: Prisma.JobApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>[]
          }
          create: {
            args: Prisma.JobApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>
          }
          createMany: {
            args: Prisma.JobApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobApplicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>[]
          }
          delete: {
            args: Prisma.JobApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>
          }
          update: {
            args: Prisma.JobApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>
          }
          deleteMany: {
            args: Prisma.JobApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobApplicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>[]
          }
          upsert: {
            args: Prisma.JobApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>
          }
          aggregate: {
            args: Prisma.JobApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobApplication>
          }
          groupBy: {
            args: Prisma.JobApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<JobApplicationCountAggregateOutputType> | number
          }
        }
      }
      Resume: {
        payload: Prisma.$ResumePayload<ExtArgs>
        fields: Prisma.ResumeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResumeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResumeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          findFirst: {
            args: Prisma.ResumeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResumeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          findMany: {
            args: Prisma.ResumeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>[]
          }
          create: {
            args: Prisma.ResumeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          createMany: {
            args: Prisma.ResumeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResumeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>[]
          }
          delete: {
            args: Prisma.ResumeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          update: {
            args: Prisma.ResumeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          deleteMany: {
            args: Prisma.ResumeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResumeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResumeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>[]
          }
          upsert: {
            args: Prisma.ResumeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          aggregate: {
            args: Prisma.ResumeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResume>
          }
          groupBy: {
            args: Prisma.ResumeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResumeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResumeCountArgs<ExtArgs>
            result: $Utils.Optional<ResumeCountAggregateOutputType> | number
          }
        }
      }
      AISuggestion: {
        payload: Prisma.$AISuggestionPayload<ExtArgs>
        fields: Prisma.AISuggestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AISuggestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AISuggestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AISuggestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AISuggestionPayload>
          }
          findFirst: {
            args: Prisma.AISuggestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AISuggestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AISuggestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AISuggestionPayload>
          }
          findMany: {
            args: Prisma.AISuggestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AISuggestionPayload>[]
          }
          create: {
            args: Prisma.AISuggestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AISuggestionPayload>
          }
          createMany: {
            args: Prisma.AISuggestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AISuggestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AISuggestionPayload>[]
          }
          delete: {
            args: Prisma.AISuggestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AISuggestionPayload>
          }
          update: {
            args: Prisma.AISuggestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AISuggestionPayload>
          }
          deleteMany: {
            args: Prisma.AISuggestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AISuggestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AISuggestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AISuggestionPayload>[]
          }
          upsert: {
            args: Prisma.AISuggestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AISuggestionPayload>
          }
          aggregate: {
            args: Prisma.AISuggestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAISuggestion>
          }
          groupBy: {
            args: Prisma.AISuggestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AISuggestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AISuggestionCountArgs<ExtArgs>
            result: $Utils.Optional<AISuggestionCountAggregateOutputType> | number
          }
        }
      }
      AcceptedSuggestion: {
        payload: Prisma.$AcceptedSuggestionPayload<ExtArgs>
        fields: Prisma.AcceptedSuggestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AcceptedSuggestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcceptedSuggestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AcceptedSuggestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcceptedSuggestionPayload>
          }
          findFirst: {
            args: Prisma.AcceptedSuggestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcceptedSuggestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AcceptedSuggestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcceptedSuggestionPayload>
          }
          findMany: {
            args: Prisma.AcceptedSuggestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcceptedSuggestionPayload>[]
          }
          create: {
            args: Prisma.AcceptedSuggestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcceptedSuggestionPayload>
          }
          createMany: {
            args: Prisma.AcceptedSuggestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AcceptedSuggestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcceptedSuggestionPayload>[]
          }
          delete: {
            args: Prisma.AcceptedSuggestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcceptedSuggestionPayload>
          }
          update: {
            args: Prisma.AcceptedSuggestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcceptedSuggestionPayload>
          }
          deleteMany: {
            args: Prisma.AcceptedSuggestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AcceptedSuggestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AcceptedSuggestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcceptedSuggestionPayload>[]
          }
          upsert: {
            args: Prisma.AcceptedSuggestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcceptedSuggestionPayload>
          }
          aggregate: {
            args: Prisma.AcceptedSuggestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAcceptedSuggestion>
          }
          groupBy: {
            args: Prisma.AcceptedSuggestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AcceptedSuggestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AcceptedSuggestionCountArgs<ExtArgs>
            result: $Utils.Optional<AcceptedSuggestionCountAggregateOutputType> | number
          }
        }
      }
      InterviewPrep: {
        payload: Prisma.$InterviewPrepPayload<ExtArgs>
        fields: Prisma.InterviewPrepFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InterviewPrepFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPrepPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InterviewPrepFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPrepPayload>
          }
          findFirst: {
            args: Prisma.InterviewPrepFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPrepPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InterviewPrepFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPrepPayload>
          }
          findMany: {
            args: Prisma.InterviewPrepFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPrepPayload>[]
          }
          create: {
            args: Prisma.InterviewPrepCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPrepPayload>
          }
          createMany: {
            args: Prisma.InterviewPrepCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InterviewPrepCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPrepPayload>[]
          }
          delete: {
            args: Prisma.InterviewPrepDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPrepPayload>
          }
          update: {
            args: Prisma.InterviewPrepUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPrepPayload>
          }
          deleteMany: {
            args: Prisma.InterviewPrepDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InterviewPrepUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InterviewPrepUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPrepPayload>[]
          }
          upsert: {
            args: Prisma.InterviewPrepUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPrepPayload>
          }
          aggregate: {
            args: Prisma.InterviewPrepAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInterviewPrep>
          }
          groupBy: {
            args: Prisma.InterviewPrepGroupByArgs<ExtArgs>
            result: $Utils.Optional<InterviewPrepGroupByOutputType>[]
          }
          count: {
            args: Prisma.InterviewPrepCountArgs<ExtArgs>
            result: $Utils.Optional<InterviewPrepCountAggregateOutputType> | number
          }
        }
      }
      InterviewQuestion: {
        payload: Prisma.$InterviewQuestionPayload<ExtArgs>
        fields: Prisma.InterviewQuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InterviewQuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewQuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InterviewQuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewQuestionPayload>
          }
          findFirst: {
            args: Prisma.InterviewQuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewQuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InterviewQuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewQuestionPayload>
          }
          findMany: {
            args: Prisma.InterviewQuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewQuestionPayload>[]
          }
          create: {
            args: Prisma.InterviewQuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewQuestionPayload>
          }
          createMany: {
            args: Prisma.InterviewQuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InterviewQuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewQuestionPayload>[]
          }
          delete: {
            args: Prisma.InterviewQuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewQuestionPayload>
          }
          update: {
            args: Prisma.InterviewQuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewQuestionPayload>
          }
          deleteMany: {
            args: Prisma.InterviewQuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InterviewQuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InterviewQuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewQuestionPayload>[]
          }
          upsert: {
            args: Prisma.InterviewQuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewQuestionPayload>
          }
          aggregate: {
            args: Prisma.InterviewQuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInterviewQuestion>
          }
          groupBy: {
            args: Prisma.InterviewQuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<InterviewQuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.InterviewQuestionCountArgs<ExtArgs>
            result: $Utils.Optional<InterviewQuestionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    jobApplication?: JobApplicationOmit
    resume?: ResumeOmit
    aISuggestion?: AISuggestionOmit
    acceptedSuggestion?: AcceptedSuggestionOmit
    interviewPrep?: InterviewPrepOmit
    interviewQuestion?: InterviewQuestionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    jobApplications: number
    interviewQuestions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobApplications?: boolean | UserCountOutputTypeCountJobApplicationsArgs
    interviewQuestions?: boolean | UserCountOutputTypeCountInterviewQuestionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountJobApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobApplicationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInterviewQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterviewQuestionWhereInput
  }


  /**
   * Count Type JobApplicationCountOutputType
   */

  export type JobApplicationCountOutputType = {
    aiSuggestions: number
    acceptedSuggestions: number
    interviewPreps: number
  }

  export type JobApplicationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aiSuggestions?: boolean | JobApplicationCountOutputTypeCountAiSuggestionsArgs
    acceptedSuggestions?: boolean | JobApplicationCountOutputTypeCountAcceptedSuggestionsArgs
    interviewPreps?: boolean | JobApplicationCountOutputTypeCountInterviewPrepsArgs
  }

  // Custom InputTypes
  /**
   * JobApplicationCountOutputType without action
   */
  export type JobApplicationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplicationCountOutputType
     */
    select?: JobApplicationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JobApplicationCountOutputType without action
   */
  export type JobApplicationCountOutputTypeCountAiSuggestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AISuggestionWhereInput
  }

  /**
   * JobApplicationCountOutputType without action
   */
  export type JobApplicationCountOutputTypeCountAcceptedSuggestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AcceptedSuggestionWhereInput
  }

  /**
   * JobApplicationCountOutputType without action
   */
  export type JobApplicationCountOutputTypeCountInterviewPrepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterviewPrepWhereInput
  }


  /**
   * Count Type InterviewPrepCountOutputType
   */

  export type InterviewPrepCountOutputType = {
    questions: number
  }

  export type InterviewPrepCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | InterviewPrepCountOutputTypeCountQuestionsArgs
  }

  // Custom InputTypes
  /**
   * InterviewPrepCountOutputType without action
   */
  export type InterviewPrepCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewPrepCountOutputType
     */
    select?: InterviewPrepCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InterviewPrepCountOutputType without action
   */
  export type InterviewPrepCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterviewQuestionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    isVerified: boolean | null
    resetToken: string | null
    resetTokenExpiry: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    isVerified: boolean | null
    resetToken: string | null
    resetTokenExpiry: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    isVerified: number
    resetToken: number
    resetTokenExpiry: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    isVerified?: true
    resetToken?: true
    resetTokenExpiry?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    isVerified?: true
    resetToken?: true
    resetTokenExpiry?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    isVerified?: true
    resetToken?: true
    resetTokenExpiry?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    isVerified: boolean
    resetToken: string | null
    resetTokenExpiry: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    isVerified?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobApplications?: boolean | User$jobApplicationsArgs<ExtArgs>
    interviewQuestions?: boolean | User$interviewQuestionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    isVerified?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    isVerified?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    isVerified?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "isVerified" | "resetToken" | "resetTokenExpiry" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobApplications?: boolean | User$jobApplicationsArgs<ExtArgs>
    interviewQuestions?: boolean | User$interviewQuestionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      jobApplications: Prisma.$JobApplicationPayload<ExtArgs>[]
      interviewQuestions: Prisma.$InterviewQuestionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      isVerified: boolean
      resetToken: string | null
      resetTokenExpiry: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jobApplications<T extends User$jobApplicationsArgs<ExtArgs> = {}>(args?: Subset<T, User$jobApplicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    interviewQuestions<T extends User$interviewQuestionsArgs<ExtArgs> = {}>(args?: Subset<T, User$interviewQuestionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly resetToken: FieldRef<"User", 'String'>
    readonly resetTokenExpiry: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.jobApplications
   */
  export type User$jobApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    where?: JobApplicationWhereInput
    orderBy?: JobApplicationOrderByWithRelationInput | JobApplicationOrderByWithRelationInput[]
    cursor?: JobApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobApplicationScalarFieldEnum | JobApplicationScalarFieldEnum[]
  }

  /**
   * User.interviewQuestions
   */
  export type User$interviewQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewQuestion
     */
    select?: InterviewQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewQuestion
     */
    omit?: InterviewQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewQuestionInclude<ExtArgs> | null
    where?: InterviewQuestionWhereInput
    orderBy?: InterviewQuestionOrderByWithRelationInput | InterviewQuestionOrderByWithRelationInput[]
    cursor?: InterviewQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InterviewQuestionScalarFieldEnum | InterviewQuestionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model JobApplication
   */

  export type AggregateJobApplication = {
    _count: JobApplicationCountAggregateOutputType | null
    _min: JobApplicationMinAggregateOutputType | null
    _max: JobApplicationMaxAggregateOutputType | null
  }

  export type JobApplicationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    companyName: string | null
    jobTitle: string | null
    status: string | null
    jobUrl: string | null
    jobDescription: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobApplicationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    companyName: string | null
    jobTitle: string | null
    status: string | null
    jobUrl: string | null
    jobDescription: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobApplicationCountAggregateOutputType = {
    id: number
    userId: number
    companyName: number
    jobTitle: number
    status: number
    jobUrl: number
    jobDescription: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JobApplicationMinAggregateInputType = {
    id?: true
    userId?: true
    companyName?: true
    jobTitle?: true
    status?: true
    jobUrl?: true
    jobDescription?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobApplicationMaxAggregateInputType = {
    id?: true
    userId?: true
    companyName?: true
    jobTitle?: true
    status?: true
    jobUrl?: true
    jobDescription?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobApplicationCountAggregateInputType = {
    id?: true
    userId?: true
    companyName?: true
    jobTitle?: true
    status?: true
    jobUrl?: true
    jobDescription?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JobApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobApplication to aggregate.
     */
    where?: JobApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobApplications to fetch.
     */
    orderBy?: JobApplicationOrderByWithRelationInput | JobApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobApplications
    **/
    _count?: true | JobApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobApplicationMaxAggregateInputType
  }

  export type GetJobApplicationAggregateType<T extends JobApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateJobApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobApplication[P]>
      : GetScalarType<T[P], AggregateJobApplication[P]>
  }




  export type JobApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobApplicationWhereInput
    orderBy?: JobApplicationOrderByWithAggregationInput | JobApplicationOrderByWithAggregationInput[]
    by: JobApplicationScalarFieldEnum[] | JobApplicationScalarFieldEnum
    having?: JobApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobApplicationCountAggregateInputType | true
    _min?: JobApplicationMinAggregateInputType
    _max?: JobApplicationMaxAggregateInputType
  }

  export type JobApplicationGroupByOutputType = {
    id: string
    userId: string
    companyName: string
    jobTitle: string
    status: string
    jobUrl: string | null
    jobDescription: string
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: JobApplicationCountAggregateOutputType | null
    _min: JobApplicationMinAggregateOutputType | null
    _max: JobApplicationMaxAggregateOutputType | null
  }

  type GetJobApplicationGroupByPayload<T extends JobApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], JobApplicationGroupByOutputType[P]>
        }
      >
    >


  export type JobApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companyName?: boolean
    jobTitle?: boolean
    status?: boolean
    jobUrl?: boolean
    jobDescription?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    resume?: boolean | JobApplication$resumeArgs<ExtArgs>
    aiSuggestions?: boolean | JobApplication$aiSuggestionsArgs<ExtArgs>
    acceptedSuggestions?: boolean | JobApplication$acceptedSuggestionsArgs<ExtArgs>
    interviewPreps?: boolean | JobApplication$interviewPrepsArgs<ExtArgs>
    _count?: boolean | JobApplicationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobApplication"]>

  export type JobApplicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companyName?: boolean
    jobTitle?: boolean
    status?: boolean
    jobUrl?: boolean
    jobDescription?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobApplication"]>

  export type JobApplicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companyName?: boolean
    jobTitle?: boolean
    status?: boolean
    jobUrl?: boolean
    jobDescription?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobApplication"]>

  export type JobApplicationSelectScalar = {
    id?: boolean
    userId?: boolean
    companyName?: boolean
    jobTitle?: boolean
    status?: boolean
    jobUrl?: boolean
    jobDescription?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JobApplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "companyName" | "jobTitle" | "status" | "jobUrl" | "jobDescription" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["jobApplication"]>
  export type JobApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    resume?: boolean | JobApplication$resumeArgs<ExtArgs>
    aiSuggestions?: boolean | JobApplication$aiSuggestionsArgs<ExtArgs>
    acceptedSuggestions?: boolean | JobApplication$acceptedSuggestionsArgs<ExtArgs>
    interviewPreps?: boolean | JobApplication$interviewPrepsArgs<ExtArgs>
    _count?: boolean | JobApplicationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JobApplicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type JobApplicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $JobApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobApplication"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      resume: Prisma.$ResumePayload<ExtArgs> | null
      aiSuggestions: Prisma.$AISuggestionPayload<ExtArgs>[]
      acceptedSuggestions: Prisma.$AcceptedSuggestionPayload<ExtArgs>[]
      interviewPreps: Prisma.$InterviewPrepPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      companyName: string
      jobTitle: string
      status: string
      jobUrl: string | null
      jobDescription: string
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["jobApplication"]>
    composites: {}
  }

  type JobApplicationGetPayload<S extends boolean | null | undefined | JobApplicationDefaultArgs> = $Result.GetResult<Prisma.$JobApplicationPayload, S>

  type JobApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobApplicationCountAggregateInputType | true
    }

  export interface JobApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobApplication'], meta: { name: 'JobApplication' } }
    /**
     * Find zero or one JobApplication that matches the filter.
     * @param {JobApplicationFindUniqueArgs} args - Arguments to find a JobApplication
     * @example
     * // Get one JobApplication
     * const jobApplication = await prisma.jobApplication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobApplicationFindUniqueArgs>(args: SelectSubset<T, JobApplicationFindUniqueArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JobApplication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobApplicationFindUniqueOrThrowArgs} args - Arguments to find a JobApplication
     * @example
     * // Get one JobApplication
     * const jobApplication = await prisma.jobApplication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, JobApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobApplication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationFindFirstArgs} args - Arguments to find a JobApplication
     * @example
     * // Get one JobApplication
     * const jobApplication = await prisma.jobApplication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobApplicationFindFirstArgs>(args?: SelectSubset<T, JobApplicationFindFirstArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobApplication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationFindFirstOrThrowArgs} args - Arguments to find a JobApplication
     * @example
     * // Get one JobApplication
     * const jobApplication = await prisma.jobApplication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, JobApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JobApplications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobApplications
     * const jobApplications = await prisma.jobApplication.findMany()
     * 
     * // Get first 10 JobApplications
     * const jobApplications = await prisma.jobApplication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobApplicationWithIdOnly = await prisma.jobApplication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobApplicationFindManyArgs>(args?: SelectSubset<T, JobApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JobApplication.
     * @param {JobApplicationCreateArgs} args - Arguments to create a JobApplication.
     * @example
     * // Create one JobApplication
     * const JobApplication = await prisma.jobApplication.create({
     *   data: {
     *     // ... data to create a JobApplication
     *   }
     * })
     * 
     */
    create<T extends JobApplicationCreateArgs>(args: SelectSubset<T, JobApplicationCreateArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JobApplications.
     * @param {JobApplicationCreateManyArgs} args - Arguments to create many JobApplications.
     * @example
     * // Create many JobApplications
     * const jobApplication = await prisma.jobApplication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobApplicationCreateManyArgs>(args?: SelectSubset<T, JobApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JobApplications and returns the data saved in the database.
     * @param {JobApplicationCreateManyAndReturnArgs} args - Arguments to create many JobApplications.
     * @example
     * // Create many JobApplications
     * const jobApplication = await prisma.jobApplication.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JobApplications and only return the `id`
     * const jobApplicationWithIdOnly = await prisma.jobApplication.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobApplicationCreateManyAndReturnArgs>(args?: SelectSubset<T, JobApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JobApplication.
     * @param {JobApplicationDeleteArgs} args - Arguments to delete one JobApplication.
     * @example
     * // Delete one JobApplication
     * const JobApplication = await prisma.jobApplication.delete({
     *   where: {
     *     // ... filter to delete one JobApplication
     *   }
     * })
     * 
     */
    delete<T extends JobApplicationDeleteArgs>(args: SelectSubset<T, JobApplicationDeleteArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JobApplication.
     * @param {JobApplicationUpdateArgs} args - Arguments to update one JobApplication.
     * @example
     * // Update one JobApplication
     * const jobApplication = await prisma.jobApplication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobApplicationUpdateArgs>(args: SelectSubset<T, JobApplicationUpdateArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JobApplications.
     * @param {JobApplicationDeleteManyArgs} args - Arguments to filter JobApplications to delete.
     * @example
     * // Delete a few JobApplications
     * const { count } = await prisma.jobApplication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobApplicationDeleteManyArgs>(args?: SelectSubset<T, JobApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobApplications
     * const jobApplication = await prisma.jobApplication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobApplicationUpdateManyArgs>(args: SelectSubset<T, JobApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobApplications and returns the data updated in the database.
     * @param {JobApplicationUpdateManyAndReturnArgs} args - Arguments to update many JobApplications.
     * @example
     * // Update many JobApplications
     * const jobApplication = await prisma.jobApplication.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JobApplications and only return the `id`
     * const jobApplicationWithIdOnly = await prisma.jobApplication.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JobApplicationUpdateManyAndReturnArgs>(args: SelectSubset<T, JobApplicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JobApplication.
     * @param {JobApplicationUpsertArgs} args - Arguments to update or create a JobApplication.
     * @example
     * // Update or create a JobApplication
     * const jobApplication = await prisma.jobApplication.upsert({
     *   create: {
     *     // ... data to create a JobApplication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobApplication we want to update
     *   }
     * })
     */
    upsert<T extends JobApplicationUpsertArgs>(args: SelectSubset<T, JobApplicationUpsertArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JobApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationCountArgs} args - Arguments to filter JobApplications to count.
     * @example
     * // Count the number of JobApplications
     * const count = await prisma.jobApplication.count({
     *   where: {
     *     // ... the filter for the JobApplications we want to count
     *   }
     * })
    **/
    count<T extends JobApplicationCountArgs>(
      args?: Subset<T, JobApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobApplicationAggregateArgs>(args: Subset<T, JobApplicationAggregateArgs>): Prisma.PrismaPromise<GetJobApplicationAggregateType<T>>

    /**
     * Group by JobApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JobApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobApplicationGroupByArgs['orderBy'] }
        : { orderBy?: JobApplicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JobApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobApplication model
   */
  readonly fields: JobApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobApplication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    resume<T extends JobApplication$resumeArgs<ExtArgs> = {}>(args?: Subset<T, JobApplication$resumeArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    aiSuggestions<T extends JobApplication$aiSuggestionsArgs<ExtArgs> = {}>(args?: Subset<T, JobApplication$aiSuggestionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AISuggestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    acceptedSuggestions<T extends JobApplication$acceptedSuggestionsArgs<ExtArgs> = {}>(args?: Subset<T, JobApplication$acceptedSuggestionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcceptedSuggestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    interviewPreps<T extends JobApplication$interviewPrepsArgs<ExtArgs> = {}>(args?: Subset<T, JobApplication$interviewPrepsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewPrepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JobApplication model
   */
  interface JobApplicationFieldRefs {
    readonly id: FieldRef<"JobApplication", 'String'>
    readonly userId: FieldRef<"JobApplication", 'String'>
    readonly companyName: FieldRef<"JobApplication", 'String'>
    readonly jobTitle: FieldRef<"JobApplication", 'String'>
    readonly status: FieldRef<"JobApplication", 'String'>
    readonly jobUrl: FieldRef<"JobApplication", 'String'>
    readonly jobDescription: FieldRef<"JobApplication", 'String'>
    readonly notes: FieldRef<"JobApplication", 'String'>
    readonly createdAt: FieldRef<"JobApplication", 'DateTime'>
    readonly updatedAt: FieldRef<"JobApplication", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JobApplication findUnique
   */
  export type JobApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * Filter, which JobApplication to fetch.
     */
    where: JobApplicationWhereUniqueInput
  }

  /**
   * JobApplication findUniqueOrThrow
   */
  export type JobApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * Filter, which JobApplication to fetch.
     */
    where: JobApplicationWhereUniqueInput
  }

  /**
   * JobApplication findFirst
   */
  export type JobApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * Filter, which JobApplication to fetch.
     */
    where?: JobApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobApplications to fetch.
     */
    orderBy?: JobApplicationOrderByWithRelationInput | JobApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobApplications.
     */
    cursor?: JobApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobApplications.
     */
    distinct?: JobApplicationScalarFieldEnum | JobApplicationScalarFieldEnum[]
  }

  /**
   * JobApplication findFirstOrThrow
   */
  export type JobApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * Filter, which JobApplication to fetch.
     */
    where?: JobApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobApplications to fetch.
     */
    orderBy?: JobApplicationOrderByWithRelationInput | JobApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobApplications.
     */
    cursor?: JobApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobApplications.
     */
    distinct?: JobApplicationScalarFieldEnum | JobApplicationScalarFieldEnum[]
  }

  /**
   * JobApplication findMany
   */
  export type JobApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * Filter, which JobApplications to fetch.
     */
    where?: JobApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobApplications to fetch.
     */
    orderBy?: JobApplicationOrderByWithRelationInput | JobApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobApplications.
     */
    cursor?: JobApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobApplications.
     */
    skip?: number
    distinct?: JobApplicationScalarFieldEnum | JobApplicationScalarFieldEnum[]
  }

  /**
   * JobApplication create
   */
  export type JobApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a JobApplication.
     */
    data: XOR<JobApplicationCreateInput, JobApplicationUncheckedCreateInput>
  }

  /**
   * JobApplication createMany
   */
  export type JobApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobApplications.
     */
    data: JobApplicationCreateManyInput | JobApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobApplication createManyAndReturn
   */
  export type JobApplicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * The data used to create many JobApplications.
     */
    data: JobApplicationCreateManyInput | JobApplicationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobApplication update
   */
  export type JobApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a JobApplication.
     */
    data: XOR<JobApplicationUpdateInput, JobApplicationUncheckedUpdateInput>
    /**
     * Choose, which JobApplication to update.
     */
    where: JobApplicationWhereUniqueInput
  }

  /**
   * JobApplication updateMany
   */
  export type JobApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobApplications.
     */
    data: XOR<JobApplicationUpdateManyMutationInput, JobApplicationUncheckedUpdateManyInput>
    /**
     * Filter which JobApplications to update
     */
    where?: JobApplicationWhereInput
    /**
     * Limit how many JobApplications to update.
     */
    limit?: number
  }

  /**
   * JobApplication updateManyAndReturn
   */
  export type JobApplicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * The data used to update JobApplications.
     */
    data: XOR<JobApplicationUpdateManyMutationInput, JobApplicationUncheckedUpdateManyInput>
    /**
     * Filter which JobApplications to update
     */
    where?: JobApplicationWhereInput
    /**
     * Limit how many JobApplications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobApplication upsert
   */
  export type JobApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the JobApplication to update in case it exists.
     */
    where: JobApplicationWhereUniqueInput
    /**
     * In case the JobApplication found by the `where` argument doesn't exist, create a new JobApplication with this data.
     */
    create: XOR<JobApplicationCreateInput, JobApplicationUncheckedCreateInput>
    /**
     * In case the JobApplication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobApplicationUpdateInput, JobApplicationUncheckedUpdateInput>
  }

  /**
   * JobApplication delete
   */
  export type JobApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * Filter which JobApplication to delete.
     */
    where: JobApplicationWhereUniqueInput
  }

  /**
   * JobApplication deleteMany
   */
  export type JobApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobApplications to delete
     */
    where?: JobApplicationWhereInput
    /**
     * Limit how many JobApplications to delete.
     */
    limit?: number
  }

  /**
   * JobApplication.resume
   */
  export type JobApplication$resumeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    where?: ResumeWhereInput
  }

  /**
   * JobApplication.aiSuggestions
   */
  export type JobApplication$aiSuggestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AISuggestion
     */
    select?: AISuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AISuggestion
     */
    omit?: AISuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AISuggestionInclude<ExtArgs> | null
    where?: AISuggestionWhereInput
    orderBy?: AISuggestionOrderByWithRelationInput | AISuggestionOrderByWithRelationInput[]
    cursor?: AISuggestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AISuggestionScalarFieldEnum | AISuggestionScalarFieldEnum[]
  }

  /**
   * JobApplication.acceptedSuggestions
   */
  export type JobApplication$acceptedSuggestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcceptedSuggestion
     */
    select?: AcceptedSuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcceptedSuggestion
     */
    omit?: AcceptedSuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcceptedSuggestionInclude<ExtArgs> | null
    where?: AcceptedSuggestionWhereInput
    orderBy?: AcceptedSuggestionOrderByWithRelationInput | AcceptedSuggestionOrderByWithRelationInput[]
    cursor?: AcceptedSuggestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AcceptedSuggestionScalarFieldEnum | AcceptedSuggestionScalarFieldEnum[]
  }

  /**
   * JobApplication.interviewPreps
   */
  export type JobApplication$interviewPrepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewPrep
     */
    select?: InterviewPrepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewPrep
     */
    omit?: InterviewPrepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewPrepInclude<ExtArgs> | null
    where?: InterviewPrepWhereInput
    orderBy?: InterviewPrepOrderByWithRelationInput | InterviewPrepOrderByWithRelationInput[]
    cursor?: InterviewPrepWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InterviewPrepScalarFieldEnum | InterviewPrepScalarFieldEnum[]
  }

  /**
   * JobApplication without action
   */
  export type JobApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
  }


  /**
   * Model Resume
   */

  export type AggregateResume = {
    _count: ResumeCountAggregateOutputType | null
    _avg: ResumeAvgAggregateOutputType | null
    _sum: ResumeSumAggregateOutputType | null
    _min: ResumeMinAggregateOutputType | null
    _max: ResumeMaxAggregateOutputType | null
  }

  export type ResumeAvgAggregateOutputType = {
    version: number | null
  }

  export type ResumeSumAggregateOutputType = {
    version: number | null
  }

  export type ResumeMinAggregateOutputType = {
    id: string | null
    jobApplicationId: string | null
    fileUrl: string | null
    parsedText: string | null
    version: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ResumeMaxAggregateOutputType = {
    id: string | null
    jobApplicationId: string | null
    fileUrl: string | null
    parsedText: string | null
    version: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ResumeCountAggregateOutputType = {
    id: number
    jobApplicationId: number
    fileUrl: number
    parsedText: number
    version: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ResumeAvgAggregateInputType = {
    version?: true
  }

  export type ResumeSumAggregateInputType = {
    version?: true
  }

  export type ResumeMinAggregateInputType = {
    id?: true
    jobApplicationId?: true
    fileUrl?: true
    parsedText?: true
    version?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ResumeMaxAggregateInputType = {
    id?: true
    jobApplicationId?: true
    fileUrl?: true
    parsedText?: true
    version?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ResumeCountAggregateInputType = {
    id?: true
    jobApplicationId?: true
    fileUrl?: true
    parsedText?: true
    version?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ResumeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resume to aggregate.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Resumes
    **/
    _count?: true | ResumeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResumeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResumeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResumeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResumeMaxAggregateInputType
  }

  export type GetResumeAggregateType<T extends ResumeAggregateArgs> = {
        [P in keyof T & keyof AggregateResume]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResume[P]>
      : GetScalarType<T[P], AggregateResume[P]>
  }




  export type ResumeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResumeWhereInput
    orderBy?: ResumeOrderByWithAggregationInput | ResumeOrderByWithAggregationInput[]
    by: ResumeScalarFieldEnum[] | ResumeScalarFieldEnum
    having?: ResumeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResumeCountAggregateInputType | true
    _avg?: ResumeAvgAggregateInputType
    _sum?: ResumeSumAggregateInputType
    _min?: ResumeMinAggregateInputType
    _max?: ResumeMaxAggregateInputType
  }

  export type ResumeGroupByOutputType = {
    id: string
    jobApplicationId: string
    fileUrl: string
    parsedText: string
    version: number
    createdAt: Date
    updatedAt: Date
    _count: ResumeCountAggregateOutputType | null
    _avg: ResumeAvgAggregateOutputType | null
    _sum: ResumeSumAggregateOutputType | null
    _min: ResumeMinAggregateOutputType | null
    _max: ResumeMaxAggregateOutputType | null
  }

  type GetResumeGroupByPayload<T extends ResumeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResumeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResumeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResumeGroupByOutputType[P]>
            : GetScalarType<T[P], ResumeGroupByOutputType[P]>
        }
      >
    >


  export type ResumeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobApplicationId?: boolean
    fileUrl?: boolean
    parsedText?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobApplication?: boolean | JobApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resume"]>

  export type ResumeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobApplicationId?: boolean
    fileUrl?: boolean
    parsedText?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobApplication?: boolean | JobApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resume"]>

  export type ResumeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobApplicationId?: boolean
    fileUrl?: boolean
    parsedText?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobApplication?: boolean | JobApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resume"]>

  export type ResumeSelectScalar = {
    id?: boolean
    jobApplicationId?: boolean
    fileUrl?: boolean
    parsedText?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ResumeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jobApplicationId" | "fileUrl" | "parsedText" | "version" | "createdAt" | "updatedAt", ExtArgs["result"]["resume"]>
  export type ResumeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobApplication?: boolean | JobApplicationDefaultArgs<ExtArgs>
  }
  export type ResumeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobApplication?: boolean | JobApplicationDefaultArgs<ExtArgs>
  }
  export type ResumeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobApplication?: boolean | JobApplicationDefaultArgs<ExtArgs>
  }

  export type $ResumePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Resume"
    objects: {
      jobApplication: Prisma.$JobApplicationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      jobApplicationId: string
      fileUrl: string
      parsedText: string
      version: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["resume"]>
    composites: {}
  }

  type ResumeGetPayload<S extends boolean | null | undefined | ResumeDefaultArgs> = $Result.GetResult<Prisma.$ResumePayload, S>

  type ResumeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResumeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResumeCountAggregateInputType | true
    }

  export interface ResumeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Resume'], meta: { name: 'Resume' } }
    /**
     * Find zero or one Resume that matches the filter.
     * @param {ResumeFindUniqueArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResumeFindUniqueArgs>(args: SelectSubset<T, ResumeFindUniqueArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Resume that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResumeFindUniqueOrThrowArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResumeFindUniqueOrThrowArgs>(args: SelectSubset<T, ResumeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resume that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeFindFirstArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResumeFindFirstArgs>(args?: SelectSubset<T, ResumeFindFirstArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resume that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeFindFirstOrThrowArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResumeFindFirstOrThrowArgs>(args?: SelectSubset<T, ResumeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Resumes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Resumes
     * const resumes = await prisma.resume.findMany()
     * 
     * // Get first 10 Resumes
     * const resumes = await prisma.resume.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resumeWithIdOnly = await prisma.resume.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResumeFindManyArgs>(args?: SelectSubset<T, ResumeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Resume.
     * @param {ResumeCreateArgs} args - Arguments to create a Resume.
     * @example
     * // Create one Resume
     * const Resume = await prisma.resume.create({
     *   data: {
     *     // ... data to create a Resume
     *   }
     * })
     * 
     */
    create<T extends ResumeCreateArgs>(args: SelectSubset<T, ResumeCreateArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Resumes.
     * @param {ResumeCreateManyArgs} args - Arguments to create many Resumes.
     * @example
     * // Create many Resumes
     * const resume = await prisma.resume.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResumeCreateManyArgs>(args?: SelectSubset<T, ResumeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Resumes and returns the data saved in the database.
     * @param {ResumeCreateManyAndReturnArgs} args - Arguments to create many Resumes.
     * @example
     * // Create many Resumes
     * const resume = await prisma.resume.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Resumes and only return the `id`
     * const resumeWithIdOnly = await prisma.resume.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResumeCreateManyAndReturnArgs>(args?: SelectSubset<T, ResumeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Resume.
     * @param {ResumeDeleteArgs} args - Arguments to delete one Resume.
     * @example
     * // Delete one Resume
     * const Resume = await prisma.resume.delete({
     *   where: {
     *     // ... filter to delete one Resume
     *   }
     * })
     * 
     */
    delete<T extends ResumeDeleteArgs>(args: SelectSubset<T, ResumeDeleteArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Resume.
     * @param {ResumeUpdateArgs} args - Arguments to update one Resume.
     * @example
     * // Update one Resume
     * const resume = await prisma.resume.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResumeUpdateArgs>(args: SelectSubset<T, ResumeUpdateArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Resumes.
     * @param {ResumeDeleteManyArgs} args - Arguments to filter Resumes to delete.
     * @example
     * // Delete a few Resumes
     * const { count } = await prisma.resume.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResumeDeleteManyArgs>(args?: SelectSubset<T, ResumeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Resumes
     * const resume = await prisma.resume.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResumeUpdateManyArgs>(args: SelectSubset<T, ResumeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resumes and returns the data updated in the database.
     * @param {ResumeUpdateManyAndReturnArgs} args - Arguments to update many Resumes.
     * @example
     * // Update many Resumes
     * const resume = await prisma.resume.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Resumes and only return the `id`
     * const resumeWithIdOnly = await prisma.resume.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ResumeUpdateManyAndReturnArgs>(args: SelectSubset<T, ResumeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Resume.
     * @param {ResumeUpsertArgs} args - Arguments to update or create a Resume.
     * @example
     * // Update or create a Resume
     * const resume = await prisma.resume.upsert({
     *   create: {
     *     // ... data to create a Resume
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resume we want to update
     *   }
     * })
     */
    upsert<T extends ResumeUpsertArgs>(args: SelectSubset<T, ResumeUpsertArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Resumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeCountArgs} args - Arguments to filter Resumes to count.
     * @example
     * // Count the number of Resumes
     * const count = await prisma.resume.count({
     *   where: {
     *     // ... the filter for the Resumes we want to count
     *   }
     * })
    **/
    count<T extends ResumeCountArgs>(
      args?: Subset<T, ResumeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResumeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resume.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResumeAggregateArgs>(args: Subset<T, ResumeAggregateArgs>): Prisma.PrismaPromise<GetResumeAggregateType<T>>

    /**
     * Group by Resume.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResumeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResumeGroupByArgs['orderBy'] }
        : { orderBy?: ResumeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResumeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResumeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Resume model
   */
  readonly fields: ResumeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Resume.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResumeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jobApplication<T extends JobApplicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobApplicationDefaultArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Resume model
   */
  interface ResumeFieldRefs {
    readonly id: FieldRef<"Resume", 'String'>
    readonly jobApplicationId: FieldRef<"Resume", 'String'>
    readonly fileUrl: FieldRef<"Resume", 'String'>
    readonly parsedText: FieldRef<"Resume", 'String'>
    readonly version: FieldRef<"Resume", 'Int'>
    readonly createdAt: FieldRef<"Resume", 'DateTime'>
    readonly updatedAt: FieldRef<"Resume", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Resume findUnique
   */
  export type ResumeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume findUniqueOrThrow
   */
  export type ResumeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume findFirst
   */
  export type ResumeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resumes.
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resumes.
     */
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * Resume findFirstOrThrow
   */
  export type ResumeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resumes.
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resumes.
     */
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * Resume findMany
   */
  export type ResumeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resumes to fetch.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Resumes.
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * Resume create
   */
  export type ResumeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * The data needed to create a Resume.
     */
    data: XOR<ResumeCreateInput, ResumeUncheckedCreateInput>
  }

  /**
   * Resume createMany
   */
  export type ResumeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Resumes.
     */
    data: ResumeCreateManyInput | ResumeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Resume createManyAndReturn
   */
  export type ResumeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * The data used to create many Resumes.
     */
    data: ResumeCreateManyInput | ResumeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Resume update
   */
  export type ResumeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * The data needed to update a Resume.
     */
    data: XOR<ResumeUpdateInput, ResumeUncheckedUpdateInput>
    /**
     * Choose, which Resume to update.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume updateMany
   */
  export type ResumeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Resumes.
     */
    data: XOR<ResumeUpdateManyMutationInput, ResumeUncheckedUpdateManyInput>
    /**
     * Filter which Resumes to update
     */
    where?: ResumeWhereInput
    /**
     * Limit how many Resumes to update.
     */
    limit?: number
  }

  /**
   * Resume updateManyAndReturn
   */
  export type ResumeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * The data used to update Resumes.
     */
    data: XOR<ResumeUpdateManyMutationInput, ResumeUncheckedUpdateManyInput>
    /**
     * Filter which Resumes to update
     */
    where?: ResumeWhereInput
    /**
     * Limit how many Resumes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Resume upsert
   */
  export type ResumeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * The filter to search for the Resume to update in case it exists.
     */
    where: ResumeWhereUniqueInput
    /**
     * In case the Resume found by the `where` argument doesn't exist, create a new Resume with this data.
     */
    create: XOR<ResumeCreateInput, ResumeUncheckedCreateInput>
    /**
     * In case the Resume was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResumeUpdateInput, ResumeUncheckedUpdateInput>
  }

  /**
   * Resume delete
   */
  export type ResumeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter which Resume to delete.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume deleteMany
   */
  export type ResumeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resumes to delete
     */
    where?: ResumeWhereInput
    /**
     * Limit how many Resumes to delete.
     */
    limit?: number
  }

  /**
   * Resume without action
   */
  export type ResumeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
  }


  /**
   * Model AISuggestion
   */

  export type AggregateAISuggestion = {
    _count: AISuggestionCountAggregateOutputType | null
    _min: AISuggestionMinAggregateOutputType | null
    _max: AISuggestionMaxAggregateOutputType | null
  }

  export type AISuggestionMinAggregateOutputType = {
    id: string | null
    jobApplicationId: string | null
    originalText: string | null
    suggestedText: string | null
    type: string | null
    status: string | null
    explanation: string | null
    createdAt: Date | null
  }

  export type AISuggestionMaxAggregateOutputType = {
    id: string | null
    jobApplicationId: string | null
    originalText: string | null
    suggestedText: string | null
    type: string | null
    status: string | null
    explanation: string | null
    createdAt: Date | null
  }

  export type AISuggestionCountAggregateOutputType = {
    id: number
    jobApplicationId: number
    originalText: number
    suggestedText: number
    type: number
    status: number
    explanation: number
    createdAt: number
    _all: number
  }


  export type AISuggestionMinAggregateInputType = {
    id?: true
    jobApplicationId?: true
    originalText?: true
    suggestedText?: true
    type?: true
    status?: true
    explanation?: true
    createdAt?: true
  }

  export type AISuggestionMaxAggregateInputType = {
    id?: true
    jobApplicationId?: true
    originalText?: true
    suggestedText?: true
    type?: true
    status?: true
    explanation?: true
    createdAt?: true
  }

  export type AISuggestionCountAggregateInputType = {
    id?: true
    jobApplicationId?: true
    originalText?: true
    suggestedText?: true
    type?: true
    status?: true
    explanation?: true
    createdAt?: true
    _all?: true
  }

  export type AISuggestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AISuggestion to aggregate.
     */
    where?: AISuggestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AISuggestions to fetch.
     */
    orderBy?: AISuggestionOrderByWithRelationInput | AISuggestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AISuggestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AISuggestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AISuggestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AISuggestions
    **/
    _count?: true | AISuggestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AISuggestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AISuggestionMaxAggregateInputType
  }

  export type GetAISuggestionAggregateType<T extends AISuggestionAggregateArgs> = {
        [P in keyof T & keyof AggregateAISuggestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAISuggestion[P]>
      : GetScalarType<T[P], AggregateAISuggestion[P]>
  }




  export type AISuggestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AISuggestionWhereInput
    orderBy?: AISuggestionOrderByWithAggregationInput | AISuggestionOrderByWithAggregationInput[]
    by: AISuggestionScalarFieldEnum[] | AISuggestionScalarFieldEnum
    having?: AISuggestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AISuggestionCountAggregateInputType | true
    _min?: AISuggestionMinAggregateInputType
    _max?: AISuggestionMaxAggregateInputType
  }

  export type AISuggestionGroupByOutputType = {
    id: string
    jobApplicationId: string
    originalText: string
    suggestedText: string
    type: string
    status: string
    explanation: string
    createdAt: Date
    _count: AISuggestionCountAggregateOutputType | null
    _min: AISuggestionMinAggregateOutputType | null
    _max: AISuggestionMaxAggregateOutputType | null
  }

  type GetAISuggestionGroupByPayload<T extends AISuggestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AISuggestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AISuggestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AISuggestionGroupByOutputType[P]>
            : GetScalarType<T[P], AISuggestionGroupByOutputType[P]>
        }
      >
    >


  export type AISuggestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobApplicationId?: boolean
    originalText?: boolean
    suggestedText?: boolean
    type?: boolean
    status?: boolean
    explanation?: boolean
    createdAt?: boolean
    jobApplication?: boolean | JobApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aISuggestion"]>

  export type AISuggestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobApplicationId?: boolean
    originalText?: boolean
    suggestedText?: boolean
    type?: boolean
    status?: boolean
    explanation?: boolean
    createdAt?: boolean
    jobApplication?: boolean | JobApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aISuggestion"]>

  export type AISuggestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobApplicationId?: boolean
    originalText?: boolean
    suggestedText?: boolean
    type?: boolean
    status?: boolean
    explanation?: boolean
    createdAt?: boolean
    jobApplication?: boolean | JobApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aISuggestion"]>

  export type AISuggestionSelectScalar = {
    id?: boolean
    jobApplicationId?: boolean
    originalText?: boolean
    suggestedText?: boolean
    type?: boolean
    status?: boolean
    explanation?: boolean
    createdAt?: boolean
  }

  export type AISuggestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jobApplicationId" | "originalText" | "suggestedText" | "type" | "status" | "explanation" | "createdAt", ExtArgs["result"]["aISuggestion"]>
  export type AISuggestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobApplication?: boolean | JobApplicationDefaultArgs<ExtArgs>
  }
  export type AISuggestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobApplication?: boolean | JobApplicationDefaultArgs<ExtArgs>
  }
  export type AISuggestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobApplication?: boolean | JobApplicationDefaultArgs<ExtArgs>
  }

  export type $AISuggestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AISuggestion"
    objects: {
      jobApplication: Prisma.$JobApplicationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      jobApplicationId: string
      originalText: string
      suggestedText: string
      type: string
      status: string
      explanation: string
      createdAt: Date
    }, ExtArgs["result"]["aISuggestion"]>
    composites: {}
  }

  type AISuggestionGetPayload<S extends boolean | null | undefined | AISuggestionDefaultArgs> = $Result.GetResult<Prisma.$AISuggestionPayload, S>

  type AISuggestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AISuggestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AISuggestionCountAggregateInputType | true
    }

  export interface AISuggestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AISuggestion'], meta: { name: 'AISuggestion' } }
    /**
     * Find zero or one AISuggestion that matches the filter.
     * @param {AISuggestionFindUniqueArgs} args - Arguments to find a AISuggestion
     * @example
     * // Get one AISuggestion
     * const aISuggestion = await prisma.aISuggestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AISuggestionFindUniqueArgs>(args: SelectSubset<T, AISuggestionFindUniqueArgs<ExtArgs>>): Prisma__AISuggestionClient<$Result.GetResult<Prisma.$AISuggestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AISuggestion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AISuggestionFindUniqueOrThrowArgs} args - Arguments to find a AISuggestion
     * @example
     * // Get one AISuggestion
     * const aISuggestion = await prisma.aISuggestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AISuggestionFindUniqueOrThrowArgs>(args: SelectSubset<T, AISuggestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AISuggestionClient<$Result.GetResult<Prisma.$AISuggestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AISuggestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AISuggestionFindFirstArgs} args - Arguments to find a AISuggestion
     * @example
     * // Get one AISuggestion
     * const aISuggestion = await prisma.aISuggestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AISuggestionFindFirstArgs>(args?: SelectSubset<T, AISuggestionFindFirstArgs<ExtArgs>>): Prisma__AISuggestionClient<$Result.GetResult<Prisma.$AISuggestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AISuggestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AISuggestionFindFirstOrThrowArgs} args - Arguments to find a AISuggestion
     * @example
     * // Get one AISuggestion
     * const aISuggestion = await prisma.aISuggestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AISuggestionFindFirstOrThrowArgs>(args?: SelectSubset<T, AISuggestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AISuggestionClient<$Result.GetResult<Prisma.$AISuggestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AISuggestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AISuggestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AISuggestions
     * const aISuggestions = await prisma.aISuggestion.findMany()
     * 
     * // Get first 10 AISuggestions
     * const aISuggestions = await prisma.aISuggestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aISuggestionWithIdOnly = await prisma.aISuggestion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AISuggestionFindManyArgs>(args?: SelectSubset<T, AISuggestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AISuggestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AISuggestion.
     * @param {AISuggestionCreateArgs} args - Arguments to create a AISuggestion.
     * @example
     * // Create one AISuggestion
     * const AISuggestion = await prisma.aISuggestion.create({
     *   data: {
     *     // ... data to create a AISuggestion
     *   }
     * })
     * 
     */
    create<T extends AISuggestionCreateArgs>(args: SelectSubset<T, AISuggestionCreateArgs<ExtArgs>>): Prisma__AISuggestionClient<$Result.GetResult<Prisma.$AISuggestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AISuggestions.
     * @param {AISuggestionCreateManyArgs} args - Arguments to create many AISuggestions.
     * @example
     * // Create many AISuggestions
     * const aISuggestion = await prisma.aISuggestion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AISuggestionCreateManyArgs>(args?: SelectSubset<T, AISuggestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AISuggestions and returns the data saved in the database.
     * @param {AISuggestionCreateManyAndReturnArgs} args - Arguments to create many AISuggestions.
     * @example
     * // Create many AISuggestions
     * const aISuggestion = await prisma.aISuggestion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AISuggestions and only return the `id`
     * const aISuggestionWithIdOnly = await prisma.aISuggestion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AISuggestionCreateManyAndReturnArgs>(args?: SelectSubset<T, AISuggestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AISuggestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AISuggestion.
     * @param {AISuggestionDeleteArgs} args - Arguments to delete one AISuggestion.
     * @example
     * // Delete one AISuggestion
     * const AISuggestion = await prisma.aISuggestion.delete({
     *   where: {
     *     // ... filter to delete one AISuggestion
     *   }
     * })
     * 
     */
    delete<T extends AISuggestionDeleteArgs>(args: SelectSubset<T, AISuggestionDeleteArgs<ExtArgs>>): Prisma__AISuggestionClient<$Result.GetResult<Prisma.$AISuggestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AISuggestion.
     * @param {AISuggestionUpdateArgs} args - Arguments to update one AISuggestion.
     * @example
     * // Update one AISuggestion
     * const aISuggestion = await prisma.aISuggestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AISuggestionUpdateArgs>(args: SelectSubset<T, AISuggestionUpdateArgs<ExtArgs>>): Prisma__AISuggestionClient<$Result.GetResult<Prisma.$AISuggestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AISuggestions.
     * @param {AISuggestionDeleteManyArgs} args - Arguments to filter AISuggestions to delete.
     * @example
     * // Delete a few AISuggestions
     * const { count } = await prisma.aISuggestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AISuggestionDeleteManyArgs>(args?: SelectSubset<T, AISuggestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AISuggestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AISuggestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AISuggestions
     * const aISuggestion = await prisma.aISuggestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AISuggestionUpdateManyArgs>(args: SelectSubset<T, AISuggestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AISuggestions and returns the data updated in the database.
     * @param {AISuggestionUpdateManyAndReturnArgs} args - Arguments to update many AISuggestions.
     * @example
     * // Update many AISuggestions
     * const aISuggestion = await prisma.aISuggestion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AISuggestions and only return the `id`
     * const aISuggestionWithIdOnly = await prisma.aISuggestion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AISuggestionUpdateManyAndReturnArgs>(args: SelectSubset<T, AISuggestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AISuggestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AISuggestion.
     * @param {AISuggestionUpsertArgs} args - Arguments to update or create a AISuggestion.
     * @example
     * // Update or create a AISuggestion
     * const aISuggestion = await prisma.aISuggestion.upsert({
     *   create: {
     *     // ... data to create a AISuggestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AISuggestion we want to update
     *   }
     * })
     */
    upsert<T extends AISuggestionUpsertArgs>(args: SelectSubset<T, AISuggestionUpsertArgs<ExtArgs>>): Prisma__AISuggestionClient<$Result.GetResult<Prisma.$AISuggestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AISuggestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AISuggestionCountArgs} args - Arguments to filter AISuggestions to count.
     * @example
     * // Count the number of AISuggestions
     * const count = await prisma.aISuggestion.count({
     *   where: {
     *     // ... the filter for the AISuggestions we want to count
     *   }
     * })
    **/
    count<T extends AISuggestionCountArgs>(
      args?: Subset<T, AISuggestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AISuggestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AISuggestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AISuggestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AISuggestionAggregateArgs>(args: Subset<T, AISuggestionAggregateArgs>): Prisma.PrismaPromise<GetAISuggestionAggregateType<T>>

    /**
     * Group by AISuggestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AISuggestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AISuggestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AISuggestionGroupByArgs['orderBy'] }
        : { orderBy?: AISuggestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AISuggestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAISuggestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AISuggestion model
   */
  readonly fields: AISuggestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AISuggestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AISuggestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jobApplication<T extends JobApplicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobApplicationDefaultArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AISuggestion model
   */
  interface AISuggestionFieldRefs {
    readonly id: FieldRef<"AISuggestion", 'String'>
    readonly jobApplicationId: FieldRef<"AISuggestion", 'String'>
    readonly originalText: FieldRef<"AISuggestion", 'String'>
    readonly suggestedText: FieldRef<"AISuggestion", 'String'>
    readonly type: FieldRef<"AISuggestion", 'String'>
    readonly status: FieldRef<"AISuggestion", 'String'>
    readonly explanation: FieldRef<"AISuggestion", 'String'>
    readonly createdAt: FieldRef<"AISuggestion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AISuggestion findUnique
   */
  export type AISuggestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AISuggestion
     */
    select?: AISuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AISuggestion
     */
    omit?: AISuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AISuggestionInclude<ExtArgs> | null
    /**
     * Filter, which AISuggestion to fetch.
     */
    where: AISuggestionWhereUniqueInput
  }

  /**
   * AISuggestion findUniqueOrThrow
   */
  export type AISuggestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AISuggestion
     */
    select?: AISuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AISuggestion
     */
    omit?: AISuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AISuggestionInclude<ExtArgs> | null
    /**
     * Filter, which AISuggestion to fetch.
     */
    where: AISuggestionWhereUniqueInput
  }

  /**
   * AISuggestion findFirst
   */
  export type AISuggestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AISuggestion
     */
    select?: AISuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AISuggestion
     */
    omit?: AISuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AISuggestionInclude<ExtArgs> | null
    /**
     * Filter, which AISuggestion to fetch.
     */
    where?: AISuggestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AISuggestions to fetch.
     */
    orderBy?: AISuggestionOrderByWithRelationInput | AISuggestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AISuggestions.
     */
    cursor?: AISuggestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AISuggestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AISuggestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AISuggestions.
     */
    distinct?: AISuggestionScalarFieldEnum | AISuggestionScalarFieldEnum[]
  }

  /**
   * AISuggestion findFirstOrThrow
   */
  export type AISuggestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AISuggestion
     */
    select?: AISuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AISuggestion
     */
    omit?: AISuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AISuggestionInclude<ExtArgs> | null
    /**
     * Filter, which AISuggestion to fetch.
     */
    where?: AISuggestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AISuggestions to fetch.
     */
    orderBy?: AISuggestionOrderByWithRelationInput | AISuggestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AISuggestions.
     */
    cursor?: AISuggestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AISuggestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AISuggestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AISuggestions.
     */
    distinct?: AISuggestionScalarFieldEnum | AISuggestionScalarFieldEnum[]
  }

  /**
   * AISuggestion findMany
   */
  export type AISuggestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AISuggestion
     */
    select?: AISuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AISuggestion
     */
    omit?: AISuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AISuggestionInclude<ExtArgs> | null
    /**
     * Filter, which AISuggestions to fetch.
     */
    where?: AISuggestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AISuggestions to fetch.
     */
    orderBy?: AISuggestionOrderByWithRelationInput | AISuggestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AISuggestions.
     */
    cursor?: AISuggestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AISuggestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AISuggestions.
     */
    skip?: number
    distinct?: AISuggestionScalarFieldEnum | AISuggestionScalarFieldEnum[]
  }

  /**
   * AISuggestion create
   */
  export type AISuggestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AISuggestion
     */
    select?: AISuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AISuggestion
     */
    omit?: AISuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AISuggestionInclude<ExtArgs> | null
    /**
     * The data needed to create a AISuggestion.
     */
    data: XOR<AISuggestionCreateInput, AISuggestionUncheckedCreateInput>
  }

  /**
   * AISuggestion createMany
   */
  export type AISuggestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AISuggestions.
     */
    data: AISuggestionCreateManyInput | AISuggestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AISuggestion createManyAndReturn
   */
  export type AISuggestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AISuggestion
     */
    select?: AISuggestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AISuggestion
     */
    omit?: AISuggestionOmit<ExtArgs> | null
    /**
     * The data used to create many AISuggestions.
     */
    data: AISuggestionCreateManyInput | AISuggestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AISuggestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AISuggestion update
   */
  export type AISuggestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AISuggestion
     */
    select?: AISuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AISuggestion
     */
    omit?: AISuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AISuggestionInclude<ExtArgs> | null
    /**
     * The data needed to update a AISuggestion.
     */
    data: XOR<AISuggestionUpdateInput, AISuggestionUncheckedUpdateInput>
    /**
     * Choose, which AISuggestion to update.
     */
    where: AISuggestionWhereUniqueInput
  }

  /**
   * AISuggestion updateMany
   */
  export type AISuggestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AISuggestions.
     */
    data: XOR<AISuggestionUpdateManyMutationInput, AISuggestionUncheckedUpdateManyInput>
    /**
     * Filter which AISuggestions to update
     */
    where?: AISuggestionWhereInput
    /**
     * Limit how many AISuggestions to update.
     */
    limit?: number
  }

  /**
   * AISuggestion updateManyAndReturn
   */
  export type AISuggestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AISuggestion
     */
    select?: AISuggestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AISuggestion
     */
    omit?: AISuggestionOmit<ExtArgs> | null
    /**
     * The data used to update AISuggestions.
     */
    data: XOR<AISuggestionUpdateManyMutationInput, AISuggestionUncheckedUpdateManyInput>
    /**
     * Filter which AISuggestions to update
     */
    where?: AISuggestionWhereInput
    /**
     * Limit how many AISuggestions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AISuggestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AISuggestion upsert
   */
  export type AISuggestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AISuggestion
     */
    select?: AISuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AISuggestion
     */
    omit?: AISuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AISuggestionInclude<ExtArgs> | null
    /**
     * The filter to search for the AISuggestion to update in case it exists.
     */
    where: AISuggestionWhereUniqueInput
    /**
     * In case the AISuggestion found by the `where` argument doesn't exist, create a new AISuggestion with this data.
     */
    create: XOR<AISuggestionCreateInput, AISuggestionUncheckedCreateInput>
    /**
     * In case the AISuggestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AISuggestionUpdateInput, AISuggestionUncheckedUpdateInput>
  }

  /**
   * AISuggestion delete
   */
  export type AISuggestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AISuggestion
     */
    select?: AISuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AISuggestion
     */
    omit?: AISuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AISuggestionInclude<ExtArgs> | null
    /**
     * Filter which AISuggestion to delete.
     */
    where: AISuggestionWhereUniqueInput
  }

  /**
   * AISuggestion deleteMany
   */
  export type AISuggestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AISuggestions to delete
     */
    where?: AISuggestionWhereInput
    /**
     * Limit how many AISuggestions to delete.
     */
    limit?: number
  }

  /**
   * AISuggestion without action
   */
  export type AISuggestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AISuggestion
     */
    select?: AISuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AISuggestion
     */
    omit?: AISuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AISuggestionInclude<ExtArgs> | null
  }


  /**
   * Model AcceptedSuggestion
   */

  export type AggregateAcceptedSuggestion = {
    _count: AcceptedSuggestionCountAggregateOutputType | null
    _min: AcceptedSuggestionMinAggregateOutputType | null
    _max: AcceptedSuggestionMaxAggregateOutputType | null
  }

  export type AcceptedSuggestionMinAggregateOutputType = {
    id: string | null
    jobApplicationId: string | null
    originalText: string | null
    suggestedText: string | null
    createdAt: Date | null
  }

  export type AcceptedSuggestionMaxAggregateOutputType = {
    id: string | null
    jobApplicationId: string | null
    originalText: string | null
    suggestedText: string | null
    createdAt: Date | null
  }

  export type AcceptedSuggestionCountAggregateOutputType = {
    id: number
    jobApplicationId: number
    originalText: number
    suggestedText: number
    createdAt: number
    _all: number
  }


  export type AcceptedSuggestionMinAggregateInputType = {
    id?: true
    jobApplicationId?: true
    originalText?: true
    suggestedText?: true
    createdAt?: true
  }

  export type AcceptedSuggestionMaxAggregateInputType = {
    id?: true
    jobApplicationId?: true
    originalText?: true
    suggestedText?: true
    createdAt?: true
  }

  export type AcceptedSuggestionCountAggregateInputType = {
    id?: true
    jobApplicationId?: true
    originalText?: true
    suggestedText?: true
    createdAt?: true
    _all?: true
  }

  export type AcceptedSuggestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AcceptedSuggestion to aggregate.
     */
    where?: AcceptedSuggestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcceptedSuggestions to fetch.
     */
    orderBy?: AcceptedSuggestionOrderByWithRelationInput | AcceptedSuggestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AcceptedSuggestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcceptedSuggestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcceptedSuggestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AcceptedSuggestions
    **/
    _count?: true | AcceptedSuggestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AcceptedSuggestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AcceptedSuggestionMaxAggregateInputType
  }

  export type GetAcceptedSuggestionAggregateType<T extends AcceptedSuggestionAggregateArgs> = {
        [P in keyof T & keyof AggregateAcceptedSuggestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAcceptedSuggestion[P]>
      : GetScalarType<T[P], AggregateAcceptedSuggestion[P]>
  }




  export type AcceptedSuggestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AcceptedSuggestionWhereInput
    orderBy?: AcceptedSuggestionOrderByWithAggregationInput | AcceptedSuggestionOrderByWithAggregationInput[]
    by: AcceptedSuggestionScalarFieldEnum[] | AcceptedSuggestionScalarFieldEnum
    having?: AcceptedSuggestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AcceptedSuggestionCountAggregateInputType | true
    _min?: AcceptedSuggestionMinAggregateInputType
    _max?: AcceptedSuggestionMaxAggregateInputType
  }

  export type AcceptedSuggestionGroupByOutputType = {
    id: string
    jobApplicationId: string
    originalText: string
    suggestedText: string
    createdAt: Date
    _count: AcceptedSuggestionCountAggregateOutputType | null
    _min: AcceptedSuggestionMinAggregateOutputType | null
    _max: AcceptedSuggestionMaxAggregateOutputType | null
  }

  type GetAcceptedSuggestionGroupByPayload<T extends AcceptedSuggestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AcceptedSuggestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AcceptedSuggestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AcceptedSuggestionGroupByOutputType[P]>
            : GetScalarType<T[P], AcceptedSuggestionGroupByOutputType[P]>
        }
      >
    >


  export type AcceptedSuggestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobApplicationId?: boolean
    originalText?: boolean
    suggestedText?: boolean
    createdAt?: boolean
    jobApplication?: boolean | JobApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["acceptedSuggestion"]>

  export type AcceptedSuggestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobApplicationId?: boolean
    originalText?: boolean
    suggestedText?: boolean
    createdAt?: boolean
    jobApplication?: boolean | JobApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["acceptedSuggestion"]>

  export type AcceptedSuggestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobApplicationId?: boolean
    originalText?: boolean
    suggestedText?: boolean
    createdAt?: boolean
    jobApplication?: boolean | JobApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["acceptedSuggestion"]>

  export type AcceptedSuggestionSelectScalar = {
    id?: boolean
    jobApplicationId?: boolean
    originalText?: boolean
    suggestedText?: boolean
    createdAt?: boolean
  }

  export type AcceptedSuggestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jobApplicationId" | "originalText" | "suggestedText" | "createdAt", ExtArgs["result"]["acceptedSuggestion"]>
  export type AcceptedSuggestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobApplication?: boolean | JobApplicationDefaultArgs<ExtArgs>
  }
  export type AcceptedSuggestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobApplication?: boolean | JobApplicationDefaultArgs<ExtArgs>
  }
  export type AcceptedSuggestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobApplication?: boolean | JobApplicationDefaultArgs<ExtArgs>
  }

  export type $AcceptedSuggestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AcceptedSuggestion"
    objects: {
      jobApplication: Prisma.$JobApplicationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      jobApplicationId: string
      originalText: string
      suggestedText: string
      createdAt: Date
    }, ExtArgs["result"]["acceptedSuggestion"]>
    composites: {}
  }

  type AcceptedSuggestionGetPayload<S extends boolean | null | undefined | AcceptedSuggestionDefaultArgs> = $Result.GetResult<Prisma.$AcceptedSuggestionPayload, S>

  type AcceptedSuggestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AcceptedSuggestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AcceptedSuggestionCountAggregateInputType | true
    }

  export interface AcceptedSuggestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AcceptedSuggestion'], meta: { name: 'AcceptedSuggestion' } }
    /**
     * Find zero or one AcceptedSuggestion that matches the filter.
     * @param {AcceptedSuggestionFindUniqueArgs} args - Arguments to find a AcceptedSuggestion
     * @example
     * // Get one AcceptedSuggestion
     * const acceptedSuggestion = await prisma.acceptedSuggestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AcceptedSuggestionFindUniqueArgs>(args: SelectSubset<T, AcceptedSuggestionFindUniqueArgs<ExtArgs>>): Prisma__AcceptedSuggestionClient<$Result.GetResult<Prisma.$AcceptedSuggestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AcceptedSuggestion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AcceptedSuggestionFindUniqueOrThrowArgs} args - Arguments to find a AcceptedSuggestion
     * @example
     * // Get one AcceptedSuggestion
     * const acceptedSuggestion = await prisma.acceptedSuggestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AcceptedSuggestionFindUniqueOrThrowArgs>(args: SelectSubset<T, AcceptedSuggestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AcceptedSuggestionClient<$Result.GetResult<Prisma.$AcceptedSuggestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AcceptedSuggestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcceptedSuggestionFindFirstArgs} args - Arguments to find a AcceptedSuggestion
     * @example
     * // Get one AcceptedSuggestion
     * const acceptedSuggestion = await prisma.acceptedSuggestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AcceptedSuggestionFindFirstArgs>(args?: SelectSubset<T, AcceptedSuggestionFindFirstArgs<ExtArgs>>): Prisma__AcceptedSuggestionClient<$Result.GetResult<Prisma.$AcceptedSuggestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AcceptedSuggestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcceptedSuggestionFindFirstOrThrowArgs} args - Arguments to find a AcceptedSuggestion
     * @example
     * // Get one AcceptedSuggestion
     * const acceptedSuggestion = await prisma.acceptedSuggestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AcceptedSuggestionFindFirstOrThrowArgs>(args?: SelectSubset<T, AcceptedSuggestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AcceptedSuggestionClient<$Result.GetResult<Prisma.$AcceptedSuggestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AcceptedSuggestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcceptedSuggestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AcceptedSuggestions
     * const acceptedSuggestions = await prisma.acceptedSuggestion.findMany()
     * 
     * // Get first 10 AcceptedSuggestions
     * const acceptedSuggestions = await prisma.acceptedSuggestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const acceptedSuggestionWithIdOnly = await prisma.acceptedSuggestion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AcceptedSuggestionFindManyArgs>(args?: SelectSubset<T, AcceptedSuggestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcceptedSuggestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AcceptedSuggestion.
     * @param {AcceptedSuggestionCreateArgs} args - Arguments to create a AcceptedSuggestion.
     * @example
     * // Create one AcceptedSuggestion
     * const AcceptedSuggestion = await prisma.acceptedSuggestion.create({
     *   data: {
     *     // ... data to create a AcceptedSuggestion
     *   }
     * })
     * 
     */
    create<T extends AcceptedSuggestionCreateArgs>(args: SelectSubset<T, AcceptedSuggestionCreateArgs<ExtArgs>>): Prisma__AcceptedSuggestionClient<$Result.GetResult<Prisma.$AcceptedSuggestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AcceptedSuggestions.
     * @param {AcceptedSuggestionCreateManyArgs} args - Arguments to create many AcceptedSuggestions.
     * @example
     * // Create many AcceptedSuggestions
     * const acceptedSuggestion = await prisma.acceptedSuggestion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AcceptedSuggestionCreateManyArgs>(args?: SelectSubset<T, AcceptedSuggestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AcceptedSuggestions and returns the data saved in the database.
     * @param {AcceptedSuggestionCreateManyAndReturnArgs} args - Arguments to create many AcceptedSuggestions.
     * @example
     * // Create many AcceptedSuggestions
     * const acceptedSuggestion = await prisma.acceptedSuggestion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AcceptedSuggestions and only return the `id`
     * const acceptedSuggestionWithIdOnly = await prisma.acceptedSuggestion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AcceptedSuggestionCreateManyAndReturnArgs>(args?: SelectSubset<T, AcceptedSuggestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcceptedSuggestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AcceptedSuggestion.
     * @param {AcceptedSuggestionDeleteArgs} args - Arguments to delete one AcceptedSuggestion.
     * @example
     * // Delete one AcceptedSuggestion
     * const AcceptedSuggestion = await prisma.acceptedSuggestion.delete({
     *   where: {
     *     // ... filter to delete one AcceptedSuggestion
     *   }
     * })
     * 
     */
    delete<T extends AcceptedSuggestionDeleteArgs>(args: SelectSubset<T, AcceptedSuggestionDeleteArgs<ExtArgs>>): Prisma__AcceptedSuggestionClient<$Result.GetResult<Prisma.$AcceptedSuggestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AcceptedSuggestion.
     * @param {AcceptedSuggestionUpdateArgs} args - Arguments to update one AcceptedSuggestion.
     * @example
     * // Update one AcceptedSuggestion
     * const acceptedSuggestion = await prisma.acceptedSuggestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AcceptedSuggestionUpdateArgs>(args: SelectSubset<T, AcceptedSuggestionUpdateArgs<ExtArgs>>): Prisma__AcceptedSuggestionClient<$Result.GetResult<Prisma.$AcceptedSuggestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AcceptedSuggestions.
     * @param {AcceptedSuggestionDeleteManyArgs} args - Arguments to filter AcceptedSuggestions to delete.
     * @example
     * // Delete a few AcceptedSuggestions
     * const { count } = await prisma.acceptedSuggestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AcceptedSuggestionDeleteManyArgs>(args?: SelectSubset<T, AcceptedSuggestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AcceptedSuggestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcceptedSuggestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AcceptedSuggestions
     * const acceptedSuggestion = await prisma.acceptedSuggestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AcceptedSuggestionUpdateManyArgs>(args: SelectSubset<T, AcceptedSuggestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AcceptedSuggestions and returns the data updated in the database.
     * @param {AcceptedSuggestionUpdateManyAndReturnArgs} args - Arguments to update many AcceptedSuggestions.
     * @example
     * // Update many AcceptedSuggestions
     * const acceptedSuggestion = await prisma.acceptedSuggestion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AcceptedSuggestions and only return the `id`
     * const acceptedSuggestionWithIdOnly = await prisma.acceptedSuggestion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AcceptedSuggestionUpdateManyAndReturnArgs>(args: SelectSubset<T, AcceptedSuggestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcceptedSuggestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AcceptedSuggestion.
     * @param {AcceptedSuggestionUpsertArgs} args - Arguments to update or create a AcceptedSuggestion.
     * @example
     * // Update or create a AcceptedSuggestion
     * const acceptedSuggestion = await prisma.acceptedSuggestion.upsert({
     *   create: {
     *     // ... data to create a AcceptedSuggestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AcceptedSuggestion we want to update
     *   }
     * })
     */
    upsert<T extends AcceptedSuggestionUpsertArgs>(args: SelectSubset<T, AcceptedSuggestionUpsertArgs<ExtArgs>>): Prisma__AcceptedSuggestionClient<$Result.GetResult<Prisma.$AcceptedSuggestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AcceptedSuggestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcceptedSuggestionCountArgs} args - Arguments to filter AcceptedSuggestions to count.
     * @example
     * // Count the number of AcceptedSuggestions
     * const count = await prisma.acceptedSuggestion.count({
     *   where: {
     *     // ... the filter for the AcceptedSuggestions we want to count
     *   }
     * })
    **/
    count<T extends AcceptedSuggestionCountArgs>(
      args?: Subset<T, AcceptedSuggestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AcceptedSuggestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AcceptedSuggestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcceptedSuggestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AcceptedSuggestionAggregateArgs>(args: Subset<T, AcceptedSuggestionAggregateArgs>): Prisma.PrismaPromise<GetAcceptedSuggestionAggregateType<T>>

    /**
     * Group by AcceptedSuggestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcceptedSuggestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AcceptedSuggestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AcceptedSuggestionGroupByArgs['orderBy'] }
        : { orderBy?: AcceptedSuggestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AcceptedSuggestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAcceptedSuggestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AcceptedSuggestion model
   */
  readonly fields: AcceptedSuggestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AcceptedSuggestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AcceptedSuggestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jobApplication<T extends JobApplicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobApplicationDefaultArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AcceptedSuggestion model
   */
  interface AcceptedSuggestionFieldRefs {
    readonly id: FieldRef<"AcceptedSuggestion", 'String'>
    readonly jobApplicationId: FieldRef<"AcceptedSuggestion", 'String'>
    readonly originalText: FieldRef<"AcceptedSuggestion", 'String'>
    readonly suggestedText: FieldRef<"AcceptedSuggestion", 'String'>
    readonly createdAt: FieldRef<"AcceptedSuggestion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AcceptedSuggestion findUnique
   */
  export type AcceptedSuggestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcceptedSuggestion
     */
    select?: AcceptedSuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcceptedSuggestion
     */
    omit?: AcceptedSuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcceptedSuggestionInclude<ExtArgs> | null
    /**
     * Filter, which AcceptedSuggestion to fetch.
     */
    where: AcceptedSuggestionWhereUniqueInput
  }

  /**
   * AcceptedSuggestion findUniqueOrThrow
   */
  export type AcceptedSuggestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcceptedSuggestion
     */
    select?: AcceptedSuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcceptedSuggestion
     */
    omit?: AcceptedSuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcceptedSuggestionInclude<ExtArgs> | null
    /**
     * Filter, which AcceptedSuggestion to fetch.
     */
    where: AcceptedSuggestionWhereUniqueInput
  }

  /**
   * AcceptedSuggestion findFirst
   */
  export type AcceptedSuggestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcceptedSuggestion
     */
    select?: AcceptedSuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcceptedSuggestion
     */
    omit?: AcceptedSuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcceptedSuggestionInclude<ExtArgs> | null
    /**
     * Filter, which AcceptedSuggestion to fetch.
     */
    where?: AcceptedSuggestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcceptedSuggestions to fetch.
     */
    orderBy?: AcceptedSuggestionOrderByWithRelationInput | AcceptedSuggestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AcceptedSuggestions.
     */
    cursor?: AcceptedSuggestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcceptedSuggestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcceptedSuggestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AcceptedSuggestions.
     */
    distinct?: AcceptedSuggestionScalarFieldEnum | AcceptedSuggestionScalarFieldEnum[]
  }

  /**
   * AcceptedSuggestion findFirstOrThrow
   */
  export type AcceptedSuggestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcceptedSuggestion
     */
    select?: AcceptedSuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcceptedSuggestion
     */
    omit?: AcceptedSuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcceptedSuggestionInclude<ExtArgs> | null
    /**
     * Filter, which AcceptedSuggestion to fetch.
     */
    where?: AcceptedSuggestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcceptedSuggestions to fetch.
     */
    orderBy?: AcceptedSuggestionOrderByWithRelationInput | AcceptedSuggestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AcceptedSuggestions.
     */
    cursor?: AcceptedSuggestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcceptedSuggestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcceptedSuggestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AcceptedSuggestions.
     */
    distinct?: AcceptedSuggestionScalarFieldEnum | AcceptedSuggestionScalarFieldEnum[]
  }

  /**
   * AcceptedSuggestion findMany
   */
  export type AcceptedSuggestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcceptedSuggestion
     */
    select?: AcceptedSuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcceptedSuggestion
     */
    omit?: AcceptedSuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcceptedSuggestionInclude<ExtArgs> | null
    /**
     * Filter, which AcceptedSuggestions to fetch.
     */
    where?: AcceptedSuggestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcceptedSuggestions to fetch.
     */
    orderBy?: AcceptedSuggestionOrderByWithRelationInput | AcceptedSuggestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AcceptedSuggestions.
     */
    cursor?: AcceptedSuggestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcceptedSuggestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcceptedSuggestions.
     */
    skip?: number
    distinct?: AcceptedSuggestionScalarFieldEnum | AcceptedSuggestionScalarFieldEnum[]
  }

  /**
   * AcceptedSuggestion create
   */
  export type AcceptedSuggestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcceptedSuggestion
     */
    select?: AcceptedSuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcceptedSuggestion
     */
    omit?: AcceptedSuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcceptedSuggestionInclude<ExtArgs> | null
    /**
     * The data needed to create a AcceptedSuggestion.
     */
    data: XOR<AcceptedSuggestionCreateInput, AcceptedSuggestionUncheckedCreateInput>
  }

  /**
   * AcceptedSuggestion createMany
   */
  export type AcceptedSuggestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AcceptedSuggestions.
     */
    data: AcceptedSuggestionCreateManyInput | AcceptedSuggestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AcceptedSuggestion createManyAndReturn
   */
  export type AcceptedSuggestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcceptedSuggestion
     */
    select?: AcceptedSuggestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AcceptedSuggestion
     */
    omit?: AcceptedSuggestionOmit<ExtArgs> | null
    /**
     * The data used to create many AcceptedSuggestions.
     */
    data: AcceptedSuggestionCreateManyInput | AcceptedSuggestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcceptedSuggestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AcceptedSuggestion update
   */
  export type AcceptedSuggestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcceptedSuggestion
     */
    select?: AcceptedSuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcceptedSuggestion
     */
    omit?: AcceptedSuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcceptedSuggestionInclude<ExtArgs> | null
    /**
     * The data needed to update a AcceptedSuggestion.
     */
    data: XOR<AcceptedSuggestionUpdateInput, AcceptedSuggestionUncheckedUpdateInput>
    /**
     * Choose, which AcceptedSuggestion to update.
     */
    where: AcceptedSuggestionWhereUniqueInput
  }

  /**
   * AcceptedSuggestion updateMany
   */
  export type AcceptedSuggestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AcceptedSuggestions.
     */
    data: XOR<AcceptedSuggestionUpdateManyMutationInput, AcceptedSuggestionUncheckedUpdateManyInput>
    /**
     * Filter which AcceptedSuggestions to update
     */
    where?: AcceptedSuggestionWhereInput
    /**
     * Limit how many AcceptedSuggestions to update.
     */
    limit?: number
  }

  /**
   * AcceptedSuggestion updateManyAndReturn
   */
  export type AcceptedSuggestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcceptedSuggestion
     */
    select?: AcceptedSuggestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AcceptedSuggestion
     */
    omit?: AcceptedSuggestionOmit<ExtArgs> | null
    /**
     * The data used to update AcceptedSuggestions.
     */
    data: XOR<AcceptedSuggestionUpdateManyMutationInput, AcceptedSuggestionUncheckedUpdateManyInput>
    /**
     * Filter which AcceptedSuggestions to update
     */
    where?: AcceptedSuggestionWhereInput
    /**
     * Limit how many AcceptedSuggestions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcceptedSuggestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AcceptedSuggestion upsert
   */
  export type AcceptedSuggestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcceptedSuggestion
     */
    select?: AcceptedSuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcceptedSuggestion
     */
    omit?: AcceptedSuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcceptedSuggestionInclude<ExtArgs> | null
    /**
     * The filter to search for the AcceptedSuggestion to update in case it exists.
     */
    where: AcceptedSuggestionWhereUniqueInput
    /**
     * In case the AcceptedSuggestion found by the `where` argument doesn't exist, create a new AcceptedSuggestion with this data.
     */
    create: XOR<AcceptedSuggestionCreateInput, AcceptedSuggestionUncheckedCreateInput>
    /**
     * In case the AcceptedSuggestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AcceptedSuggestionUpdateInput, AcceptedSuggestionUncheckedUpdateInput>
  }

  /**
   * AcceptedSuggestion delete
   */
  export type AcceptedSuggestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcceptedSuggestion
     */
    select?: AcceptedSuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcceptedSuggestion
     */
    omit?: AcceptedSuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcceptedSuggestionInclude<ExtArgs> | null
    /**
     * Filter which AcceptedSuggestion to delete.
     */
    where: AcceptedSuggestionWhereUniqueInput
  }

  /**
   * AcceptedSuggestion deleteMany
   */
  export type AcceptedSuggestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AcceptedSuggestions to delete
     */
    where?: AcceptedSuggestionWhereInput
    /**
     * Limit how many AcceptedSuggestions to delete.
     */
    limit?: number
  }

  /**
   * AcceptedSuggestion without action
   */
  export type AcceptedSuggestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcceptedSuggestion
     */
    select?: AcceptedSuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcceptedSuggestion
     */
    omit?: AcceptedSuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcceptedSuggestionInclude<ExtArgs> | null
  }


  /**
   * Model InterviewPrep
   */

  export type AggregateInterviewPrep = {
    _count: InterviewPrepCountAggregateOutputType | null
    _min: InterviewPrepMinAggregateOutputType | null
    _max: InterviewPrepMaxAggregateOutputType | null
  }

  export type InterviewPrepMinAggregateOutputType = {
    id: string | null
    jobApplicationId: string | null
    createdAt: Date | null
  }

  export type InterviewPrepMaxAggregateOutputType = {
    id: string | null
    jobApplicationId: string | null
    createdAt: Date | null
  }

  export type InterviewPrepCountAggregateOutputType = {
    id: number
    jobApplicationId: number
    createdAt: number
    _all: number
  }


  export type InterviewPrepMinAggregateInputType = {
    id?: true
    jobApplicationId?: true
    createdAt?: true
  }

  export type InterviewPrepMaxAggregateInputType = {
    id?: true
    jobApplicationId?: true
    createdAt?: true
  }

  export type InterviewPrepCountAggregateInputType = {
    id?: true
    jobApplicationId?: true
    createdAt?: true
    _all?: true
  }

  export type InterviewPrepAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InterviewPrep to aggregate.
     */
    where?: InterviewPrepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterviewPreps to fetch.
     */
    orderBy?: InterviewPrepOrderByWithRelationInput | InterviewPrepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InterviewPrepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterviewPreps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterviewPreps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InterviewPreps
    **/
    _count?: true | InterviewPrepCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InterviewPrepMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InterviewPrepMaxAggregateInputType
  }

  export type GetInterviewPrepAggregateType<T extends InterviewPrepAggregateArgs> = {
        [P in keyof T & keyof AggregateInterviewPrep]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInterviewPrep[P]>
      : GetScalarType<T[P], AggregateInterviewPrep[P]>
  }




  export type InterviewPrepGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterviewPrepWhereInput
    orderBy?: InterviewPrepOrderByWithAggregationInput | InterviewPrepOrderByWithAggregationInput[]
    by: InterviewPrepScalarFieldEnum[] | InterviewPrepScalarFieldEnum
    having?: InterviewPrepScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InterviewPrepCountAggregateInputType | true
    _min?: InterviewPrepMinAggregateInputType
    _max?: InterviewPrepMaxAggregateInputType
  }

  export type InterviewPrepGroupByOutputType = {
    id: string
    jobApplicationId: string
    createdAt: Date
    _count: InterviewPrepCountAggregateOutputType | null
    _min: InterviewPrepMinAggregateOutputType | null
    _max: InterviewPrepMaxAggregateOutputType | null
  }

  type GetInterviewPrepGroupByPayload<T extends InterviewPrepGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InterviewPrepGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InterviewPrepGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InterviewPrepGroupByOutputType[P]>
            : GetScalarType<T[P], InterviewPrepGroupByOutputType[P]>
        }
      >
    >


  export type InterviewPrepSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobApplicationId?: boolean
    createdAt?: boolean
    jobApplication?: boolean | JobApplicationDefaultArgs<ExtArgs>
    questions?: boolean | InterviewPrep$questionsArgs<ExtArgs>
    _count?: boolean | InterviewPrepCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interviewPrep"]>

  export type InterviewPrepSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobApplicationId?: boolean
    createdAt?: boolean
    jobApplication?: boolean | JobApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interviewPrep"]>

  export type InterviewPrepSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobApplicationId?: boolean
    createdAt?: boolean
    jobApplication?: boolean | JobApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interviewPrep"]>

  export type InterviewPrepSelectScalar = {
    id?: boolean
    jobApplicationId?: boolean
    createdAt?: boolean
  }

  export type InterviewPrepOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jobApplicationId" | "createdAt", ExtArgs["result"]["interviewPrep"]>
  export type InterviewPrepInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobApplication?: boolean | JobApplicationDefaultArgs<ExtArgs>
    questions?: boolean | InterviewPrep$questionsArgs<ExtArgs>
    _count?: boolean | InterviewPrepCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InterviewPrepIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobApplication?: boolean | JobApplicationDefaultArgs<ExtArgs>
  }
  export type InterviewPrepIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobApplication?: boolean | JobApplicationDefaultArgs<ExtArgs>
  }

  export type $InterviewPrepPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InterviewPrep"
    objects: {
      jobApplication: Prisma.$JobApplicationPayload<ExtArgs>
      questions: Prisma.$InterviewQuestionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      jobApplicationId: string
      createdAt: Date
    }, ExtArgs["result"]["interviewPrep"]>
    composites: {}
  }

  type InterviewPrepGetPayload<S extends boolean | null | undefined | InterviewPrepDefaultArgs> = $Result.GetResult<Prisma.$InterviewPrepPayload, S>

  type InterviewPrepCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InterviewPrepFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InterviewPrepCountAggregateInputType | true
    }

  export interface InterviewPrepDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InterviewPrep'], meta: { name: 'InterviewPrep' } }
    /**
     * Find zero or one InterviewPrep that matches the filter.
     * @param {InterviewPrepFindUniqueArgs} args - Arguments to find a InterviewPrep
     * @example
     * // Get one InterviewPrep
     * const interviewPrep = await prisma.interviewPrep.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InterviewPrepFindUniqueArgs>(args: SelectSubset<T, InterviewPrepFindUniqueArgs<ExtArgs>>): Prisma__InterviewPrepClient<$Result.GetResult<Prisma.$InterviewPrepPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InterviewPrep that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InterviewPrepFindUniqueOrThrowArgs} args - Arguments to find a InterviewPrep
     * @example
     * // Get one InterviewPrep
     * const interviewPrep = await prisma.interviewPrep.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InterviewPrepFindUniqueOrThrowArgs>(args: SelectSubset<T, InterviewPrepFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InterviewPrepClient<$Result.GetResult<Prisma.$InterviewPrepPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InterviewPrep that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewPrepFindFirstArgs} args - Arguments to find a InterviewPrep
     * @example
     * // Get one InterviewPrep
     * const interviewPrep = await prisma.interviewPrep.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InterviewPrepFindFirstArgs>(args?: SelectSubset<T, InterviewPrepFindFirstArgs<ExtArgs>>): Prisma__InterviewPrepClient<$Result.GetResult<Prisma.$InterviewPrepPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InterviewPrep that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewPrepFindFirstOrThrowArgs} args - Arguments to find a InterviewPrep
     * @example
     * // Get one InterviewPrep
     * const interviewPrep = await prisma.interviewPrep.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InterviewPrepFindFirstOrThrowArgs>(args?: SelectSubset<T, InterviewPrepFindFirstOrThrowArgs<ExtArgs>>): Prisma__InterviewPrepClient<$Result.GetResult<Prisma.$InterviewPrepPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InterviewPreps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewPrepFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InterviewPreps
     * const interviewPreps = await prisma.interviewPrep.findMany()
     * 
     * // Get first 10 InterviewPreps
     * const interviewPreps = await prisma.interviewPrep.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const interviewPrepWithIdOnly = await prisma.interviewPrep.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InterviewPrepFindManyArgs>(args?: SelectSubset<T, InterviewPrepFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewPrepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InterviewPrep.
     * @param {InterviewPrepCreateArgs} args - Arguments to create a InterviewPrep.
     * @example
     * // Create one InterviewPrep
     * const InterviewPrep = await prisma.interviewPrep.create({
     *   data: {
     *     // ... data to create a InterviewPrep
     *   }
     * })
     * 
     */
    create<T extends InterviewPrepCreateArgs>(args: SelectSubset<T, InterviewPrepCreateArgs<ExtArgs>>): Prisma__InterviewPrepClient<$Result.GetResult<Prisma.$InterviewPrepPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InterviewPreps.
     * @param {InterviewPrepCreateManyArgs} args - Arguments to create many InterviewPreps.
     * @example
     * // Create many InterviewPreps
     * const interviewPrep = await prisma.interviewPrep.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InterviewPrepCreateManyArgs>(args?: SelectSubset<T, InterviewPrepCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InterviewPreps and returns the data saved in the database.
     * @param {InterviewPrepCreateManyAndReturnArgs} args - Arguments to create many InterviewPreps.
     * @example
     * // Create many InterviewPreps
     * const interviewPrep = await prisma.interviewPrep.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InterviewPreps and only return the `id`
     * const interviewPrepWithIdOnly = await prisma.interviewPrep.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InterviewPrepCreateManyAndReturnArgs>(args?: SelectSubset<T, InterviewPrepCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewPrepPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InterviewPrep.
     * @param {InterviewPrepDeleteArgs} args - Arguments to delete one InterviewPrep.
     * @example
     * // Delete one InterviewPrep
     * const InterviewPrep = await prisma.interviewPrep.delete({
     *   where: {
     *     // ... filter to delete one InterviewPrep
     *   }
     * })
     * 
     */
    delete<T extends InterviewPrepDeleteArgs>(args: SelectSubset<T, InterviewPrepDeleteArgs<ExtArgs>>): Prisma__InterviewPrepClient<$Result.GetResult<Prisma.$InterviewPrepPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InterviewPrep.
     * @param {InterviewPrepUpdateArgs} args - Arguments to update one InterviewPrep.
     * @example
     * // Update one InterviewPrep
     * const interviewPrep = await prisma.interviewPrep.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InterviewPrepUpdateArgs>(args: SelectSubset<T, InterviewPrepUpdateArgs<ExtArgs>>): Prisma__InterviewPrepClient<$Result.GetResult<Prisma.$InterviewPrepPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InterviewPreps.
     * @param {InterviewPrepDeleteManyArgs} args - Arguments to filter InterviewPreps to delete.
     * @example
     * // Delete a few InterviewPreps
     * const { count } = await prisma.interviewPrep.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InterviewPrepDeleteManyArgs>(args?: SelectSubset<T, InterviewPrepDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InterviewPreps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewPrepUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InterviewPreps
     * const interviewPrep = await prisma.interviewPrep.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InterviewPrepUpdateManyArgs>(args: SelectSubset<T, InterviewPrepUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InterviewPreps and returns the data updated in the database.
     * @param {InterviewPrepUpdateManyAndReturnArgs} args - Arguments to update many InterviewPreps.
     * @example
     * // Update many InterviewPreps
     * const interviewPrep = await prisma.interviewPrep.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InterviewPreps and only return the `id`
     * const interviewPrepWithIdOnly = await prisma.interviewPrep.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InterviewPrepUpdateManyAndReturnArgs>(args: SelectSubset<T, InterviewPrepUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewPrepPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InterviewPrep.
     * @param {InterviewPrepUpsertArgs} args - Arguments to update or create a InterviewPrep.
     * @example
     * // Update or create a InterviewPrep
     * const interviewPrep = await prisma.interviewPrep.upsert({
     *   create: {
     *     // ... data to create a InterviewPrep
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InterviewPrep we want to update
     *   }
     * })
     */
    upsert<T extends InterviewPrepUpsertArgs>(args: SelectSubset<T, InterviewPrepUpsertArgs<ExtArgs>>): Prisma__InterviewPrepClient<$Result.GetResult<Prisma.$InterviewPrepPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InterviewPreps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewPrepCountArgs} args - Arguments to filter InterviewPreps to count.
     * @example
     * // Count the number of InterviewPreps
     * const count = await prisma.interviewPrep.count({
     *   where: {
     *     // ... the filter for the InterviewPreps we want to count
     *   }
     * })
    **/
    count<T extends InterviewPrepCountArgs>(
      args?: Subset<T, InterviewPrepCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InterviewPrepCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InterviewPrep.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewPrepAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InterviewPrepAggregateArgs>(args: Subset<T, InterviewPrepAggregateArgs>): Prisma.PrismaPromise<GetInterviewPrepAggregateType<T>>

    /**
     * Group by InterviewPrep.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewPrepGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InterviewPrepGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InterviewPrepGroupByArgs['orderBy'] }
        : { orderBy?: InterviewPrepGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InterviewPrepGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInterviewPrepGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InterviewPrep model
   */
  readonly fields: InterviewPrepFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InterviewPrep.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InterviewPrepClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jobApplication<T extends JobApplicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobApplicationDefaultArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    questions<T extends InterviewPrep$questionsArgs<ExtArgs> = {}>(args?: Subset<T, InterviewPrep$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InterviewPrep model
   */
  interface InterviewPrepFieldRefs {
    readonly id: FieldRef<"InterviewPrep", 'String'>
    readonly jobApplicationId: FieldRef<"InterviewPrep", 'String'>
    readonly createdAt: FieldRef<"InterviewPrep", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InterviewPrep findUnique
   */
  export type InterviewPrepFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewPrep
     */
    select?: InterviewPrepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewPrep
     */
    omit?: InterviewPrepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewPrepInclude<ExtArgs> | null
    /**
     * Filter, which InterviewPrep to fetch.
     */
    where: InterviewPrepWhereUniqueInput
  }

  /**
   * InterviewPrep findUniqueOrThrow
   */
  export type InterviewPrepFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewPrep
     */
    select?: InterviewPrepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewPrep
     */
    omit?: InterviewPrepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewPrepInclude<ExtArgs> | null
    /**
     * Filter, which InterviewPrep to fetch.
     */
    where: InterviewPrepWhereUniqueInput
  }

  /**
   * InterviewPrep findFirst
   */
  export type InterviewPrepFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewPrep
     */
    select?: InterviewPrepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewPrep
     */
    omit?: InterviewPrepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewPrepInclude<ExtArgs> | null
    /**
     * Filter, which InterviewPrep to fetch.
     */
    where?: InterviewPrepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterviewPreps to fetch.
     */
    orderBy?: InterviewPrepOrderByWithRelationInput | InterviewPrepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InterviewPreps.
     */
    cursor?: InterviewPrepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterviewPreps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterviewPreps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InterviewPreps.
     */
    distinct?: InterviewPrepScalarFieldEnum | InterviewPrepScalarFieldEnum[]
  }

  /**
   * InterviewPrep findFirstOrThrow
   */
  export type InterviewPrepFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewPrep
     */
    select?: InterviewPrepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewPrep
     */
    omit?: InterviewPrepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewPrepInclude<ExtArgs> | null
    /**
     * Filter, which InterviewPrep to fetch.
     */
    where?: InterviewPrepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterviewPreps to fetch.
     */
    orderBy?: InterviewPrepOrderByWithRelationInput | InterviewPrepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InterviewPreps.
     */
    cursor?: InterviewPrepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterviewPreps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterviewPreps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InterviewPreps.
     */
    distinct?: InterviewPrepScalarFieldEnum | InterviewPrepScalarFieldEnum[]
  }

  /**
   * InterviewPrep findMany
   */
  export type InterviewPrepFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewPrep
     */
    select?: InterviewPrepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewPrep
     */
    omit?: InterviewPrepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewPrepInclude<ExtArgs> | null
    /**
     * Filter, which InterviewPreps to fetch.
     */
    where?: InterviewPrepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterviewPreps to fetch.
     */
    orderBy?: InterviewPrepOrderByWithRelationInput | InterviewPrepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InterviewPreps.
     */
    cursor?: InterviewPrepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterviewPreps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterviewPreps.
     */
    skip?: number
    distinct?: InterviewPrepScalarFieldEnum | InterviewPrepScalarFieldEnum[]
  }

  /**
   * InterviewPrep create
   */
  export type InterviewPrepCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewPrep
     */
    select?: InterviewPrepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewPrep
     */
    omit?: InterviewPrepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewPrepInclude<ExtArgs> | null
    /**
     * The data needed to create a InterviewPrep.
     */
    data: XOR<InterviewPrepCreateInput, InterviewPrepUncheckedCreateInput>
  }

  /**
   * InterviewPrep createMany
   */
  export type InterviewPrepCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InterviewPreps.
     */
    data: InterviewPrepCreateManyInput | InterviewPrepCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InterviewPrep createManyAndReturn
   */
  export type InterviewPrepCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewPrep
     */
    select?: InterviewPrepSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewPrep
     */
    omit?: InterviewPrepOmit<ExtArgs> | null
    /**
     * The data used to create many InterviewPreps.
     */
    data: InterviewPrepCreateManyInput | InterviewPrepCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewPrepIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InterviewPrep update
   */
  export type InterviewPrepUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewPrep
     */
    select?: InterviewPrepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewPrep
     */
    omit?: InterviewPrepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewPrepInclude<ExtArgs> | null
    /**
     * The data needed to update a InterviewPrep.
     */
    data: XOR<InterviewPrepUpdateInput, InterviewPrepUncheckedUpdateInput>
    /**
     * Choose, which InterviewPrep to update.
     */
    where: InterviewPrepWhereUniqueInput
  }

  /**
   * InterviewPrep updateMany
   */
  export type InterviewPrepUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InterviewPreps.
     */
    data: XOR<InterviewPrepUpdateManyMutationInput, InterviewPrepUncheckedUpdateManyInput>
    /**
     * Filter which InterviewPreps to update
     */
    where?: InterviewPrepWhereInput
    /**
     * Limit how many InterviewPreps to update.
     */
    limit?: number
  }

  /**
   * InterviewPrep updateManyAndReturn
   */
  export type InterviewPrepUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewPrep
     */
    select?: InterviewPrepSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewPrep
     */
    omit?: InterviewPrepOmit<ExtArgs> | null
    /**
     * The data used to update InterviewPreps.
     */
    data: XOR<InterviewPrepUpdateManyMutationInput, InterviewPrepUncheckedUpdateManyInput>
    /**
     * Filter which InterviewPreps to update
     */
    where?: InterviewPrepWhereInput
    /**
     * Limit how many InterviewPreps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewPrepIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InterviewPrep upsert
   */
  export type InterviewPrepUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewPrep
     */
    select?: InterviewPrepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewPrep
     */
    omit?: InterviewPrepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewPrepInclude<ExtArgs> | null
    /**
     * The filter to search for the InterviewPrep to update in case it exists.
     */
    where: InterviewPrepWhereUniqueInput
    /**
     * In case the InterviewPrep found by the `where` argument doesn't exist, create a new InterviewPrep with this data.
     */
    create: XOR<InterviewPrepCreateInput, InterviewPrepUncheckedCreateInput>
    /**
     * In case the InterviewPrep was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InterviewPrepUpdateInput, InterviewPrepUncheckedUpdateInput>
  }

  /**
   * InterviewPrep delete
   */
  export type InterviewPrepDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewPrep
     */
    select?: InterviewPrepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewPrep
     */
    omit?: InterviewPrepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewPrepInclude<ExtArgs> | null
    /**
     * Filter which InterviewPrep to delete.
     */
    where: InterviewPrepWhereUniqueInput
  }

  /**
   * InterviewPrep deleteMany
   */
  export type InterviewPrepDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InterviewPreps to delete
     */
    where?: InterviewPrepWhereInput
    /**
     * Limit how many InterviewPreps to delete.
     */
    limit?: number
  }

  /**
   * InterviewPrep.questions
   */
  export type InterviewPrep$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewQuestion
     */
    select?: InterviewQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewQuestion
     */
    omit?: InterviewQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewQuestionInclude<ExtArgs> | null
    where?: InterviewQuestionWhereInput
    orderBy?: InterviewQuestionOrderByWithRelationInput | InterviewQuestionOrderByWithRelationInput[]
    cursor?: InterviewQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InterviewQuestionScalarFieldEnum | InterviewQuestionScalarFieldEnum[]
  }

  /**
   * InterviewPrep without action
   */
  export type InterviewPrepDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewPrep
     */
    select?: InterviewPrepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewPrep
     */
    omit?: InterviewPrepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewPrepInclude<ExtArgs> | null
  }


  /**
   * Model InterviewQuestion
   */

  export type AggregateInterviewQuestion = {
    _count: InterviewQuestionCountAggregateOutputType | null
    _min: InterviewQuestionMinAggregateOutputType | null
    _max: InterviewQuestionMaxAggregateOutputType | null
  }

  export type InterviewQuestionMinAggregateOutputType = {
    id: string | null
    interviewPrepId: string | null
    userId: string | null
    question: string | null
    answer: string | null
    topic: string | null
    createdAt: Date | null
  }

  export type InterviewQuestionMaxAggregateOutputType = {
    id: string | null
    interviewPrepId: string | null
    userId: string | null
    question: string | null
    answer: string | null
    topic: string | null
    createdAt: Date | null
  }

  export type InterviewQuestionCountAggregateOutputType = {
    id: number
    interviewPrepId: number
    userId: number
    question: number
    answer: number
    topic: number
    keyPoints: number
    createdAt: number
    _all: number
  }


  export type InterviewQuestionMinAggregateInputType = {
    id?: true
    interviewPrepId?: true
    userId?: true
    question?: true
    answer?: true
    topic?: true
    createdAt?: true
  }

  export type InterviewQuestionMaxAggregateInputType = {
    id?: true
    interviewPrepId?: true
    userId?: true
    question?: true
    answer?: true
    topic?: true
    createdAt?: true
  }

  export type InterviewQuestionCountAggregateInputType = {
    id?: true
    interviewPrepId?: true
    userId?: true
    question?: true
    answer?: true
    topic?: true
    keyPoints?: true
    createdAt?: true
    _all?: true
  }

  export type InterviewQuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InterviewQuestion to aggregate.
     */
    where?: InterviewQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterviewQuestions to fetch.
     */
    orderBy?: InterviewQuestionOrderByWithRelationInput | InterviewQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InterviewQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterviewQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterviewQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InterviewQuestions
    **/
    _count?: true | InterviewQuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InterviewQuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InterviewQuestionMaxAggregateInputType
  }

  export type GetInterviewQuestionAggregateType<T extends InterviewQuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateInterviewQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInterviewQuestion[P]>
      : GetScalarType<T[P], AggregateInterviewQuestion[P]>
  }




  export type InterviewQuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterviewQuestionWhereInput
    orderBy?: InterviewQuestionOrderByWithAggregationInput | InterviewQuestionOrderByWithAggregationInput[]
    by: InterviewQuestionScalarFieldEnum[] | InterviewQuestionScalarFieldEnum
    having?: InterviewQuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InterviewQuestionCountAggregateInputType | true
    _min?: InterviewQuestionMinAggregateInputType
    _max?: InterviewQuestionMaxAggregateInputType
  }

  export type InterviewQuestionGroupByOutputType = {
    id: string
    interviewPrepId: string | null
    userId: string
    question: string
    answer: string
    topic: string
    keyPoints: string[]
    createdAt: Date
    _count: InterviewQuestionCountAggregateOutputType | null
    _min: InterviewQuestionMinAggregateOutputType | null
    _max: InterviewQuestionMaxAggregateOutputType | null
  }

  type GetInterviewQuestionGroupByPayload<T extends InterviewQuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InterviewQuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InterviewQuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InterviewQuestionGroupByOutputType[P]>
            : GetScalarType<T[P], InterviewQuestionGroupByOutputType[P]>
        }
      >
    >


  export type InterviewQuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    interviewPrepId?: boolean
    userId?: boolean
    question?: boolean
    answer?: boolean
    topic?: boolean
    keyPoints?: boolean
    createdAt?: boolean
    interviewPrep?: boolean | InterviewQuestion$interviewPrepArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interviewQuestion"]>

  export type InterviewQuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    interviewPrepId?: boolean
    userId?: boolean
    question?: boolean
    answer?: boolean
    topic?: boolean
    keyPoints?: boolean
    createdAt?: boolean
    interviewPrep?: boolean | InterviewQuestion$interviewPrepArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interviewQuestion"]>

  export type InterviewQuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    interviewPrepId?: boolean
    userId?: boolean
    question?: boolean
    answer?: boolean
    topic?: boolean
    keyPoints?: boolean
    createdAt?: boolean
    interviewPrep?: boolean | InterviewQuestion$interviewPrepArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interviewQuestion"]>

  export type InterviewQuestionSelectScalar = {
    id?: boolean
    interviewPrepId?: boolean
    userId?: boolean
    question?: boolean
    answer?: boolean
    topic?: boolean
    keyPoints?: boolean
    createdAt?: boolean
  }

  export type InterviewQuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "interviewPrepId" | "userId" | "question" | "answer" | "topic" | "keyPoints" | "createdAt", ExtArgs["result"]["interviewQuestion"]>
  export type InterviewQuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interviewPrep?: boolean | InterviewQuestion$interviewPrepArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InterviewQuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interviewPrep?: boolean | InterviewQuestion$interviewPrepArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InterviewQuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interviewPrep?: boolean | InterviewQuestion$interviewPrepArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $InterviewQuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InterviewQuestion"
    objects: {
      interviewPrep: Prisma.$InterviewPrepPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      interviewPrepId: string | null
      userId: string
      question: string
      answer: string
      topic: string
      keyPoints: string[]
      createdAt: Date
    }, ExtArgs["result"]["interviewQuestion"]>
    composites: {}
  }

  type InterviewQuestionGetPayload<S extends boolean | null | undefined | InterviewQuestionDefaultArgs> = $Result.GetResult<Prisma.$InterviewQuestionPayload, S>

  type InterviewQuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InterviewQuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InterviewQuestionCountAggregateInputType | true
    }

  export interface InterviewQuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InterviewQuestion'], meta: { name: 'InterviewQuestion' } }
    /**
     * Find zero or one InterviewQuestion that matches the filter.
     * @param {InterviewQuestionFindUniqueArgs} args - Arguments to find a InterviewQuestion
     * @example
     * // Get one InterviewQuestion
     * const interviewQuestion = await prisma.interviewQuestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InterviewQuestionFindUniqueArgs>(args: SelectSubset<T, InterviewQuestionFindUniqueArgs<ExtArgs>>): Prisma__InterviewQuestionClient<$Result.GetResult<Prisma.$InterviewQuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InterviewQuestion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InterviewQuestionFindUniqueOrThrowArgs} args - Arguments to find a InterviewQuestion
     * @example
     * // Get one InterviewQuestion
     * const interviewQuestion = await prisma.interviewQuestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InterviewQuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, InterviewQuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InterviewQuestionClient<$Result.GetResult<Prisma.$InterviewQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InterviewQuestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewQuestionFindFirstArgs} args - Arguments to find a InterviewQuestion
     * @example
     * // Get one InterviewQuestion
     * const interviewQuestion = await prisma.interviewQuestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InterviewQuestionFindFirstArgs>(args?: SelectSubset<T, InterviewQuestionFindFirstArgs<ExtArgs>>): Prisma__InterviewQuestionClient<$Result.GetResult<Prisma.$InterviewQuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InterviewQuestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewQuestionFindFirstOrThrowArgs} args - Arguments to find a InterviewQuestion
     * @example
     * // Get one InterviewQuestion
     * const interviewQuestion = await prisma.interviewQuestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InterviewQuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, InterviewQuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__InterviewQuestionClient<$Result.GetResult<Prisma.$InterviewQuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InterviewQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewQuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InterviewQuestions
     * const interviewQuestions = await prisma.interviewQuestion.findMany()
     * 
     * // Get first 10 InterviewQuestions
     * const interviewQuestions = await prisma.interviewQuestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const interviewQuestionWithIdOnly = await prisma.interviewQuestion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InterviewQuestionFindManyArgs>(args?: SelectSubset<T, InterviewQuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InterviewQuestion.
     * @param {InterviewQuestionCreateArgs} args - Arguments to create a InterviewQuestion.
     * @example
     * // Create one InterviewQuestion
     * const InterviewQuestion = await prisma.interviewQuestion.create({
     *   data: {
     *     // ... data to create a InterviewQuestion
     *   }
     * })
     * 
     */
    create<T extends InterviewQuestionCreateArgs>(args: SelectSubset<T, InterviewQuestionCreateArgs<ExtArgs>>): Prisma__InterviewQuestionClient<$Result.GetResult<Prisma.$InterviewQuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InterviewQuestions.
     * @param {InterviewQuestionCreateManyArgs} args - Arguments to create many InterviewQuestions.
     * @example
     * // Create many InterviewQuestions
     * const interviewQuestion = await prisma.interviewQuestion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InterviewQuestionCreateManyArgs>(args?: SelectSubset<T, InterviewQuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InterviewQuestions and returns the data saved in the database.
     * @param {InterviewQuestionCreateManyAndReturnArgs} args - Arguments to create many InterviewQuestions.
     * @example
     * // Create many InterviewQuestions
     * const interviewQuestion = await prisma.interviewQuestion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InterviewQuestions and only return the `id`
     * const interviewQuestionWithIdOnly = await prisma.interviewQuestion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InterviewQuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, InterviewQuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewQuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InterviewQuestion.
     * @param {InterviewQuestionDeleteArgs} args - Arguments to delete one InterviewQuestion.
     * @example
     * // Delete one InterviewQuestion
     * const InterviewQuestion = await prisma.interviewQuestion.delete({
     *   where: {
     *     // ... filter to delete one InterviewQuestion
     *   }
     * })
     * 
     */
    delete<T extends InterviewQuestionDeleteArgs>(args: SelectSubset<T, InterviewQuestionDeleteArgs<ExtArgs>>): Prisma__InterviewQuestionClient<$Result.GetResult<Prisma.$InterviewQuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InterviewQuestion.
     * @param {InterviewQuestionUpdateArgs} args - Arguments to update one InterviewQuestion.
     * @example
     * // Update one InterviewQuestion
     * const interviewQuestion = await prisma.interviewQuestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InterviewQuestionUpdateArgs>(args: SelectSubset<T, InterviewQuestionUpdateArgs<ExtArgs>>): Prisma__InterviewQuestionClient<$Result.GetResult<Prisma.$InterviewQuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InterviewQuestions.
     * @param {InterviewQuestionDeleteManyArgs} args - Arguments to filter InterviewQuestions to delete.
     * @example
     * // Delete a few InterviewQuestions
     * const { count } = await prisma.interviewQuestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InterviewQuestionDeleteManyArgs>(args?: SelectSubset<T, InterviewQuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InterviewQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewQuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InterviewQuestions
     * const interviewQuestion = await prisma.interviewQuestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InterviewQuestionUpdateManyArgs>(args: SelectSubset<T, InterviewQuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InterviewQuestions and returns the data updated in the database.
     * @param {InterviewQuestionUpdateManyAndReturnArgs} args - Arguments to update many InterviewQuestions.
     * @example
     * // Update many InterviewQuestions
     * const interviewQuestion = await prisma.interviewQuestion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InterviewQuestions and only return the `id`
     * const interviewQuestionWithIdOnly = await prisma.interviewQuestion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InterviewQuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, InterviewQuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewQuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InterviewQuestion.
     * @param {InterviewQuestionUpsertArgs} args - Arguments to update or create a InterviewQuestion.
     * @example
     * // Update or create a InterviewQuestion
     * const interviewQuestion = await prisma.interviewQuestion.upsert({
     *   create: {
     *     // ... data to create a InterviewQuestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InterviewQuestion we want to update
     *   }
     * })
     */
    upsert<T extends InterviewQuestionUpsertArgs>(args: SelectSubset<T, InterviewQuestionUpsertArgs<ExtArgs>>): Prisma__InterviewQuestionClient<$Result.GetResult<Prisma.$InterviewQuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InterviewQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewQuestionCountArgs} args - Arguments to filter InterviewQuestions to count.
     * @example
     * // Count the number of InterviewQuestions
     * const count = await prisma.interviewQuestion.count({
     *   where: {
     *     // ... the filter for the InterviewQuestions we want to count
     *   }
     * })
    **/
    count<T extends InterviewQuestionCountArgs>(
      args?: Subset<T, InterviewQuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InterviewQuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InterviewQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewQuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InterviewQuestionAggregateArgs>(args: Subset<T, InterviewQuestionAggregateArgs>): Prisma.PrismaPromise<GetInterviewQuestionAggregateType<T>>

    /**
     * Group by InterviewQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewQuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InterviewQuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InterviewQuestionGroupByArgs['orderBy'] }
        : { orderBy?: InterviewQuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InterviewQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInterviewQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InterviewQuestion model
   */
  readonly fields: InterviewQuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InterviewQuestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InterviewQuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    interviewPrep<T extends InterviewQuestion$interviewPrepArgs<ExtArgs> = {}>(args?: Subset<T, InterviewQuestion$interviewPrepArgs<ExtArgs>>): Prisma__InterviewPrepClient<$Result.GetResult<Prisma.$InterviewPrepPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InterviewQuestion model
   */
  interface InterviewQuestionFieldRefs {
    readonly id: FieldRef<"InterviewQuestion", 'String'>
    readonly interviewPrepId: FieldRef<"InterviewQuestion", 'String'>
    readonly userId: FieldRef<"InterviewQuestion", 'String'>
    readonly question: FieldRef<"InterviewQuestion", 'String'>
    readonly answer: FieldRef<"InterviewQuestion", 'String'>
    readonly topic: FieldRef<"InterviewQuestion", 'String'>
    readonly keyPoints: FieldRef<"InterviewQuestion", 'String[]'>
    readonly createdAt: FieldRef<"InterviewQuestion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InterviewQuestion findUnique
   */
  export type InterviewQuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewQuestion
     */
    select?: InterviewQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewQuestion
     */
    omit?: InterviewQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewQuestionInclude<ExtArgs> | null
    /**
     * Filter, which InterviewQuestion to fetch.
     */
    where: InterviewQuestionWhereUniqueInput
  }

  /**
   * InterviewQuestion findUniqueOrThrow
   */
  export type InterviewQuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewQuestion
     */
    select?: InterviewQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewQuestion
     */
    omit?: InterviewQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewQuestionInclude<ExtArgs> | null
    /**
     * Filter, which InterviewQuestion to fetch.
     */
    where: InterviewQuestionWhereUniqueInput
  }

  /**
   * InterviewQuestion findFirst
   */
  export type InterviewQuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewQuestion
     */
    select?: InterviewQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewQuestion
     */
    omit?: InterviewQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewQuestionInclude<ExtArgs> | null
    /**
     * Filter, which InterviewQuestion to fetch.
     */
    where?: InterviewQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterviewQuestions to fetch.
     */
    orderBy?: InterviewQuestionOrderByWithRelationInput | InterviewQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InterviewQuestions.
     */
    cursor?: InterviewQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterviewQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterviewQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InterviewQuestions.
     */
    distinct?: InterviewQuestionScalarFieldEnum | InterviewQuestionScalarFieldEnum[]
  }

  /**
   * InterviewQuestion findFirstOrThrow
   */
  export type InterviewQuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewQuestion
     */
    select?: InterviewQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewQuestion
     */
    omit?: InterviewQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewQuestionInclude<ExtArgs> | null
    /**
     * Filter, which InterviewQuestion to fetch.
     */
    where?: InterviewQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterviewQuestions to fetch.
     */
    orderBy?: InterviewQuestionOrderByWithRelationInput | InterviewQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InterviewQuestions.
     */
    cursor?: InterviewQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterviewQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterviewQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InterviewQuestions.
     */
    distinct?: InterviewQuestionScalarFieldEnum | InterviewQuestionScalarFieldEnum[]
  }

  /**
   * InterviewQuestion findMany
   */
  export type InterviewQuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewQuestion
     */
    select?: InterviewQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewQuestion
     */
    omit?: InterviewQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewQuestionInclude<ExtArgs> | null
    /**
     * Filter, which InterviewQuestions to fetch.
     */
    where?: InterviewQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterviewQuestions to fetch.
     */
    orderBy?: InterviewQuestionOrderByWithRelationInput | InterviewQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InterviewQuestions.
     */
    cursor?: InterviewQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterviewQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterviewQuestions.
     */
    skip?: number
    distinct?: InterviewQuestionScalarFieldEnum | InterviewQuestionScalarFieldEnum[]
  }

  /**
   * InterviewQuestion create
   */
  export type InterviewQuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewQuestion
     */
    select?: InterviewQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewQuestion
     */
    omit?: InterviewQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewQuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a InterviewQuestion.
     */
    data: XOR<InterviewQuestionCreateInput, InterviewQuestionUncheckedCreateInput>
  }

  /**
   * InterviewQuestion createMany
   */
  export type InterviewQuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InterviewQuestions.
     */
    data: InterviewQuestionCreateManyInput | InterviewQuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InterviewQuestion createManyAndReturn
   */
  export type InterviewQuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewQuestion
     */
    select?: InterviewQuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewQuestion
     */
    omit?: InterviewQuestionOmit<ExtArgs> | null
    /**
     * The data used to create many InterviewQuestions.
     */
    data: InterviewQuestionCreateManyInput | InterviewQuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewQuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InterviewQuestion update
   */
  export type InterviewQuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewQuestion
     */
    select?: InterviewQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewQuestion
     */
    omit?: InterviewQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewQuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a InterviewQuestion.
     */
    data: XOR<InterviewQuestionUpdateInput, InterviewQuestionUncheckedUpdateInput>
    /**
     * Choose, which InterviewQuestion to update.
     */
    where: InterviewQuestionWhereUniqueInput
  }

  /**
   * InterviewQuestion updateMany
   */
  export type InterviewQuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InterviewQuestions.
     */
    data: XOR<InterviewQuestionUpdateManyMutationInput, InterviewQuestionUncheckedUpdateManyInput>
    /**
     * Filter which InterviewQuestions to update
     */
    where?: InterviewQuestionWhereInput
    /**
     * Limit how many InterviewQuestions to update.
     */
    limit?: number
  }

  /**
   * InterviewQuestion updateManyAndReturn
   */
  export type InterviewQuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewQuestion
     */
    select?: InterviewQuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewQuestion
     */
    omit?: InterviewQuestionOmit<ExtArgs> | null
    /**
     * The data used to update InterviewQuestions.
     */
    data: XOR<InterviewQuestionUpdateManyMutationInput, InterviewQuestionUncheckedUpdateManyInput>
    /**
     * Filter which InterviewQuestions to update
     */
    where?: InterviewQuestionWhereInput
    /**
     * Limit how many InterviewQuestions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewQuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InterviewQuestion upsert
   */
  export type InterviewQuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewQuestion
     */
    select?: InterviewQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewQuestion
     */
    omit?: InterviewQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewQuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the InterviewQuestion to update in case it exists.
     */
    where: InterviewQuestionWhereUniqueInput
    /**
     * In case the InterviewQuestion found by the `where` argument doesn't exist, create a new InterviewQuestion with this data.
     */
    create: XOR<InterviewQuestionCreateInput, InterviewQuestionUncheckedCreateInput>
    /**
     * In case the InterviewQuestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InterviewQuestionUpdateInput, InterviewQuestionUncheckedUpdateInput>
  }

  /**
   * InterviewQuestion delete
   */
  export type InterviewQuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewQuestion
     */
    select?: InterviewQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewQuestion
     */
    omit?: InterviewQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewQuestionInclude<ExtArgs> | null
    /**
     * Filter which InterviewQuestion to delete.
     */
    where: InterviewQuestionWhereUniqueInput
  }

  /**
   * InterviewQuestion deleteMany
   */
  export type InterviewQuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InterviewQuestions to delete
     */
    where?: InterviewQuestionWhereInput
    /**
     * Limit how many InterviewQuestions to delete.
     */
    limit?: number
  }

  /**
   * InterviewQuestion.interviewPrep
   */
  export type InterviewQuestion$interviewPrepArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewPrep
     */
    select?: InterviewPrepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewPrep
     */
    omit?: InterviewPrepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewPrepInclude<ExtArgs> | null
    where?: InterviewPrepWhereInput
  }

  /**
   * InterviewQuestion without action
   */
  export type InterviewQuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewQuestion
     */
    select?: InterviewQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewQuestion
     */
    omit?: InterviewQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewQuestionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    isVerified: 'isVerified',
    resetToken: 'resetToken',
    resetTokenExpiry: 'resetTokenExpiry',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const JobApplicationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    companyName: 'companyName',
    jobTitle: 'jobTitle',
    status: 'status',
    jobUrl: 'jobUrl',
    jobDescription: 'jobDescription',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JobApplicationScalarFieldEnum = (typeof JobApplicationScalarFieldEnum)[keyof typeof JobApplicationScalarFieldEnum]


  export const ResumeScalarFieldEnum: {
    id: 'id',
    jobApplicationId: 'jobApplicationId',
    fileUrl: 'fileUrl',
    parsedText: 'parsedText',
    version: 'version',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ResumeScalarFieldEnum = (typeof ResumeScalarFieldEnum)[keyof typeof ResumeScalarFieldEnum]


  export const AISuggestionScalarFieldEnum: {
    id: 'id',
    jobApplicationId: 'jobApplicationId',
    originalText: 'originalText',
    suggestedText: 'suggestedText',
    type: 'type',
    status: 'status',
    explanation: 'explanation',
    createdAt: 'createdAt'
  };

  export type AISuggestionScalarFieldEnum = (typeof AISuggestionScalarFieldEnum)[keyof typeof AISuggestionScalarFieldEnum]


  export const AcceptedSuggestionScalarFieldEnum: {
    id: 'id',
    jobApplicationId: 'jobApplicationId',
    originalText: 'originalText',
    suggestedText: 'suggestedText',
    createdAt: 'createdAt'
  };

  export type AcceptedSuggestionScalarFieldEnum = (typeof AcceptedSuggestionScalarFieldEnum)[keyof typeof AcceptedSuggestionScalarFieldEnum]


  export const InterviewPrepScalarFieldEnum: {
    id: 'id',
    jobApplicationId: 'jobApplicationId',
    createdAt: 'createdAt'
  };

  export type InterviewPrepScalarFieldEnum = (typeof InterviewPrepScalarFieldEnum)[keyof typeof InterviewPrepScalarFieldEnum]


  export const InterviewQuestionScalarFieldEnum: {
    id: 'id',
    interviewPrepId: 'interviewPrepId',
    userId: 'userId',
    question: 'question',
    answer: 'answer',
    topic: 'topic',
    keyPoints: 'keyPoints',
    createdAt: 'createdAt'
  };

  export type InterviewQuestionScalarFieldEnum = (typeof InterviewQuestionScalarFieldEnum)[keyof typeof InterviewQuestionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    isVerified?: BoolFilter<"User"> | boolean
    resetToken?: StringNullableFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    jobApplications?: JobApplicationListRelationFilter
    interviewQuestions?: InterviewQuestionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isVerified?: SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    jobApplications?: JobApplicationOrderByRelationAggregateInput
    interviewQuestions?: InterviewQuestionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    isVerified?: BoolFilter<"User"> | boolean
    resetToken?: StringNullableFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    jobApplications?: JobApplicationListRelationFilter
    interviewQuestions?: InterviewQuestionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isVerified?: SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    resetToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type JobApplicationWhereInput = {
    AND?: JobApplicationWhereInput | JobApplicationWhereInput[]
    OR?: JobApplicationWhereInput[]
    NOT?: JobApplicationWhereInput | JobApplicationWhereInput[]
    id?: StringFilter<"JobApplication"> | string
    userId?: StringFilter<"JobApplication"> | string
    companyName?: StringFilter<"JobApplication"> | string
    jobTitle?: StringFilter<"JobApplication"> | string
    status?: StringFilter<"JobApplication"> | string
    jobUrl?: StringNullableFilter<"JobApplication"> | string | null
    jobDescription?: StringFilter<"JobApplication"> | string
    notes?: StringNullableFilter<"JobApplication"> | string | null
    createdAt?: DateTimeFilter<"JobApplication"> | Date | string
    updatedAt?: DateTimeFilter<"JobApplication"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    resume?: XOR<ResumeNullableScalarRelationFilter, ResumeWhereInput> | null
    aiSuggestions?: AISuggestionListRelationFilter
    acceptedSuggestions?: AcceptedSuggestionListRelationFilter
    interviewPreps?: InterviewPrepListRelationFilter
  }

  export type JobApplicationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    jobTitle?: SortOrder
    status?: SortOrder
    jobUrl?: SortOrderInput | SortOrder
    jobDescription?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    resume?: ResumeOrderByWithRelationInput
    aiSuggestions?: AISuggestionOrderByRelationAggregateInput
    acceptedSuggestions?: AcceptedSuggestionOrderByRelationAggregateInput
    interviewPreps?: InterviewPrepOrderByRelationAggregateInput
  }

  export type JobApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JobApplicationWhereInput | JobApplicationWhereInput[]
    OR?: JobApplicationWhereInput[]
    NOT?: JobApplicationWhereInput | JobApplicationWhereInput[]
    userId?: StringFilter<"JobApplication"> | string
    companyName?: StringFilter<"JobApplication"> | string
    jobTitle?: StringFilter<"JobApplication"> | string
    status?: StringFilter<"JobApplication"> | string
    jobUrl?: StringNullableFilter<"JobApplication"> | string | null
    jobDescription?: StringFilter<"JobApplication"> | string
    notes?: StringNullableFilter<"JobApplication"> | string | null
    createdAt?: DateTimeFilter<"JobApplication"> | Date | string
    updatedAt?: DateTimeFilter<"JobApplication"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    resume?: XOR<ResumeNullableScalarRelationFilter, ResumeWhereInput> | null
    aiSuggestions?: AISuggestionListRelationFilter
    acceptedSuggestions?: AcceptedSuggestionListRelationFilter
    interviewPreps?: InterviewPrepListRelationFilter
  }, "id">

  export type JobApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    jobTitle?: SortOrder
    status?: SortOrder
    jobUrl?: SortOrderInput | SortOrder
    jobDescription?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JobApplicationCountOrderByAggregateInput
    _max?: JobApplicationMaxOrderByAggregateInput
    _min?: JobApplicationMinOrderByAggregateInput
  }

  export type JobApplicationScalarWhereWithAggregatesInput = {
    AND?: JobApplicationScalarWhereWithAggregatesInput | JobApplicationScalarWhereWithAggregatesInput[]
    OR?: JobApplicationScalarWhereWithAggregatesInput[]
    NOT?: JobApplicationScalarWhereWithAggregatesInput | JobApplicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JobApplication"> | string
    userId?: StringWithAggregatesFilter<"JobApplication"> | string
    companyName?: StringWithAggregatesFilter<"JobApplication"> | string
    jobTitle?: StringWithAggregatesFilter<"JobApplication"> | string
    status?: StringWithAggregatesFilter<"JobApplication"> | string
    jobUrl?: StringNullableWithAggregatesFilter<"JobApplication"> | string | null
    jobDescription?: StringWithAggregatesFilter<"JobApplication"> | string
    notes?: StringNullableWithAggregatesFilter<"JobApplication"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"JobApplication"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"JobApplication"> | Date | string
  }

  export type ResumeWhereInput = {
    AND?: ResumeWhereInput | ResumeWhereInput[]
    OR?: ResumeWhereInput[]
    NOT?: ResumeWhereInput | ResumeWhereInput[]
    id?: StringFilter<"Resume"> | string
    jobApplicationId?: StringFilter<"Resume"> | string
    fileUrl?: StringFilter<"Resume"> | string
    parsedText?: StringFilter<"Resume"> | string
    version?: IntFilter<"Resume"> | number
    createdAt?: DateTimeFilter<"Resume"> | Date | string
    updatedAt?: DateTimeFilter<"Resume"> | Date | string
    jobApplication?: XOR<JobApplicationScalarRelationFilter, JobApplicationWhereInput>
  }

  export type ResumeOrderByWithRelationInput = {
    id?: SortOrder
    jobApplicationId?: SortOrder
    fileUrl?: SortOrder
    parsedText?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    jobApplication?: JobApplicationOrderByWithRelationInput
  }

  export type ResumeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    jobApplicationId?: string
    AND?: ResumeWhereInput | ResumeWhereInput[]
    OR?: ResumeWhereInput[]
    NOT?: ResumeWhereInput | ResumeWhereInput[]
    fileUrl?: StringFilter<"Resume"> | string
    parsedText?: StringFilter<"Resume"> | string
    version?: IntFilter<"Resume"> | number
    createdAt?: DateTimeFilter<"Resume"> | Date | string
    updatedAt?: DateTimeFilter<"Resume"> | Date | string
    jobApplication?: XOR<JobApplicationScalarRelationFilter, JobApplicationWhereInput>
  }, "id" | "jobApplicationId">

  export type ResumeOrderByWithAggregationInput = {
    id?: SortOrder
    jobApplicationId?: SortOrder
    fileUrl?: SortOrder
    parsedText?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ResumeCountOrderByAggregateInput
    _avg?: ResumeAvgOrderByAggregateInput
    _max?: ResumeMaxOrderByAggregateInput
    _min?: ResumeMinOrderByAggregateInput
    _sum?: ResumeSumOrderByAggregateInput
  }

  export type ResumeScalarWhereWithAggregatesInput = {
    AND?: ResumeScalarWhereWithAggregatesInput | ResumeScalarWhereWithAggregatesInput[]
    OR?: ResumeScalarWhereWithAggregatesInput[]
    NOT?: ResumeScalarWhereWithAggregatesInput | ResumeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Resume"> | string
    jobApplicationId?: StringWithAggregatesFilter<"Resume"> | string
    fileUrl?: StringWithAggregatesFilter<"Resume"> | string
    parsedText?: StringWithAggregatesFilter<"Resume"> | string
    version?: IntWithAggregatesFilter<"Resume"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Resume"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Resume"> | Date | string
  }

  export type AISuggestionWhereInput = {
    AND?: AISuggestionWhereInput | AISuggestionWhereInput[]
    OR?: AISuggestionWhereInput[]
    NOT?: AISuggestionWhereInput | AISuggestionWhereInput[]
    id?: StringFilter<"AISuggestion"> | string
    jobApplicationId?: StringFilter<"AISuggestion"> | string
    originalText?: StringFilter<"AISuggestion"> | string
    suggestedText?: StringFilter<"AISuggestion"> | string
    type?: StringFilter<"AISuggestion"> | string
    status?: StringFilter<"AISuggestion"> | string
    explanation?: StringFilter<"AISuggestion"> | string
    createdAt?: DateTimeFilter<"AISuggestion"> | Date | string
    jobApplication?: XOR<JobApplicationScalarRelationFilter, JobApplicationWhereInput>
  }

  export type AISuggestionOrderByWithRelationInput = {
    id?: SortOrder
    jobApplicationId?: SortOrder
    originalText?: SortOrder
    suggestedText?: SortOrder
    type?: SortOrder
    status?: SortOrder
    explanation?: SortOrder
    createdAt?: SortOrder
    jobApplication?: JobApplicationOrderByWithRelationInput
  }

  export type AISuggestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AISuggestionWhereInput | AISuggestionWhereInput[]
    OR?: AISuggestionWhereInput[]
    NOT?: AISuggestionWhereInput | AISuggestionWhereInput[]
    jobApplicationId?: StringFilter<"AISuggestion"> | string
    originalText?: StringFilter<"AISuggestion"> | string
    suggestedText?: StringFilter<"AISuggestion"> | string
    type?: StringFilter<"AISuggestion"> | string
    status?: StringFilter<"AISuggestion"> | string
    explanation?: StringFilter<"AISuggestion"> | string
    createdAt?: DateTimeFilter<"AISuggestion"> | Date | string
    jobApplication?: XOR<JobApplicationScalarRelationFilter, JobApplicationWhereInput>
  }, "id">

  export type AISuggestionOrderByWithAggregationInput = {
    id?: SortOrder
    jobApplicationId?: SortOrder
    originalText?: SortOrder
    suggestedText?: SortOrder
    type?: SortOrder
    status?: SortOrder
    explanation?: SortOrder
    createdAt?: SortOrder
    _count?: AISuggestionCountOrderByAggregateInput
    _max?: AISuggestionMaxOrderByAggregateInput
    _min?: AISuggestionMinOrderByAggregateInput
  }

  export type AISuggestionScalarWhereWithAggregatesInput = {
    AND?: AISuggestionScalarWhereWithAggregatesInput | AISuggestionScalarWhereWithAggregatesInput[]
    OR?: AISuggestionScalarWhereWithAggregatesInput[]
    NOT?: AISuggestionScalarWhereWithAggregatesInput | AISuggestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AISuggestion"> | string
    jobApplicationId?: StringWithAggregatesFilter<"AISuggestion"> | string
    originalText?: StringWithAggregatesFilter<"AISuggestion"> | string
    suggestedText?: StringWithAggregatesFilter<"AISuggestion"> | string
    type?: StringWithAggregatesFilter<"AISuggestion"> | string
    status?: StringWithAggregatesFilter<"AISuggestion"> | string
    explanation?: StringWithAggregatesFilter<"AISuggestion"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AISuggestion"> | Date | string
  }

  export type AcceptedSuggestionWhereInput = {
    AND?: AcceptedSuggestionWhereInput | AcceptedSuggestionWhereInput[]
    OR?: AcceptedSuggestionWhereInput[]
    NOT?: AcceptedSuggestionWhereInput | AcceptedSuggestionWhereInput[]
    id?: StringFilter<"AcceptedSuggestion"> | string
    jobApplicationId?: StringFilter<"AcceptedSuggestion"> | string
    originalText?: StringFilter<"AcceptedSuggestion"> | string
    suggestedText?: StringFilter<"AcceptedSuggestion"> | string
    createdAt?: DateTimeFilter<"AcceptedSuggestion"> | Date | string
    jobApplication?: XOR<JobApplicationScalarRelationFilter, JobApplicationWhereInput>
  }

  export type AcceptedSuggestionOrderByWithRelationInput = {
    id?: SortOrder
    jobApplicationId?: SortOrder
    originalText?: SortOrder
    suggestedText?: SortOrder
    createdAt?: SortOrder
    jobApplication?: JobApplicationOrderByWithRelationInput
  }

  export type AcceptedSuggestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AcceptedSuggestionWhereInput | AcceptedSuggestionWhereInput[]
    OR?: AcceptedSuggestionWhereInput[]
    NOT?: AcceptedSuggestionWhereInput | AcceptedSuggestionWhereInput[]
    jobApplicationId?: StringFilter<"AcceptedSuggestion"> | string
    originalText?: StringFilter<"AcceptedSuggestion"> | string
    suggestedText?: StringFilter<"AcceptedSuggestion"> | string
    createdAt?: DateTimeFilter<"AcceptedSuggestion"> | Date | string
    jobApplication?: XOR<JobApplicationScalarRelationFilter, JobApplicationWhereInput>
  }, "id">

  export type AcceptedSuggestionOrderByWithAggregationInput = {
    id?: SortOrder
    jobApplicationId?: SortOrder
    originalText?: SortOrder
    suggestedText?: SortOrder
    createdAt?: SortOrder
    _count?: AcceptedSuggestionCountOrderByAggregateInput
    _max?: AcceptedSuggestionMaxOrderByAggregateInput
    _min?: AcceptedSuggestionMinOrderByAggregateInput
  }

  export type AcceptedSuggestionScalarWhereWithAggregatesInput = {
    AND?: AcceptedSuggestionScalarWhereWithAggregatesInput | AcceptedSuggestionScalarWhereWithAggregatesInput[]
    OR?: AcceptedSuggestionScalarWhereWithAggregatesInput[]
    NOT?: AcceptedSuggestionScalarWhereWithAggregatesInput | AcceptedSuggestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AcceptedSuggestion"> | string
    jobApplicationId?: StringWithAggregatesFilter<"AcceptedSuggestion"> | string
    originalText?: StringWithAggregatesFilter<"AcceptedSuggestion"> | string
    suggestedText?: StringWithAggregatesFilter<"AcceptedSuggestion"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AcceptedSuggestion"> | Date | string
  }

  export type InterviewPrepWhereInput = {
    AND?: InterviewPrepWhereInput | InterviewPrepWhereInput[]
    OR?: InterviewPrepWhereInput[]
    NOT?: InterviewPrepWhereInput | InterviewPrepWhereInput[]
    id?: StringFilter<"InterviewPrep"> | string
    jobApplicationId?: StringFilter<"InterviewPrep"> | string
    createdAt?: DateTimeFilter<"InterviewPrep"> | Date | string
    jobApplication?: XOR<JobApplicationScalarRelationFilter, JobApplicationWhereInput>
    questions?: InterviewQuestionListRelationFilter
  }

  export type InterviewPrepOrderByWithRelationInput = {
    id?: SortOrder
    jobApplicationId?: SortOrder
    createdAt?: SortOrder
    jobApplication?: JobApplicationOrderByWithRelationInput
    questions?: InterviewQuestionOrderByRelationAggregateInput
  }

  export type InterviewPrepWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InterviewPrepWhereInput | InterviewPrepWhereInput[]
    OR?: InterviewPrepWhereInput[]
    NOT?: InterviewPrepWhereInput | InterviewPrepWhereInput[]
    jobApplicationId?: StringFilter<"InterviewPrep"> | string
    createdAt?: DateTimeFilter<"InterviewPrep"> | Date | string
    jobApplication?: XOR<JobApplicationScalarRelationFilter, JobApplicationWhereInput>
    questions?: InterviewQuestionListRelationFilter
  }, "id">

  export type InterviewPrepOrderByWithAggregationInput = {
    id?: SortOrder
    jobApplicationId?: SortOrder
    createdAt?: SortOrder
    _count?: InterviewPrepCountOrderByAggregateInput
    _max?: InterviewPrepMaxOrderByAggregateInput
    _min?: InterviewPrepMinOrderByAggregateInput
  }

  export type InterviewPrepScalarWhereWithAggregatesInput = {
    AND?: InterviewPrepScalarWhereWithAggregatesInput | InterviewPrepScalarWhereWithAggregatesInput[]
    OR?: InterviewPrepScalarWhereWithAggregatesInput[]
    NOT?: InterviewPrepScalarWhereWithAggregatesInput | InterviewPrepScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InterviewPrep"> | string
    jobApplicationId?: StringWithAggregatesFilter<"InterviewPrep"> | string
    createdAt?: DateTimeWithAggregatesFilter<"InterviewPrep"> | Date | string
  }

  export type InterviewQuestionWhereInput = {
    AND?: InterviewQuestionWhereInput | InterviewQuestionWhereInput[]
    OR?: InterviewQuestionWhereInput[]
    NOT?: InterviewQuestionWhereInput | InterviewQuestionWhereInput[]
    id?: StringFilter<"InterviewQuestion"> | string
    interviewPrepId?: StringNullableFilter<"InterviewQuestion"> | string | null
    userId?: StringFilter<"InterviewQuestion"> | string
    question?: StringFilter<"InterviewQuestion"> | string
    answer?: StringFilter<"InterviewQuestion"> | string
    topic?: StringFilter<"InterviewQuestion"> | string
    keyPoints?: StringNullableListFilter<"InterviewQuestion">
    createdAt?: DateTimeFilter<"InterviewQuestion"> | Date | string
    interviewPrep?: XOR<InterviewPrepNullableScalarRelationFilter, InterviewPrepWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type InterviewQuestionOrderByWithRelationInput = {
    id?: SortOrder
    interviewPrepId?: SortOrderInput | SortOrder
    userId?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    topic?: SortOrder
    keyPoints?: SortOrder
    createdAt?: SortOrder
    interviewPrep?: InterviewPrepOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type InterviewQuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InterviewQuestionWhereInput | InterviewQuestionWhereInput[]
    OR?: InterviewQuestionWhereInput[]
    NOT?: InterviewQuestionWhereInput | InterviewQuestionWhereInput[]
    interviewPrepId?: StringNullableFilter<"InterviewQuestion"> | string | null
    userId?: StringFilter<"InterviewQuestion"> | string
    question?: StringFilter<"InterviewQuestion"> | string
    answer?: StringFilter<"InterviewQuestion"> | string
    topic?: StringFilter<"InterviewQuestion"> | string
    keyPoints?: StringNullableListFilter<"InterviewQuestion">
    createdAt?: DateTimeFilter<"InterviewQuestion"> | Date | string
    interviewPrep?: XOR<InterviewPrepNullableScalarRelationFilter, InterviewPrepWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type InterviewQuestionOrderByWithAggregationInput = {
    id?: SortOrder
    interviewPrepId?: SortOrderInput | SortOrder
    userId?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    topic?: SortOrder
    keyPoints?: SortOrder
    createdAt?: SortOrder
    _count?: InterviewQuestionCountOrderByAggregateInput
    _max?: InterviewQuestionMaxOrderByAggregateInput
    _min?: InterviewQuestionMinOrderByAggregateInput
  }

  export type InterviewQuestionScalarWhereWithAggregatesInput = {
    AND?: InterviewQuestionScalarWhereWithAggregatesInput | InterviewQuestionScalarWhereWithAggregatesInput[]
    OR?: InterviewQuestionScalarWhereWithAggregatesInput[]
    NOT?: InterviewQuestionScalarWhereWithAggregatesInput | InterviewQuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InterviewQuestion"> | string
    interviewPrepId?: StringNullableWithAggregatesFilter<"InterviewQuestion"> | string | null
    userId?: StringWithAggregatesFilter<"InterviewQuestion"> | string
    question?: StringWithAggregatesFilter<"InterviewQuestion"> | string
    answer?: StringWithAggregatesFilter<"InterviewQuestion"> | string
    topic?: StringWithAggregatesFilter<"InterviewQuestion"> | string
    keyPoints?: StringNullableListFilter<"InterviewQuestion">
    createdAt?: DateTimeWithAggregatesFilter<"InterviewQuestion"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    isVerified?: boolean
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jobApplications?: JobApplicationCreateNestedManyWithoutUserInput
    interviewQuestions?: InterviewQuestionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    isVerified?: boolean
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jobApplications?: JobApplicationUncheckedCreateNestedManyWithoutUserInput
    interviewQuestions?: InterviewQuestionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobApplications?: JobApplicationUpdateManyWithoutUserNestedInput
    interviewQuestions?: InterviewQuestionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobApplications?: JobApplicationUncheckedUpdateManyWithoutUserNestedInput
    interviewQuestions?: InterviewQuestionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    isVerified?: boolean
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobApplicationCreateInput = {
    id?: string
    companyName: string
    jobTitle: string
    status: string
    jobUrl?: string | null
    jobDescription: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutJobApplicationsInput
    resume?: ResumeCreateNestedOneWithoutJobApplicationInput
    aiSuggestions?: AISuggestionCreateNestedManyWithoutJobApplicationInput
    acceptedSuggestions?: AcceptedSuggestionCreateNestedManyWithoutJobApplicationInput
    interviewPreps?: InterviewPrepCreateNestedManyWithoutJobApplicationInput
  }

  export type JobApplicationUncheckedCreateInput = {
    id?: string
    userId: string
    companyName: string
    jobTitle: string
    status: string
    jobUrl?: string | null
    jobDescription: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resume?: ResumeUncheckedCreateNestedOneWithoutJobApplicationInput
    aiSuggestions?: AISuggestionUncheckedCreateNestedManyWithoutJobApplicationInput
    acceptedSuggestions?: AcceptedSuggestionUncheckedCreateNestedManyWithoutJobApplicationInput
    interviewPreps?: InterviewPrepUncheckedCreateNestedManyWithoutJobApplicationInput
  }

  export type JobApplicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    jobUrl?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutJobApplicationsNestedInput
    resume?: ResumeUpdateOneWithoutJobApplicationNestedInput
    aiSuggestions?: AISuggestionUpdateManyWithoutJobApplicationNestedInput
    acceptedSuggestions?: AcceptedSuggestionUpdateManyWithoutJobApplicationNestedInput
    interviewPreps?: InterviewPrepUpdateManyWithoutJobApplicationNestedInput
  }

  export type JobApplicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    jobUrl?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resume?: ResumeUncheckedUpdateOneWithoutJobApplicationNestedInput
    aiSuggestions?: AISuggestionUncheckedUpdateManyWithoutJobApplicationNestedInput
    acceptedSuggestions?: AcceptedSuggestionUncheckedUpdateManyWithoutJobApplicationNestedInput
    interviewPreps?: InterviewPrepUncheckedUpdateManyWithoutJobApplicationNestedInput
  }

  export type JobApplicationCreateManyInput = {
    id?: string
    userId: string
    companyName: string
    jobTitle: string
    status: string
    jobUrl?: string | null
    jobDescription: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobApplicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    jobUrl?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobApplicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    jobUrl?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeCreateInput = {
    id?: string
    fileUrl: string
    parsedText: string
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    jobApplication: JobApplicationCreateNestedOneWithoutResumeInput
  }

  export type ResumeUncheckedCreateInput = {
    id?: string
    jobApplicationId: string
    fileUrl: string
    parsedText: string
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResumeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    parsedText?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobApplication?: JobApplicationUpdateOneRequiredWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobApplicationId?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    parsedText?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeCreateManyInput = {
    id?: string
    jobApplicationId: string
    fileUrl: string
    parsedText: string
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResumeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    parsedText?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobApplicationId?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    parsedText?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AISuggestionCreateInput = {
    id?: string
    originalText: string
    suggestedText: string
    type: string
    status?: string
    explanation: string
    createdAt?: Date | string
    jobApplication: JobApplicationCreateNestedOneWithoutAiSuggestionsInput
  }

  export type AISuggestionUncheckedCreateInput = {
    id?: string
    jobApplicationId: string
    originalText: string
    suggestedText: string
    type: string
    status?: string
    explanation: string
    createdAt?: Date | string
  }

  export type AISuggestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalText?: StringFieldUpdateOperationsInput | string
    suggestedText?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobApplication?: JobApplicationUpdateOneRequiredWithoutAiSuggestionsNestedInput
  }

  export type AISuggestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobApplicationId?: StringFieldUpdateOperationsInput | string
    originalText?: StringFieldUpdateOperationsInput | string
    suggestedText?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AISuggestionCreateManyInput = {
    id?: string
    jobApplicationId: string
    originalText: string
    suggestedText: string
    type: string
    status?: string
    explanation: string
    createdAt?: Date | string
  }

  export type AISuggestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalText?: StringFieldUpdateOperationsInput | string
    suggestedText?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AISuggestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobApplicationId?: StringFieldUpdateOperationsInput | string
    originalText?: StringFieldUpdateOperationsInput | string
    suggestedText?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcceptedSuggestionCreateInput = {
    id?: string
    originalText: string
    suggestedText: string
    createdAt?: Date | string
    jobApplication: JobApplicationCreateNestedOneWithoutAcceptedSuggestionsInput
  }

  export type AcceptedSuggestionUncheckedCreateInput = {
    id?: string
    jobApplicationId: string
    originalText: string
    suggestedText: string
    createdAt?: Date | string
  }

  export type AcceptedSuggestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalText?: StringFieldUpdateOperationsInput | string
    suggestedText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobApplication?: JobApplicationUpdateOneRequiredWithoutAcceptedSuggestionsNestedInput
  }

  export type AcceptedSuggestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobApplicationId?: StringFieldUpdateOperationsInput | string
    originalText?: StringFieldUpdateOperationsInput | string
    suggestedText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcceptedSuggestionCreateManyInput = {
    id?: string
    jobApplicationId: string
    originalText: string
    suggestedText: string
    createdAt?: Date | string
  }

  export type AcceptedSuggestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalText?: StringFieldUpdateOperationsInput | string
    suggestedText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcceptedSuggestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobApplicationId?: StringFieldUpdateOperationsInput | string
    originalText?: StringFieldUpdateOperationsInput | string
    suggestedText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewPrepCreateInput = {
    id?: string
    createdAt?: Date | string
    jobApplication: JobApplicationCreateNestedOneWithoutInterviewPrepsInput
    questions?: InterviewQuestionCreateNestedManyWithoutInterviewPrepInput
  }

  export type InterviewPrepUncheckedCreateInput = {
    id?: string
    jobApplicationId: string
    createdAt?: Date | string
    questions?: InterviewQuestionUncheckedCreateNestedManyWithoutInterviewPrepInput
  }

  export type InterviewPrepUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobApplication?: JobApplicationUpdateOneRequiredWithoutInterviewPrepsNestedInput
    questions?: InterviewQuestionUpdateManyWithoutInterviewPrepNestedInput
  }

  export type InterviewPrepUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobApplicationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: InterviewQuestionUncheckedUpdateManyWithoutInterviewPrepNestedInput
  }

  export type InterviewPrepCreateManyInput = {
    id?: string
    jobApplicationId: string
    createdAt?: Date | string
  }

  export type InterviewPrepUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewPrepUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobApplicationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewQuestionCreateInput = {
    id?: string
    question: string
    answer: string
    topic: string
    keyPoints?: InterviewQuestionCreatekeyPointsInput | string[]
    createdAt?: Date | string
    interviewPrep?: InterviewPrepCreateNestedOneWithoutQuestionsInput
    user: UserCreateNestedOneWithoutInterviewQuestionsInput
  }

  export type InterviewQuestionUncheckedCreateInput = {
    id?: string
    interviewPrepId?: string | null
    userId: string
    question: string
    answer: string
    topic: string
    keyPoints?: InterviewQuestionCreatekeyPointsInput | string[]
    createdAt?: Date | string
  }

  export type InterviewQuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    keyPoints?: InterviewQuestionUpdatekeyPointsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interviewPrep?: InterviewPrepUpdateOneWithoutQuestionsNestedInput
    user?: UserUpdateOneRequiredWithoutInterviewQuestionsNestedInput
  }

  export type InterviewQuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    interviewPrepId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    keyPoints?: InterviewQuestionUpdatekeyPointsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewQuestionCreateManyInput = {
    id?: string
    interviewPrepId?: string | null
    userId: string
    question: string
    answer: string
    topic: string
    keyPoints?: InterviewQuestionCreatekeyPointsInput | string[]
    createdAt?: Date | string
  }

  export type InterviewQuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    keyPoints?: InterviewQuestionUpdatekeyPointsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewQuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    interviewPrepId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    keyPoints?: InterviewQuestionUpdatekeyPointsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type JobApplicationListRelationFilter = {
    every?: JobApplicationWhereInput
    some?: JobApplicationWhereInput
    none?: JobApplicationWhereInput
  }

  export type InterviewQuestionListRelationFilter = {
    every?: InterviewQuestionWhereInput
    some?: InterviewQuestionWhereInput
    none?: InterviewQuestionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type JobApplicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InterviewQuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isVerified?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isVerified?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isVerified?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ResumeNullableScalarRelationFilter = {
    is?: ResumeWhereInput | null
    isNot?: ResumeWhereInput | null
  }

  export type AISuggestionListRelationFilter = {
    every?: AISuggestionWhereInput
    some?: AISuggestionWhereInput
    none?: AISuggestionWhereInput
  }

  export type AcceptedSuggestionListRelationFilter = {
    every?: AcceptedSuggestionWhereInput
    some?: AcceptedSuggestionWhereInput
    none?: AcceptedSuggestionWhereInput
  }

  export type InterviewPrepListRelationFilter = {
    every?: InterviewPrepWhereInput
    some?: InterviewPrepWhereInput
    none?: InterviewPrepWhereInput
  }

  export type AISuggestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AcceptedSuggestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InterviewPrepOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JobApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    jobTitle?: SortOrder
    status?: SortOrder
    jobUrl?: SortOrder
    jobDescription?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    jobTitle?: SortOrder
    status?: SortOrder
    jobUrl?: SortOrder
    jobDescription?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    jobTitle?: SortOrder
    status?: SortOrder
    jobUrl?: SortOrder
    jobDescription?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type JobApplicationScalarRelationFilter = {
    is?: JobApplicationWhereInput
    isNot?: JobApplicationWhereInput
  }

  export type ResumeCountOrderByAggregateInput = {
    id?: SortOrder
    jobApplicationId?: SortOrder
    fileUrl?: SortOrder
    parsedText?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResumeAvgOrderByAggregateInput = {
    version?: SortOrder
  }

  export type ResumeMaxOrderByAggregateInput = {
    id?: SortOrder
    jobApplicationId?: SortOrder
    fileUrl?: SortOrder
    parsedText?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResumeMinOrderByAggregateInput = {
    id?: SortOrder
    jobApplicationId?: SortOrder
    fileUrl?: SortOrder
    parsedText?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResumeSumOrderByAggregateInput = {
    version?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type AISuggestionCountOrderByAggregateInput = {
    id?: SortOrder
    jobApplicationId?: SortOrder
    originalText?: SortOrder
    suggestedText?: SortOrder
    type?: SortOrder
    status?: SortOrder
    explanation?: SortOrder
    createdAt?: SortOrder
  }

  export type AISuggestionMaxOrderByAggregateInput = {
    id?: SortOrder
    jobApplicationId?: SortOrder
    originalText?: SortOrder
    suggestedText?: SortOrder
    type?: SortOrder
    status?: SortOrder
    explanation?: SortOrder
    createdAt?: SortOrder
  }

  export type AISuggestionMinOrderByAggregateInput = {
    id?: SortOrder
    jobApplicationId?: SortOrder
    originalText?: SortOrder
    suggestedText?: SortOrder
    type?: SortOrder
    status?: SortOrder
    explanation?: SortOrder
    createdAt?: SortOrder
  }

  export type AcceptedSuggestionCountOrderByAggregateInput = {
    id?: SortOrder
    jobApplicationId?: SortOrder
    originalText?: SortOrder
    suggestedText?: SortOrder
    createdAt?: SortOrder
  }

  export type AcceptedSuggestionMaxOrderByAggregateInput = {
    id?: SortOrder
    jobApplicationId?: SortOrder
    originalText?: SortOrder
    suggestedText?: SortOrder
    createdAt?: SortOrder
  }

  export type AcceptedSuggestionMinOrderByAggregateInput = {
    id?: SortOrder
    jobApplicationId?: SortOrder
    originalText?: SortOrder
    suggestedText?: SortOrder
    createdAt?: SortOrder
  }

  export type InterviewPrepCountOrderByAggregateInput = {
    id?: SortOrder
    jobApplicationId?: SortOrder
    createdAt?: SortOrder
  }

  export type InterviewPrepMaxOrderByAggregateInput = {
    id?: SortOrder
    jobApplicationId?: SortOrder
    createdAt?: SortOrder
  }

  export type InterviewPrepMinOrderByAggregateInput = {
    id?: SortOrder
    jobApplicationId?: SortOrder
    createdAt?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type InterviewPrepNullableScalarRelationFilter = {
    is?: InterviewPrepWhereInput | null
    isNot?: InterviewPrepWhereInput | null
  }

  export type InterviewQuestionCountOrderByAggregateInput = {
    id?: SortOrder
    interviewPrepId?: SortOrder
    userId?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    topic?: SortOrder
    keyPoints?: SortOrder
    createdAt?: SortOrder
  }

  export type InterviewQuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    interviewPrepId?: SortOrder
    userId?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    topic?: SortOrder
    createdAt?: SortOrder
  }

  export type InterviewQuestionMinOrderByAggregateInput = {
    id?: SortOrder
    interviewPrepId?: SortOrder
    userId?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    topic?: SortOrder
    createdAt?: SortOrder
  }

  export type JobApplicationCreateNestedManyWithoutUserInput = {
    create?: XOR<JobApplicationCreateWithoutUserInput, JobApplicationUncheckedCreateWithoutUserInput> | JobApplicationCreateWithoutUserInput[] | JobApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutUserInput | JobApplicationCreateOrConnectWithoutUserInput[]
    createMany?: JobApplicationCreateManyUserInputEnvelope
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
  }

  export type InterviewQuestionCreateNestedManyWithoutUserInput = {
    create?: XOR<InterviewQuestionCreateWithoutUserInput, InterviewQuestionUncheckedCreateWithoutUserInput> | InterviewQuestionCreateWithoutUserInput[] | InterviewQuestionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InterviewQuestionCreateOrConnectWithoutUserInput | InterviewQuestionCreateOrConnectWithoutUserInput[]
    createMany?: InterviewQuestionCreateManyUserInputEnvelope
    connect?: InterviewQuestionWhereUniqueInput | InterviewQuestionWhereUniqueInput[]
  }

  export type JobApplicationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<JobApplicationCreateWithoutUserInput, JobApplicationUncheckedCreateWithoutUserInput> | JobApplicationCreateWithoutUserInput[] | JobApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutUserInput | JobApplicationCreateOrConnectWithoutUserInput[]
    createMany?: JobApplicationCreateManyUserInputEnvelope
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
  }

  export type InterviewQuestionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<InterviewQuestionCreateWithoutUserInput, InterviewQuestionUncheckedCreateWithoutUserInput> | InterviewQuestionCreateWithoutUserInput[] | InterviewQuestionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InterviewQuestionCreateOrConnectWithoutUserInput | InterviewQuestionCreateOrConnectWithoutUserInput[]
    createMany?: InterviewQuestionCreateManyUserInputEnvelope
    connect?: InterviewQuestionWhereUniqueInput | InterviewQuestionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type JobApplicationUpdateManyWithoutUserNestedInput = {
    create?: XOR<JobApplicationCreateWithoutUserInput, JobApplicationUncheckedCreateWithoutUserInput> | JobApplicationCreateWithoutUserInput[] | JobApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutUserInput | JobApplicationCreateOrConnectWithoutUserInput[]
    upsert?: JobApplicationUpsertWithWhereUniqueWithoutUserInput | JobApplicationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: JobApplicationCreateManyUserInputEnvelope
    set?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    disconnect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    delete?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    update?: JobApplicationUpdateWithWhereUniqueWithoutUserInput | JobApplicationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: JobApplicationUpdateManyWithWhereWithoutUserInput | JobApplicationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: JobApplicationScalarWhereInput | JobApplicationScalarWhereInput[]
  }

  export type InterviewQuestionUpdateManyWithoutUserNestedInput = {
    create?: XOR<InterviewQuestionCreateWithoutUserInput, InterviewQuestionUncheckedCreateWithoutUserInput> | InterviewQuestionCreateWithoutUserInput[] | InterviewQuestionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InterviewQuestionCreateOrConnectWithoutUserInput | InterviewQuestionCreateOrConnectWithoutUserInput[]
    upsert?: InterviewQuestionUpsertWithWhereUniqueWithoutUserInput | InterviewQuestionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InterviewQuestionCreateManyUserInputEnvelope
    set?: InterviewQuestionWhereUniqueInput | InterviewQuestionWhereUniqueInput[]
    disconnect?: InterviewQuestionWhereUniqueInput | InterviewQuestionWhereUniqueInput[]
    delete?: InterviewQuestionWhereUniqueInput | InterviewQuestionWhereUniqueInput[]
    connect?: InterviewQuestionWhereUniqueInput | InterviewQuestionWhereUniqueInput[]
    update?: InterviewQuestionUpdateWithWhereUniqueWithoutUserInput | InterviewQuestionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InterviewQuestionUpdateManyWithWhereWithoutUserInput | InterviewQuestionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InterviewQuestionScalarWhereInput | InterviewQuestionScalarWhereInput[]
  }

  export type JobApplicationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<JobApplicationCreateWithoutUserInput, JobApplicationUncheckedCreateWithoutUserInput> | JobApplicationCreateWithoutUserInput[] | JobApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutUserInput | JobApplicationCreateOrConnectWithoutUserInput[]
    upsert?: JobApplicationUpsertWithWhereUniqueWithoutUserInput | JobApplicationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: JobApplicationCreateManyUserInputEnvelope
    set?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    disconnect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    delete?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    update?: JobApplicationUpdateWithWhereUniqueWithoutUserInput | JobApplicationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: JobApplicationUpdateManyWithWhereWithoutUserInput | JobApplicationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: JobApplicationScalarWhereInput | JobApplicationScalarWhereInput[]
  }

  export type InterviewQuestionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<InterviewQuestionCreateWithoutUserInput, InterviewQuestionUncheckedCreateWithoutUserInput> | InterviewQuestionCreateWithoutUserInput[] | InterviewQuestionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InterviewQuestionCreateOrConnectWithoutUserInput | InterviewQuestionCreateOrConnectWithoutUserInput[]
    upsert?: InterviewQuestionUpsertWithWhereUniqueWithoutUserInput | InterviewQuestionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InterviewQuestionCreateManyUserInputEnvelope
    set?: InterviewQuestionWhereUniqueInput | InterviewQuestionWhereUniqueInput[]
    disconnect?: InterviewQuestionWhereUniqueInput | InterviewQuestionWhereUniqueInput[]
    delete?: InterviewQuestionWhereUniqueInput | InterviewQuestionWhereUniqueInput[]
    connect?: InterviewQuestionWhereUniqueInput | InterviewQuestionWhereUniqueInput[]
    update?: InterviewQuestionUpdateWithWhereUniqueWithoutUserInput | InterviewQuestionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InterviewQuestionUpdateManyWithWhereWithoutUserInput | InterviewQuestionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InterviewQuestionScalarWhereInput | InterviewQuestionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutJobApplicationsInput = {
    create?: XOR<UserCreateWithoutJobApplicationsInput, UserUncheckedCreateWithoutJobApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutJobApplicationsInput
    connect?: UserWhereUniqueInput
  }

  export type ResumeCreateNestedOneWithoutJobApplicationInput = {
    create?: XOR<ResumeCreateWithoutJobApplicationInput, ResumeUncheckedCreateWithoutJobApplicationInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutJobApplicationInput
    connect?: ResumeWhereUniqueInput
  }

  export type AISuggestionCreateNestedManyWithoutJobApplicationInput = {
    create?: XOR<AISuggestionCreateWithoutJobApplicationInput, AISuggestionUncheckedCreateWithoutJobApplicationInput> | AISuggestionCreateWithoutJobApplicationInput[] | AISuggestionUncheckedCreateWithoutJobApplicationInput[]
    connectOrCreate?: AISuggestionCreateOrConnectWithoutJobApplicationInput | AISuggestionCreateOrConnectWithoutJobApplicationInput[]
    createMany?: AISuggestionCreateManyJobApplicationInputEnvelope
    connect?: AISuggestionWhereUniqueInput | AISuggestionWhereUniqueInput[]
  }

  export type AcceptedSuggestionCreateNestedManyWithoutJobApplicationInput = {
    create?: XOR<AcceptedSuggestionCreateWithoutJobApplicationInput, AcceptedSuggestionUncheckedCreateWithoutJobApplicationInput> | AcceptedSuggestionCreateWithoutJobApplicationInput[] | AcceptedSuggestionUncheckedCreateWithoutJobApplicationInput[]
    connectOrCreate?: AcceptedSuggestionCreateOrConnectWithoutJobApplicationInput | AcceptedSuggestionCreateOrConnectWithoutJobApplicationInput[]
    createMany?: AcceptedSuggestionCreateManyJobApplicationInputEnvelope
    connect?: AcceptedSuggestionWhereUniqueInput | AcceptedSuggestionWhereUniqueInput[]
  }

  export type InterviewPrepCreateNestedManyWithoutJobApplicationInput = {
    create?: XOR<InterviewPrepCreateWithoutJobApplicationInput, InterviewPrepUncheckedCreateWithoutJobApplicationInput> | InterviewPrepCreateWithoutJobApplicationInput[] | InterviewPrepUncheckedCreateWithoutJobApplicationInput[]
    connectOrCreate?: InterviewPrepCreateOrConnectWithoutJobApplicationInput | InterviewPrepCreateOrConnectWithoutJobApplicationInput[]
    createMany?: InterviewPrepCreateManyJobApplicationInputEnvelope
    connect?: InterviewPrepWhereUniqueInput | InterviewPrepWhereUniqueInput[]
  }

  export type ResumeUncheckedCreateNestedOneWithoutJobApplicationInput = {
    create?: XOR<ResumeCreateWithoutJobApplicationInput, ResumeUncheckedCreateWithoutJobApplicationInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutJobApplicationInput
    connect?: ResumeWhereUniqueInput
  }

  export type AISuggestionUncheckedCreateNestedManyWithoutJobApplicationInput = {
    create?: XOR<AISuggestionCreateWithoutJobApplicationInput, AISuggestionUncheckedCreateWithoutJobApplicationInput> | AISuggestionCreateWithoutJobApplicationInput[] | AISuggestionUncheckedCreateWithoutJobApplicationInput[]
    connectOrCreate?: AISuggestionCreateOrConnectWithoutJobApplicationInput | AISuggestionCreateOrConnectWithoutJobApplicationInput[]
    createMany?: AISuggestionCreateManyJobApplicationInputEnvelope
    connect?: AISuggestionWhereUniqueInput | AISuggestionWhereUniqueInput[]
  }

  export type AcceptedSuggestionUncheckedCreateNestedManyWithoutJobApplicationInput = {
    create?: XOR<AcceptedSuggestionCreateWithoutJobApplicationInput, AcceptedSuggestionUncheckedCreateWithoutJobApplicationInput> | AcceptedSuggestionCreateWithoutJobApplicationInput[] | AcceptedSuggestionUncheckedCreateWithoutJobApplicationInput[]
    connectOrCreate?: AcceptedSuggestionCreateOrConnectWithoutJobApplicationInput | AcceptedSuggestionCreateOrConnectWithoutJobApplicationInput[]
    createMany?: AcceptedSuggestionCreateManyJobApplicationInputEnvelope
    connect?: AcceptedSuggestionWhereUniqueInput | AcceptedSuggestionWhereUniqueInput[]
  }

  export type InterviewPrepUncheckedCreateNestedManyWithoutJobApplicationInput = {
    create?: XOR<InterviewPrepCreateWithoutJobApplicationInput, InterviewPrepUncheckedCreateWithoutJobApplicationInput> | InterviewPrepCreateWithoutJobApplicationInput[] | InterviewPrepUncheckedCreateWithoutJobApplicationInput[]
    connectOrCreate?: InterviewPrepCreateOrConnectWithoutJobApplicationInput | InterviewPrepCreateOrConnectWithoutJobApplicationInput[]
    createMany?: InterviewPrepCreateManyJobApplicationInputEnvelope
    connect?: InterviewPrepWhereUniqueInput | InterviewPrepWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutJobApplicationsNestedInput = {
    create?: XOR<UserCreateWithoutJobApplicationsInput, UserUncheckedCreateWithoutJobApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutJobApplicationsInput
    upsert?: UserUpsertWithoutJobApplicationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutJobApplicationsInput, UserUpdateWithoutJobApplicationsInput>, UserUncheckedUpdateWithoutJobApplicationsInput>
  }

  export type ResumeUpdateOneWithoutJobApplicationNestedInput = {
    create?: XOR<ResumeCreateWithoutJobApplicationInput, ResumeUncheckedCreateWithoutJobApplicationInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutJobApplicationInput
    upsert?: ResumeUpsertWithoutJobApplicationInput
    disconnect?: ResumeWhereInput | boolean
    delete?: ResumeWhereInput | boolean
    connect?: ResumeWhereUniqueInput
    update?: XOR<XOR<ResumeUpdateToOneWithWhereWithoutJobApplicationInput, ResumeUpdateWithoutJobApplicationInput>, ResumeUncheckedUpdateWithoutJobApplicationInput>
  }

  export type AISuggestionUpdateManyWithoutJobApplicationNestedInput = {
    create?: XOR<AISuggestionCreateWithoutJobApplicationInput, AISuggestionUncheckedCreateWithoutJobApplicationInput> | AISuggestionCreateWithoutJobApplicationInput[] | AISuggestionUncheckedCreateWithoutJobApplicationInput[]
    connectOrCreate?: AISuggestionCreateOrConnectWithoutJobApplicationInput | AISuggestionCreateOrConnectWithoutJobApplicationInput[]
    upsert?: AISuggestionUpsertWithWhereUniqueWithoutJobApplicationInput | AISuggestionUpsertWithWhereUniqueWithoutJobApplicationInput[]
    createMany?: AISuggestionCreateManyJobApplicationInputEnvelope
    set?: AISuggestionWhereUniqueInput | AISuggestionWhereUniqueInput[]
    disconnect?: AISuggestionWhereUniqueInput | AISuggestionWhereUniqueInput[]
    delete?: AISuggestionWhereUniqueInput | AISuggestionWhereUniqueInput[]
    connect?: AISuggestionWhereUniqueInput | AISuggestionWhereUniqueInput[]
    update?: AISuggestionUpdateWithWhereUniqueWithoutJobApplicationInput | AISuggestionUpdateWithWhereUniqueWithoutJobApplicationInput[]
    updateMany?: AISuggestionUpdateManyWithWhereWithoutJobApplicationInput | AISuggestionUpdateManyWithWhereWithoutJobApplicationInput[]
    deleteMany?: AISuggestionScalarWhereInput | AISuggestionScalarWhereInput[]
  }

  export type AcceptedSuggestionUpdateManyWithoutJobApplicationNestedInput = {
    create?: XOR<AcceptedSuggestionCreateWithoutJobApplicationInput, AcceptedSuggestionUncheckedCreateWithoutJobApplicationInput> | AcceptedSuggestionCreateWithoutJobApplicationInput[] | AcceptedSuggestionUncheckedCreateWithoutJobApplicationInput[]
    connectOrCreate?: AcceptedSuggestionCreateOrConnectWithoutJobApplicationInput | AcceptedSuggestionCreateOrConnectWithoutJobApplicationInput[]
    upsert?: AcceptedSuggestionUpsertWithWhereUniqueWithoutJobApplicationInput | AcceptedSuggestionUpsertWithWhereUniqueWithoutJobApplicationInput[]
    createMany?: AcceptedSuggestionCreateManyJobApplicationInputEnvelope
    set?: AcceptedSuggestionWhereUniqueInput | AcceptedSuggestionWhereUniqueInput[]
    disconnect?: AcceptedSuggestionWhereUniqueInput | AcceptedSuggestionWhereUniqueInput[]
    delete?: AcceptedSuggestionWhereUniqueInput | AcceptedSuggestionWhereUniqueInput[]
    connect?: AcceptedSuggestionWhereUniqueInput | AcceptedSuggestionWhereUniqueInput[]
    update?: AcceptedSuggestionUpdateWithWhereUniqueWithoutJobApplicationInput | AcceptedSuggestionUpdateWithWhereUniqueWithoutJobApplicationInput[]
    updateMany?: AcceptedSuggestionUpdateManyWithWhereWithoutJobApplicationInput | AcceptedSuggestionUpdateManyWithWhereWithoutJobApplicationInput[]
    deleteMany?: AcceptedSuggestionScalarWhereInput | AcceptedSuggestionScalarWhereInput[]
  }

  export type InterviewPrepUpdateManyWithoutJobApplicationNestedInput = {
    create?: XOR<InterviewPrepCreateWithoutJobApplicationInput, InterviewPrepUncheckedCreateWithoutJobApplicationInput> | InterviewPrepCreateWithoutJobApplicationInput[] | InterviewPrepUncheckedCreateWithoutJobApplicationInput[]
    connectOrCreate?: InterviewPrepCreateOrConnectWithoutJobApplicationInput | InterviewPrepCreateOrConnectWithoutJobApplicationInput[]
    upsert?: InterviewPrepUpsertWithWhereUniqueWithoutJobApplicationInput | InterviewPrepUpsertWithWhereUniqueWithoutJobApplicationInput[]
    createMany?: InterviewPrepCreateManyJobApplicationInputEnvelope
    set?: InterviewPrepWhereUniqueInput | InterviewPrepWhereUniqueInput[]
    disconnect?: InterviewPrepWhereUniqueInput | InterviewPrepWhereUniqueInput[]
    delete?: InterviewPrepWhereUniqueInput | InterviewPrepWhereUniqueInput[]
    connect?: InterviewPrepWhereUniqueInput | InterviewPrepWhereUniqueInput[]
    update?: InterviewPrepUpdateWithWhereUniqueWithoutJobApplicationInput | InterviewPrepUpdateWithWhereUniqueWithoutJobApplicationInput[]
    updateMany?: InterviewPrepUpdateManyWithWhereWithoutJobApplicationInput | InterviewPrepUpdateManyWithWhereWithoutJobApplicationInput[]
    deleteMany?: InterviewPrepScalarWhereInput | InterviewPrepScalarWhereInput[]
  }

  export type ResumeUncheckedUpdateOneWithoutJobApplicationNestedInput = {
    create?: XOR<ResumeCreateWithoutJobApplicationInput, ResumeUncheckedCreateWithoutJobApplicationInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutJobApplicationInput
    upsert?: ResumeUpsertWithoutJobApplicationInput
    disconnect?: ResumeWhereInput | boolean
    delete?: ResumeWhereInput | boolean
    connect?: ResumeWhereUniqueInput
    update?: XOR<XOR<ResumeUpdateToOneWithWhereWithoutJobApplicationInput, ResumeUpdateWithoutJobApplicationInput>, ResumeUncheckedUpdateWithoutJobApplicationInput>
  }

  export type AISuggestionUncheckedUpdateManyWithoutJobApplicationNestedInput = {
    create?: XOR<AISuggestionCreateWithoutJobApplicationInput, AISuggestionUncheckedCreateWithoutJobApplicationInput> | AISuggestionCreateWithoutJobApplicationInput[] | AISuggestionUncheckedCreateWithoutJobApplicationInput[]
    connectOrCreate?: AISuggestionCreateOrConnectWithoutJobApplicationInput | AISuggestionCreateOrConnectWithoutJobApplicationInput[]
    upsert?: AISuggestionUpsertWithWhereUniqueWithoutJobApplicationInput | AISuggestionUpsertWithWhereUniqueWithoutJobApplicationInput[]
    createMany?: AISuggestionCreateManyJobApplicationInputEnvelope
    set?: AISuggestionWhereUniqueInput | AISuggestionWhereUniqueInput[]
    disconnect?: AISuggestionWhereUniqueInput | AISuggestionWhereUniqueInput[]
    delete?: AISuggestionWhereUniqueInput | AISuggestionWhereUniqueInput[]
    connect?: AISuggestionWhereUniqueInput | AISuggestionWhereUniqueInput[]
    update?: AISuggestionUpdateWithWhereUniqueWithoutJobApplicationInput | AISuggestionUpdateWithWhereUniqueWithoutJobApplicationInput[]
    updateMany?: AISuggestionUpdateManyWithWhereWithoutJobApplicationInput | AISuggestionUpdateManyWithWhereWithoutJobApplicationInput[]
    deleteMany?: AISuggestionScalarWhereInput | AISuggestionScalarWhereInput[]
  }

  export type AcceptedSuggestionUncheckedUpdateManyWithoutJobApplicationNestedInput = {
    create?: XOR<AcceptedSuggestionCreateWithoutJobApplicationInput, AcceptedSuggestionUncheckedCreateWithoutJobApplicationInput> | AcceptedSuggestionCreateWithoutJobApplicationInput[] | AcceptedSuggestionUncheckedCreateWithoutJobApplicationInput[]
    connectOrCreate?: AcceptedSuggestionCreateOrConnectWithoutJobApplicationInput | AcceptedSuggestionCreateOrConnectWithoutJobApplicationInput[]
    upsert?: AcceptedSuggestionUpsertWithWhereUniqueWithoutJobApplicationInput | AcceptedSuggestionUpsertWithWhereUniqueWithoutJobApplicationInput[]
    createMany?: AcceptedSuggestionCreateManyJobApplicationInputEnvelope
    set?: AcceptedSuggestionWhereUniqueInput | AcceptedSuggestionWhereUniqueInput[]
    disconnect?: AcceptedSuggestionWhereUniqueInput | AcceptedSuggestionWhereUniqueInput[]
    delete?: AcceptedSuggestionWhereUniqueInput | AcceptedSuggestionWhereUniqueInput[]
    connect?: AcceptedSuggestionWhereUniqueInput | AcceptedSuggestionWhereUniqueInput[]
    update?: AcceptedSuggestionUpdateWithWhereUniqueWithoutJobApplicationInput | AcceptedSuggestionUpdateWithWhereUniqueWithoutJobApplicationInput[]
    updateMany?: AcceptedSuggestionUpdateManyWithWhereWithoutJobApplicationInput | AcceptedSuggestionUpdateManyWithWhereWithoutJobApplicationInput[]
    deleteMany?: AcceptedSuggestionScalarWhereInput | AcceptedSuggestionScalarWhereInput[]
  }

  export type InterviewPrepUncheckedUpdateManyWithoutJobApplicationNestedInput = {
    create?: XOR<InterviewPrepCreateWithoutJobApplicationInput, InterviewPrepUncheckedCreateWithoutJobApplicationInput> | InterviewPrepCreateWithoutJobApplicationInput[] | InterviewPrepUncheckedCreateWithoutJobApplicationInput[]
    connectOrCreate?: InterviewPrepCreateOrConnectWithoutJobApplicationInput | InterviewPrepCreateOrConnectWithoutJobApplicationInput[]
    upsert?: InterviewPrepUpsertWithWhereUniqueWithoutJobApplicationInput | InterviewPrepUpsertWithWhereUniqueWithoutJobApplicationInput[]
    createMany?: InterviewPrepCreateManyJobApplicationInputEnvelope
    set?: InterviewPrepWhereUniqueInput | InterviewPrepWhereUniqueInput[]
    disconnect?: InterviewPrepWhereUniqueInput | InterviewPrepWhereUniqueInput[]
    delete?: InterviewPrepWhereUniqueInput | InterviewPrepWhereUniqueInput[]
    connect?: InterviewPrepWhereUniqueInput | InterviewPrepWhereUniqueInput[]
    update?: InterviewPrepUpdateWithWhereUniqueWithoutJobApplicationInput | InterviewPrepUpdateWithWhereUniqueWithoutJobApplicationInput[]
    updateMany?: InterviewPrepUpdateManyWithWhereWithoutJobApplicationInput | InterviewPrepUpdateManyWithWhereWithoutJobApplicationInput[]
    deleteMany?: InterviewPrepScalarWhereInput | InterviewPrepScalarWhereInput[]
  }

  export type JobApplicationCreateNestedOneWithoutResumeInput = {
    create?: XOR<JobApplicationCreateWithoutResumeInput, JobApplicationUncheckedCreateWithoutResumeInput>
    connectOrCreate?: JobApplicationCreateOrConnectWithoutResumeInput
    connect?: JobApplicationWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type JobApplicationUpdateOneRequiredWithoutResumeNestedInput = {
    create?: XOR<JobApplicationCreateWithoutResumeInput, JobApplicationUncheckedCreateWithoutResumeInput>
    connectOrCreate?: JobApplicationCreateOrConnectWithoutResumeInput
    upsert?: JobApplicationUpsertWithoutResumeInput
    connect?: JobApplicationWhereUniqueInput
    update?: XOR<XOR<JobApplicationUpdateToOneWithWhereWithoutResumeInput, JobApplicationUpdateWithoutResumeInput>, JobApplicationUncheckedUpdateWithoutResumeInput>
  }

  export type JobApplicationCreateNestedOneWithoutAiSuggestionsInput = {
    create?: XOR<JobApplicationCreateWithoutAiSuggestionsInput, JobApplicationUncheckedCreateWithoutAiSuggestionsInput>
    connectOrCreate?: JobApplicationCreateOrConnectWithoutAiSuggestionsInput
    connect?: JobApplicationWhereUniqueInput
  }

  export type JobApplicationUpdateOneRequiredWithoutAiSuggestionsNestedInput = {
    create?: XOR<JobApplicationCreateWithoutAiSuggestionsInput, JobApplicationUncheckedCreateWithoutAiSuggestionsInput>
    connectOrCreate?: JobApplicationCreateOrConnectWithoutAiSuggestionsInput
    upsert?: JobApplicationUpsertWithoutAiSuggestionsInput
    connect?: JobApplicationWhereUniqueInput
    update?: XOR<XOR<JobApplicationUpdateToOneWithWhereWithoutAiSuggestionsInput, JobApplicationUpdateWithoutAiSuggestionsInput>, JobApplicationUncheckedUpdateWithoutAiSuggestionsInput>
  }

  export type JobApplicationCreateNestedOneWithoutAcceptedSuggestionsInput = {
    create?: XOR<JobApplicationCreateWithoutAcceptedSuggestionsInput, JobApplicationUncheckedCreateWithoutAcceptedSuggestionsInput>
    connectOrCreate?: JobApplicationCreateOrConnectWithoutAcceptedSuggestionsInput
    connect?: JobApplicationWhereUniqueInput
  }

  export type JobApplicationUpdateOneRequiredWithoutAcceptedSuggestionsNestedInput = {
    create?: XOR<JobApplicationCreateWithoutAcceptedSuggestionsInput, JobApplicationUncheckedCreateWithoutAcceptedSuggestionsInput>
    connectOrCreate?: JobApplicationCreateOrConnectWithoutAcceptedSuggestionsInput
    upsert?: JobApplicationUpsertWithoutAcceptedSuggestionsInput
    connect?: JobApplicationWhereUniqueInput
    update?: XOR<XOR<JobApplicationUpdateToOneWithWhereWithoutAcceptedSuggestionsInput, JobApplicationUpdateWithoutAcceptedSuggestionsInput>, JobApplicationUncheckedUpdateWithoutAcceptedSuggestionsInput>
  }

  export type JobApplicationCreateNestedOneWithoutInterviewPrepsInput = {
    create?: XOR<JobApplicationCreateWithoutInterviewPrepsInput, JobApplicationUncheckedCreateWithoutInterviewPrepsInput>
    connectOrCreate?: JobApplicationCreateOrConnectWithoutInterviewPrepsInput
    connect?: JobApplicationWhereUniqueInput
  }

  export type InterviewQuestionCreateNestedManyWithoutInterviewPrepInput = {
    create?: XOR<InterviewQuestionCreateWithoutInterviewPrepInput, InterviewQuestionUncheckedCreateWithoutInterviewPrepInput> | InterviewQuestionCreateWithoutInterviewPrepInput[] | InterviewQuestionUncheckedCreateWithoutInterviewPrepInput[]
    connectOrCreate?: InterviewQuestionCreateOrConnectWithoutInterviewPrepInput | InterviewQuestionCreateOrConnectWithoutInterviewPrepInput[]
    createMany?: InterviewQuestionCreateManyInterviewPrepInputEnvelope
    connect?: InterviewQuestionWhereUniqueInput | InterviewQuestionWhereUniqueInput[]
  }

  export type InterviewQuestionUncheckedCreateNestedManyWithoutInterviewPrepInput = {
    create?: XOR<InterviewQuestionCreateWithoutInterviewPrepInput, InterviewQuestionUncheckedCreateWithoutInterviewPrepInput> | InterviewQuestionCreateWithoutInterviewPrepInput[] | InterviewQuestionUncheckedCreateWithoutInterviewPrepInput[]
    connectOrCreate?: InterviewQuestionCreateOrConnectWithoutInterviewPrepInput | InterviewQuestionCreateOrConnectWithoutInterviewPrepInput[]
    createMany?: InterviewQuestionCreateManyInterviewPrepInputEnvelope
    connect?: InterviewQuestionWhereUniqueInput | InterviewQuestionWhereUniqueInput[]
  }

  export type JobApplicationUpdateOneRequiredWithoutInterviewPrepsNestedInput = {
    create?: XOR<JobApplicationCreateWithoutInterviewPrepsInput, JobApplicationUncheckedCreateWithoutInterviewPrepsInput>
    connectOrCreate?: JobApplicationCreateOrConnectWithoutInterviewPrepsInput
    upsert?: JobApplicationUpsertWithoutInterviewPrepsInput
    connect?: JobApplicationWhereUniqueInput
    update?: XOR<XOR<JobApplicationUpdateToOneWithWhereWithoutInterviewPrepsInput, JobApplicationUpdateWithoutInterviewPrepsInput>, JobApplicationUncheckedUpdateWithoutInterviewPrepsInput>
  }

  export type InterviewQuestionUpdateManyWithoutInterviewPrepNestedInput = {
    create?: XOR<InterviewQuestionCreateWithoutInterviewPrepInput, InterviewQuestionUncheckedCreateWithoutInterviewPrepInput> | InterviewQuestionCreateWithoutInterviewPrepInput[] | InterviewQuestionUncheckedCreateWithoutInterviewPrepInput[]
    connectOrCreate?: InterviewQuestionCreateOrConnectWithoutInterviewPrepInput | InterviewQuestionCreateOrConnectWithoutInterviewPrepInput[]
    upsert?: InterviewQuestionUpsertWithWhereUniqueWithoutInterviewPrepInput | InterviewQuestionUpsertWithWhereUniqueWithoutInterviewPrepInput[]
    createMany?: InterviewQuestionCreateManyInterviewPrepInputEnvelope
    set?: InterviewQuestionWhereUniqueInput | InterviewQuestionWhereUniqueInput[]
    disconnect?: InterviewQuestionWhereUniqueInput | InterviewQuestionWhereUniqueInput[]
    delete?: InterviewQuestionWhereUniqueInput | InterviewQuestionWhereUniqueInput[]
    connect?: InterviewQuestionWhereUniqueInput | InterviewQuestionWhereUniqueInput[]
    update?: InterviewQuestionUpdateWithWhereUniqueWithoutInterviewPrepInput | InterviewQuestionUpdateWithWhereUniqueWithoutInterviewPrepInput[]
    updateMany?: InterviewQuestionUpdateManyWithWhereWithoutInterviewPrepInput | InterviewQuestionUpdateManyWithWhereWithoutInterviewPrepInput[]
    deleteMany?: InterviewQuestionScalarWhereInput | InterviewQuestionScalarWhereInput[]
  }

  export type InterviewQuestionUncheckedUpdateManyWithoutInterviewPrepNestedInput = {
    create?: XOR<InterviewQuestionCreateWithoutInterviewPrepInput, InterviewQuestionUncheckedCreateWithoutInterviewPrepInput> | InterviewQuestionCreateWithoutInterviewPrepInput[] | InterviewQuestionUncheckedCreateWithoutInterviewPrepInput[]
    connectOrCreate?: InterviewQuestionCreateOrConnectWithoutInterviewPrepInput | InterviewQuestionCreateOrConnectWithoutInterviewPrepInput[]
    upsert?: InterviewQuestionUpsertWithWhereUniqueWithoutInterviewPrepInput | InterviewQuestionUpsertWithWhereUniqueWithoutInterviewPrepInput[]
    createMany?: InterviewQuestionCreateManyInterviewPrepInputEnvelope
    set?: InterviewQuestionWhereUniqueInput | InterviewQuestionWhereUniqueInput[]
    disconnect?: InterviewQuestionWhereUniqueInput | InterviewQuestionWhereUniqueInput[]
    delete?: InterviewQuestionWhereUniqueInput | InterviewQuestionWhereUniqueInput[]
    connect?: InterviewQuestionWhereUniqueInput | InterviewQuestionWhereUniqueInput[]
    update?: InterviewQuestionUpdateWithWhereUniqueWithoutInterviewPrepInput | InterviewQuestionUpdateWithWhereUniqueWithoutInterviewPrepInput[]
    updateMany?: InterviewQuestionUpdateManyWithWhereWithoutInterviewPrepInput | InterviewQuestionUpdateManyWithWhereWithoutInterviewPrepInput[]
    deleteMany?: InterviewQuestionScalarWhereInput | InterviewQuestionScalarWhereInput[]
  }

  export type InterviewQuestionCreatekeyPointsInput = {
    set: string[]
  }

  export type InterviewPrepCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<InterviewPrepCreateWithoutQuestionsInput, InterviewPrepUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: InterviewPrepCreateOrConnectWithoutQuestionsInput
    connect?: InterviewPrepWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutInterviewQuestionsInput = {
    create?: XOR<UserCreateWithoutInterviewQuestionsInput, UserUncheckedCreateWithoutInterviewQuestionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInterviewQuestionsInput
    connect?: UserWhereUniqueInput
  }

  export type InterviewQuestionUpdatekeyPointsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type InterviewPrepUpdateOneWithoutQuestionsNestedInput = {
    create?: XOR<InterviewPrepCreateWithoutQuestionsInput, InterviewPrepUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: InterviewPrepCreateOrConnectWithoutQuestionsInput
    upsert?: InterviewPrepUpsertWithoutQuestionsInput
    disconnect?: InterviewPrepWhereInput | boolean
    delete?: InterviewPrepWhereInput | boolean
    connect?: InterviewPrepWhereUniqueInput
    update?: XOR<XOR<InterviewPrepUpdateToOneWithWhereWithoutQuestionsInput, InterviewPrepUpdateWithoutQuestionsInput>, InterviewPrepUncheckedUpdateWithoutQuestionsInput>
  }

  export type UserUpdateOneRequiredWithoutInterviewQuestionsNestedInput = {
    create?: XOR<UserCreateWithoutInterviewQuestionsInput, UserUncheckedCreateWithoutInterviewQuestionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInterviewQuestionsInput
    upsert?: UserUpsertWithoutInterviewQuestionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInterviewQuestionsInput, UserUpdateWithoutInterviewQuestionsInput>, UserUncheckedUpdateWithoutInterviewQuestionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type JobApplicationCreateWithoutUserInput = {
    id?: string
    companyName: string
    jobTitle: string
    status: string
    jobUrl?: string | null
    jobDescription: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resume?: ResumeCreateNestedOneWithoutJobApplicationInput
    aiSuggestions?: AISuggestionCreateNestedManyWithoutJobApplicationInput
    acceptedSuggestions?: AcceptedSuggestionCreateNestedManyWithoutJobApplicationInput
    interviewPreps?: InterviewPrepCreateNestedManyWithoutJobApplicationInput
  }

  export type JobApplicationUncheckedCreateWithoutUserInput = {
    id?: string
    companyName: string
    jobTitle: string
    status: string
    jobUrl?: string | null
    jobDescription: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resume?: ResumeUncheckedCreateNestedOneWithoutJobApplicationInput
    aiSuggestions?: AISuggestionUncheckedCreateNestedManyWithoutJobApplicationInput
    acceptedSuggestions?: AcceptedSuggestionUncheckedCreateNestedManyWithoutJobApplicationInput
    interviewPreps?: InterviewPrepUncheckedCreateNestedManyWithoutJobApplicationInput
  }

  export type JobApplicationCreateOrConnectWithoutUserInput = {
    where: JobApplicationWhereUniqueInput
    create: XOR<JobApplicationCreateWithoutUserInput, JobApplicationUncheckedCreateWithoutUserInput>
  }

  export type JobApplicationCreateManyUserInputEnvelope = {
    data: JobApplicationCreateManyUserInput | JobApplicationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type InterviewQuestionCreateWithoutUserInput = {
    id?: string
    question: string
    answer: string
    topic: string
    keyPoints?: InterviewQuestionCreatekeyPointsInput | string[]
    createdAt?: Date | string
    interviewPrep?: InterviewPrepCreateNestedOneWithoutQuestionsInput
  }

  export type InterviewQuestionUncheckedCreateWithoutUserInput = {
    id?: string
    interviewPrepId?: string | null
    question: string
    answer: string
    topic: string
    keyPoints?: InterviewQuestionCreatekeyPointsInput | string[]
    createdAt?: Date | string
  }

  export type InterviewQuestionCreateOrConnectWithoutUserInput = {
    where: InterviewQuestionWhereUniqueInput
    create: XOR<InterviewQuestionCreateWithoutUserInput, InterviewQuestionUncheckedCreateWithoutUserInput>
  }

  export type InterviewQuestionCreateManyUserInputEnvelope = {
    data: InterviewQuestionCreateManyUserInput | InterviewQuestionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type JobApplicationUpsertWithWhereUniqueWithoutUserInput = {
    where: JobApplicationWhereUniqueInput
    update: XOR<JobApplicationUpdateWithoutUserInput, JobApplicationUncheckedUpdateWithoutUserInput>
    create: XOR<JobApplicationCreateWithoutUserInput, JobApplicationUncheckedCreateWithoutUserInput>
  }

  export type JobApplicationUpdateWithWhereUniqueWithoutUserInput = {
    where: JobApplicationWhereUniqueInput
    data: XOR<JobApplicationUpdateWithoutUserInput, JobApplicationUncheckedUpdateWithoutUserInput>
  }

  export type JobApplicationUpdateManyWithWhereWithoutUserInput = {
    where: JobApplicationScalarWhereInput
    data: XOR<JobApplicationUpdateManyMutationInput, JobApplicationUncheckedUpdateManyWithoutUserInput>
  }

  export type JobApplicationScalarWhereInput = {
    AND?: JobApplicationScalarWhereInput | JobApplicationScalarWhereInput[]
    OR?: JobApplicationScalarWhereInput[]
    NOT?: JobApplicationScalarWhereInput | JobApplicationScalarWhereInput[]
    id?: StringFilter<"JobApplication"> | string
    userId?: StringFilter<"JobApplication"> | string
    companyName?: StringFilter<"JobApplication"> | string
    jobTitle?: StringFilter<"JobApplication"> | string
    status?: StringFilter<"JobApplication"> | string
    jobUrl?: StringNullableFilter<"JobApplication"> | string | null
    jobDescription?: StringFilter<"JobApplication"> | string
    notes?: StringNullableFilter<"JobApplication"> | string | null
    createdAt?: DateTimeFilter<"JobApplication"> | Date | string
    updatedAt?: DateTimeFilter<"JobApplication"> | Date | string
  }

  export type InterviewQuestionUpsertWithWhereUniqueWithoutUserInput = {
    where: InterviewQuestionWhereUniqueInput
    update: XOR<InterviewQuestionUpdateWithoutUserInput, InterviewQuestionUncheckedUpdateWithoutUserInput>
    create: XOR<InterviewQuestionCreateWithoutUserInput, InterviewQuestionUncheckedCreateWithoutUserInput>
  }

  export type InterviewQuestionUpdateWithWhereUniqueWithoutUserInput = {
    where: InterviewQuestionWhereUniqueInput
    data: XOR<InterviewQuestionUpdateWithoutUserInput, InterviewQuestionUncheckedUpdateWithoutUserInput>
  }

  export type InterviewQuestionUpdateManyWithWhereWithoutUserInput = {
    where: InterviewQuestionScalarWhereInput
    data: XOR<InterviewQuestionUpdateManyMutationInput, InterviewQuestionUncheckedUpdateManyWithoutUserInput>
  }

  export type InterviewQuestionScalarWhereInput = {
    AND?: InterviewQuestionScalarWhereInput | InterviewQuestionScalarWhereInput[]
    OR?: InterviewQuestionScalarWhereInput[]
    NOT?: InterviewQuestionScalarWhereInput | InterviewQuestionScalarWhereInput[]
    id?: StringFilter<"InterviewQuestion"> | string
    interviewPrepId?: StringNullableFilter<"InterviewQuestion"> | string | null
    userId?: StringFilter<"InterviewQuestion"> | string
    question?: StringFilter<"InterviewQuestion"> | string
    answer?: StringFilter<"InterviewQuestion"> | string
    topic?: StringFilter<"InterviewQuestion"> | string
    keyPoints?: StringNullableListFilter<"InterviewQuestion">
    createdAt?: DateTimeFilter<"InterviewQuestion"> | Date | string
  }

  export type UserCreateWithoutJobApplicationsInput = {
    id?: string
    name: string
    email: string
    password: string
    isVerified?: boolean
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    interviewQuestions?: InterviewQuestionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutJobApplicationsInput = {
    id?: string
    name: string
    email: string
    password: string
    isVerified?: boolean
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    interviewQuestions?: InterviewQuestionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutJobApplicationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutJobApplicationsInput, UserUncheckedCreateWithoutJobApplicationsInput>
  }

  export type ResumeCreateWithoutJobApplicationInput = {
    id?: string
    fileUrl: string
    parsedText: string
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResumeUncheckedCreateWithoutJobApplicationInput = {
    id?: string
    fileUrl: string
    parsedText: string
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResumeCreateOrConnectWithoutJobApplicationInput = {
    where: ResumeWhereUniqueInput
    create: XOR<ResumeCreateWithoutJobApplicationInput, ResumeUncheckedCreateWithoutJobApplicationInput>
  }

  export type AISuggestionCreateWithoutJobApplicationInput = {
    id?: string
    originalText: string
    suggestedText: string
    type: string
    status?: string
    explanation: string
    createdAt?: Date | string
  }

  export type AISuggestionUncheckedCreateWithoutJobApplicationInput = {
    id?: string
    originalText: string
    suggestedText: string
    type: string
    status?: string
    explanation: string
    createdAt?: Date | string
  }

  export type AISuggestionCreateOrConnectWithoutJobApplicationInput = {
    where: AISuggestionWhereUniqueInput
    create: XOR<AISuggestionCreateWithoutJobApplicationInput, AISuggestionUncheckedCreateWithoutJobApplicationInput>
  }

  export type AISuggestionCreateManyJobApplicationInputEnvelope = {
    data: AISuggestionCreateManyJobApplicationInput | AISuggestionCreateManyJobApplicationInput[]
    skipDuplicates?: boolean
  }

  export type AcceptedSuggestionCreateWithoutJobApplicationInput = {
    id?: string
    originalText: string
    suggestedText: string
    createdAt?: Date | string
  }

  export type AcceptedSuggestionUncheckedCreateWithoutJobApplicationInput = {
    id?: string
    originalText: string
    suggestedText: string
    createdAt?: Date | string
  }

  export type AcceptedSuggestionCreateOrConnectWithoutJobApplicationInput = {
    where: AcceptedSuggestionWhereUniqueInput
    create: XOR<AcceptedSuggestionCreateWithoutJobApplicationInput, AcceptedSuggestionUncheckedCreateWithoutJobApplicationInput>
  }

  export type AcceptedSuggestionCreateManyJobApplicationInputEnvelope = {
    data: AcceptedSuggestionCreateManyJobApplicationInput | AcceptedSuggestionCreateManyJobApplicationInput[]
    skipDuplicates?: boolean
  }

  export type InterviewPrepCreateWithoutJobApplicationInput = {
    id?: string
    createdAt?: Date | string
    questions?: InterviewQuestionCreateNestedManyWithoutInterviewPrepInput
  }

  export type InterviewPrepUncheckedCreateWithoutJobApplicationInput = {
    id?: string
    createdAt?: Date | string
    questions?: InterviewQuestionUncheckedCreateNestedManyWithoutInterviewPrepInput
  }

  export type InterviewPrepCreateOrConnectWithoutJobApplicationInput = {
    where: InterviewPrepWhereUniqueInput
    create: XOR<InterviewPrepCreateWithoutJobApplicationInput, InterviewPrepUncheckedCreateWithoutJobApplicationInput>
  }

  export type InterviewPrepCreateManyJobApplicationInputEnvelope = {
    data: InterviewPrepCreateManyJobApplicationInput | InterviewPrepCreateManyJobApplicationInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutJobApplicationsInput = {
    update: XOR<UserUpdateWithoutJobApplicationsInput, UserUncheckedUpdateWithoutJobApplicationsInput>
    create: XOR<UserCreateWithoutJobApplicationsInput, UserUncheckedCreateWithoutJobApplicationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutJobApplicationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutJobApplicationsInput, UserUncheckedUpdateWithoutJobApplicationsInput>
  }

  export type UserUpdateWithoutJobApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interviewQuestions?: InterviewQuestionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutJobApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interviewQuestions?: InterviewQuestionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ResumeUpsertWithoutJobApplicationInput = {
    update: XOR<ResumeUpdateWithoutJobApplicationInput, ResumeUncheckedUpdateWithoutJobApplicationInput>
    create: XOR<ResumeCreateWithoutJobApplicationInput, ResumeUncheckedCreateWithoutJobApplicationInput>
    where?: ResumeWhereInput
  }

  export type ResumeUpdateToOneWithWhereWithoutJobApplicationInput = {
    where?: ResumeWhereInput
    data: XOR<ResumeUpdateWithoutJobApplicationInput, ResumeUncheckedUpdateWithoutJobApplicationInput>
  }

  export type ResumeUpdateWithoutJobApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    parsedText?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeUncheckedUpdateWithoutJobApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    parsedText?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AISuggestionUpsertWithWhereUniqueWithoutJobApplicationInput = {
    where: AISuggestionWhereUniqueInput
    update: XOR<AISuggestionUpdateWithoutJobApplicationInput, AISuggestionUncheckedUpdateWithoutJobApplicationInput>
    create: XOR<AISuggestionCreateWithoutJobApplicationInput, AISuggestionUncheckedCreateWithoutJobApplicationInput>
  }

  export type AISuggestionUpdateWithWhereUniqueWithoutJobApplicationInput = {
    where: AISuggestionWhereUniqueInput
    data: XOR<AISuggestionUpdateWithoutJobApplicationInput, AISuggestionUncheckedUpdateWithoutJobApplicationInput>
  }

  export type AISuggestionUpdateManyWithWhereWithoutJobApplicationInput = {
    where: AISuggestionScalarWhereInput
    data: XOR<AISuggestionUpdateManyMutationInput, AISuggestionUncheckedUpdateManyWithoutJobApplicationInput>
  }

  export type AISuggestionScalarWhereInput = {
    AND?: AISuggestionScalarWhereInput | AISuggestionScalarWhereInput[]
    OR?: AISuggestionScalarWhereInput[]
    NOT?: AISuggestionScalarWhereInput | AISuggestionScalarWhereInput[]
    id?: StringFilter<"AISuggestion"> | string
    jobApplicationId?: StringFilter<"AISuggestion"> | string
    originalText?: StringFilter<"AISuggestion"> | string
    suggestedText?: StringFilter<"AISuggestion"> | string
    type?: StringFilter<"AISuggestion"> | string
    status?: StringFilter<"AISuggestion"> | string
    explanation?: StringFilter<"AISuggestion"> | string
    createdAt?: DateTimeFilter<"AISuggestion"> | Date | string
  }

  export type AcceptedSuggestionUpsertWithWhereUniqueWithoutJobApplicationInput = {
    where: AcceptedSuggestionWhereUniqueInput
    update: XOR<AcceptedSuggestionUpdateWithoutJobApplicationInput, AcceptedSuggestionUncheckedUpdateWithoutJobApplicationInput>
    create: XOR<AcceptedSuggestionCreateWithoutJobApplicationInput, AcceptedSuggestionUncheckedCreateWithoutJobApplicationInput>
  }

  export type AcceptedSuggestionUpdateWithWhereUniqueWithoutJobApplicationInput = {
    where: AcceptedSuggestionWhereUniqueInput
    data: XOR<AcceptedSuggestionUpdateWithoutJobApplicationInput, AcceptedSuggestionUncheckedUpdateWithoutJobApplicationInput>
  }

  export type AcceptedSuggestionUpdateManyWithWhereWithoutJobApplicationInput = {
    where: AcceptedSuggestionScalarWhereInput
    data: XOR<AcceptedSuggestionUpdateManyMutationInput, AcceptedSuggestionUncheckedUpdateManyWithoutJobApplicationInput>
  }

  export type AcceptedSuggestionScalarWhereInput = {
    AND?: AcceptedSuggestionScalarWhereInput | AcceptedSuggestionScalarWhereInput[]
    OR?: AcceptedSuggestionScalarWhereInput[]
    NOT?: AcceptedSuggestionScalarWhereInput | AcceptedSuggestionScalarWhereInput[]
    id?: StringFilter<"AcceptedSuggestion"> | string
    jobApplicationId?: StringFilter<"AcceptedSuggestion"> | string
    originalText?: StringFilter<"AcceptedSuggestion"> | string
    suggestedText?: StringFilter<"AcceptedSuggestion"> | string
    createdAt?: DateTimeFilter<"AcceptedSuggestion"> | Date | string
  }

  export type InterviewPrepUpsertWithWhereUniqueWithoutJobApplicationInput = {
    where: InterviewPrepWhereUniqueInput
    update: XOR<InterviewPrepUpdateWithoutJobApplicationInput, InterviewPrepUncheckedUpdateWithoutJobApplicationInput>
    create: XOR<InterviewPrepCreateWithoutJobApplicationInput, InterviewPrepUncheckedCreateWithoutJobApplicationInput>
  }

  export type InterviewPrepUpdateWithWhereUniqueWithoutJobApplicationInput = {
    where: InterviewPrepWhereUniqueInput
    data: XOR<InterviewPrepUpdateWithoutJobApplicationInput, InterviewPrepUncheckedUpdateWithoutJobApplicationInput>
  }

  export type InterviewPrepUpdateManyWithWhereWithoutJobApplicationInput = {
    where: InterviewPrepScalarWhereInput
    data: XOR<InterviewPrepUpdateManyMutationInput, InterviewPrepUncheckedUpdateManyWithoutJobApplicationInput>
  }

  export type InterviewPrepScalarWhereInput = {
    AND?: InterviewPrepScalarWhereInput | InterviewPrepScalarWhereInput[]
    OR?: InterviewPrepScalarWhereInput[]
    NOT?: InterviewPrepScalarWhereInput | InterviewPrepScalarWhereInput[]
    id?: StringFilter<"InterviewPrep"> | string
    jobApplicationId?: StringFilter<"InterviewPrep"> | string
    createdAt?: DateTimeFilter<"InterviewPrep"> | Date | string
  }

  export type JobApplicationCreateWithoutResumeInput = {
    id?: string
    companyName: string
    jobTitle: string
    status: string
    jobUrl?: string | null
    jobDescription: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutJobApplicationsInput
    aiSuggestions?: AISuggestionCreateNestedManyWithoutJobApplicationInput
    acceptedSuggestions?: AcceptedSuggestionCreateNestedManyWithoutJobApplicationInput
    interviewPreps?: InterviewPrepCreateNestedManyWithoutJobApplicationInput
  }

  export type JobApplicationUncheckedCreateWithoutResumeInput = {
    id?: string
    userId: string
    companyName: string
    jobTitle: string
    status: string
    jobUrl?: string | null
    jobDescription: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    aiSuggestions?: AISuggestionUncheckedCreateNestedManyWithoutJobApplicationInput
    acceptedSuggestions?: AcceptedSuggestionUncheckedCreateNestedManyWithoutJobApplicationInput
    interviewPreps?: InterviewPrepUncheckedCreateNestedManyWithoutJobApplicationInput
  }

  export type JobApplicationCreateOrConnectWithoutResumeInput = {
    where: JobApplicationWhereUniqueInput
    create: XOR<JobApplicationCreateWithoutResumeInput, JobApplicationUncheckedCreateWithoutResumeInput>
  }

  export type JobApplicationUpsertWithoutResumeInput = {
    update: XOR<JobApplicationUpdateWithoutResumeInput, JobApplicationUncheckedUpdateWithoutResumeInput>
    create: XOR<JobApplicationCreateWithoutResumeInput, JobApplicationUncheckedCreateWithoutResumeInput>
    where?: JobApplicationWhereInput
  }

  export type JobApplicationUpdateToOneWithWhereWithoutResumeInput = {
    where?: JobApplicationWhereInput
    data: XOR<JobApplicationUpdateWithoutResumeInput, JobApplicationUncheckedUpdateWithoutResumeInput>
  }

  export type JobApplicationUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    jobUrl?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutJobApplicationsNestedInput
    aiSuggestions?: AISuggestionUpdateManyWithoutJobApplicationNestedInput
    acceptedSuggestions?: AcceptedSuggestionUpdateManyWithoutJobApplicationNestedInput
    interviewPreps?: InterviewPrepUpdateManyWithoutJobApplicationNestedInput
  }

  export type JobApplicationUncheckedUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    jobUrl?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiSuggestions?: AISuggestionUncheckedUpdateManyWithoutJobApplicationNestedInput
    acceptedSuggestions?: AcceptedSuggestionUncheckedUpdateManyWithoutJobApplicationNestedInput
    interviewPreps?: InterviewPrepUncheckedUpdateManyWithoutJobApplicationNestedInput
  }

  export type JobApplicationCreateWithoutAiSuggestionsInput = {
    id?: string
    companyName: string
    jobTitle: string
    status: string
    jobUrl?: string | null
    jobDescription: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutJobApplicationsInput
    resume?: ResumeCreateNestedOneWithoutJobApplicationInput
    acceptedSuggestions?: AcceptedSuggestionCreateNestedManyWithoutJobApplicationInput
    interviewPreps?: InterviewPrepCreateNestedManyWithoutJobApplicationInput
  }

  export type JobApplicationUncheckedCreateWithoutAiSuggestionsInput = {
    id?: string
    userId: string
    companyName: string
    jobTitle: string
    status: string
    jobUrl?: string | null
    jobDescription: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resume?: ResumeUncheckedCreateNestedOneWithoutJobApplicationInput
    acceptedSuggestions?: AcceptedSuggestionUncheckedCreateNestedManyWithoutJobApplicationInput
    interviewPreps?: InterviewPrepUncheckedCreateNestedManyWithoutJobApplicationInput
  }

  export type JobApplicationCreateOrConnectWithoutAiSuggestionsInput = {
    where: JobApplicationWhereUniqueInput
    create: XOR<JobApplicationCreateWithoutAiSuggestionsInput, JobApplicationUncheckedCreateWithoutAiSuggestionsInput>
  }

  export type JobApplicationUpsertWithoutAiSuggestionsInput = {
    update: XOR<JobApplicationUpdateWithoutAiSuggestionsInput, JobApplicationUncheckedUpdateWithoutAiSuggestionsInput>
    create: XOR<JobApplicationCreateWithoutAiSuggestionsInput, JobApplicationUncheckedCreateWithoutAiSuggestionsInput>
    where?: JobApplicationWhereInput
  }

  export type JobApplicationUpdateToOneWithWhereWithoutAiSuggestionsInput = {
    where?: JobApplicationWhereInput
    data: XOR<JobApplicationUpdateWithoutAiSuggestionsInput, JobApplicationUncheckedUpdateWithoutAiSuggestionsInput>
  }

  export type JobApplicationUpdateWithoutAiSuggestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    jobUrl?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutJobApplicationsNestedInput
    resume?: ResumeUpdateOneWithoutJobApplicationNestedInput
    acceptedSuggestions?: AcceptedSuggestionUpdateManyWithoutJobApplicationNestedInput
    interviewPreps?: InterviewPrepUpdateManyWithoutJobApplicationNestedInput
  }

  export type JobApplicationUncheckedUpdateWithoutAiSuggestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    jobUrl?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resume?: ResumeUncheckedUpdateOneWithoutJobApplicationNestedInput
    acceptedSuggestions?: AcceptedSuggestionUncheckedUpdateManyWithoutJobApplicationNestedInput
    interviewPreps?: InterviewPrepUncheckedUpdateManyWithoutJobApplicationNestedInput
  }

  export type JobApplicationCreateWithoutAcceptedSuggestionsInput = {
    id?: string
    companyName: string
    jobTitle: string
    status: string
    jobUrl?: string | null
    jobDescription: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutJobApplicationsInput
    resume?: ResumeCreateNestedOneWithoutJobApplicationInput
    aiSuggestions?: AISuggestionCreateNestedManyWithoutJobApplicationInput
    interviewPreps?: InterviewPrepCreateNestedManyWithoutJobApplicationInput
  }

  export type JobApplicationUncheckedCreateWithoutAcceptedSuggestionsInput = {
    id?: string
    userId: string
    companyName: string
    jobTitle: string
    status: string
    jobUrl?: string | null
    jobDescription: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resume?: ResumeUncheckedCreateNestedOneWithoutJobApplicationInput
    aiSuggestions?: AISuggestionUncheckedCreateNestedManyWithoutJobApplicationInput
    interviewPreps?: InterviewPrepUncheckedCreateNestedManyWithoutJobApplicationInput
  }

  export type JobApplicationCreateOrConnectWithoutAcceptedSuggestionsInput = {
    where: JobApplicationWhereUniqueInput
    create: XOR<JobApplicationCreateWithoutAcceptedSuggestionsInput, JobApplicationUncheckedCreateWithoutAcceptedSuggestionsInput>
  }

  export type JobApplicationUpsertWithoutAcceptedSuggestionsInput = {
    update: XOR<JobApplicationUpdateWithoutAcceptedSuggestionsInput, JobApplicationUncheckedUpdateWithoutAcceptedSuggestionsInput>
    create: XOR<JobApplicationCreateWithoutAcceptedSuggestionsInput, JobApplicationUncheckedCreateWithoutAcceptedSuggestionsInput>
    where?: JobApplicationWhereInput
  }

  export type JobApplicationUpdateToOneWithWhereWithoutAcceptedSuggestionsInput = {
    where?: JobApplicationWhereInput
    data: XOR<JobApplicationUpdateWithoutAcceptedSuggestionsInput, JobApplicationUncheckedUpdateWithoutAcceptedSuggestionsInput>
  }

  export type JobApplicationUpdateWithoutAcceptedSuggestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    jobUrl?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutJobApplicationsNestedInput
    resume?: ResumeUpdateOneWithoutJobApplicationNestedInput
    aiSuggestions?: AISuggestionUpdateManyWithoutJobApplicationNestedInput
    interviewPreps?: InterviewPrepUpdateManyWithoutJobApplicationNestedInput
  }

  export type JobApplicationUncheckedUpdateWithoutAcceptedSuggestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    jobUrl?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resume?: ResumeUncheckedUpdateOneWithoutJobApplicationNestedInput
    aiSuggestions?: AISuggestionUncheckedUpdateManyWithoutJobApplicationNestedInput
    interviewPreps?: InterviewPrepUncheckedUpdateManyWithoutJobApplicationNestedInput
  }

  export type JobApplicationCreateWithoutInterviewPrepsInput = {
    id?: string
    companyName: string
    jobTitle: string
    status: string
    jobUrl?: string | null
    jobDescription: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutJobApplicationsInput
    resume?: ResumeCreateNestedOneWithoutJobApplicationInput
    aiSuggestions?: AISuggestionCreateNestedManyWithoutJobApplicationInput
    acceptedSuggestions?: AcceptedSuggestionCreateNestedManyWithoutJobApplicationInput
  }

  export type JobApplicationUncheckedCreateWithoutInterviewPrepsInput = {
    id?: string
    userId: string
    companyName: string
    jobTitle: string
    status: string
    jobUrl?: string | null
    jobDescription: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resume?: ResumeUncheckedCreateNestedOneWithoutJobApplicationInput
    aiSuggestions?: AISuggestionUncheckedCreateNestedManyWithoutJobApplicationInput
    acceptedSuggestions?: AcceptedSuggestionUncheckedCreateNestedManyWithoutJobApplicationInput
  }

  export type JobApplicationCreateOrConnectWithoutInterviewPrepsInput = {
    where: JobApplicationWhereUniqueInput
    create: XOR<JobApplicationCreateWithoutInterviewPrepsInput, JobApplicationUncheckedCreateWithoutInterviewPrepsInput>
  }

  export type InterviewQuestionCreateWithoutInterviewPrepInput = {
    id?: string
    question: string
    answer: string
    topic: string
    keyPoints?: InterviewQuestionCreatekeyPointsInput | string[]
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutInterviewQuestionsInput
  }

  export type InterviewQuestionUncheckedCreateWithoutInterviewPrepInput = {
    id?: string
    userId: string
    question: string
    answer: string
    topic: string
    keyPoints?: InterviewQuestionCreatekeyPointsInput | string[]
    createdAt?: Date | string
  }

  export type InterviewQuestionCreateOrConnectWithoutInterviewPrepInput = {
    where: InterviewQuestionWhereUniqueInput
    create: XOR<InterviewQuestionCreateWithoutInterviewPrepInput, InterviewQuestionUncheckedCreateWithoutInterviewPrepInput>
  }

  export type InterviewQuestionCreateManyInterviewPrepInputEnvelope = {
    data: InterviewQuestionCreateManyInterviewPrepInput | InterviewQuestionCreateManyInterviewPrepInput[]
    skipDuplicates?: boolean
  }

  export type JobApplicationUpsertWithoutInterviewPrepsInput = {
    update: XOR<JobApplicationUpdateWithoutInterviewPrepsInput, JobApplicationUncheckedUpdateWithoutInterviewPrepsInput>
    create: XOR<JobApplicationCreateWithoutInterviewPrepsInput, JobApplicationUncheckedCreateWithoutInterviewPrepsInput>
    where?: JobApplicationWhereInput
  }

  export type JobApplicationUpdateToOneWithWhereWithoutInterviewPrepsInput = {
    where?: JobApplicationWhereInput
    data: XOR<JobApplicationUpdateWithoutInterviewPrepsInput, JobApplicationUncheckedUpdateWithoutInterviewPrepsInput>
  }

  export type JobApplicationUpdateWithoutInterviewPrepsInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    jobUrl?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutJobApplicationsNestedInput
    resume?: ResumeUpdateOneWithoutJobApplicationNestedInput
    aiSuggestions?: AISuggestionUpdateManyWithoutJobApplicationNestedInput
    acceptedSuggestions?: AcceptedSuggestionUpdateManyWithoutJobApplicationNestedInput
  }

  export type JobApplicationUncheckedUpdateWithoutInterviewPrepsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    jobUrl?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resume?: ResumeUncheckedUpdateOneWithoutJobApplicationNestedInput
    aiSuggestions?: AISuggestionUncheckedUpdateManyWithoutJobApplicationNestedInput
    acceptedSuggestions?: AcceptedSuggestionUncheckedUpdateManyWithoutJobApplicationNestedInput
  }

  export type InterviewQuestionUpsertWithWhereUniqueWithoutInterviewPrepInput = {
    where: InterviewQuestionWhereUniqueInput
    update: XOR<InterviewQuestionUpdateWithoutInterviewPrepInput, InterviewQuestionUncheckedUpdateWithoutInterviewPrepInput>
    create: XOR<InterviewQuestionCreateWithoutInterviewPrepInput, InterviewQuestionUncheckedCreateWithoutInterviewPrepInput>
  }

  export type InterviewQuestionUpdateWithWhereUniqueWithoutInterviewPrepInput = {
    where: InterviewQuestionWhereUniqueInput
    data: XOR<InterviewQuestionUpdateWithoutInterviewPrepInput, InterviewQuestionUncheckedUpdateWithoutInterviewPrepInput>
  }

  export type InterviewQuestionUpdateManyWithWhereWithoutInterviewPrepInput = {
    where: InterviewQuestionScalarWhereInput
    data: XOR<InterviewQuestionUpdateManyMutationInput, InterviewQuestionUncheckedUpdateManyWithoutInterviewPrepInput>
  }

  export type InterviewPrepCreateWithoutQuestionsInput = {
    id?: string
    createdAt?: Date | string
    jobApplication: JobApplicationCreateNestedOneWithoutInterviewPrepsInput
  }

  export type InterviewPrepUncheckedCreateWithoutQuestionsInput = {
    id?: string
    jobApplicationId: string
    createdAt?: Date | string
  }

  export type InterviewPrepCreateOrConnectWithoutQuestionsInput = {
    where: InterviewPrepWhereUniqueInput
    create: XOR<InterviewPrepCreateWithoutQuestionsInput, InterviewPrepUncheckedCreateWithoutQuestionsInput>
  }

  export type UserCreateWithoutInterviewQuestionsInput = {
    id?: string
    name: string
    email: string
    password: string
    isVerified?: boolean
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jobApplications?: JobApplicationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInterviewQuestionsInput = {
    id?: string
    name: string
    email: string
    password: string
    isVerified?: boolean
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jobApplications?: JobApplicationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInterviewQuestionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInterviewQuestionsInput, UserUncheckedCreateWithoutInterviewQuestionsInput>
  }

  export type InterviewPrepUpsertWithoutQuestionsInput = {
    update: XOR<InterviewPrepUpdateWithoutQuestionsInput, InterviewPrepUncheckedUpdateWithoutQuestionsInput>
    create: XOR<InterviewPrepCreateWithoutQuestionsInput, InterviewPrepUncheckedCreateWithoutQuestionsInput>
    where?: InterviewPrepWhereInput
  }

  export type InterviewPrepUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: InterviewPrepWhereInput
    data: XOR<InterviewPrepUpdateWithoutQuestionsInput, InterviewPrepUncheckedUpdateWithoutQuestionsInput>
  }

  export type InterviewPrepUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobApplication?: JobApplicationUpdateOneRequiredWithoutInterviewPrepsNestedInput
  }

  export type InterviewPrepUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobApplicationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutInterviewQuestionsInput = {
    update: XOR<UserUpdateWithoutInterviewQuestionsInput, UserUncheckedUpdateWithoutInterviewQuestionsInput>
    create: XOR<UserCreateWithoutInterviewQuestionsInput, UserUncheckedCreateWithoutInterviewQuestionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInterviewQuestionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInterviewQuestionsInput, UserUncheckedUpdateWithoutInterviewQuestionsInput>
  }

  export type UserUpdateWithoutInterviewQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobApplications?: JobApplicationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInterviewQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobApplications?: JobApplicationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type JobApplicationCreateManyUserInput = {
    id?: string
    companyName: string
    jobTitle: string
    status: string
    jobUrl?: string | null
    jobDescription: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InterviewQuestionCreateManyUserInput = {
    id?: string
    interviewPrepId?: string | null
    question: string
    answer: string
    topic: string
    keyPoints?: InterviewQuestionCreatekeyPointsInput | string[]
    createdAt?: Date | string
  }

  export type JobApplicationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    jobUrl?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resume?: ResumeUpdateOneWithoutJobApplicationNestedInput
    aiSuggestions?: AISuggestionUpdateManyWithoutJobApplicationNestedInput
    acceptedSuggestions?: AcceptedSuggestionUpdateManyWithoutJobApplicationNestedInput
    interviewPreps?: InterviewPrepUpdateManyWithoutJobApplicationNestedInput
  }

  export type JobApplicationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    jobUrl?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resume?: ResumeUncheckedUpdateOneWithoutJobApplicationNestedInput
    aiSuggestions?: AISuggestionUncheckedUpdateManyWithoutJobApplicationNestedInput
    acceptedSuggestions?: AcceptedSuggestionUncheckedUpdateManyWithoutJobApplicationNestedInput
    interviewPreps?: InterviewPrepUncheckedUpdateManyWithoutJobApplicationNestedInput
  }

  export type JobApplicationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    jobUrl?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewQuestionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    keyPoints?: InterviewQuestionUpdatekeyPointsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interviewPrep?: InterviewPrepUpdateOneWithoutQuestionsNestedInput
  }

  export type InterviewQuestionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    interviewPrepId?: NullableStringFieldUpdateOperationsInput | string | null
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    keyPoints?: InterviewQuestionUpdatekeyPointsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewQuestionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    interviewPrepId?: NullableStringFieldUpdateOperationsInput | string | null
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    keyPoints?: InterviewQuestionUpdatekeyPointsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AISuggestionCreateManyJobApplicationInput = {
    id?: string
    originalText: string
    suggestedText: string
    type: string
    status?: string
    explanation: string
    createdAt?: Date | string
  }

  export type AcceptedSuggestionCreateManyJobApplicationInput = {
    id?: string
    originalText: string
    suggestedText: string
    createdAt?: Date | string
  }

  export type InterviewPrepCreateManyJobApplicationInput = {
    id?: string
    createdAt?: Date | string
  }

  export type AISuggestionUpdateWithoutJobApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalText?: StringFieldUpdateOperationsInput | string
    suggestedText?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AISuggestionUncheckedUpdateWithoutJobApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalText?: StringFieldUpdateOperationsInput | string
    suggestedText?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AISuggestionUncheckedUpdateManyWithoutJobApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalText?: StringFieldUpdateOperationsInput | string
    suggestedText?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcceptedSuggestionUpdateWithoutJobApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalText?: StringFieldUpdateOperationsInput | string
    suggestedText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcceptedSuggestionUncheckedUpdateWithoutJobApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalText?: StringFieldUpdateOperationsInput | string
    suggestedText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcceptedSuggestionUncheckedUpdateManyWithoutJobApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalText?: StringFieldUpdateOperationsInput | string
    suggestedText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewPrepUpdateWithoutJobApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: InterviewQuestionUpdateManyWithoutInterviewPrepNestedInput
  }

  export type InterviewPrepUncheckedUpdateWithoutJobApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: InterviewQuestionUncheckedUpdateManyWithoutInterviewPrepNestedInput
  }

  export type InterviewPrepUncheckedUpdateManyWithoutJobApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewQuestionCreateManyInterviewPrepInput = {
    id?: string
    userId: string
    question: string
    answer: string
    topic: string
    keyPoints?: InterviewQuestionCreatekeyPointsInput | string[]
    createdAt?: Date | string
  }

  export type InterviewQuestionUpdateWithoutInterviewPrepInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    keyPoints?: InterviewQuestionUpdatekeyPointsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutInterviewQuestionsNestedInput
  }

  export type InterviewQuestionUncheckedUpdateWithoutInterviewPrepInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    keyPoints?: InterviewQuestionUpdatekeyPointsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewQuestionUncheckedUpdateManyWithoutInterviewPrepInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    keyPoints?: InterviewQuestionUpdatekeyPointsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}