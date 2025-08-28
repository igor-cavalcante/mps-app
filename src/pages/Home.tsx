import { useState } from "react"
import { BookOpen, Users, Star, Play, Clock, Menu, X, ChevronRight, CheckCircle } from "lucide-react"

export default function Homepage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const featuredCourses = [
    {
      id: 1,
      title: "React Completo: Do Zero ao Avançado",
      instructor: "João Silva",
      rating: 4.8,
      students: 12500,
      duration: "40h",
      price: "R$ 199,90",
      originalPrice: "R$ 299,90",
      image: "/placeholder.svg?height=200&width=300",
      category: "Desenvolvimento Web",
    },
    {
      id: 2,
      title: "Python para Data Science",
      instructor: "Maria Santos",
      rating: 4.9,
      students: 8900,
      duration: "35h",
      price: "R$ 179,90",
      originalPrice: "R$ 249,90",
      image: "/placeholder.svg?height=200&width=300",
      category: "Data Science",
    },
    {
      id: 3,
      title: "UI/UX Design Moderno",
      instructor: "Carlos Oliveira",
      rating: 4.7,
      students: 6700,
      duration: "28h",
      price: "R$ 159,90",
      originalPrice: "R$ 219,90",
      image: "/placeholder.svg?height=200&width=300",
      category: "Design",
    },
  ]

  const categories = [
    { name: "Desenvolvimento Web", courses: 120, icon: "💻" },
    { name: "Data Science", courses: 85, icon: "📊" },
    { name: "Design", courses: 95, icon: "🎨" },
    { name: "Marketing Digital", courses: 70, icon: "📱" },
    { name: "Negócios", courses: 60, icon: "💼" },
    { name: "Idiomas", courses: 45, icon: "🌍" },
  ]

  const testimonials = [
    {
      name: "Ana Costa",
      role: "Desenvolvedora Frontend",
      content:
        "Os cursos me ajudaram a conseguir minha primeira vaga como desenvolvedora. O conteúdo é excelente e os instrutores são muito didáticos!",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
    },
    {
      name: "Pedro Almeida",
      role: "Data Analyst",
      content:
        "Plataforma incrível! Consegui fazer a transição de carreira para Data Science graças aos cursos de qualidade oferecidos aqui.",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
    },
    {
      name: "Lucia Ferreira",
      role: "UX Designer",
      content:
        "Recomendo para todos que querem aprender algo novo. Os projetos práticos fazem toda a diferença no aprendizado.",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img src="/logo.png" className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">MPS</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                Cursos
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                Categorias
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                Sobre
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                Contato
              </a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <button className="text-gray-700 hover:text-blue-600 font-medium">
                <a href="/login" className="font-medium">
                  Entrar
                </a>
                </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  <a href="/register" className="font-medium">
                Cadastrar
              </a>
              </button>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                  Cursos
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                  Categorias
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                  Sobre
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                  Contato
                </a>
                <div className="flex flex-col space-y-2 pt-4 border-t">
                  <button className="text-gray-700 hover:text-blue-600 font-medium text-left">Entrar</button>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Cadastrar
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Aprenda com os
                <span className="text-yellow-300"> melhores</span> instrutores
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Mais de 1000 cursos online para impulsionar sua carreira. Aprenda no seu ritmo, onde e quando quiser.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors flex items-center justify-center">
                  <Play className="h-5 w-5 mr-2" />
                  Começar Agora
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Ver Cursos Gratuitos
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Estudante online"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="font-semibold">50.000+ alunos satisfeitos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600">Cursos Disponíveis</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">50k+</div>
              <div className="text-gray-600">Alunos Ativos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-gray-600">Instrutores Expert</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">4.8★</div>
              <div className="text-gray-600">Avaliação Média</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cursos em Destaque</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Descubra os cursos mais populares e bem avaliados da nossa plataforma
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {course.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">Por {course.instructor}</p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="ml-1">{course.rating}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4" />
                        <span className="ml-1">{course.students.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4" />
                        <span className="ml-1">{course.duration}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-blue-600">{course.price}</span>
                      <span className="text-gray-400 line-through">{course.originalPrice}</span>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Ver Curso
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gray-100 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors inline-flex items-center">
              Ver Todos os Cursos
              <ChevronRight className="h-5 w-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Explore por Categoria</h2>
            <p className="text-xl text-gray-600">Encontre o curso perfeito para seus objetivos</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-500 text-sm">{category.courses} cursos</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">O que nossos alunos dizem</h2>
            <p className="text-xl text-gray-600">Histórias reais de transformação e sucesso</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para começar sua jornada de aprendizado?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Junte-se a milhares de alunos que já transformaram suas carreiras
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
              Começar Gratuitamente
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Ver Planos Premium
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <BookOpen className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-xl font-bold">EduPlatform</span>
              </div>
              <p className="text-gray-400 mb-4">A melhor plataforma de cursos online para impulsionar sua carreira.</p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Cursos</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Desenvolvimento Web
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Data Science
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Design
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Marketing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Carreiras
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Suporte</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Central de Ajuda
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Termos de Uso
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EduPlatform. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
