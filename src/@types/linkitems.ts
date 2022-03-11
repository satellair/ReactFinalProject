import type { Icon } from 'react-feather'

export interface LinkItem {
  icon?: Icon;
  link: string;
  label: string;
}

export type LinkItemList = readonly [Icon, string, string];