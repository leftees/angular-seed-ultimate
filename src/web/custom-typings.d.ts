declare module '*';

declare var ENV: string;
declare var HMR: boolean;
declare var System: ISystemJS;

interface ISystemJS {
  import: (path?: string) => Promise<any>;
}

interface IGlobalEnvironment {
  ENV: string;
  HMR: boolean;
  SystemJS: ISystemJS;
  System: ISystemJS;
}

interface IEs6PromiseLoader {
  (id: string): (exportName?: string) => Promise<any>;
}

type FactoryEs6PromiseLoader = () => IEs6PromiseLoader;
type FactoryPromise = () => Promise<any>;

type AsyncRoutes = {
  [component: string]: IEs6PromiseLoader |
  Function |
  FactoryEs6PromiseLoader |
  FactoryPromise,
};

type IdleCallbacks = IEs6PromiseLoader |
  Function |
  FactoryEs6PromiseLoader |
  FactoryPromise;

interface IWebpackModule {
  hot: {
    data?: any,
    idle: any,
    accept(dependencies?: string | string[], callback?: (updatedDependencies?: any) => void): void;
    decline(deps?: any | string | string[]): void;
    dispose(callback?: (data?: any) => void): void;
    addDisposeHandler(callback?: (data?: any) => void): void;
    removeDisposeHandler(callback?: (data?: any) => void): void;
    check(autoApply?: any, callback?: (err?: Error, outdatedModules?: any[]) => void): void;
    apply(options?: any, callback?: (err?: Error, outdatedModules?: any[]) => void): void;
    status(callback?: (status?: string) => void): void | string;
    removeStatusHandler(callback?: (status?: string) => void): void;
  };
}

interface IWebpackRequire {
  (id: string): any;
  (paths: string[], callback: (...modules: any[]) => void): void;
  ensure(ids: string[], callback: (req: IWebpackRequire) => void, chunkName?: string): void;
  context(directory: string, useSubDirectories?: boolean, regExp?: RegExp): IWebpackContext;
}

interface IWebpackContext extends IWebpackRequire {
  keys(): string[];
}

interface IErrorStackTraceLimit {
  stackTraceLimit: number;
}

// Extend typings
interface INodeRequire extends IWebpackRequire { }
interface IErrorConstructor extends IErrorStackTraceLimit { }
interface INodeRequireFunction extends IEs6PromiseLoader { }
interface INodeModule extends IWebpackModule { }
interface IGlobal extends IGlobalEnvironment { }
