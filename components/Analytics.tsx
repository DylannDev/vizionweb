"use client";

import { useEffect, useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import CookieConsent from "react-cookie-consent";
import Link from "next/link";
import IconIllustration from "./ui/icon-illustration";
import { PiCookieFill } from "react-icons/pi";

const GA_MEASUREMENT_ID = "G-4J38RHMBP5";

export default function Analytics() {
  const [consentGiven, setConsentGiven] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("cookie-consent");
    if (stored === "true") {
      setConsentGiven(true);
    }
    const timer = setTimeout(() => setVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "true");
    setConsentGiven(true);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "false");
    setConsentGiven(false);
  };

  return (
    <>
      {consentGiven && <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />}

      <CookieConsent
        location="none"
        buttonText="Accepter"
        declineButtonText="Refuser"
        enableDeclineButton
        onAccept={handleAccept}
        onDecline={handleDecline}
        cookieName="cookie-consent"
        disableStyles
        containerClasses={`fixed bottom-0 left-0 right-0 sm:bottom-6 sm:right-6 sm:left-auto sm:max-w-sm z-100 rounded-none sm:rounded-3xl bg-gradient-to-tl from-primary-dark from-60% to-secondary-dark to-90% text-white shadow-lg p-5 sm:p-6 transition-transform duration-500 ease-out ${
          visible
            ? "translate-y-0 sm:translate-x-0"
            : "translate-y-full sm:translate-y-0 sm:translate-x-[120%]"
        }`}
        contentClasses="text-sm"
        buttonWrapperClasses="flex gap-3 mt-4"
        buttonClasses="flex-1 rounded-lg px-5 py-2.5 font-medium bg-gradient-to-b from-primary-blue-dark to-primary-blue-border border border-primary-blue text-white hover:to-primary-blue-dark transition-all duration-500 cursor-pointer"
        declineButtonClasses="flex-1 rounded-lg border border-white/30 px-5 py-2.5 font-medium text-white transition-colors hover:bg-white/10 cursor-pointer"
      >
        <div className="flex items-start gap-4">
          <IconIllustration
            icon={PiCookieFill}
            className="shadow-none"
            role="img"
            aria-label="Cookie"
          />

          <div className="mb-2">
            <h3 className="text-xl font-semibold mb-1.5">
              Gestion des cookies
            </h3>
            <p className="text-sm text-white/80 leading-relaxed">
              Nous utilisons des cookies pour améliorer votre expérience et
              analyser le trafic de notre site.{" "}
              <Link
                href="/politique-confidentialite"
                className="underline underline-offset-4 hover:text-secondary-blue transition-colors"
              >
                En savoir plus
              </Link>
            </p>
          </div>
        </div>
      </CookieConsent>
    </>
  );
}
