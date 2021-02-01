import { MessageService } from './messages.service';
import { LanguageService } from './languages.service';
import { LabelService } from './labels.service';

export const services: any[] = [LanguageService, LabelService, MessageService];

export * from './languages.service';
export * from './labels.service';
export * from './messages.service';
