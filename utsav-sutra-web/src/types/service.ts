export type ServiceCategory =
  | 'planning'
  | 'decor'
  | 'bridal'
  | 'photography'
  | 'events'
  | 'catering'
  | 'transport'
  | 'essentials'

export interface Service {
  id: string
  title: string
  shortDescription: string
  description: string
  icon: string
  category: ServiceCategory
  features: string[]
  gradient: string
}
