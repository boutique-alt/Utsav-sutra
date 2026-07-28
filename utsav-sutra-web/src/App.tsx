import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QuoteProvider } from './context/QuoteContext'
import { Layout } from './components/layout/Layout'
import { Home } from './pages/Home'
import { Services } from './pages/Services'
import { Gallery } from './pages/Gallery'
import { Testimonials } from './pages/Testimonials'
import { BookUs } from './pages/BookUs'
import { NotFound } from './pages/NotFound'

export default function App() {
  return (
    <QuoteProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="testimonials" element={<Testimonials />} />
            <Route path="book-us" element={<BookUs />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QuoteProvider>
  )
}
