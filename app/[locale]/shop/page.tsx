"use client";

import { useTranslations } from "next-intl";
import {
  ShopIcon,
  ExternalLink,
  CheckIcon,
  HeartIcon,
} from "@/icons";
import { useState, useEffect } from "react";

const IMG_BASE = "https://shop.mahawa.ae";
const SHOP_URL = "https://shop.mahawa.ae";

type Product = {
  name: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  price: string;
  originalPrice?: string;
  category: string;
};

const products: Product[] = [
  {
    name: "Ma Hawa Premium Still Water 250ml",
    subtitle: "Стеклянная бутылка, 12 шт",
    description:
      "Чистейшая природная столовая вода премиум-класса в стеклянной бутылке. Идеальна для ежедневной гидратации.",
    features: ["pH 7.4", "250 мл", "12 бутылок в упаковке", "Стеклянная бутылка"],
    image: "/cdn/shop/files/STILL_250.MAIN_3af7240c-34b6-4aa3-baa9-eebb40c4597a.jpg",
    price: "27.00",
    originalPrice: "30.00",
    category: "Still Water",
  },
  {
    name: "Ma Hawa Premium Still Water 330ml",
    subtitle: "Стеклянная бутылка, 12 шт",
    description:
      "Освежающая столовая вода в удобной стеклянной бутылке 330 мл. Подходит для офиса и дома.",
    features: ["pH 7.4", "330 мл", "12 бутылок в упаковке", "Стеклянная бутылка"],
    image: "/cdn/shop/files/Botlle330sprklcopy2.jpg",
    price: "28.80",
    originalPrice: "36.00",
    category: "Still Water",
  },
  {
    name: "Ma Hawa Premium Sparkling Water 250ml",
    subtitle: "Стеклянная бутылка, 12 шт",
    description:
      "Освежающая газированная вода с натуральными минералами. Без сахара и искусственных добавок.",
    features: ["Натуральная газация", "250 мл", "12 бутылок в упаковке", "Без сахара"],
    image: "/cdn/shop/files/f.jpg",
    price: "33.60",
    originalPrice: "42.00",
    category: "Sparkling Water",
  },
  {
    name: "Ma Hawa Premium Still Water 750ml",
    subtitle: "Стеклянная бутылка, 6 шт",
    description:
      "Крупный формат для максимальной гидратации. Подойдет для дома, спортзала и путешествий.",
    features: ["pH 7.4", "750 мл", "6 бутылок в упаковке", "Стеклянная бутылка"],
    image: "/cdn/shop/files/f_9ec1ec7f-05de-4efe-b73a-90ebad57eed0.jpg",
    price: "28.80",
    originalPrice: "36.00",
    category: "Still Water",
  },
  {
    name: "Ma Hawa Premium Sparkling Water 330ml",
    subtitle: "Стеклянная бутылка, 12 шт",
    description:
      "Изысканная газированная вода в элегантной стеклянной бутылке. Идеальна для мероприятий.",
    features: ["Натуральная газация", "330 мл", "12 бутылок в упаковке", "Элегантный дизайн"],
    image: "/cdn/shop/files/f_bb88d6a0-4bc8-4dd8-89d2-0487811f8ee5.jpg",
    price: "38.40",
    originalPrice: "48.00",
    category: "Sparkling Water",
  },
  {
    name: "Ma Hawa Premium Sparkling Water 750ml",
    subtitle: "Стеклянная бутылка, 6 шт",
    description:
      "Премиальная газированная вода в формате 750 мл для особых случаев и ресторанов.",
    features: ["Натуральная газация", "750 мл", "6 бутылок в упаковке", "Премиальный дизайн"],
    image: "/cdn/shop/files/Sparkling_750.MAIN2.jpg",
    price: "33.60",
    originalPrice: "42.00",
    category: "Sparkling Water",
  },
  {
    name: "Ma Hawa Still Water 330ml",
    subtitle: "Алюминиевая банка, 24 шт",
    description:
      "Удобный формат для активного образа жизни. Легкая алюминиевая банка многоразового использования.",
    features: ["pH 7.4", "330 мл", "24 банки в упаковке", "Алюминий"],
    image: "/cdn/shop/files/WhatsAppImage2025-11-17at3.17.23PM.jpg",
    price: "29.60",
    originalPrice: "37.00",
    category: "Cans",
  },
  {
    name: "Ma Hawa Sparkling Water 330ml",
    subtitle: "Алюминиевая банка, 24 шт",
    description:
      "Газированная вода в стильной алюминиевой банке. Идеально для пикников и вечеринок.",
    features: ["Натуральная газация", "330 мл", "24 банки в упаковке", "Алюминий"],
    image: "/cdn/shop/files/WhatsApp_Image_2025-11-17_at_3.17.35_PM_1.jpg",
    price: "32.00",
    originalPrice: "40.00",
    category: "Cans",
  },
  {
    name: "Ma Hawa Still Water 330ML",
    subtitle: "Алюминиевая бутылка, 24 шт",
    description:
      "Современная многоразовая алюминиевая бутылка с водой Ma Hawa. Сохраняет температуру и стиль.",
    features: ["pH 7.4", "330 мл", "24 бутылки в упаковке", "Многоразовая"],
    image: "/cdn/shop/files/WhatsAppImage2026-01-14at3.06.12PM.jpg",
    price: "47.00",
    category: "Aluminium Bottles",
  },
  {
    name: "Ma Hawa Sparkling Water 330ML",
    subtitle: "Алюминиевая бутылка, 24 шт",
    description:
      "Газированная вода в премиальной алюминиевой бутылке. Экологичный и стильный выбор.",
    features: ["Натуральная газация", "330 мл", "24 бутылки в упаковке", "Премиальный дизайн"],
    image: "/cdn/shop/files/WhatsAppImage2026-01-14at3.05.57PM_1.jpg",
    price: "50.00",
    category: "Aluminium Bottles",
  },
];

