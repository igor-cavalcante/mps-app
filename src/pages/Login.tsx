"use client"

import type React from "react"
import { useState } from "react"
import axios from "axios"
import { Eye, EyeOff, Lock, Mail, AlertCircle } from "lucide-react";
import { GoogleLogin, type CredentialResponse } from '@react-oauth/google';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    if (error) setError("")
  }

  // Handler para o LOGIN LOCAL (com email e senha)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      // CORREÇÃO: Chama a rota de login local
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/login`, {
        email: formData.email,
        password: formData.password,
      })

      const { token } = response.data;
      localStorage.setItem("authToken", token);
      window.location.href = "/dashboard"; // Redireciona para a área logada

    } catch (err: any) {
      if (err.response?.data?.message) {
        setError(err.response.data.message)
      } else if (err.response?.status === 401 || err.response?.status === 404) {
        setError("Email ou senha incorretos.")
      } else {
        setError("Erro ao fazer login. Verifique a sua conexão.")
      }
    } finally {
      setLoading(false)
    }
  }

  // Handler para o LOGIN COM GOOGLE
  const handleGoogleLoginSuccess = async (credentialResponse: CredentialResponse) => {
    setLoading(true);
    setError("");

    if (!credentialResponse.credential) {
        setError("Não foi possível obter a credencial do Google.");
        setLoading(false);
        return;
    }

    try {
        // Chama a rota de LOGIN com Google
        const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/login/google`, {
            credential: credentialResponse.credential,
        });

        const { token } = res.data;
        localStorage.setItem('authToken', token);
        window.location.href = "/"; // Redireciona para a área logada

    } catch (err: any) {
        const message = err.response?.data?.message || "Falha no login com Google.";
        setError(message);
    } finally {
        setLoading(false);
    }
  };

  const isFormValid = formData.email && formData.password

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 bg-indigo-600 rounded-full flex items-center justify-center">
            <Lock className="h-6 w-6 text-white" />
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Faça o seu login</h2>
          <p className="mt-2 text-sm text-gray-600">Entre com as suas credenciais para aceder à sua conta</p>
        </div>
        
        <div className="px-6 sm:px-0 space-y-4">
            <div className="flex justify-center">
              <GoogleLogin
                  onSuccess={handleGoogleLoginSuccess}
                  onError={() => setError("Falha ao tentar login com Google.")}
                  theme="outline"
                  size="large"
                  text="signin_with"
                  shape="rectangular"
                  logo_alignment="left"
              />
            </div>
            <div className="relative flex items-center">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-4 text-gray-400 text-xs">OU</span>
                <div className="flex-grow border-t border-gray-300"></div>
            </div>
        </div>

        <form className="mt-2 space-y-6" onSubmit={handleSubmit}>
          <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-md p-3 flex items-center space-x-2">
                <AlertCircle className="h-4 w-4 text-red-500 flex-shrink-0" />
                <span className="text-sm text-red-700">{error}</span>
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Senha</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="A sua senha"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Lembrar de mim
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Esqueceu a senha?
                </a>
              </div>
            </div>

            <button
              type="submit"
              disabled={!isFormValid || loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                </div>
              ) : (
                "Entrar"
              )}
            </button>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Não tem uma conta?{" "}
              <a href="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                Cadastre-se aqui
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
