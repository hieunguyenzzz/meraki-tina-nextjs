"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Users, Calendar } from "lucide-react";
import { Language } from "@/lib/i18n";

interface JournalListingProps {
  lang: Language;
}

export const JournalListing: React.FC<JournalListingProps> = ({ lang }) => {
  const content = {
    en: {
      title: "Journal",
      subtitle: "Wedding Stories We've Brought to Life",
      description: "Each wedding is a unique story, capturing the essence of love, culture, and celebration. Explore our curated collection of weddings that showcase the diversity and beauty of love in Vietnam.",
      viewGallery: "View Gallery",
      guestLabel: "guests",
      destinationWedding: "Destination Wedding",
      culturalWedding: "Cultural Wedding",
      luxuryWedding: "Luxury Wedding"
    },
    vi: {
      title: "Nhật Ký",
      subtitle: "Những Câu Chuyện Cưới Chúng Tôi Đã Thực Hiện",
      description: "Mỗi đám cưới là một câu chuyện độc đáo, ghi lại bản chất của tình yêu, văn hóa và lễ kỷ niệm. Khám phá bộ sưu tập được tuyển chọn các đám cưới thể hiện sự đa dạng và vẻ đẹp của tình yêu tại Việt Nam.",
      viewGallery: "Xem Bộ Sưu Tập",
      guestLabel: "khách",
      destinationWedding: "Tiệc Cưới Điểm Đến",
      culturalWedding: "Tiệc Cưới Văn Hóa",
      luxuryWedding: "Tiệc Cưới Sang Trọng"
    }
  };

  const t = content[lang];

  // Sample journal entries - these will be populated from TinaCMS
  const sampleJournals = [
    {
      slug: "tess-andy",
      title: "Tess & Andy",
      subtitle: "BOUNDLESS AMOUR",
      location: "Museum of Ho Chi Minh City",
      guestCount: 70,
      weddingType: t.destinationWedding,
      heroImage: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      nationality: "New Zealand - English"
    },
    {
      slug: "sarah-james",
      title: "Sarah & James",
      subtitle: "TIMELESS ELEGANCE",
      location: "Da Nang Beach Resort",
      guestCount: 120,
      weddingType: t.luxuryWedding,
      heroImage: "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      nationality: "Australia - English"
    },
    {
      slug: "michael-linh",
      title: "Michael & Linh",
      subtitle: "EAST MEETS WEST",
      location: "Hoi An Ancient Town",
      guestCount: 80,
      weddingType: t.culturalWedding,
      heroImage: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      nationality: "USA - Vietnamese"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-light mb-6 text-gray-900 tracking-wide">
            {t.title}
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 text-gray-700 italic">
            {t.subtitle}
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t.description}
          </p>
        </div>
      </section>

      {/* Journal Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleJournals.map((journal) => (
              <Link 
                key={journal.slug}
                href={`/${lang}/journal/${journal.slug}`}
                className="group block"
              >
                <article className="bg-white overflow-hidden transition-all duration-300 group-hover:shadow-xl">
                  {/* Hero Image */}
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                      style={{
                        backgroundImage: `url('${journal.heroImage}')`
                      }}
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                    
                    {/* Overlay Content */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-8">
                      <h2 className="text-3xl md:text-4xl font-light mb-2 tracking-wide">
                        {journal.title}
                      </h2>
                      <p className="text-lg font-light italic opacity-90">
                        {journal.subtitle}
                      </p>
                    </div>

                    {/* View Gallery Button */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="inline-block px-6 py-2 bg-white text-gray-900 text-sm font-medium tracking-wide">
                        {t.viewGallery}
                      </span>
                    </div>
                  </div>

                  {/* Wedding Details */}
                  <div className="p-6 bg-gray-50">
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{journal.location}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          <span>{journal.guestCount} {t.guestLabel}</span>
                        </div>
                        <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">
                          {journal.weddingType}
                        </span>
                      </div>
                      <div className="text-xs text-gray-500 border-t pt-2">
                        {journal.nationality}
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};