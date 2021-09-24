import { RuleSetRule, RuleSetUseItem } from 'webpack';

import { Config, Paths } from '@configs';

export type Rule = (arg?: { paths?: Paths; config?: Config }) => RuleSetRule
export type Rules = (arg?: { paths?: Paths; config?: Config }) => RuleSetRule[]
export type UseItems = (arg?: { paths?: Paths; config?: Config; options? }) => RuleSetUseItem[]
