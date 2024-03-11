import { cn } from '@/lib/utils'

export type DashboardGenericProps<T = unknown> = {
  children: React.ReactNode
  className?: string
} & T

export function Dashboard({ children, className }: DashboardGenericProps) {
  return <section className={cn(['h-screen', className])}>{children}</section>
}

export function DashboardHeader({
  children,
  className,
}: DashboardGenericProps) {
  return (
    <header className={cn(['px-6 py-3 border-b border-border', className])}>
      {children}
    </header>
  )
}

export function DashboardHeaderTitle({
  children,
  className,
}: DashboardGenericProps) {
  return (
    <span
      className={cn(['text-sm text-muted-foreground uppercase', className])}
    >
      {children}
    </span>
  )
}

export function DashboardHeaderNav({
  children,
  className,
}: DashboardGenericProps) {
  return <nav className={cn(['', className])}>{children}</nav>
}

export function DashboardMain({ children, className }: DashboardGenericProps) {
  return <main className={cn(['p-6', className])}>{children}</main>
}
