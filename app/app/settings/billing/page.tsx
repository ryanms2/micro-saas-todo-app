import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

export default async function Page() {
  return (
    <Card>
      <CardHeader className="border-b border-border">
        <CardTitle>Uso do Plano</CardTitle>
        <CardDescription>
          Veja o uso atual do seu plano e limites.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-2">
          <header className="flex items-center justify-between">
            <span className="text-muted-foreground text-sm">1/5</span>
            <span className="text-muted-foreground text-sm">20%</span>
          </header>
          <main>
            <Progress value={20} />
          </main>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t pt-6">
        <span>Para maior limite assine o PRO</span>
        <Button>Upgrade to PRO</Button>
      </CardFooter>
    </Card>
  )
}