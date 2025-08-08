import { useState } from "react"
import { BookOpen, ThumbsUp, ThumbsDown, Share2, Download, MoreHorizontal, Play, Pause, Volume2, VolumeX, Maximize, Settings, Users, Star, Clock, ChevronDown, ChevronUp, Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Slider } from "@/components/ui/slider"

export default function VideoPages() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [showDescription, setShowDescription] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const currentVideo = {
    title: "React Completo: Hooks e Context API - Aula 15",
    instructor: "João Silva",
    subscribers: "125K",
    views: "45.2K",
    uploadDate: "há 2 dias",
    likes: "2.1K",
    description: `Nesta aula vamos aprender sobre os Hooks mais avançados do React, incluindo useContext, useReducer e custom hooks. 

📚 Conteúdo da aula:
• 00:00 - Introdução
• 02:30 - useContext na prática
• 08:15 - useReducer vs useState
• 15:20 - Criando custom hooks
• 22:45 - Exercício prático

🔗 Links úteis:
• Código da aula: github.com/joaosilva/react-hooks
• Documentação oficial: reactjs.org
• Próxima aula: Context API avançado

👨‍💻 Sobre o instrutor:
João Silva é desenvolvedor sênior com mais de 8 anos de experiência em React e JavaScript. Já treinou mais de 50.000 alunos em desenvolvimento web.`,
    category: "Desenvolvimento Web"
  }

  const recommendedVideos = [
    {
      id: 1,
      title: "React Context API - Tutorial Completo",
      instructor: "João Silva",
      views: "32K",
      duration: "18:45",
      uploadDate: "há 1 semana",
      thumbnail: "/placeholder.svg?height=120&width=200"
    },
    {
      id: 2,
      title: "Custom Hooks no React - Guia Prático",
      instructor: "Maria Santos",
      views: "28K",
      duration: "22:30",
      uploadDate: "há 3 dias",
      thumbnail: "/placeholder.svg?height=120&width=200"
    },
    {
      id: 3,
      title: "useReducer vs useState - Quando usar?",
      instructor: "Carlos Oliveira",
      views: "19K",
      duration: "15:20",
      uploadDate: "há 5 dias",
      thumbnail: "/placeholder.svg?height=120&width=200"
    },
    {
      id: 4,
      title: "React Performance - Otimização Avançada",
      instructor: "Ana Costa",
      views: "41K",
      duration: "35:15",
      uploadDate: "há 1 semana",
      thumbnail: "/placeholder.svg?height=120&width=200"
    },
    {
      id: 5,
      title: "Next.js 13 - App Router Completo",
      instructor: "Pedro Almeida",
      views: "67K",
      duration: "42:10",
      uploadDate: "há 2 semanas",
      thumbnail: "/placeholder.svg?height=120&width=200"
    }
  ]

  const comments = [
    {
      id: 1,
      author: "Lucas Mendes",
      content: "Excelente aula! Finalmente entendi como usar o useContext corretamente. Obrigado João!",
      likes: 45,
      replies: 3,
      time: "há 1 dia",
      avatar: "/placeholder.svg?height=40&width=40"
    },
    {
      id: 2,
      author: "Fernanda Lima",
      content: "Muito didático! Estou acompanhando todo o curso e está sendo fundamental para minha carreira.",
      likes: 32,
      replies: 1,
      time: "há 2 dias",
      avatar: "/placeholder.svg?height=40&width=40"
    },
    {
      id: 3,
      author: "Rafael Santos",
      content: "Quando vai sair a próxima aula sobre Context API avançado? Ansioso para continuar!",
      likes: 18,
      replies: 5,
      time: "há 1 dia",
      avatar: "/placeholder.svg?height=40&width=40"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">EduPlatform</span>
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
              <button className="text-gray-700 hover:text-blue-600 font-medium">Entrar</button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Cadastrar
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Video Player and Info */}
          <div className="lg:col-span-2 space-y-4">
            {/* Video Player */}
            <div className="relative bg-black rounded-lg overflow-hidden aspect-video">
              <video 
              
                className="w-full h-full object-cover"
                poster="/placeholder.svg?height=480&width=854&text=React+Hooks+Tutorial"
              >
                { <source src="https://mps-pull.b-cdn.net/Grava%C3%A7%C3%A3o%20de%20tela%20de%2008-08-2025%2008%3A35%3A14.webm" type="video/mp4" /> }
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
                      
                      <span className="text-sm">12:35 / 28:45</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-white hover:bg-white/20"
                      >
                        <Settings className="h-5 w-5" />
                      </Button>
                      
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-white hover:bg-white/20"
                      >
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
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  {currentVideo.title}
                </h1>
                <div className="flex items-center text-gray-600 text-sm space-x-4">
                  <span>{currentVideo.views} visualizações</span>
                  <span>•</span>
                  <span>{currentVideo.uploadDate}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <Button variant="outline" className="flex items-center space-x-2">
                    <ThumbsUp className="h-4 w-4" />
                    <span>{currentVideo.likes}</span>
                  </Button>
                  <Button variant="outline" className="flex items-center space-x-2">
                    <ThumbsDown className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="flex items-center space-x-2">
                    <Share2 className="h-4 w-4" />
                    <span>Compartilhar</span>
                  </Button>
                  <Button variant="outline" className="flex items-center space-x-2">
                    <Download className="h-4 w-4" />
                    <span>Download</span>
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
                    <AvatarImage src="/placeholder.svg?height=48&width=48" />
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-gray-900">{currentVideo.instructor}</h3>
                    <p className="text-gray-600 text-sm">{currentVideo.subscribers} inscritos</p>
                  </div>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Inscrever-se
                </Button>
              </div>

              {/* Description */}
              <div className="border-t pt-4">
                <Button
                  variant="ghost"
                  onClick={() => setShowDescription(!showDescription)}
                  className="flex items-center space-x-2 mb-3 p-0 h-auto font-semibold text-gray-900"
                >
                  <span>Descrição</span>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                {comments.length} comentários
              </h3>
              
              {/* Add Comment */}
              <div className="flex space-x-4 mb-8">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback>EU</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <textarea
                    placeholder="Adicione um comentário..."
                    className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows={3}
                  />
                  <div className="flex justify-end space-x-2 mt-2">
                    <Button variant="ghost" size="sm">Cancelar</Button>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">Comentar</Button>
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
                          Ver {comment.replies} resposta{comment.replies > 1 ? 's' : ''}
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Recommended Videos */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Vídeos Recomendados</h3>
            
            <div className="space-y-4">
              {recommendedVideos.map((video) => (
                <div key={video.id} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex space-x-3">
                    <div className="relative flex-shrink-0">
                      <img
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        className="w-32 h-20 object-cover rounded-lg"
                      />
                      <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 py-0.5 rounded">
                        {video.duration}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 text-sm line-clamp-2 mb-1">
                        {video.title}
                      </h4>
                      <p className="text-gray-600 text-xs mb-1">{video.instructor}</p>
                      <div className="flex items-center text-gray-500 text-xs space-x-1">
                        <span>{video.views} visualizações</span>
                        <span>•</span>
                        <span>{video.uploadDate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Course Info Card */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-lg p-6">
              <h4 className="font-bold text-lg mb-2">Curso Completo</h4>
              <p className="text-blue-100 text-sm mb-4">
                Acesse todas as 50 aulas deste curso e obtenha seu certificado
              </p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    <span>4.8</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    <span>12.5K</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>40h</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-2xl font-bold">R$ 199,90</span>
                  <span className="text-blue-200 line-through ml-2 text-sm">R$ 299,90</span>
                </div>
              </div>
              <Button className="w-full bg-yellow-400 text-gray-900 hover:bg-yellow-300 font-semibold">
                Matricular-se Agora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