export default function ShopPage() {
  const t = useTranslations();
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    setAnimateIn(true);
  }, []);

  return (
    <div className="space-y-6">
      {/* Header */}
      <header
        className={`transition-all duration-500 ${
          animateIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="flex items-center gap-2 mb-1">
          <ShopIcon size={24} className="text-brand-500" />
          <h1 className="text-xl font-bold text-[var(--color-text-primary)]">
            {t("shop.title")}
          </h1>
        </div>
        <p className="text-sm text-[var(--color-text-secondary)]">
          {t("shop.subtitle")}
        </p>
      </header>

      {/* Products */}
      <div className="space-y-4">
        {products.map((product, i) => (
          <div
            key={i}
            className={`glass-card rounded-3xl overflow-hidden transition-all duration-500 ${
              animateIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: `${100 + i * 100}ms` }}
          >
            {/* Product Image */}
            <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-dark-700 dark:to-dark-800 flex items-center justify-center relative overflow-hidden">
              <img
                src={`${IMG_BASE}${product.image}&width=400`}
                alt={product.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {product.originalPrice && (
                <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-xl shadow-lg">
                  SALE
                </div>
              )}
              <div className="absolute bottom-3 left-3 bg-black/50 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                {product.category}
              </div>
            </div>

            {/* Product Info */}
            <div className="p-5 space-y-4">
              <div>
                <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
                  {product.name}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                  {product.subtitle}
                </p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">
                  {product.description}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-1.5">
                {product.features.map((feat, j) => (
                  <div
                    key={j}
                    className="flex items-center gap-2 text-xs text-[var(--color-text-secondary)]"
                  >
                    <CheckIcon size={12} className="text-green-500 flex-shrink-0" />
                    {feat}
                  </div>
                ))}
              </div>

              {/* Price & CTA */}
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-bold text-[var(--color-text-primary)]">
                    د.إ {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-[var(--color-text-muted)] line-through">
                      د.إ {product.originalPrice}
                    </span>
                  )}
                </div>
                <a
                  href={SHOP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2 text-sm"
                >
                  {t("shop.order")}
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Learn More */}
      <div
        className={`text-center transition-all duration-500 delay-300 ${
          animateIn ? "opacity-100" : "opacity-0"
        }`}
      >
        <a
          href={SHOP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary inline-flex items-center gap-2 text-sm"
        >
          <HeartIcon size={16} />
          {t("shop.learnMore")}
          <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
}
