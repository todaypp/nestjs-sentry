import { ConsoleLogger } from '@nestjs/common';
import * as Sentry from '@sentry/node';
import { OnApplicationShutdown } from '@nestjs/common';
import { SentryModuleOptions } from './sentry.interfaces';
export declare class SentryService extends ConsoleLogger implements OnApplicationShutdown {
    readonly opts?: SentryModuleOptions | undefined;
    app: string;
    private static serviceInstance;
    constructor(opts?: SentryModuleOptions | undefined);
    static SentryServiceInstance(): SentryService;
    log(message: string, context?: string): void;
    error(message: string, trace?: string, context?: string): void;
    warn(message: string, context?: string): void;
    debug(message: string, context?: string): void;
    verbose(message: string, context?: string): void;
    instance(): typeof Sentry;
    onApplicationShutdown(signal?: string): Promise<void>;
}
