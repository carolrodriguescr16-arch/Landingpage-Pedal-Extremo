import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card.jsx'

import { 
  Phone, 
  MapPin, 
  Instagram, 
  Truck, 
  Wrench, 
  ShieldCheck, 
  Battery, 
  Settings, 
  Droplets, 
  Home,
  ChevronDown,
  MessageCircle,
  Star,
  X,
  ZoomIn
} from 'lucide-react'
import './App.css'
import heroImage from './assets/PedalExtremo-148.jpg'
import storeImage1 from './assets/WhatsAppImage2025-10-11at12.15.36(1).jpeg'
import storeImage2 from './assets/WhatsAppImage2025-10-11at12.15.36(2).jpeg'
import storeImage3 from './assets/WhatsAppImage2025-10-11at12.15.36(3).jpeg'
import storeImage4 from './assets/WhatsAppImage2025-10-11at12.15.36(4).jpeg'
import storeImage5 from './assets/WhatsAppImage2025-10-11at12.15.36(5).jpeg'
import storeImage6 from './assets/WhatsAppImage2025-10-11at12.15.36(6).jpeg'
import productS2 from './assets/scooter-s2.jpeg'
import productJ10 from './assets/scooter-j10.jpeg'
import productJet from './assets/scooter-jet.jpeg'
import productX12 from './assets/scooter-x12.jpeg'
import productWSD3 from './assets/triciclo-wsd3.jpeg'
import productH9 from './assets/bike-h9.jpeg'

