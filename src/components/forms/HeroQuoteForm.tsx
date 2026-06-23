"use client";

import type { FormEvent } from "react";
import { Button } from "@/components/ui/Button";

const serviceOptions = [
  "Interior Painting",
  "Exterior Painting",
  "Plastering",
  "Skimming & Wall Finishing",
  "Gyprock Repairs",
  "Property Maintenance",
  "Residential Renovations",
  "Commercial Maintenance",
];

const propertyTypes = [
  "Residential",
  "Commercial",
  "Strata",
  "Investment Property",
  "Managed Property",
  "Other",
];

const timeframeOptions = [
  "As soon as possible",
  "Within 2 weeks",
  "Within 1 month",
  "1-3 months",
  "Flexible / planning ahead",
];

const fieldClass =
  "mt-2 min-h-12 w-full rounded-md border border-ppm-grey/70 bg-white/90 px-4 py-3 text-sm text-ppm-navy outline-none transition-colors placeholder:text-ppm-blue/55 focus:border-ppm-blue focus:ring-2 focus:ring-ppm-blue/20";

const labelClass = "ppm-label text-ppm-blue";

export function HeroQuoteForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: Connect this enquiry form to the future PPM lead capture endpoint.
  }

  return (
    <form
      className="border border-white/55 bg-white/50 p-5 text-ppm-navy shadow-[0_24px_70px_rgba(0,13,32,0.25)] backdrop-blur-xl md:p-6"
      onSubmit={handleSubmit}
    >
      <div className="border-b border-ppm-grey/70 pb-5">
        <p className="ppm-label text-ppm-blue">Request a Quote</p>
        <h2 className="ppm-subheading mt-3 text-ppm-navy">
          Tell us what your property needs.
        </h2>
        <p className="ppm-small mt-3 text-ppm-navy/70">
          Share a few details and the PPM team will follow up with the right
          next step.
        </p>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="hero-quote-name">
            Name
          </label>
          <input
            autoComplete="name"
            className={fieldClass}
            id="hero-quote-name"
            name="name"
            placeholder="Your name"
            required
            type="text"
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="hero-quote-email">
            Email
          </label>
          <input
            autoComplete="email"
            className={fieldClass}
            id="hero-quote-email"
            name="email"
            placeholder="you@example.com"
            required
            type="email"
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="hero-quote-phone">
            Phone
          </label>
          <input
            autoComplete="tel"
            className={fieldClass}
            id="hero-quote-phone"
            name="phone"
            placeholder="+61 ..."
            required
            type="tel"
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="hero-quote-property-type">
            Property Type
          </label>
          <select
            className={fieldClass}
            defaultValue=""
            id="hero-quote-property-type"
            name="propertyType"
            required
          >
            <option disabled value="">
              Select property type
            </option>
            {propertyTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass} htmlFor="hero-quote-service-type">
            Service Type
          </label>
          <select
            className={fieldClass}
            defaultValue=""
            id="hero-quote-service-type"
            name="serviceType"
            required
          >
            <option disabled value="">
              Select service
            </option>
            {serviceOptions.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass} htmlFor="hero-quote-location">
            Suburb
          </label>
          <input
            autoComplete="address-level2"
            className={fieldClass}
            id="hero-quote-location"
            name="location"
            placeholder="Sydney suburb"
            required
            type="text"
          />
        </div>

        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="hero-quote-timeframe">
            Preferred Timeframe
          </label>
          <select
            className={fieldClass}
            defaultValue=""
            id="hero-quote-timeframe"
            name="timeframe"
            required
          >
            <option disabled value="">
              Select timeframe
            </option>
            {timeframeOptions.map((timeframe) => (
              <option key={timeframe} value={timeframe}>
                {timeframe}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="hero-quote-description">
            Short Project Description
          </label>
          <textarea
            className={`${fieldClass} min-h-28 resize-y`}
            id="hero-quote-description"
            name="description"
            placeholder="Briefly describe the painting, plastering, maintenance or repair work."
            required
          />
        </div>
      </div>

      <Button className="mt-5 w-full" type="submit">
        Submit Request
      </Button>
    </form>
  );
}
