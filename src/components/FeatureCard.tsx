import {
  Briefcase,
  MessageCircle,
  Shield,
  LucideIcon,
} from "lucide-react";

type FeatureType = "certification" | "support" | "internship";

interface FeatureCardProps {
  type: FeatureType;
  title: string;
  subtitle: string;
}

const featureConfig: Record<
  FeatureType,
  {
    icon: LucideIcon;
    iconBg: string;
    iconColor: string;
  }
> = {
  certification: {
    icon: Shield,
    iconBg: "bg-[#EDE9FE]",
    iconColor: "text-[#6D4AFF]",
  },
  support: {
    icon: MessageCircle,
    iconBg: "bg-[#E1F0FF]",
    iconColor: "text-blue-600",
  },
  internship: {
    icon: Briefcase,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
  },
};

export default function FeatureCard({
  type,
  title,
  subtitle,
}: FeatureCardProps) {
  const config = featureConfig[type];
  const Icon = config.icon;

  return (
    <div className="flex items-center gap-2.5 sm:gap-3">
      <div
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl sm:h-11 sm:w-11 ${config.iconBg}`}
      >
        <Icon
          className={`h-4 w-4 sm:h-5 sm:w-5 ${config.iconColor}`}
          aria-hidden="true"
        />
      </div>

      <div className="min-w-0">
        <p className="text-xs font-bold text-gray-900 sm:text-sm">
          {title}
        </p>
        <p className="text-[10px] leading-4 text-gray-500 sm:text-xs">
          {subtitle}
        </p>
      </div>
    </div>
  );
}