function App() {
  const [openFaq, setOpenFaq] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)
  const [imageZoom, setImageZoom] = useState(1)

  const whatsappNumber = "5537999215260"
  const whatsappLink = `https://wa.me/${whatsappNumber}`
  const instagramLink = "https://www.instagram.com/pedalextremo.mobilidade"

  const handleWhatsAppClick = (productName = '') => {
    const message = productName 
      ? `Olá! Tenho interesse no ${productName}. Gostaria de mais informações!`
      : `Olá! Gostaria de saber mais sobre os veículos elétricos da Pedal Extremo!`
    window.open(`${whatsappLink}?text=${encodeURIComponent(message)}`, '_blank')
  }

  const handleInstagramClick = () => {
    // Tenta abrir o app do Instagram primeiro, se não conseguir abre no navegador
    const username = 'pedalextremo.mobilidade'
    const instagramAppLink = `instagram://user?username=${username}`
    const instagramWebLink = `https://www.instagram.com/${username}`
    
    // Tenta abrir o app
    window.location.href = instagramAppLink
    
    // Se não abrir em 1.5s, abre no navegador
    setTimeout(() => {
      window.open(instagramWebLink, '_blank')
    }, 1500)
  }

  const handleImageClick = (image) => {
    setSelectedImage(image)
    setImageZoom(1)
  }

  const handleCloseImage = () => {
    setSelectedImage(null)
    setImageZoom(1)
  }

  const handleZoomIn = () => {
    setImageZoom(prev => Math.min(prev + 0.5, 3))
  }

  const handleZoomOut = () => {
    setImageZoom(prev => Math.max(prev - 0.5, 1))
  }

  const products = [
    {
      name: "Scooter S2 1000W",
      category: "scooter",
      image: productS2,
      features: [
        "1000W de potência",
        "Bateria de lítio 60v 30ah",
        "Autonomia de 45 a 60km",
        "Velocidade máx. 32km/h",
        "Carga máxima 200kg",
        "Alarme antifurto"
      ],
      prices: {
        normal: "R$ 14.165,00",
        installment: "12x de R$ 1.127,16",
        cash: "R$ 12.000,00"
      }
    },
    {
      name: "Scooter J-10 800W",
      category: "scooter",
      image: productJ10,
      features: [
        "800W de potência",
        "Bateria de lítio 20ah removível",
        "Autonomia de até 55km",
        "Velocidade máx. 32km/h",
        "CX som com suporte p/ celular",
        "Alarme antifurto e cartão NFC"
      ],
      prices: {
        normal: "R$ 8.250,00",
        installment: "12x de R$ 656,85",
        cash: "R$ 6.990,00"
      }
    },
    {
      name: "Scooter Jet 1000W",
      category: "scooter",
      image: productJet,
      features: [
        "1000W de potência",
        "Bateria de lítio 60v 20ah",
        "Autonomia de até 50km",
        "Velocidade máxima 32km/h",
        "Carga máxima 150kg",
        "Alarme antifurto"
      ],
      prices: {
        normal: "R$ 13.590,00",
        installment: "12x de R$ 1.082,08",
        cash: "R$ 11.500,00"
      }
    },
    {
      name: "Scooter X12 1000W",
      category: "scooter",
      image: productX12,
      features: [
        "1000W de potência",
        "Bateria de lítio 60v 20ah",
        "Autonomia de até 60km",
        "Velocidade máx. 32km/h",
        "Carga máxima 150kg",
        "Alarme antifurto"
      ],
      prices: {
        normal: "R$ 13.590,00",
        installment: "12x de R$ 1.082,08",
        cash: "R$ 11.500,00"
      }
    },
    {
      name: "Triciclo WSD 1000W - 3 Lugares",
      category: "triciclo",
      image: productWSD3,
      features: [
        "1000W de potência",
        "Bateria de lítio 60v 35ah",
        "Autonomia de até 60km",
        "Velocidade máx. 32km/h",
        "Carga máxima 200kg",
        "Alarme antifurto"
      ],
      prices: {
        normal: "R$ 15.390,00",
        installment: "12x de R$ 1.225,33",
        cash: "R$ 12.990,00"
      }
    },
    {
      name: "Bike Elétrica H9 1000W",
      category: "bike",
      image: productH9,
      features: [
        "1000W de potência",
        "Bateria de lítio 48v 15ah",
        "Autonomia media 50km",
        "Velocidade máx. 32km/h",
        "5 níveis de velocidade",
        "Alarme antifurto + Cartão NFC"
      ],
      prices: {
        normal: "R$ 11.215,00",
        installment: "12x de R$ 892,91",
        cash: "R$ 9.500,00"
      }
    }
  ]

  const testimonials = [
    {
      name: "José Carlos, 68 anos",
      role: "Aposentado",
      text: "O triciclo mudou minha vida. Voltei a ter independência para ir ao mercado, passear na praça... A equipe da Pedal Extremo foi super atenciosa, me entregaram em casa e explicaram tudo direitinho. O pagamento na entrega me deu muita segurança.",
      rating: 5
    },
    {
      name: "Mariana Lima, 25 anos",
      role: "Estudante",
      text: "Minha scooter é tudo! Economizo muito com transporte e ainda chego rápido na faculdade, sem me preocupar com estacionamento. O atendimento pelo WhatsApp foi ótimo, tiraram todas as minhas dúvidas antes da compra.",
      rating: 5
    },
    {
      name: "Ricardo F., 42 anos",
      role: "Entregador",
      text: "Comprei a bike elétrica para trabalhar e foi o melhor investimento. A autonomia é excelente, aguento o dia todo. A oficina deles também é um diferencial, sei que tenho suporte se precisar. Recomendo demais!",
      rating: 5
    }
  ]

  const faqs = [
    {
      question: "Quais são as formas de pagamento?",
      answer: "Aceitamos Pix, dinheiro (com desconto especial à vista) e parcelamos em até 12x no cartão de crédito. E o melhor: você só paga na entrega!"
    },
    {
      question: "Preciso de CNH para pilotar?",
      answer: "A legislação varia. Nossos veículos se enquadram em diferentes categorias. Entre em contato e nossa equipe irá te orientar sobre o modelo ideal para você, explicando toda a documentação necessária para sua cidade."
    },
    {
      question: "Como funciona a garantia?",
      answer: "A garantia varia de acordo com cada produto e é coberta diretamente pela nossa loja. Entre em contato pelo WhatsApp para consultar as condições específicas do modelo que você deseja. Se tiver qualquer problema, basta trazer seu veículo em nossa oficina em Formiga-MG que nossa equipe especializada resolverá."
    },
    {
      question: "Vocês entregam na minha cidade?",
      answer: "Atendemos todo o estado de Minas Gerais com entrega e pagamento no ato. Também enviamos para diversas outras regiões do Brasil via transportadora. Consulte as condições para sua localidade!"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Otimizado para Mobile */}
      <section 
        className="relative min-h-screen flex items-center justify-center text-white px-4 py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto text-center z-10">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 animate-fade-in-up leading-tight">
            Sua Liberdade Elétrica Começa Agora.<br />
            <span className="text-green-400">Pague Só na Entrega.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-200 px-4">
            Chega de trânsito e gasolina. Descubra as melhores scooters, triciclos e bikes elétricas de Minas Gerais, 
            receba em casa com segurança e pague somente quando o seu veículo chegar.
          </p>
          <Button 
            size="lg" 
            className="bg-green-500 hover:bg-green-600 text-white text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 animate-fade-in-up animation-delay-400 w-full sm:w-auto"
            onClick={() => handleWhatsAppClick()}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Quero Meu Veículo Elétrico Agora
          </Button>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
        </div>
      </section>

      {/* Diferenciais Section - Otimizado para Mobile */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-2">
              Por que a Pedal Extremo é a sua melhor escolha?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Nós não vendemos apenas veículos elétricos. Oferecemos a tranquilidade e o suporte que você merece em cada etapa da sua jornada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="text-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto bg-green-100 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                  <Truck className="h-8 w-8 sm:h-10 sm:w-10 text-green-600" />
                </div>
                <CardTitle className="text-xl sm:text-2xl px-2">Pague Só na Entrega</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-gray-600 px-2">
                  Sua confiança é nossa prioridade. Escolha seu modelo, agende a entrega e pague apenas quando receber 
                  seu veículo elétrico em perfeitas condições na sua casa. Risco zero para você.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto bg-blue-100 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                  <Wrench className="h-8 w-8 sm:h-10 sm:w-10 text-blue-600" />
                </div>
                <CardTitle className="text-xl sm:text-2xl px-2">Oficina Própria e Especializada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-gray-600 px-2">
                  Fique tranquilo com nosso suporte técnico completo. Temos uma oficina própria com mecânicos especializados 
                  em veículos elétricos para garantir revisões, manutenções e qualquer reparo que você precisar.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto bg-purple-100 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                  <ShieldCheck className="h-8 w-8 sm:h-10 sm:w-10 text-purple-600" />
                </div>
                <CardTitle className="text-xl sm:text-2xl px-2">Garantia Real e Suporte Próximo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-gray-600 px-2">
                  Oferecemos garantia de verdade, direto da nossa loja em Formiga-MG. Sem intermediários ou dores de cabeça. 
                  Qualquer problema, você sabe exatamente com quem falar.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Otimizado para Mobile */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-2">
              Quem Compra, Recomenda.
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 px-4">
              Veja o que nossos clientes estão dizendo sobre a experiência de ter um veículo da Pedal Extremo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-base sm:text-lg">{testimonial.name}</CardTitle>
                  <CardDescription className="text-sm">{testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-gray-600 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Store Gallery Section - Otimizado para Mobile */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-2">
              Um Espaço Completo e Confiável para Você
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Visite nossa loja em Formiga-MG ou sinta-se em casa com nosso tour virtual. 
              Aqui você encontra os melhores produtos, atendimento especializado e uma estrutura de pós-venda de verdade.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {[storeImage1, storeImage2, storeImage3, storeImage4, storeImage5, storeImage6].map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                <img src={image} alt={`Loja Pedal Extremo ${index + 1}`} className="w-full h-48 sm:h-56 md:h-64 object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section - Otimizado para Mobile com Imagens Clicáveis */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-2">
              Encontre o Veículo Elétrico Perfeito para Você
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-3 sm:mb-4 px-4">
              Seja para trabalho, lazer ou para o dia a dia, temos o modelo ideal para sua necessidade.
            </p>
            <p className="text-base sm:text-lg text-green-600 font-semibold px-4">
              ⚡ Estes são apenas alguns dos nossos modelos! Temos muito mais opções disponíveis. Chame no WhatsApp para conhecer toda nossa linha!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {products.map((product, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <div className="w-full h-56 sm:h-64 overflow-hidden rounded-t-lg bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                    onClick={() => handleImageClick(product.image)}
                    loading="eager"
                  />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl sm:text-2xl">{product.name}</CardTitle>
                  <CardDescription className="uppercase text-xs font-semibold text-blue-600">
                    {product.category}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow pb-3">
                  <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm sm:text-base">
                        <span className="text-green-500 mr-2 flex-shrink-0">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="border-t pt-3 sm:pt-4 mb-4 sm:mb-6">
                    <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Preço normal:</span>
                        <span className="font-semibold text-gray-900 line-through">{product.prices.normal}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Até 12x no cartão:</span>
                        <span className="font-semibold text-blue-600">{product.prices.installment}</span>
                      </div>
                      <div className="flex justify-between items-center bg-green-50 p-2 rounded-lg">
                        <span className="text-green-700 font-semibold">À vista (Pix/Dinheiro):</span>
                        <span className="font-bold text-green-700 text-base sm:text-lg">{product.prices.cash}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button 
                    onClick={() => handleWhatsAppClick(product.name)}
                    className="w-full bg-green-500 hover:bg-green-600 text-sm sm:text-base py-5 sm:py-6"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Tenho Interesse
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-10 md:mt-12 px-4">
            <Button 
              size="lg"
              onClick={() => handleWhatsAppClick()}
              className="bg-blue-600 hover:bg-blue-700 text-white text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Ver Mais Modelos no WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Tips Section - Otimizado para Mobile */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-2">
              Cuide Bem do Seu Veículo Elétrico
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 px-4">
              Com algumas dicas simples, você prolonga a vida útil do seu companheiro de duas ou três rodas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <Card className="text-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto bg-yellow-100 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                  <Battery className="h-7 w-7 sm:h-8 sm:w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-lg sm:text-xl px-2">Carregamento Inteligente</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-gray-600 px-2">
                  Maximize a vida útil da sua bateria. Use sempre o carregador original e evite que a carga se esgote por completo.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto bg-red-100 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                  <Settings className="h-7 w-7 sm:h-8 sm:w-8 text-red-600" />
                </div>
                <CardTitle className="text-lg sm:text-xl px-2">Manutenção Preventiva</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-gray-600 px-2">
                  Rode sempre com segurança. Agende revisões periódicas em nossa oficina e verifique sempre pneus, freios e luzes.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto bg-blue-100 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                  <Droplets className="h-7 w-7 sm:h-8 sm:w-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg sm:text-xl px-2">Limpeza Correta</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-gray-600 px-2">
                  Mantenha seu veículo sempre novo. Use apenas um pano úmido e nunca jogue água diretamente nos componentes elétricos.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto bg-green-100 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                  <Home className="h-7 w-7 sm:h-8 sm:w-8 text-green-600" />
                </div>
                <CardTitle className="text-lg sm:text-xl px-2">Armazenamento Ideal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-gray-600 px-2">
                  Proteja seu investimento. Guarde em local coberto, longe da umidade e do sol excessivo.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section - Otimizado para Mobile */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-2">
              Ainda tem Dúvidas? A gente responde!
            </h2>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <CardHeader onClick={() => setOpenFaq(openFaq === index ? null : index)} className="py-4 sm:py-6">
                  <div className="flex justify-between items-center gap-3">
                    <CardTitle className="text-base sm:text-lg text-left">{faq.question}</CardTitle>
                    <ChevronDown 
                      className={`h-5 w-5 flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}
                    />
                  </div>
                </CardHeader>
                {openFaq === index && (
                  <CardContent className="pt-0 pb-4 sm:pb-6">
                    <p className="text-sm sm:text-base text-gray-600">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Otimizado para Mobile */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-2">
            Dê o Primeiro Passo para sua Nova Vida Elétrica!
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto px-4">
            Nossa equipe está pronta para te ajudar a escolher o modelo perfeito. 
            Fale conosco, agende um test drive e venha tomar um café em nossa loja!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10 md:mb-12">
            <div className="flex flex-col items-center">
              <div className="bg-white/20 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <Phone className="h-7 w-7 sm:h-8 sm:w-8" />
              </div>
              <h3 className="font-semibold text-base sm:text-lg mb-2">WhatsApp/Telefone</h3>
              <p className="text-base sm:text-lg">(37) 99921-5260</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-white/20 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <MapPin className="h-7 w-7 sm:h-8 sm:w-8" />
              </div>
              <h3 className="font-semibold text-base sm:text-lg mb-2">Endereço</h3>
              <p className="text-base sm:text-lg">Rua General Carneiro, 43<br />Centro, Formiga - MG</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-white/20 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <Instagram className="h-7 w-7 sm:h-8 sm:w-8" />
              </div>
              <h3 className="font-semibold text-base sm:text-lg mb-2">Instagram</h3>
              <p className="text-base sm:text-lg">@pedalextremo.mobilidade</p>
            </div>
          </div>

          <Button 
            size="lg" 
            className="bg-white text-green-700 hover:bg-gray-100 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto"
            onClick={() => handleWhatsAppClick()}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Falar com um Especialista Agora
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-6 sm:py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2 text-sm sm:text-base">© 2025 Pedal Extremo Mobilidade Elétrica. Todos os direitos reservados.</p>
          <p className="text-xs sm:text-sm text-gray-500">Movendo você para o futuro ⚡</p>
        </div>
      </footer>

      {/* Modal de Imagem com Zoom - Customizado */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={handleCloseImage}
        >
          <div 
            className="relative max-w-[95vw] max-h-[95vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseImage}
              className="absolute top-4 right-4 z-50 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-all"
              aria-label="Fechar"
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="flex gap-2 absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50">
              <button
                onClick={handleZoomOut}
                disabled={imageZoom <= 1}
                className="bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-full p-3 transition-all"
                aria-label="Diminuir zoom"
              >
                <span className="text-xl font-bold">-</span>
              </button>
              <button
                onClick={handleZoomIn}
                disabled={imageZoom >= 3}
                className="bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-full p-3 transition-all"
                aria-label="Aumentar zoom"
              >
                <span className="text-xl font-bold">+</span>
              </button>
            </div>

            <div className="overflow-auto max-w-full max-h-full">
              <img
                src={selectedImage}
                alt="Produto ampliado"
                className="transition-transform duration-300 object-contain"
                style={{ transform: `scale(${imageZoom})` }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Floating Buttons - WhatsApp e Instagram - Posição Ajustada */}
      <div className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 flex flex-col gap-3 sm:gap-4 z-50">
        {/* Botão Instagram */}
        <button
          onClick={handleInstagramClick}
          className="bg-gradient-to-br from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white rounded-full p-3 sm:p-4 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
          aria-label="Siga-nos no Instagram"
        >
          <Instagram className="h-6 w-6 sm:h-7 sm:w-7" />
        </button>

        {/* Botão WhatsApp */}
        <button
          onClick={() => handleWhatsAppClick()}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-3 sm:p-4 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
          aria-label="Fale conosco pelo WhatsApp"
        >
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
        </button>
      </div>
    </div>
  )
}

export default App

