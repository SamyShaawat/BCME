import {
  ASSETS,
  COMPANY_NAME,
  COMPANY_TAGLINE,
} from "@constants/company.constants";
import { FOOTER_EMAILS } from "@constants/contact.constants";
import { JSX } from "react";

export default function FooterBrand(): JSX.Element {
  return (
    <div className="lg:col-span-2">
      <div className="flex items-center gap-3 mb-5">
        <img
          src={ASSETS.logoShield}
          alt={`${COMPANY_NAME} Logo`}
          className="h-24 w-auto rounded-full border-2 border-white/20 drop-shadow-lg"
          loading="lazy"
        />
        <div>
          <div className="font-display font-bold text-2xl text-white leading-none">
            {COMPANY_NAME}
          </div>
          <div className="text-crimson-400 text-sm tracking-widest uppercase mt-1">
            {COMPANY_TAGLINE}
          </div>
        </div>
      </div>
      <p className="text-navy-400 text-sm leading-relaxed max-w-sm mb-6">
        Canadian maritime technical service provider specializing in NAVCOM and
        marine electronic solutions for the global shipping industry.
      </p>
      <address className="not-italic space-y-2">
        {FOOTER_EMAILS.map((entry) => (
          <a
            key={entry.address}
            href={`mailto:${entry.address}`}
            className="flex items-center gap-2 text-navy-400 hover:text-crimson-300 transition-colors duration-200 text-sm group"
          >
            <svg
              className="w-4 h-4 flex-shrink-0 text-crimson-600 group-hover:text-crimson-400 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="text-navy-500 mr-1">{entry.label}:</span>{" "}
            {entry.address}
          </a>
        ))}
      </address>
    </div>
  );
}
