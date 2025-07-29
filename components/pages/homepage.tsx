"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Star, MapPin, Calendar, Users } from "lucide-react";
import { Language } from "@/lib/i18n";

interface HomepageProps {
  lang: Language;
}

export const Homepage: React.FC<HomepageProps> = ({ lang }) => {
  const content = {
    en: {
      heroTitle: "DESTINATION WEDDING PLANNER",
      heroSubtitle: "Based in Vietnam",
      heroDescription: "Creating unforgettable moments with elegant sophistication and personalized service for couples from around the world.",
      heroButton: "View Our Work",
      servicesTitle: "Our Services",
      servicesSubtitle: "Comprehensive wedding planning services tailored to your vision",
      featuredTitle: "Featured Weddings",
      featuredSubtitle: "Recent celebrations we've brought to life",
      testimonialsTitle: "Kind Words",
      testimonialsSubtitle: "What our couples say about their experience",
      contactTitle: "Let's Create Magic Together",
      contactDescription: "Ready to plan your dream wedding in Vietnam?",
      contactButton: "Get In Touch",
      services: [
        {
          title: "Full Wedding Planning",
          description: "Complete wedding coordination from concept to celebration",
          icon: "🎯"
        },
        {
          title: "Destination Weddings",
          description: "Expertise in Vietnamese venues and local vendor coordination",
          icon: "✈️"
        },
        {
          title: "Cultural Integration",
          description: "Seamlessly blend traditions from different cultures",
          icon: "🌸"
        },
        {
          title: "Luxury Experiences",
          description: "Curated high-end services and exclusive venue access",
          icon: "💎"
        }
      ]
    },
    vi: {
      heroTitle: "NHÀ TỔ CHỨC TIỆC CƯỚI ĐIỂM ĐẾN",
      heroSubtitle: "Tại Việt Nam",
      heroDescription: "Tạo nên những khoảnh khắc khó quên với sự tinh tế thanh lịch và dịch vụ cá nhân hóa cho các cặp đôi từ khắp nơi trên thế giới.",
      heroButton: "Xem Tác Phẩm",
      servicesTitle: "Dịch Vụ Của Chúng Tôi",
      servicesSubtitle: "Dịch vụ tổ chức tiệc cưới toàn diện được thiết kế theo tầm nhìn của bạn",
      featuredTitle: "Tiệc Cưới Nổi Bật",
      featuredSubtitle: "Những lễ kỷ niệm gần đây mà chúng tôi đã thực hiện",
      testimonialsTitle: "Lời Khen Ngợi",
      testimonialsSubtitle: "Những gì các cặp đôi nói về trải nghiệm của họ",
      contactTitle: "Hãy Cùng Tạo Nên Điều Kỳ Diệu",
      contactDescription: "Sẵn sàng lên kế hoạch cho đám cưới trong mơ tại Việt Nam?",
      contactButton: "Liên Hệ",
      services: [
        {
          title: "Tổ Chức Tiệc Cưới Trọn Gói",
          description: "Phối hợp tiệc cưới hoàn chỉnh từ ý tưởng đến lễ kỷ niệm",
          icon: "🎯"
        },
        {
          title: "Tiệc Cưới Điểm Đến",
          description: "Chuyên môn về các địa điểm Việt Nam và phối hợp nhà cung cấp địa phương",
          icon: "✈️"
        },
        {
          title: "Hội Nhập Văn Hóa",
          description: "Kết hợp liền mạch các truyền thống từ các nền văn hóa khác nhau",
          icon: "🌸"
        },
        {
          title: "Trải Nghiệm Sang Trọng",
          description: "Dịch vụ cao cấp được tuyển chọn và quyền truy cập địa điểm độc quyền",
          icon: "💎"
        }
      ]
    }
  };

  const t = content[lang];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-light mb-4 tracking-wide">
            {t.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 italic">
            {t.heroSubtitle}
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            {t.heroDescription}
          </p>
          <Link
            href={`/${lang}/journal`}
            className="inline-flex items-center px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 transition-colors duration-300 font-medium tracking-wide"
          >
            {t.heroButton}
            <ChevronRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-gray-900">
              {t.servicesTitle}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.servicesSubtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.services.map((service, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-medium mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Weddings Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-gray-900">
              {t.featuredTitle}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.featuredSubtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured wedding cards will be populated from TinaCMS */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="relative overflow-hidden aspect-[4/5] mb-4">
                  <div 
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`
                    }}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-medium text-gray-900">Sample Wedding</h3>
                  <div className="flex items-center text-sm text-gray-600 space-x-4">
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      Ho Chi Minh City
                    </span>
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      80 guests
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href={`/${lang}/journal`}
              className="inline-flex items-center px-8 py-3 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors duration-300 font-medium"
            >
              {lang === 'vi' ? 'Xem Tất Cả' : 'View All'}
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-gray-900">
              {t.testimonialsTitle}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.testimonialsSubtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sample testimonials - will be populated from TinaCMS */}
            {[1, 2].map((item) => (
              <div key={item} className="bg-gray-50 p-8 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                  "Working with Meraki was an absolute dream. They brought our vision to life with such attention to detail and cultural sensitivity."
                </blockquote>
                <div className="text-gray-900 font-medium">Sarah & James</div>
                <div className="text-gray-600 text-sm">Married in Da Nang, 2024</div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href={`/${lang}/testimonials`}
              className="inline-flex items-center px-8 py-3 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors duration-300 font-medium"
            >
              {lang === 'vi' ? 'Đọc Thêm' : 'Read More'}
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            {t.contactTitle}
          </h2>
          <p className="text-xl mb-12 text-gray-300">
            {t.contactDescription}
          </p>
          <Link
            href={`/${lang}/contact`}
            className="inline-flex items-center px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 transition-colors duration-300 font-medium"
          >
            {t.contactButton}
            <ChevronRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};