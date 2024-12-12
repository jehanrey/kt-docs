type ChildrenOrLink =
  | {
      children: Array<NavigationItem>
      path: string
      route?: string
      url?: never
    }
  | {
      children?: never
      path?: string
      route: string
      url?: never
    }
  | {
      children?: never
      path?: never
      route?: never
      url: string
    }

export type NavigationItem = {
  display: string
  alias?: string
  icon?: string
} & ChildrenOrLink
