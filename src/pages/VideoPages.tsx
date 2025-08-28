"use client"

import { useState } from "react"
import {
  BookOpen,
  ThumbsUp,
  ThumbsDown,
  Share2,
  Download,
  MoreHorizontal,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Settings,
  Users,
  Star,
  Clock,
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  CheckCircle,
  PlayCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Slider } from "@/components/ui/slider"

export default function VideoPages() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [showDescription, setShowDescription] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const currentVideo = {
    title: "Módulo 1 – Introdução e Preparação",
    instructor: "Thiago Medeiros",
    subscribers: "20",
    views: "20",
    uploadDate: "há 3 dias",
    likes: "20",
    duration: "36:15",
    description: `Bem-vindos ao curso completo de criação de sites com WordPress! Neste primeiro módulo, vamos estabelecer as bases fundamentais para sua jornada.

📚 Conteúdo desta aula (36 min):
• 00:00 - Apresentação do curso e do instrutor
• 03:45 - Por que ter um site é essencial para seu negócio
• 08:20 - Exemplos reais de sites de sucesso
• 15:30 - O que é WordPress e suas vantagens
• 22:10 - Criando sua conta no WordPress.com
• 28:45 - Preparando o ambiente de trabalho
• 33:20 - Próximos passos e cronograma

🎯 O que você vai aprender:
• Fundamentos do WordPress
• Como escolher hospedagem e domínio
• Planejamento de sites profissionais
• Melhores práticas de design

💼 Sobre o instrutor:
Carlos Mendes é desenvolvedor web há mais de 10 anos, especialista em WordPress com mais de 500 sites criados. Já treinou mais de 25.000 alunos em desenvolvimento web e marketing digital.

🔗 Recursos extras:
• Material de apoio em PDF
• Templates exclusivos
• Grupo privado no Telegram
• Suporte direto com o instrutor`,
    category: "Desenvolvimento Web",
  }

  const courseModules = [
    {
      id: 1,
      title: "Módulo 1 – Introdução e Preparação",
      duration: "36:15",
      completed: true,
      current: true,
      thumbnail: "/modulos/modulo_1.png",
    },
    {
      id: 2,
      title: "Módulo 2 – Hospedagem e Domínio",
      duration: "28:30",
      completed: false,
      current: false,
      thumbnail: "/modulos/modulo_2.png",
    },
    {
      id: 3,
      title: "Módulo 3 – Instalação do WordPress",
      duration: "22:45",
      completed: false,
      current: false,
      thumbnail: "/modulos/modulo_3.png",
    },
    {
      id: 4,
      title: "Módulo 4 – Temas e Personalização",
      duration: "45:20",
      completed: false,
      current: false,
      thumbnail: "/modulos/modulo_4.png",
    },
    {
      id: 5,
      title: "Módulo 5 – Plugins Essenciais",
      duration: "38:10",
      completed: false,
      current: false,
      thumbnail: "/modulos/modulo_5.png",
    },
    {
      id: 6,
      title: "Módulo 6 – SEO e Otimização",
      duration: "41:25",
      completed: false,
      current: false,
      thumbnail: "/modulos/modulo_6.png",
    },
  ]

  const comments = [
    {
      id: 1,
      author: "Marina Silva",
      content:
        "Excelente introdução! Já estou animada para criar meu primeiro site. A explicação sobre os benefícios foi muito esclarecedora!",
      likes: 67,
      replies: 5,
      time: "há 1 dia",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      author: "Roberto Oliveira",
      content:
        " Muito obrigado por este curso! Finalmente vou tirar minha ideia do papel e criar o site da minha empresa.",
      likes: 43,
      replies: 2,
      time: "há 2 dias",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      author: "Ana Beatriz",
      content: "Quando sai o próximo módulo? Estou ansiosa para aprender sobre hospedagem! 🚀",
      likes: 28,
      replies: 8,
      time: "há 1 dia",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
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
                Meus Cursos
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                Certificados
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                Suporte
              </a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">João Silva</p>
                  <p className="text-xs text-gray-500">Aluno </p>
                </div>
                <Avatar className="h-10 w-10 cursor-pointer hover:ring-2 hover:ring-blue-500 transition-all">
                  <AvatarImage src="/images/usuario-joao.jpg" />
                  <AvatarFallback className="bg-blue-600 text-white font-semibold">JS</AvatarFallback>
                </Avatar>
              </div>
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
                  Meus Cursos
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                  Certificados
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                  Suporte
                </a>
                <div className="flex flex-col space-y-2 pt-4 border-t">
                  <div className="flex items-center space-x-3 py-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/images/usuario-joao.jpg" />
                      <AvatarFallback className="bg-blue-600 text-white text-sm">JS</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium text-gray-900">João Silva</p>
                      <p className="text-xs text-gray-500">Aluno Premium</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Video Player and Info */}
          <div className="lg:col-span-2 space-y-4">
            {/* Video Player */}
            <div className="relative bg-black rounded-lg overflow-hidden aspect-video">
              <video className="w-full h-full object-cover" poster="/modulos/modulo_1.png" autoPlay={isPlaying} muted={isMuted} controls={false}>
                <source
                  src="https://mps-pull.b-cdn.net/Grava%C3%A7%C3%A3o%20de%20tela%20de%2008-08-2025%2008%3A35%3A14.webm"
                  type="video/mp4"
                
                />
              </video>

              {/* Video Controls */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  {/* Progress Bar */}
                  <div className="mb-4">
                    <Slider
                      defaultValue={[35]}
                      max={100}
                      step={1}
                      className="w-full [&>span:first-child]:h-1 [&>span:first-child]:bg-white/30 [&_[role=slider]]:bg-blue-500 [&_[role=slider]]:w-3 [&_[role=slider]]:h-3 [&_[role=slider]]:border-0 [&>span:first-child_span]:bg-blue-500"
                    />
                  </div>

                  {/* Controls */}
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center space-x-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="text-white hover:bg-white/20"
                      >
                        {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                      </Button>

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setIsMuted(!isMuted)}
                        className="text-white hover:bg-white/20"
                      >
                        {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                      </Button>

                      <span className="text-sm">12:35 / {currentVideo.duration}</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                        <Settings className="h-5 w-5" />
                      </Button>

                      <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                        <Maximize className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Info */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
                  {currentVideo.category}
                </span>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">{currentVideo.title}</h1>
                <div className="flex items-center text-gray-600 text-sm space-x-4">
                  <span>{currentVideo.views} visualizações</span>
                  <span>•</span>
                  <span>{currentVideo.uploadDate}</span>
                  <span>•</span>
                  <span>{currentVideo.duration}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                    <ThumbsUp className="h-4 w-4" />
                    <span>{currentVideo.likes}</span>
                  </Button>
                  <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                    <ThumbsDown className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                    <Share2 className="h-4 w-4" />
                    <span>Compartilhar</span>
                  </Button>
                  <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                    <Download className="h-4 w-4" />
                    <span>Material</span>
                  </Button>
                </div>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>

              {/* Instructor Info */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/images/instrutor-carlos.jpg" />
                    <AvatarFallback>CM</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-gray-900">{currentVideo.instructor}</h3>
                    <p className="text-gray-600 text-sm">{currentVideo.subscribers} inscritos</p>
                    <div className="flex items-center mt-1">
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        ✓ Especialista WordPress
                      </span>
                    </div>
                  </div>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">Seguir Instrutor</Button>
              </div>

              {/* Description */}
              <div className="border-t pt-4">
                <Button
                  variant="ghost"
                  onClick={() => setShowDescription(!showDescription)}
                  className="flex items-center space-x-2 mb-3 p-0 h-auto font-semibold text-gray-900"
                >
                  <span>Descrição do Módulo</span>
                  {showDescription ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </Button>

                {showDescription && (
                  <div className="text-gray-700 whitespace-pre-line text-sm leading-relaxed">
                    {currentVideo.description}
                  </div>
                )}
              </div>
            </div>

            {/* Comments Section */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">{comments.length} comentários</h3>

              {/* Add Comment */}
              <div className="flex space-x-4 mb-8">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback>EU</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <textarea
                    placeholder="Compartilhe sua dúvida ou experiência..."
                    className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows={3}
                  />
                  <div className="flex justify-end space-x-2 mt-2">
                    <Button variant="ghost" size="sm">
                      Cancelar
                    </Button>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Comentar
                    </Button>
                  </div>
                </div>
              </div>

              {/* Comments List */}
              <div className="space-y-6">
                {comments.map((comment) => (
                  <div key={comment.id} className="flex space-x-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={comment.avatar || "/placeholder.svg"} />
                      <AvatarFallback>{comment.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-semibold text-gray-900 text-sm">{comment.author}</span>
                        <span className="text-gray-500 text-xs">{comment.time}</span>
                      </div>
                      <p className="text-gray-700 text-sm mb-2">{comment.content}</p>
                      <div className="flex items-center space-x-4">
                        <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900 p-0 h-auto">
                          <ThumbsUp className="h-4 w-4 mr-1" />
                          {comment.likes}
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900 p-0 h-auto">
                          <ThumbsDown className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900 p-0 h-auto">
                          Responder
                        </Button>
                      </div>
                      {comment.replies > 0 && (
                        <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 mt-2 p-0 h-auto">
                          Ver {comment.replies} resposta{comment.replies > 1 ? "s" : ""}
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Course Modules */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Módulos do Curso</h3>

            <div className="space-y-3">
              {courseModules.map((module) => (
                <div
                  key={module.id}
                  className={`bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer border-l-4 ${
                    module.current
                      ? "border-blue-500 bg-blue-50"
                      : module.completed
                        ? "border-green-500"
                        : "border-gray-200"
                  }`}
                >
                  <div className="flex space-x-3">
                    <div className="relative flex-shrink-0">
                      <img
                        src={module.thumbnail || "/placeholder.svg"}
                        alt={module.title}
                        className="w-24 h-16 object-cover rounded-lg"
                      />
                      <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 py-0.5 rounded">
                        {module.duration}
                      </div>
                      {module.completed && (
                        <div className="absolute top-1 left-1 bg-green-500 rounded-full p-1">
                          <CheckCircle className="h-3 w-3 text-white" />
                        </div>
                      )}
                      {module.current && (
                        <div className="absolute top-1 left-1 bg-blue-500 rounded-full p-1">
                          <PlayCircle className="h-3 w-3 text-white" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4
                        className={`font-medium text-sm line-clamp-2 mb-1 ${
                          module.current ? "text-blue-700" : "text-gray-900"
                        }`}
                      >
                        {module.title}
                      </h4>
                      <div className="flex items-center text-gray-500 text-xs space-x-2">
                        <Clock className="h-3 w-3" />
                        <span>{module.duration}</span>
                        {module.completed && (
                          <>
                            <span>•</span>
                            <span className="text-green-600">Concluído</span>
                          </>
                        )}
                        {module.current && (
                          <>
                            <span>•</span>
                            <span className="text-blue-600">Assistindo</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-4">Seu Progresso</h4>
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>1 de 6 módulos</span>
                  <span>17%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: "17%" }}></div>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                <p className="mb-2">🎯 Próximo: Módulo 2 - Hospedagem e Domínio</p>
                <p>⏱️ Tempo estimado: 28 min</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
