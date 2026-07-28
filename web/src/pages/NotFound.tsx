import { Button } from '../components/shared/Button'

export function NotFound() {
  return (
    <section className="section-pad bg-background text-center">
      <div className="container-page">
        <h1 className="font-display text-5xl text-primary">404</h1>
        <p className="mt-4 text-text-muted">This page could not be found.</p>
        <Button to="/" className="mt-8">
          Back to Home
        </Button>
      </div>
    </section>
  )
}
