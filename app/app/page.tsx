import {
  Dashboard,
  DashboardHeader,
  DashboardHeaderTitle,
  DashboardMain,
} from '@/components/dashboard/page'

export default async function Page() {
  return (
    <Dashboard>
      <DashboardHeader>
        <DashboardHeaderTitle>Tarefas</DashboardHeaderTitle>
      </DashboardHeader>
      <DashboardMain>
        <h1>tarefas</h1>
      </DashboardMain>
    </Dashboard>
  )
}
