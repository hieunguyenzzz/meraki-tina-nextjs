"use client";

import React, { useEffect, useState } from "react";
import { TinaField } from "@/components/ui/tina-field";
import { useTina, TinaMarkdown } from "tinacms/dist/react";
import { MapPin, Users, Calendar, Heart, Star } from "lucide-react";
import { Language } from "@/lib/i18n";
import client from "../../tina/__generated__/client";

interface JournalPageProps {
  lang: Language;
  slug: string;
}

export const JournalPage: React.FC<JournalPageProps> = ({ lang, slug }) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJournalData = async () => {
      try {
        setLoading(true);
        const response = await client.queries.journal({
          relativePath: `${slug}.mdx`
        });
        setData(response);
      } catch (err) {
        console.error("Error fetching journal data:", err);
        setError("Failed to load journal data");
        // Fallback to sample data
        setData({
          data: {
            journal: {
              title: "Tess & Andy",
              title_vi: { value: "Tess & Andy" },
              subtitle: "BOUNDLESS AMOUR", 
              subtitle_vi: { value: "TÌNH YÊU VÔ BIÊN" },
              hero_image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
              wedding_details: {
                venue: "Museum of Ho Chi Minh City",
                venue_vi: { value: "Bảo Tàng Thành Phố Hồ Chí Minh" },
                guest_count: 70,
                wedding_type: "Destination Wedding",
                wedding_type_vi: { value: "Tiệc Cưới Điểm Đến" },
                nationality: "New Zealand - English",
                nationality_vi: { value: "New Zealand - Tiếng Anh" }
              },
              story_sections: [
                {
                  title: "WHAT WE LOVE",
                  title_vi: { value: "ĐIỀU CHÚNG TÔI YÊU THÍCH" },
                  content: "Tess and Andy have been preparing for the wedding for a long time before meeting with us. They came up with many awesome ideas and specific requirements; and we definitely loved it so much. Almost everything, from the furniture, decoration, food, beverage, lighting and sound, was separately ordered and delivered to the museum the day before the wedding.",
                  content_vi: { value: "Tess và Andy đã chuẩn bị cho đám cưới trong một thời gian dài trước khi gặp chúng tôi. Họ đã đưa ra nhiều ý tưởng tuyệt vời và yêu cầu cụ thể; và chúng tôi chắc chắn rất yêu thích điều đó. Hầu như mọi thứ, từ đồ nội thất, trang trí, thức ăn, đồ uống, ánh sáng và âm thanh, đều được đặt hàng riêng và giao đến bảo tàng một ngày trước đám cưới." }
                },
                {
                  title: "LOCAL TOUCHES",
                  title_vi: { value: "NÉT ĐỊA PHƯƠNG" },
                  content: "Both Tess and Andy love Vietnam fervently; hence we brought the local characters into every little detail of the wedding, from the music to the beverage, and cuisine. Andy even used a phở cooking pot as an ice bucket to cool up the beers, which was a fantastic idea and it perfectly added a local touch to the party concept.",
                  content_vi: { value: "Cả Tess và Andy đều yêu Việt Nam nhiệt thành; do đó chúng tôi đã đưa những đặc trồng địa phương vào từng chi tiết nhỏ của đám cưới, từ âm nhạc đến đồ uống và ẩm thực. Andy thậm chí còn sử dụng một nồi nấu phở như một thùng đá để làm lạnh bia, đó là một ý tưởng tuyệt vời và nó hoàn hảo thêm một nét địa phương vào khái niệm tiệc tùng." }
                }
              ],
              gallery_images: [
                {
                  url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  alt: "Wedding ceremony moment",
                  caption: "The first dance"
                },
                {
                  url: "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  alt: "Wedding reception",
                  caption: "Reception celebration"
                },
                {
                  url: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  alt: "Couple portrait",
                  caption: "Beautiful couple"
                },
                {
                  url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  alt: "Wedding details",
                  caption: "Wedding details"
                }
              ],
              vendor_credits: [
                { name: "Photography", vendor: "Meraki Photography", vendor_vi: { value: "Nhiếp ảnh Meraki" } },
                { name: "Flowers", vendor: "Saigon Blooms", vendor_vi: { value: "Hoa Sài Gòn" } },
                { name: "Catering", vendor: "Heritage Cuisine", vendor_vi: { value: "Ẩm thực Di sản" } }
              ]
            }
          },
          query: "",
          variables: { relativePath: `${slug}.mdx` }
        });
      } finally {
        setLoading(false);
      }
    };

    fetchJournalData();
  }, [slug]);

  // Use TinaCMS hook for contextual editing
  const { data: tinaData } = useTina({
    query: data?.query || "",
    variables: data?.variables || {},
    data: data?.data || { journal: null }
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading journal...</p>
        </div>
      </div>
    );
  }

  if (error && !tinaData?.journal) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error loading journal</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  const journal = tinaData?.journal;

  // Return loading state if journal data is not available
  if (!journal) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading journal...</p>
        </div>
      </div>
    );
  }

  const content = {
    en: {
      venue: "Venue",
      guestCount: "Guest Count", 
      weddingType: "Type of Wedding",
      nationality: "Nationality",
      guests: "guests",
      vendorCredits: "Vendor Credits",
      backToJournal: "← Back to Journal"
    },
    vi: {
      venue: "Địa Điểm",
      guestCount: "Số Khách",
      weddingType: "Loại Tiệc Cưới", 
      nationality: "Quốc Tịch",
      guests: "khách",
      vendorCredits: "Nhà Cung Cấp",
      backToJournal: "← Quay Lại Nhật Ký"
    }
  };

  const t = content[lang];
  const isVietnamese = lang === 'vi';

  return (
    <div className="min-h-screen bg-white">
      {/* Back Navigation */}
      <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <button 
            onClick={() => window.history.back()}
            className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
          >
            {t.backToJournal}
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen">
        <TinaField name="hero_image" data={tinaData}>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${journal.hero_image}')`
            }}
          />
        </TinaField>
        <div className="absolute inset-0 bg-black/30" />
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <TinaField name={isVietnamese ? "title_vi.value" : "title"} data={tinaData}>
              <h1 className="text-6xl md:text-8xl font-light mb-4 tracking-wide">
                {isVietnamese ? journal.title_vi?.value : journal.title}
              </h1>
            </TinaField>
            <TinaField name={isVietnamese ? "subtitle_vi.value" : "subtitle"} data={tinaData}>
              <p className="text-2xl md:text-3xl font-light italic opacity-90">
                {isVietnamese ? journal.subtitle_vi?.value : journal.subtitle}
              </p>
            </TinaField>
          </div>
        </div>
      </section>

      {/* Wedding Details Sidebar */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Details Column */}
            <div className="lg:col-span-1">
              <div className="bg-white p-8 shadow-sm">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                      {t.nationality}
                    </h3>
                    <TinaField name={isVietnamese ? "wedding_details.nationality_vi.value" : "wedding_details.nationality"} data={tinaData}>
                      <p className="text-gray-900">
                        {isVietnamese ? journal.wedding_details?.nationality_vi?.value : journal.wedding_details?.nationality}
                      </p>
                    </TinaField>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                      {t.guestCount}
                    </h3>
                    <TinaField name="wedding_details.guest_count" data={tinaData}>
                      <p className="text-gray-900">
                        {journal.wedding_details?.guest_count} {t.guests}
                      </p>
                    </TinaField>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                      {t.weddingType}
                    </h3>
                    <TinaField name={isVietnamese ? "wedding_details.wedding_type_vi.value" : "wedding_details.wedding_type"} data={tinaData}>
                      <p className="text-gray-900">
                        {isVietnamese ? journal.wedding_details?.wedding_type_vi?.value : journal.wedding_details?.wedding_type}
                      </p>
                    </TinaField>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                      {t.venue}
                    </h3>
                    <TinaField name={isVietnamese ? "wedding_details.venue_vi.value" : "wedding_details.venue"} data={tinaData}>
                      <p className="text-gray-900">
                        {isVietnamese ? journal.wedding_details?.venue_vi?.value : journal.wedding_details?.venue}
                      </p>
                    </TinaField>
                  </div>
                </div>
              </div>
            </div>

            {/* Story Content */}
            <div className="lg:col-span-2">
              <div className="space-y-12">
                {journal.story_sections?.map((section, index) => (
                  <div key={index} className="bg-white p-8 shadow-sm">
                    <TinaField name={`story_sections.${index}.${isVietnamese ? 'title_vi.value' : 'title'}`} data={tinaData}>
                      <h2 className="text-2xl font-light mb-6 text-gray-900 tracking-wide">
                        {isVietnamese ? section.title_vi?.value : section.title}
                      </h2>
                    </TinaField>
                    <TinaField name={`story_sections.${index}.${isVietnamese ? 'content_vi.value' : 'content'}`} data={tinaData}>
                      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                        <p className="whitespace-pre-line">{isVietnamese ? section.content_vi?.value : section.content}</p>
                      </div>
                    </TinaField>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <TinaField name="gallery_images" data={tinaData}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {journal.gallery_images?.map((image, index) => (
                <TinaField key={index} name={`gallery_images.${index}`} data={tinaData}>
                  <div className="group cursor-pointer overflow-hidden aspect-square">
                    <TinaField name={`gallery_images.${index}.url`} data={tinaData}>
                      <div 
                        className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                        style={{
                          backgroundImage: `url('${image.url}')`
                        }}
                      />
                    </TinaField>
                  </div>
                </TinaField>
              ))}
            </div>
          </TinaField>
        </div>
      </section>

      {/* Vendor Credits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-light mb-12 text-gray-900 tracking-wide">
            {t.vendorCredits}
          </h2>
          <TinaField name="vendor_credits" data={tinaData}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {journal.vendor_credits?.map((credit, index) => (
                <TinaField key={index} name={`vendor_credits.${index}`} data={tinaData}>
                  <div className="text-center">
                    <TinaField name={`vendor_credits.${index}.name`} data={tinaData}>
                      <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                        {credit.name}
                      </h3>
                    </TinaField>
                    <TinaField name={`vendor_credits.${index}.${isVietnamese ? 'vendor_vi.value' : 'vendor'}`} data={tinaData}>
                      <p className="text-gray-900">
                        {isVietnamese ? credit.vendor_vi?.value : credit.vendor}
                      </p>
                    </TinaField>
                  </div>
                </TinaField>
              ))}
            </div>
          </TinaField>
        </div>
      </section>
    </div>
  );
};