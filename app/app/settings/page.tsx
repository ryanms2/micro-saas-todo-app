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
        <DashboardHeaderTitle>Configurações</DashboardHeaderTitle>
      </DashboardHeader>
      <DashboardMain>
        <h1>configurações</h1>
      </DashboardMain>
    </Dashboard>
  )
}
